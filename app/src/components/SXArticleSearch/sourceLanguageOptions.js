import { getAutonym } from "@wikimedia/language-data";
import { computed } from "@vue/composition-api";
import { mwIconEllipsis } from "@/lib/mediawiki.ui/components/icons";
import useApplicationState from "@/composables/useApplicationState";

/**
 * @type {function(ComputedRef<string[]>): ComputedRef<string[]>}
 */
const getSourceLanguageOptions = suggestedSourceLanguages =>
  computed(() => {
    const { sourceLanguage } = useApplicationState();

    /**
     * According to design specification, language selector inside
     * "search for an article" screen, contains three options, including
     * current source language. So we need exactly 2 additional suggested
     * source languages to display.
     *
     * @type {number}
     */
    const sliceSize = 2;

    const languageSelectorOption = {
      value: "other",
      props: {
        icon: mwIconEllipsis,
        type: "icon",
        class: "px-0 py-4 me-4 ms-auto"
      }
    };
    const sourceLanguages = [
      sourceLanguage.value,
      ...suggestedSourceLanguages.value.slice(0, sliceSize)
    ];
    const languageOptions = sourceLanguages
      .filter(
        (option, index) =>
          (sourceLanguages.findIndex(language => language === option) === index)
      )
      .map(language => ({
        value: language,
        props: {
          label: getAutonym(language),
          type: "text",
          class: "px-0 py-4 mx-4"
        }
      }));

    return [...languageOptions, languageSelectorOption];
  });

export default getSourceLanguageOptions;
