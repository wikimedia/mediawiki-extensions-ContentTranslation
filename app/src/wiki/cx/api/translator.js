import Translation from "../models/translation";
import MTProviderGroup from "../../mw/models/mtProviderGroup";
import PublishResult from "../../cx/models/publishResult";
import { cleanupHtml } from "../../../utils/contentCleaner";
import siteMapper from "../../../utils/siteMapper";
import PublishFeedbackMessage from "../models/publishFeedbackMessage";

/**
 * @param {String} offset
 * @return {Promise<Translation[]>}
 */
async function fetchTranslations(offset) {
  if (mw.user.isAnon()) {
    return Promise.resolve([]);
  }
  const params = {
    action: "query",
    format: "json",
    assert: "user",
    formatversion: 2,
    list: "contenttranslation"
  };
  if (offset) {
    params["offset"] = offset;
  }

  const api = new mw.Api();
  //   withCredentials: true
  return api.get(params).then(async response => {
    const apiResponse = response.query.contenttranslation.translations;
    let results = apiResponse.map(item => new Translation(item.translation));
    if (response.continue?.offset) {
      const restOfResults = await fetchTranslations(response.continue.offset);
      results = results.concat(restOfResults);
    }
    return results;
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
    return;
  }
  let relativeUrl = `/translate/${sourceLanguage}/${targetLanguage}`;
  if (provider !== MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY) {
    relativeUrl += `/${provider}`;
  }

  const cxserverAPI = siteMapper.getCXServerUrl(relativeUrl);
  return fetch(cxserverAPI, {
    headers: { "Content-Type": "application/json", Authorization: token },
    method: "POST",
    body: JSON.stringify({ html: `<div>${sentence}</div>` })
  })
    .then(response => response.json())
    .then(
      data => /<div>(?<content>.*)<\/div>/.exec(data.contents).groups.content
    )
    .catch(error => Promise.reject(error));
}

/**
 * Given a page title and a section number, this method returns
 * a promise which resolves to the contents of the section in the
 * given position, inside the given page. To fetch these contents,
 * a parse request to Action API is being send. Since a Promise is
 * being return, caller method is responsible to handle any Promise
 * rejection.
 * @param {String} pageTitle - The title of the requested page
 * @param {Number} sectionNumber - A number that indicates the requested section position within the page sections
 * @return {Promise<string|null>}
 */
const getSectionContents = async (pageTitle, sectionNumber) => {
  const params = {
    action: "parse",
    page: pageTitle,
    format: "json",
    section: sectionNumber,
    disabletoc: true,
    disablelimitreport: true,
    disableeditsection: true,
    disablestylededuplication: true,
    formatversion: 2
  };
  const api = new mw.Api();
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
 * @param {Page} sourcePage
 * @param {PageSection} section
 * @param {SectionSuggestion} sectionSuggestion
 * @param {String} targetTitle
 * @param {Number} sectionNumber
 * @return {Promise<PublishResult>}
 */
const publishTranslation = (
  sourcePage,
  section,
  sectionSuggestion,
  targetTitle,
  sectionNumber
) => {
  const params = {
    action: "cxpublishsection",
    title: targetTitle,
    html: cleanupHtml(section.translationHtml),
    sourcetitle: sectionSuggestion.sourceTitle,
    sourcerevid: sourcePage.revision,
    sourcesectiontitle: section.originalTitle,
    targetsectiontitle: section.title,
    sourcelanguage: sectionSuggestion.sourceLanguage,
    targetlanguage: sectionSuggestion.targetLanguage
  };

  // If present is missing, sectionnumber parameter can be omitted as
  // it defaults to "new" (inside ApiSectionTranslationPublish class)
  if (sectionNumber > -1) {
    params.sectionnumber = sectionNumber;
  }
  const api = new mw.Api();

  return api
    .postWithToken("csrf", params)
    .then(() => {
      return new PublishResult();
    })
    .catch((error, details) => {
      if (details.exception) {
        return new PublishResult({
          result: "failure",
          messages: [
            new PublishFeedbackMessage({ text: details.exception.message })
          ],
          status: details.statusText
        });
      }
      if (details.error) {
        return new PublishResult({
          result: "failure",
          messages: [new PublishFeedbackMessage({ text: details.error.info })],
          status: details.error.code
        });
      }
      // Unknown error
      return new PublishResult({
        result: "failure"
      });
    });
};

export default {
  fetchTranslations,
  fetchSegmentTranslation,
  publishTranslation
};
