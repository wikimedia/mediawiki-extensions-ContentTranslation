import { ref } from "vue";

/**
 * All language codes that are supported
 * and can be used as source languages
 * @type {Ref<string[]>}
 */
const supportedSourceLanguageCodes = ref([]);
/**
 * All language codes that are supported
 * and can be used as target languages
 * @type {Ref<string[]>}
 */
const supportedTargetLanguageCodes = ref([]);

let initialized = false;

export default function () {
  if (!initialized) {
    /**
     * All language codes supported, according to
     * SupportedLanguages.php
     */
    const languageCodes = mw.config.get(
      "wgContentTranslationSupportedLanguages"
    );

    if (!languageCodes) {
      throw new Error(
        `[CX] No supported languages found in mw.config for wgContentTranslationSupportedLanguages`
      );
    }

    supportedSourceLanguageCodes.value = languageCodes;
    supportedTargetLanguageCodes.value = languageCodes;
    initialized = true;
  }

  return {
    supportedSourceLanguageCodes,
    supportedTargetLanguageCodes,
  };
}
