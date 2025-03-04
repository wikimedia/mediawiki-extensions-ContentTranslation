<script setup>
import { MwGrid, MwCol, MwRow } from "./lib/mediawiki.ui";
import { useStore } from "vuex";
import { computed, onMounted, inject } from "vue";
import userApi from "@/wiki/mw/api/user";
import SxLoginDialog from "@/components/SXLoginDialog.vue";
import AssertUserError from "@/utils/errors/assertUserError";
import useURLHandler from "@/composables/useURLHandler";
import useApplicationLanguagesInitialize from "@/composables/useApplicationLanguagesInitialize";

const { initializeURLState } = useURLHandler();
const { initializeApplicationLanguages } = useApplicationLanguagesInitialize();
initializeURLState();
initializeApplicationLanguages();

const breakpoints = inject("breakpoints");
const isMobile = computed(() => breakpoints.value.mobile);

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
      <mw-col class="cx-container__wrapper-col" cols="12">
        <router-view v-slot="{ Component, route }">
          <transition :name="isMobile ? route.meta.transitionName : ''">
            <component :is="Component" />
          </transition>
          <sx-login-dialog />
        </router-view>
      </mw-col>
    </mw-row>
  </mw-grid>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
@import "@/lib/mediawiki.ui/styles/common.less";

body.skin-contenttranslation {
  margin: 0;
  padding: 0;

  .cx-header {
    // for mobile screens, set "inline" padding for header to 12px
    padding: @spacing-50 @spacing-75 @spacing-100;

    // for mobile screens, set "inline" padding for header to 40px (same as previous)
    @media only screen and (min-width: @min-width-breakpoint-tablet) {
      padding: @spacing-50 @spacing-250 @spacing-100;
    }
  }

  .cx-container.row {
    margin: @spacing-0;

    .cx-container__wrapper-col {
      padding-inline: @spacing-0;
    }
  }
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
