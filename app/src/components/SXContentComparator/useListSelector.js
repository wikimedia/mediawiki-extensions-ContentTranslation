import { computed } from "vue";
import { useI18n } from "vue-banana-i18n";
import { getAutonym } from "@wikimedia/language-data";
import useURLHandler from "@/composables/useURLHandler";

/**
 * @return {ComputedRef<{value: string, props: object}[]>}
 */
const useListSelector = (props) => {
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
  } = useURLHandler();

  const sourceLanguageAutonym = computed(() =>
    getAutonym(sourceLanguage.value)
  );
  const targetLanguageAutonym = computed(() =>
    getAutonym(targetLanguage.value)
  );

  const bananaI18n = useI18n();

  return computed(() => {
    const sourceSelectorItem = {
      value: "source_section",
      props: {
        label: bananaI18n.i18n(
          "cx-sx-content-comparator-source-selector-title",
          sourceLanguageAutonym.value
        ),
        type: "text",
        class: "px-0 py-4 mx-4",
      },
    };

    let targetSelectorItem;

    switch (true) {
      case props.isMappedSection:
        targetSelectorItem = {
          value: "target_section",
          props: {
            label: bananaI18n.i18n(
              "cx-sx-content-comparator-target-selector-target-section-title",
              targetLanguageAutonym.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4",
          },
        };
        break;
      default:
        targetSelectorItem = {
          value: "target_article",
          props: {
            label: bananaI18n.i18n(
              "cx-sx-content-comparator-target-selector-full-article-title",
              targetLanguageAutonym.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4",
          },
        };
    }

    return [sourceSelectorItem, targetSelectorItem];
  });
};

export default useListSelector;
