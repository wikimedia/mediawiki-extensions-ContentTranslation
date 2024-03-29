import MTProviderGroup from "../../mw/models/mtProviderGroup";
import { siteMapper } from "../../../utils/mediawikiHelper";
import PublishFeedbackMessage from "../models/publishFeedbackMessage";
import CorporaRestoredUnit from "../models/corporaRestoredUnit";
import DraftTranslation from "@/wiki/cx/models/draftTranslation";
import PublishedTranslation from "@/wiki/cx/models/publishedTranslation";
import AssertUserError from "@/utils/errors/assertUserError";

const optionalUserAssertion = mw.user.isAnon() ? undefined : "user";

/**
 * @param error
 * @throws AssertUserError
 */
const throwAssertUserError = (error) => {
  if (error === "assertuserfailed") {
    throw new AssertUserError();
  }
};

/**
 * @param {"draft"|"published"} status
 * @param {string|null} offset
 * @return {Promise<Translation[]>}
 */
async function fetchTranslations(status, offset = null) {
  if (mw.user.isAnon()) {
    return Promise.resolve([]);
  }
  const params = {
    action: "query",
    format: "json",
    assert: "user",
    formatversion: 2,
    list: "contenttranslation",
    usecase: "unified-dashboard",
    type: status,
  };

  if (offset) {
    params["offset"] = offset;
  }

  const api = new mw.Api();

  return api.get(params).then(async (response) => {
    const apiResponse = response.query.contenttranslation.translations;
    let results;

    if (status === "draft") {
      results = apiResponse.map(
        (item) => new DraftTranslation({ ...item, status })
      );
    } else {
      results = apiResponse.map(
        (item) => new PublishedTranslation({ ...item, status })
      );
    }

    if (response.continue?.offset) {
      const restOfResults = await fetchTranslations(
        status,
        response.continue.offset
      );
      results = results.concat(restOfResults);
    }

    return results;
  });
}

/**
 * @param {string} translationId
 * @return {Promise<CorporaRestoredUnit[]>}
 */
function fetchTranslationUnits(translationId) {
  if (mw.user.isAnon()) {
    return Promise.resolve([]);
  }
  const params = {
    action: "query",
    format: "json",
    assert: "user",
    formatversion: 2,
    translationid: translationId,
    list: "contenttranslation",
    usecase: "translation-corpora-units",
  };

  const api = new mw.Api();

  return api.get(params).then((response) => {
    const { translation } = response.query.contenttranslation;

    return Object.values(translation.translationUnits).map(
      (unit) => new CorporaRestoredUnit(unit)
    );
  });
}

/**
 * Fetches translation for a given sentence, language pair and MT provider service
 * and a promise that resolves to the translation. In case of api call failure,
 * it returns a promise that resolves to the provided sentence as is.
 * @param sourceLanguage
 * @param targetLanguage
 * @param provider
 * @param sentence
 * @param {String} token
 * @return {Promise<String>}
 */
async function fetchSegmentTranslation(
  sourceLanguage,
  targetLanguage,
  provider,
  sentence,
  token
) {
  if (!sentence) {
    return "";
  }
  let relativeUrl = `/translate/${sourceLanguage}/${targetLanguage}`;

  if (provider !== MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY) {
    relativeUrl += `/${provider}`;
  }

  const cxserverAPI = siteMapper.getCXServerUrl(relativeUrl);

  return fetch(cxserverAPI, {
    headers: { "Content-Type": "application/json", Authorization: token },
    method: "POST",
    body: JSON.stringify({ html: `<div>${sentence}</div>` }),
  })
    .then((response) =>
      Promise.all([response.json(), Promise.resolve(response.ok)])
    )
    .then(([data, ok]) => {
      if (!ok) {
        // in case of error cxserver typically returns an error with the following
        // fields: { detail: string, type: string, title: string, status: number }
        const errorMessage =
          data.detail ||
          data.type ||
          data.title ||
          "fetchSegmentTranslation: Unknown error";
        throw new Error(errorMessage);
      }
      // Remove root div that was added by cxserver
      const regExp = /<div>(?<content>(.|\s)*)<\/div>/;

      return regExp.exec(data.contents)?.groups?.content;
    })
    .catch((error) => Promise.reject(error));
}

/**
 * Given a wikitext representing a block template,
 * a language and a page title, this method returns
 * the HTML for the rendering of this template.
 *
 * @param {string} wikitext
 * @param {string} language
 * @param {string} title
 * @return {Promise<string>}
 */
const parseTemplateWikitext = (wikitext, language, title) => {
  const api = siteMapper.getApi(language);

  return Promise.resolve(
    api.post({
      origin: "*",
      action: "visualeditor",
      paction: "parsefragment",
      page: title,
      wikitext: wikitext,
      pst: true,
    })
  )
    .then((response) => response.visualeditor.content)
    .catch((error) => {
      mw.log.error(error);

      return Promise.reject(error);
    });
};

/**
 * Given a page title and a section number, this method returns
 * a promise which resolves to the contents of the section in the
 * given position, inside the given page. To fetch these contents,
 * a parse request to Action API is being send. Since a Promise is
 * being return, caller method is responsible to handle any Promise
 * rejection.
 * @param {String} pageTitle - The title of the requested page
 * @param {String} language - The language of the requested page
 * @param {Number} sectionNumber - A number that indicates the requested section position within the page sections
 * @return {Promise<string|null>}
 */
const getSectionContents = async (pageTitle, language, sectionNumber) => {
  const params = {
    action: "parse",
    page: pageTitle,
    format: "json",
    section: sectionNumber,
    disabletoc: true,
    disablelimitreport: true,
    disableeditsection: true,
    disablestylededuplication: true,
    formatversion: 2,
  };

  const api = siteMapper.getApi(language);

  try {
    // Sample request: https://en.wikipedia.org/w/api.php?action=parse&page=Oxygen&format=json&formatversion=2&section=2&disabletoc=true&disablelimitreport=true&disableeditsection=true&disablestylededuplication=true
    const response = await api.get(params);

    // Successful responses are always expected to contain "parse.text" path. Add checks anyway.
    return response?.parse?.text;
  } catch (error) {
    return null;
  }
};

/**
 * Given the appropriate publish parameters (html, source/target page titles,
 * source/target section titles, source/target languages, revision, section
 * position number), this method publishes a new section to the target page,
 * and returns a promise resolving to an object containing a "publishFeedbackMessage" and
 * a "targetTitle" property. When publishing is successful, the resolved object contains a null
 * "publishFeedbackMessage" property and a "targetTitle" property containing the URL-encoded
 * target title, as it is returned from the publishing API. In case of error, the resolved
 * object contains a PublishFeedbackMessage model as "publishFeedbackMessage" and a null
 * "targetTitle".
 *
 * @param {Object} publishParams
 * @param {String} publishParams.html - HTML to be published
 * @param {String} publishParams.sourceTitle
 * @param {String} publishParams.targetTitle
 * @param {String} publishParams.sourceSectionTitle
 * @param {String} publishParams.targetSectionTitle
 * @param {String} publishParams.sourceLanguage
 * @param {String} publishParams.targetLanguage
 * @param {Number} publishParams.revision
 * @param {String} publishParams.captchaId
 * @param {String} publishParams.captchaWord
 * @param {boolean} publishParams.isSandbox
 * @param {Number|null} publishParams.sectionTranslationId
 * @return {Promise<{publishFeedbackMessage: PublishFeedbackMessage|null, targetUrl: string|null}>}
 * @throws {AssertUserError}
 */
const publishTranslation = ({
  html,
  sourceTitle,
  targetTitle,
  sourceSectionTitle,
  targetSectionTitle,
  sourceLanguage,
  targetLanguage,
  revision,
  captchaId,
  captchaWord,
  isSandbox,
  sectionTranslationId,
}) => {
  const params = {
    assert: optionalUserAssertion,
    action: "cxpublishsection",
    title: targetTitle,
    html,
    sourcetitle: sourceTitle,
    sourcerevid: revision,
    sourcesectiontitle: sourceSectionTitle,
    targetsectiontitle: targetSectionTitle,
    sourcelanguage: sourceLanguage,
    targetlanguage: targetLanguage,
    issandbox: isSandbox,
    sectiontranslationid: sectionTranslationId,
  };

  if (captchaId) {
    params.captchaid = captchaId;
    params.captchaword = captchaWord;
  }
  const api = new mw.Api();

  return api
    .postWithToken("csrf", params)
    .then((response) => {
      response = response.cxpublishsection;

      if (response.result === "error") {
        if (response.edit.captcha) {
          return {
            publishFeedbackMessage: new PublishFeedbackMessage({
              type: "captcha",
              status: "error",
              details: response.edit.captcha,
            }),
            targetTitle: null,
          };
        }
        // there is no known case for which this error will be shown
        // this will be handled by the following "catch" block as "Unknown error"
        throw new Error();
      }

      return {
        publishFeedbackMessage: null,
        targetUrl: response.targeturl,
      };
    })
    .catch((error, details) => {
      throwAssertUserError(error);

      let text;
      details = details || {};

      if (details.exception) {
        text = details.exception.message;
      } else if (details.error) {
        text = details.error.info;
      } else {
        text = "Unknown error";
      }

      return {
        publishFeedbackMessage: new PublishFeedbackMessage({
          text,
          status: "error",
        }),
        targetTitle: null,
      };
    });
};

/**
 * Given the appropriate parameters (source/target page titles, source/target section titles,
 * source/target languages, revision, section position number, content containing parallel
 * corpora translation units and section id of the page section to be saved), this method
 * sends a request to "sxsave" API action to store the draft translation to the "cx_translations"
 * database table, persist (if needed) the section translation into the "cx_section_translations"
 * table and store the parallel corpora translation units inside the "cx_corpora" table.
 * Finally, it returns a promise resolving to the section translation id (cxsx_id) of the saved
 * translation, or a PublishFeedbackMessage model in case of error.
 *
 * @param {object} publishParams
 * @param {string} publishParams.sourceTitle The title of the source page
 * @param {string} publishParams.targetTitle The title of the target page
 * @param {string} publishParams.sourceSectionTitle The title of the source section
 * @param {string} publishParams.targetSectionTitle The title of the target section
 * @param {string} publishParams.sourceLanguage The language of the source page
 * @param {string} publishParams.targetLanguage The language of the target page
 * @param {number} publishParams.revision The revision of the source page
 * @param {number|"new"} publishParams.units The parallel corpora translation units
 * @param {string} publishParams.sectionId To be stored as "cxsx_section_id" inside "cx_section_translations" table. Format: `${revision}_${mwSectionNumber}`
 * @param {boolean} publishParams.isSandbox
 * @param {boolean} publishParams.progress
 * @return {Promise<number|PublishFeedbackMessage>}
 * @throws AssertUserError
 */
const saveTranslation = ({
  sourceTitle,
  targetTitle,
  sourceSectionTitle,
  targetSectionTitle,
  sourceLanguage,
  targetLanguage,
  revision,
  units,
  sectionId,
  isSandbox,
  progress,
}) => {
  const params = {
    assert: optionalUserAssertion,
    action: "sxsave",
    targettitle: targetTitle,
    sourcetitle: sourceTitle,
    sourcerevision: revision,
    sourcesectiontitle: sourceSectionTitle,
    targetsectiontitle: targetSectionTitle,
    sourcelanguage: sourceLanguage,
    targetlanguage: targetLanguage,
    content: JSON.stringify(units),
    sectionid: sectionId,
    issandbox: isSandbox,
    progress: JSON.stringify(progress),
  };

  const api = new mw.Api();

  return api
    .postWithToken("csrf", params)
    .then((response) => response.sxsave.sectiontranslationid)
    .catch((error, details) => {
      throwAssertUserError(error);
      let text;

      if (details.exception) {
        text = details.exception.message;
      } else if (details.error) {
        text = details.error.info;
      } else {
        text = "Unknown error";
      }

      return new PublishFeedbackMessage({ text, status: "error" });
    });
};

/**
 * @param {int} translationId
 * @return {Promise}
 */
const splitTranslation = (translationId) => {
  const params = {
    assert: optionalUserAssertion,
    action: "cxsplit",
    translationid: translationId,
  };

  const api = new mw.Api();

  return api
    .postWithToken("csrf", params)
    .then((response) => response.cxsplit.result === "success");
};

/**
 * This method sends a request to the "cxcheckunreviewed" Action API endpoint,
 * and returns a promise that resolves to:
 * 1. a true boolean if no unreviewed translation is found,
 * 2. or a PublishedTranslation instance, if such translation is found for the
 * current user.
 *
 * @return {Promise<boolean|PublishedTranslation>}
 */
const checkUnreviewedTranslations = () => {
  const params = {
    assert: optionalUserAssertion,
    action: "cxcheckunreviewed",
  };

  const api = new mw.Api();

  return api
    .get(params)
    .then(
      (response) =>
        response.cxcheckunreviewed.result === "success" ||
        new PublishedTranslation(response.cxcheckunreviewed.translation)
    );
};

/**
 * Given the appropriate parameters (section translation id, translation id and section id), this method
 * deletes the translation from "cx_section_translations" database table, deletes all related corpora translation
 * units from "cx_corpora" table, and if no other corpora translation unit exists for the given
 * translation id, to also delete the translation from "cx_translations" and "cx_translators" table.
 * Finally, it returns true if the deletion was completed successfully or false otherwise.
 *
 * @param {number} sectionTranslationId The id of the section translation
 * @param {number} translationId The id of the "parent" translation
 * @param {string} sectionId The id of the source page section of the section translation
 * @return {Promise<boolean>}
 */
const deleteTranslation = (sectionTranslationId, translationId, sectionId) => {
  const params = {
    action: "sxdelete",
    sectiontranslationid: sectionTranslationId,
    translationid: translationId,
    sectionid: sectionId,
  };

  const api = new mw.Api();

  return api
    .postWithToken("csrf", params)
    .then(() => true)
    .catch(() => false);
};

/**
 * Given the translation object, this method deletes all related corpora translation
 * units from "cx_corpora" table, and if no other corpora translation unit exists for the given
 * translation and also delete the translation from "cx_translations" and "cx_translators" table.
 * `deleteTranslation` requires `sectionTranslationId` and `sectionId`, which is not available for draft
 * translations created on CX but are being deleted on SX.
 * Finally, it returns true if the deletion was completed successfully or false otherwise.
 *
 * @param {Translation} translation Translation object
 * @return {Promise<boolean>}
 */
const deleteCXTranslation = (translation) => {
  const params = {
    assert: "user",
    action: "cxdelete",
    from: translation.sourceLanguage,
    to: translation.targetLanguage,
    sourcetitle: translation.sourceTitle,
  };

  const api = new mw.Api();

  return api
    .postWithToken("csrf", params)
    .then(() => true)
    .catch(() => false);
};

/**
 * @return {Promise}
 */
const fetchTranslatorStats = () => {
  const api = new mw.Api();

  return api
    .get({ action: "query", list: "cxtranslatorstats" })
    .then((response) => response.cxtranslatorstats?.publishTrend)
    .catch((error) => {
      mw.log.error("[CX] Fetching translator stats failed", error);

      return null;
    });
};

export default {
  fetchTranslations,
  fetchTranslationUnits,
  fetchSegmentTranslation,
  parseTemplateWikitext,
  publishTranslation,
  saveTranslation,
  deleteTranslation,
  fetchTranslatorStats,
  deleteCXTranslation,
  splitTranslation,
  checkUnreviewedTranslations,
};
