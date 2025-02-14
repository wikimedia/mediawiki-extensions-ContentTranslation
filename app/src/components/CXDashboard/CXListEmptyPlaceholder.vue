<script setup>
import { CdxIcon } from "@wikimedia/codex";
import { cdxIconLanguage } from "@wikimedia/codex-icons";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="cx-list-empty-placeholder pa-4">
    <div class="cx-list-empty-placeholder__icon-container">
      <div class="cx-list-empty-placeholder__icon">
        <cdx-icon :icon="cdxIconLanguage" />
      </div>
    </div>
    <p class="cx-list-empty-placeholder__title mt-5" v-text="title"></p>
    <p
      class="cx-list-empty-placeholder__description mt-2"
      v-text="description"
    ></p>
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-list-empty-placeholder {
  text-align: center;
  color: @color-subtle;

  &__icon-container {
    display: flex;
    justify-content: center;
  }
  &__icon {
    padding: @spacing-100;
    background-color: @background-color-disabled;
    border-radius: @border-radius-circle;
    line-height: 1;
    .cdx-icon {
      height: @size-300;
      width: @size-300;
      color: @color-inverted;
    }
  }
  &__title {
    font-weight: @font-weight-bold;
    font-size: @size-125;
    color: @color-subtle;
  }
}
</style>
