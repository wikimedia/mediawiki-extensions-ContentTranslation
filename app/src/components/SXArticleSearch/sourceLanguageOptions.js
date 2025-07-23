import { getAutonym } from "@wikimedia/language-data";
import { computed } from "vue";
import { mwIconEllipsis } from "@/lib/mediawiki.ui/components/icons";

/**
 * Checks whether two arrays of unique strings contain the same elements, regardless of order
 *
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @returns {boolean}
 */
const haveSameStrings = (arr1, arr2) =>
  arr1.length === arr2.length &&
  arr1.every((item) => arr2.includes(item)) &&
  arr2.every((item) => arr1.includes(item));

const MORE_OPTION_VALUE = "other";

/**
 * @param {ComputedRef<string[]>} suggestedSourceLanguages
 * @return {ComputedRef<{ value: string, props: object }[]>}
 */
const getSourceLanguageOptions = (suggestedSourceLanguages) =>
  computed((previousLanguageOptions) => {
    /**
     * According to design specification, language selector inside
     * "search for an article" screen, contains three options.
     *
     * @type {number}
     */
    const sliceSize = 3;
    const sourceLanguages = suggestedSourceLanguages.value.slice(0, sliceSize);

    const languageSelectorOption = {
      value: MORE_OPTION_VALUE,
      props: {
        icon: mwIconEllipsis,
        type: "icon",
        class: "px-0 py-4 me-4 ms-auto",
      },
    };

    const previousLanguages = (previousLanguageOptions || [])
      .map((option) => option.value)
      .filter((value) => value !== MORE_OPTION_VALUE);

    if (haveSameStrings(previousLanguages, sourceLanguages)) {
      return previousLanguageOptions;
    }

    const languageOptions = sourceLanguages.map((language) => ({
      value: language,
      props: {
        label: getAutonym(language),
        type: "text",
        class: "px-0 py-4 mx-4",
      },
    }));

    return [...languageOptions, languageSelectorOption];
  });

export default getSourceLanguageOptions;
