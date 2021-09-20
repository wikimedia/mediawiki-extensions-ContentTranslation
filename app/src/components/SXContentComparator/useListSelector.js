import { computed } from "@vue/composition-api";
import { getAutonym } from "@wikimedia/language-data";
import useApplicationState from "@/composables/useApplicationState";

/**
 * @return {ComputedRef<[]>}
 */
const useListSelector = (props, contextRoot) => {
  const { currentSectionSuggestion: suggestion } = useApplicationState();

  return computed(() => {
    const sourceSelectorItem = {
      value: "source_section",
      props: {
        label: contextRoot.$i18n(
          "cx-sx-content-comparator-source-selector-title",
          getAutonym(suggestion.value.sourceLanguage)
        ),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    };

    let targetSelectorItem;

    switch (true) {
      case props.isMappedSection:
        targetSelectorItem = {
          value: "target_section",
          props: {
            label: contextRoot.$i18n(
              "cx-sx-content-comparator-target-selector-target-section-title",
              getAutonym(suggestion.value.targetLanguage)
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
        break;
      default:
        targetSelectorItem = {
          value: "target_article",
          props: {
            label: contextRoot.$i18n(
              "cx-sx-content-comparator-target-selector-full-article-title",
              getAutonym(suggestion.value.targetLanguage)
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
    }

    return [sourceSelectorItem, targetSelectorItem];
  });
};

export default useListSelector;
