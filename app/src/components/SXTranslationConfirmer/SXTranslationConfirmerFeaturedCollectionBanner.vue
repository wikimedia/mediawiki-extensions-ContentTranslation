<script setup>
import { computed } from "vue";
import { CdxIcon } from "@wikimedia/codex";
import { cdxIconUserGroup } from "@wikimedia/codex-icons";
import useFeaturedCollectionFilter from "@/composables/useFeaturedCollectionFilter";

const { featuredCollection } = useFeaturedCollectionFilter();

const featuredCollectionName = computed(() => featuredCollection.value?.name);
</script>

<template>
  <div
    class="cx-translation-confirmer-featured-collection-banner ma-4 px-4 py-3"
  >
    <div class="cx-translation-confirmer-featured-collection-banner__header">
      <cdx-icon
        :icon="cdxIconUserGroup"
        size="small"
        class="cx-translation-confirmer-featured-collection-banner__header-icon me-2"
      />
      <span
        class="cx-translation-confirmer-featured-collection-banner__header-text"
      >
        {{ $i18n("cx-featured-collection-confirmation-banner-title") }}
      </span>
    </div>
    <div class="cx-translation-confirmer-featured-collection-banner__body">
      <p>{{ featuredCollectionName }}</p>
    </div>
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-translation-confirmer-featured-collection-banner {
  background-color: @background-color-progressive-subtle;
  border-radius: @border-radius-base;

  &__header {
    &-icon.cdx-icon {
      color: @color-progressive;
    }
    &-text {
      color: @color-progressive;
      font-size: @font-size-small;
      font-weight: @font-weight-semi-bold;
    }
  }

  &__body {
    color: @color-subtle;
    font-size: @font-size-small;
    font-weight: @font-weight-normal;
  }
}
</style>
