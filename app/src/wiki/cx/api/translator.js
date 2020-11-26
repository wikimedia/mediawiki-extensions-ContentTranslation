import Translation from "../models/translation";
import MTProviderGroup from "../../mw/models/mtProviderGroup";
import PageSection from "../../cx/models/pageSection";
import SectionSuggestion from "../../cx/models/sectionSuggestion";
import Page from "../../mw/models/page";
import PublishResult from "../../cx/publishResult";
import { cleanupHtml } from "../../../utils/contentCleaner";

async function fetchTranslations(offset) {
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
 * @return {Promise<String>}
 */
async function fetchSegmentTranslation(
  sourceLanguage,
  targetLanguage,
  provider,
  sentence
) {
  if (!sentence) {
    return;
  }
  const sitemapper = new mw.cx.SiteMapper();
  let relativeUrl = `/translate/${sourceLanguage}/${targetLanguage}`;
  if (provider !== MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY) {
    relativeUrl += `/${provider}`;
  }

  const cxserverAPI = sitemapper.getCXServerUrl(relativeUrl);
  return fetch(cxserverAPI, {
    headers: { "Content-Type": "application/json" },
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
 * @param {Page} sourcePage
 * @param {PageSection} section
 * @param {SectionSuggestion} sectionSuggestion
 * @return {Promise<PublishResult>}
 */
const publishTranslation = (sourcePage, section, sectionSuggestion) => {
  const params = {
    action: "cxpublishsection",
    title: sectionSuggestion.targetTitle,
    html: cleanupHtml(section.translationHtml),
    sourcetitle: sectionSuggestion.sourceTitle,
    sourcerevid: sourcePage.revision,
    sourcesectiontitle: section.originalTitle,
    targetsectiontitle: section.title,
    sourcelanguage: sectionSuggestion.sourceLanguage,
    targetlanguage: sectionSuggestion.targetLanguage
  };
  /**
   * Contains the order of the section inside target page,
   * or -1 if section is not present
   * @type {Number}
   */
  const sectionNumber = sectionSuggestion.getSectionNumber(
    section.originalTitle
  );

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
          message: details.exception.message,
          status: details.statusText
        });
      }
      if (details.error) {
        return new PublishResult({
          result: "failure",
          message: details.error.info,
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
