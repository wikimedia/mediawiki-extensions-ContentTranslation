<template>
  <mw-grid id="contenttranslation">
    <mw-row class="cx-container">
      <mw-col cols="12">
        <transition :name="transitionName">
          <router-view />
        </transition>
      </mw-col>
      <aside />
    </mw-row>
  </mw-grid>
</template>

<script>
import { MwGrid, MwCol, MwRow } from "./lib/mediawiki.ui";
import { mapState } from "vuex";

export default {
  name: "ContentTranslationApp",
  components: { MwGrid, MwCol, MwRow },
  data: () => ({
    transitionName: ""
  }),
  computed: {
    ...mapState({
      translationInProgress: state => state.application.translationInProgress
    })
  },
  // watch the `$route` to determine the transition to use
  watch: {
    $route(to, from) {
      const toStep = to.meta.workflowStep;
      const fromStep = from.meta.workflowStep;
      this.transitionName =
        toStep < fromStep
          ? "mw-ui-animation-slide-end"
          : "mw-ui-animation-slide-start";
    }
  },
  mounted() {
    window.addEventListener("beforeunload", e => {
      if (this.translationInProgress) {
        e.preventDefault();
        e.returnValue = "";
      }
    });
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

body {
  margin: 0;
  padding: 0;
}

.fullscreen {
  position: fixed;
  width: 100%;
  height: 100%;
  // height: 100vh doesn't work well for mobile screen as it leads to cropping of content at the bottom
  // For browsers supporting -webkit attributes (iOS Safari, Chrome) -webkit-fill-available value fixes
  // this issue. For the rest browsers height: 100% will be used and it is expected to work well too,
  // provided that no parent element has height set to less than 100%.
  // Fix explained here: https://allthingssmitty.com/2020/05/11/css-fix-for-100vh-in-mobile-webkit/
  height: -webkit-fill-available;
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index: 1;
}

// mw.ui.* resets specific for this app
.mw-ui-icon:before {
  display: none;
}
</style>
