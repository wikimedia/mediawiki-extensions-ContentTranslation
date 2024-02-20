<template>
  <mw-dialog
    v-if="isDialogOn"
    :overlay-opacity="0.25"
    overlay-color="#000"
    :close-on-escape-key="false"
    persistent
    class="sx-login-dialog"
    @close="closeDialog"
  >
    <template #header>
      <div class="pa-4 sx-login-dialog__header">
        <h4 v-i18n:cx-sx-login-dialog-title />
      </div>
    </template>
    <div
      v-i18n:cx-sx-login-dialog-body
      class="sx-login-dialog__body px-6 pb-4"
    />
    <div class="sx-login-dialog__footer px-4 py-2 flex justify-center">
      <a class="py-1" :href="loginUrl" target="_blank">
        {{ $i18n("cx-sx-login-dialog-button-label") }}
      </a>
    </div>
  </mw-dialog>
</template>

<script setup>
import { MwDialog } from "@/lib/mediawiki.ui";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isDialogOn = computed(() => store.state.application.isLoginDialogOn);
const closeDialog = () => store.commit("application/setIsLoginDialogOn", false);
const loginUrl = ref(mw.util.getUrl("Special:UserLogin"));
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-login-dialog {
  .mw-ui-dialog__shell {
    border: none;
    .mw-ui-dialog__body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  &__header {
    text-align: center;
  }
  &__footer {
    border-top: @border-subtle;
    a {
      font-weight: @font-weight-bold;
      color: @color-progressive;
    }
  }
}
</style>
