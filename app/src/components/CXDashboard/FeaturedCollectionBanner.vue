<script setup>
import { CdxIcon } from "@wikimedia/codex";
import { cdxIconUserGroup, cdxIconLinkExternal } from "@wikimedia/codex-icons";
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  communityName: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  learnMoreUrl: {
    type: String,
    default: "",
  },
});

const isExpanded = ref(false);
const descriptionRef = ref(null);
const windowWidth = ref(null);

const isTextClamped = computed(() => {
  if (!descriptionRef.value) return false;
  // Access windowWidth to make this reactive to resize
  windowWidth.value;

  return descriptionRef.value.scrollHeight > descriptionRef.value.clientHeight;
});

const toggleDescription = () => {
  isExpanded.value = !isExpanded.value;
};

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div class="cx-featured-collection-banner py-4 px-6">
    <div class="cx-featured-collection-banner__header mb-3">
      <cdx-icon
        :icon="cdxIconUserGroup"
        class="cx-featured-collection-banner__icon me-3 mt-1"
      />
      <div class="cx-featured-collection-banner__header-text">
        <h5 class="cx-featured-collection-banner__title mb-0">
          {{ $i18n("cx-featured-collection-banner-title") }}
        </h5>
        <span
          v-if="communityName"
          class="cx-featured-collection-banner__source mb-0"
        >
          {{ communityName }}
        </span>
      </div>
    </div>

    <div class="cx-featured-collection-banner__content">
      <div
        ref="descriptionRef"
        class="cx-featured-collection-banner__description"
        :class="{
          'cx-featured-collection-banner__description--expanded': isExpanded,
        }"
      >
        {{ description || $i18n("cx-featured-collection-banner-description") }}
        <button
          v-if="isExpanded"
          class="cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--inline"
          @click="toggleDescription"
        >
          {{ $i18n("cx-featured-collection-banner-toggle-less") }}
        </button>
      </div>
      <button
        v-if="!isExpanded && isTextClamped"
        class="cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--external mb-1 ml-1"
        @click="toggleDescription"
      >
        {{ $i18n("cx-featured-collection-banner-toggle-more") }}
      </button>
    </div>

    <div class="cx-featured-collection-banner__learn-more-container">
      <a
        v-if="(isExpanded || !isTextClamped) && learnMoreUrl"
        :href="learnMoreUrl"
        class="cx-featured-collection-banner__learn-more"
        target="_blank"
      >
        {{ $i18n("cx-featured-collection-banner-learn-more") }}
        <cdx-icon
          :icon="cdxIconLinkExternal"
          size="small"
          class="cx-featured-collection-banner__learn-more-icon"
        />
      </a>
    </div>
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-featured-collection-banner {
  background-color: @background-color-interactive-subtle;
  border-bottom: @border-color-subtle @border-width-base @border-style-base;
  border-radius: @border-radius-base;

  &__header {
    display: flex;
    align-items: flex-start;
  }

  &__icon {
    color: @color-subtle;
    flex-shrink: 0;
    width: @size-icon-medium;
  }

  &__header-text {
    flex: 1;
  }

  &__title {
    font-size: @font-size-medium;
    font-weight: @font-weight-bold;
    color: @color-base;
    line-height: @line-height-medium;
  }

  &__source {
    font-size: @font-size-small;
    color: @color-subtle;
    line-height: @line-height-small;
  }

  &__content {
    margin-left: calc(@size-icon-medium + @spacing-75);
  }

  &__description {
    font-size: @font-size-medium;
    color: @color-base;
    line-height: @line-height-medium;
    margin-bottom: 0;

    &:not(&--expanded) {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &__toggle {
    color: @color-progressive;
    font-size: @font-size-medium;
    font-weight: @font-weight-bold;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;

    &:hover {
      color: @color-progressive--hover;
    }

    &:active {
      color: @color-progressive--active;
    }

    // When inline (expanded state)
    &--inline {
      display: inline;
      margin-left: @spacing-25;
    }
  }

  &__learn-more-container {
    margin-left: calc(@size-icon-medium + @spacing-75);
    margin-top: @spacing-75;
  }

  &__learn-more {
    font-size: @font-size-small;
    font-weight: @font-weight-bold;
    color: @color-progressive;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: @spacing-12;

    &:hover {
      color: @color-progressive--hover;
      text-decoration: underline;

      .cx-featured-collection-banner__learn-more-icon {
        color: @color-progressive--hover;
      }
    }

    &:active {
      color: @color-progressive--active;

      .cx-featured-collection-banner__learn-more-icon {
        color: @color-progressive--active;
      }
    }
  }

  &__learn-more-icon {
    width: @size-icon-x-small;
    height: @size-icon-x-small;
    flex-shrink: 0;
    color: @color-progressive;
    opacity: 0.85;
  }

  // Only apply flex when text is clamped and not expanded
  &__content:has(&__toggle--external) {
    display: flex;
    align-items: flex-end;
  }
}
</style>
