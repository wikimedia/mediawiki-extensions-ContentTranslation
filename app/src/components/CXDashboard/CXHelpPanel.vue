<template>
  <div class="cx-help-panel pa-4">
    <h5 v-i18n:cx-sx-dashboard-help-panel-title />
    <ul class="cx-help-panel__item-list mt-6 ps-2">
      <li v-for="(item, index) in listItems" :key="index" class="mt-4">
        <a :href="item.href" target="_blank">
          <mw-icon class="me-2" :icon="item.icon" />
          <span v-text="item.label" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  mwIconInfoFilled,
  mwIconChart,
  mwIconFeedback,
} from "@/lib/mediawiki.ui/components/icons";
import { MwIcon } from "@/lib/mediawiki.ui";
import { useI18n } from "vue-banana-i18n";

export default {
  name: "CxHelpPanel",
  components: { MwIcon },
  setup() {
    const bananaI18n = useI18n();

    const listItems = [
      {
        icon: mwIconInfoFilled,
        label: bananaI18n.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
      },
      {
        icon: mwIconChart,
        label: bananaI18n.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats"),
      },
      {
        icon: mwIconFeedback,
        label: bananaI18n.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
      },
    ];

    return { listItems };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-help-panel {
  background-color: @background-color-base;
  &__item-list {
    li {
      list-style: none;
      font-weight: @font-weight-bold;
      font-size: 0.875rem;
    }
  }
}
</style>
