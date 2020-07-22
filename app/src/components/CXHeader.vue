<template>
  <header class="row cx-header">
    <div class="col-6 col-xs-8 items-center justify-start">
      <h1 class="header ma-0 pa-0">
        <mw-button
          type="text"
          class="header ma-0 pa-0"
          :href="currentPageURL"
          :icon="mwIconWikipediaLogo"
          :icon-size="32"
          :label="$i18n('cx-dashboard-header')"
        ></mw-button>
      </h1>
    </div>
    <div class="col-6 col-xs-4 items-center justify-end">
      <mw-button class="h-sm-and-down " type="icon" large :icon="mwIconBell" />
      <mw-button class="h-sm-and-down" type="icon" large :icon="mwIconTray" />
      <mw-button
        type="text"
        class="h-sm-and-down"
        large
        outlined
        :icon="mwIconUserAvatar"
        :label="username"
        :indicator-size="18"
        :indicator="mwIconExpand"
      />
      <mw-button
        type="icon"
        class="h-md-and-up"
        :icon-size="32"
        :icon="mwIconUserAvatar"
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
  name: "CxHeader",
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
    border-bottom: 0;
  }
}
</style>
