import { siteMapper } from "@/utils/mediawikiHelper";

const useCXRedirect =
  () =>
  (sourceLanguage, targetLanguage, sourceTitle, extra = {}) => {
    siteMapper.setCXToken(sourceLanguage, targetLanguage, sourceTitle);
    location.href = siteMapper.getCXUrl(
      sourceTitle,
      null,
      sourceLanguage,
      targetLanguage,
      extra
    );
  };

export default useCXRedirect;
