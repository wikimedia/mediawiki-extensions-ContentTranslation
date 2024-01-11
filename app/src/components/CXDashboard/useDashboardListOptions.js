import { computed } from "vue";
import {
  mwIconArticleCheck,
  mwIconEdit,
  mwIconLightBulb,
} from "@/lib/mediawiki.ui/components/icons";
import { useI18n } from "vue-banana-i18n";

export default () => {
  const bananaI18n = useI18n();

  return computed(() => [
    {
      value: "suggestions",
      props: {
        label: bananaI18n.i18n("cx-translation-filter-suggested-translations"),
        icon: mwIconLightBulb,
        type: "text",
      },
    },
    {
      value: "draft",
      props: {
        label: bananaI18n.i18n("cx-translation-filter-draft-translations"),
        icon: mwIconEdit,
        type: "text",
      },
    },
    {
      value: "published",
      props: {
        label: bananaI18n.i18n("cx-translation-filter-published-translations"),
        icon: mwIconArticleCheck,
        type: "text",
      },
    },
  ]);
};
