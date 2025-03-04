<script setup>
import useDesktopDashboardURL from "./useDesktopDashboardURL";
import { CdxMessage } from "@wikimedia/codex";
import { cdxIconSpecialPages } from "@wikimedia/codex-icons";

const { desktopDashboardUrl } = useDesktopDashboardURL();

const learnMoreUrl =
  "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation";
</script>

<template>
  <cdx-message
    :icon="cdxIconSpecialPages"
    class="cx-dashboard-banner pa-4"
    :allow-user-dismiss="true"
  >
    <h5 v-i18n:cx-sx-dashboard-banner-title />
    <p v-i18n:cx-sx-dashboard-banner-description class="complementary" />
    <p class="complementary mt-4">
      <a
        v-i18n:cx-sx-dashboard-banner-learn-more
        target="_blank"
        :href="learnMoreUrl"
      />
    </p>
    <p class="complementary">
      <a
        v-i18n:cx-sx-dashboard-banner-access-previous
        :href="desktopDashboardUrl"
      />
    </p>
  </cdx-message>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
.cdx-message {
  &.cx-dashboard-banner {
    background-color: @background-color-base;
    border: 0;
    border-radius: @border-radius-base;
    box-shadow: @box-shadow-drop-small;
    a {
      font-weight: @font-weight-bold;
      color: @color-progressive;
    }
  }
}
</style>
