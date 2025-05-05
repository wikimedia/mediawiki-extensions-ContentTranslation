<script setup>
import { computed } from "vue";
import {
  cdxIconInfoFilled,
  cdxIconChart,
  cdxIconFeedback,
  cdxIconSpecialPages,
} from "@wikimedia/codex-icons";
import { CdxIcon } from "@wikimedia/codex";
import { useI18n } from "vue-banana-i18n";
import { isDesktopSite } from "@/utils/mediawikiHelper";
import useDesktopDashboardURL from "./useDesktopDashboardURL";

const { desktopDashboardUrl } = useDesktopDashboardURL();

const bananaI18n = useI18n();

const listItems = computed(() => {
  const items = [
    {
      icon: cdxIconInfoFilled,
      label: bananaI18n.i18n("cx-sx-dashboard-help-panel-more-info-label"),
      href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
      target: "_blank",
    },
    {
      icon: cdxIconFeedback,
      label: bananaI18n.i18n("cx-sx-dashboard-help-panel-feedback-label"),
      href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
      target: "_blank",
    },
  ];

  if (isDesktopSite) {
    items.push({
      icon: cdxIconSpecialPages,
      label: bananaI18n.i18n("cx-sx-dashboard-banner-access-previous"),
      href: desktopDashboardUrl.value,
      target: "_self",
    });
  }

  return items;
});
</script>

<template>
  <div class="cx-help-panel pa-4">
    <h5 v-i18n:cx-sx-dashboard-help-panel-title />
    <ul class="cx-help-panel__item-list mt-6 ps-2">
      <li v-for="(item, index) in listItems" :key="index" class="mt-4">
        <a :href="item.href" :target="item.target">
          <cdx-icon class="me-2" :icon="item.icon" />
          <span v-text="item.label" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-help-panel {
  background-color: @background-color-base;
  &__item-list {
    li {
      list-style: none;
      font-weight: @font-weight-bold;
      font-size: 0.875rem;
      a {
        .cdx-icon {
          color: inherit;
        }
      }
    }
  }
}
</style>
