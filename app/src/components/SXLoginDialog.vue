<template>
  <mw-dialog
    v-if="modelValue"
    :overlay-opacity="0.25"
    overlay-color="#000"
    class="sx-login-dialog"
  >
    <template #header>
      <div class="pa-4 sx-login-dialog__header">
        <h4 v-i18n:cx-sx-login-dialog-title />
      </div>
    </template>
    <div v-i18n:cx-sx-login-dialog-body class="sx-login-dialog__body px-6" />
    <div class="sx-login-dialog__footer px-4 py-2 flex justify-center">
      <mw-button
        type="text"
        progressive
        :label="$i18n('cx-sx-login-dialog-button-label')"
        :href="loginUrl"
        target="_blank"
      />
    </div>
  </mw-dialog>
</template>

<script setup>
import { MwButton, MwDialog } from "@/lib/mediawiki.ui";
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
const loginUrl = ref(mw.util.getUrl("Special:UserLogin"));
</script>

<style lang="less">
@import "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

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
    border-top: @border-width-base @border-style-base @border-color-subtle;
  }
}
</style>
