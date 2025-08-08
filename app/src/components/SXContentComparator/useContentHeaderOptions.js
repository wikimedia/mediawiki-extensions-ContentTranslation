import { computed } from "vue";
import { useI18n } from "vue-banana-i18n";
import { getAutonym } from "@wikimedia/language-data";
import useURLHandler from "@/composables/useURLHandler";
import usePublishTarget from "@/composables/usePublishTarget";

/**
 * @return {ComputedRef<{value: string, props: object}[]>}
 */
const useContentHeaderOptions = () => {
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

  const { target, PUBLISHING_TARGETS } = usePublishTarget();
  const isSectionForExpansion = computed(
    () => target.value === PUBLISHING_TARGETS.EXPAND
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
      },
    };

    let targetSelectorItem;

    if (isSectionForExpansion.value) {
      targetSelectorItem = {
        value: "target_section",
        props: {
          label: bananaI18n.i18n(
            "cx-sx-content-comparator-target-selector-target-section-title",
            targetLanguageAutonym.value
          ),
          type: "text",
        },
      };
    } else {
      targetSelectorItem = {
        value: "target_article",
        props: {
          label: bananaI18n.i18n(
            "cx-sx-content-comparator-target-selector-full-article-title",
            targetLanguageAutonym.value
          ),
          type: "text",
        },
      };
    }

    return [sourceSelectorItem, targetSelectorItem];
  });
};

export default useContentHeaderOptions;
