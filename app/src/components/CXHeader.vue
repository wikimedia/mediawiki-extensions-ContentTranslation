<template>
  <header class="row cx-header">
    <div class="col-6 col-xs-8 items-center justify-start">
      <h1 class="header ma-0 pa-0">
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
    <div class="col-6 col-xs-4 items-center justify-end">
      <mw-button
        class="d-xs-only-none d-sm-only-none"
        type="icon"
        large
        :icon="mwIconBell"
      />
      <mw-button
        class="d-xs-only-none d-sm-only-none"
        type="icon"
        large
        :icon="mwIconTray"
      />
      <mw-button
        type="text"
        class="d-xs-only-none d-sm-only-none"
        large
        outlined
        :icon="mwIconUserAvatar"
        :label="username"
        :indicatorSize="18"
        :indicator="mwIconExpand"
      />
      <mw-button
        type="icon"
        class="d-xs-only-flex d-sm-only-flex d-none"
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
  name: "cx-header",
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
  }
}
</style>
