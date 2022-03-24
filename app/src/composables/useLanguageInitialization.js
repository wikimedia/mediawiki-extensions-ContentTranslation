import useMediawikiState from "@/composables/useMediawikiState";
import { getInitialLanguagePair } from "@/utils/getInitialLanguagePair";
import { siteMapper } from "@/utils/mediawikiHelper";
import store from "@/store";

const initializeLanguages = async () => {
  await store.dispatch("mediawiki/fetchSupportedLanguageCodes");
  const { enabledTargetLanguages, supportedLanguageCodes } =
    useMediawikiState();

  const { sourceLanguage, targetLanguage } = getInitialLanguagePair(
    enabledTargetLanguages.value,
    supportedLanguageCodes.value
  );

  const wikiLanguage = siteMapper.getCurrentWikiLanguageCode();
  const translateInTarget = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  );

  if (translateInTarget && targetLanguage !== wikiLanguage) {
    const urlParams = new URLSearchParams(location.search);

    const urlSourceArticleTitle = urlParams.get("page");
    const urlSourceSectionTitle = urlParams.get("section");

    window.location.href = siteMapper.getCXUrl(
      urlSourceArticleTitle,
      null,
      sourceLanguage,
      targetLanguage,
      { sx: true, section: urlSourceSectionTitle }
    );
  }

  store.commit("application/setSourceLanguage", sourceLanguage);
  store.commit("application/setTargetLanguage", targetLanguage);
};

export default initializeLanguages;
