<script setup>
import { MwGrid, MwCol, MwRow } from "./lib/mediawiki.ui";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import userApi from "@/wiki/mw/api/user";
import SxLoginDialog from "@/components/SXLoginDialog.vue";
import AssertUserError from "@/utils/errors/assertUserError";
import useURLHandler from "@/composables/useURLHandler";

const { initializeURLState } = useURLHandler();
initializeURLState();

const store = useStore();
const unsavedChangesExist = computed(
  () => store.state.application.autoSavePending
);
onMounted(() => {
  window.addEventListener("beforeunload", (e) => {
    if (unsavedChangesExist.value) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  if (!mw.user.isAnon()) {
    window.addEventListener("visibilitychange", (e) => {
      if (document.visibilityState !== "visible") {
        return;
      }

      // if visibility state is "visible" we should assert that the user has not logged out
      // in another browser tab/window.
      userApi
        .assertUser()
        .then(() => store.commit("application/setIsLoginDialogOn", false))
        .catch((error) => {
          if (error instanceof AssertUserError) {
            store.commit("application/setIsLoginDialogOn", true);
          }
        });
    });
  }
});
</script>

<template>
  <mw-grid id="contenttranslation">
    <mw-row class="cx-container">
      <mw-col cols="12">
        <router-view v-slot="{ Component, route }">
          <transition :name="route.meta.transitionName">
            <component :is="Component" />
          </transition>
          <sx-login-dialog />
        </router-view>
      </mw-col>
    </mw-row>
  </mw-grid>
</template>

<style lang="less">
@import "@/lib/mediawiki.ui/styles/common.less";

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
.mw-ui-icon {
  width: unset;
  height: unset;
  flex-basis: unset;
  &:before {
    display: none;
  }
  & + span {
    all: unset;
  }
}
</style>
