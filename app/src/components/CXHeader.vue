<template>
  <header class="row items-center justify-start justify-between cx-header">
    <div class="col-6 justify-start">
      <h1 class="header">
        <mw-button
          type="text"
          :href="currentPageURL"
          :icon="mwIconWikipediaLogo"
          :icon-size="32"
          :label="$i18n('cx-dashboard-header')"
        >
        </mw-button>
      </h1>
    </div>
    <div class="col-6 justify-end">
      <mw-button type="icon" large :icon="mwIconBell" />
      <mw-button type="icon" large :icon="mwIconTray" />
      <mw-button
        type="text"
        large
        outlined
        :icon="mwIconUserAvatar"
        :label="username"
        :indicatorSize="18"
        :indicator="mwIconExpand"
      />
    </div>
  </header>
</template>

<script>
import MwButton from "../lib/mediawiki.ui/components/MWButton";

import {
  mwIconWikipediaLogo,
  mwIconBell,
  mwIconTray,
  mwIconExpand,
  mwIconUserAvatar
} from "../lib/mediawiki.ui/components/icons";

export default {
  name: "Header",
  components: {
    MwButton
  },
  data: () => ({
    mwIconWikipediaLogo,
    mwIconBell,
    mwIconTray,
    mwIconExpand,
    mwIconUserAvatar
  }),
  computed: {
    username: () => {
      return mw.user.getName();
    },
    currentPageURL: () => {
      return "./" + mw.config.get("wgPageName");
    }
  }
};
</script>

<style lang="less">
.cx-header {
  padding: 0;
  h1.header {
    font-size: 1.8em;
    border-bottom: 0;
    padding: 0;
  }
}
</style>
