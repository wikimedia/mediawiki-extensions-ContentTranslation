<template>
  <div class="mw-ui-expandable-content" :style="cssVars">
    <div class="mw-ui-expandable-content__container">
      <div
        ref="contentRef"
        class="mw-ui-expandable-content__body"
        :class="{
          'mw-ui-expandable-content__body--collapsed': isCollapsed
        }"
      >
        <slot></slot>
      </div>
      <div v-if="scroll && scrollable" class="mw-ui-expandable-content__scroll">
        <mw-button
          type="icon"
          :icon="mwIconCollapse"
          :disabled="isCollapsed && scrollIndex === 0"
          class="mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up"
          @click="handleArrowUpClick"
        />
        <mw-button
          v-if="isCollapsed"
          type="icon"
          :icon="mwIconExpand"
          class="mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down"
          :disabled="isScrolledToEnd"
          @click="scrollToNextStep"
        />
      </div>
    </div>
    <div ref="dragIndicatorRef" class="mw-ui-expandable-content__drag-button">
      <span
        class="mw-ui-expandable-content__drag-button__icon"
        @click="onDragButtonClicked"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "@vue/composition-api";
import MwButton from "../MWButton";
import { mwIconCollapse, mwIconExpand } from "../icons";
import useDrag from "./useDrag";
import useScroll from "./useScroll";

export default {
  name: "MwExpandableContent",
  components: {
    MwButton
  },
  props: {
    /**
     * The height of the content panel when it is collapsed
     */
    minHeight: {
      type: Number,
      required: true
    },
    /**
     * Controls whether scroll functionality should be enabled
     */
    scroll: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props, context) {
    const isCollapsed = ref(true);
    const contentRef = ref(null);
    const contentMinHeight = computed(() =>
      Math.min(props.minHeight, contentMaxHeight.value)
    );
    const contentMaxHeight = ref(1);

    const { initiateDrag } = useDrag(
      contentMaxHeight,
      contentMinHeight,
      contentRef,
      isCollapsed
    );

    const {
      isScrolledToEnd,
      scrollable,
      scrollIndex,
      scrollToStepByIndex,
      handleArrowUpClick
    } = useScroll(contentMinHeight, contentMaxHeight, contentRef, isCollapsed);

    const scrollToNextStep = () => scrollToStepByIndex(scrollIndex.value + 1);
    const dragIndicatorRef = ref(null);

    const cssVars = computed(() => ({
      "--collapsed-height": contentMinHeight.value + "px"
    }));

    const onWindowResize = () => {
      const currentHeight = contentRef.value.style.height;
      contentRef.value.style.removeProperty("height");
      contentMaxHeight.value = contentRef.value.scrollHeight;

      if (currentHeight) {
        let limitedHeight = Math.min(currentHeight, contentMaxHeight.value);
        // The height of the original content panel should be greater than or
        // equal to its original height
        limitedHeight = Math.max(limitedHeight, contentMinHeight.value);

        if (limitedHeight === contentMinHeight.value) {
          isCollapsed.value = true;
        }

        contentRef.value.style.height = limitedHeight + "px";
      }
    };

    onMounted(async () => {
      await context.root.$nextTick;
      contentMaxHeight.value = contentRef.value.scrollHeight;
      dragIndicatorRef.value?.addEventListener(
        "pointerdown",
        initiateDrag,
        false
      );
      window.addEventListener("resize", onWindowResize);
    });

    const onDragButtonClicked = () => {
      if (!isCollapsed.value) {
        contentRef.value.style.removeProperty("height");
        scrollToStepByIndex(0);
      }
      isCollapsed.value = !isCollapsed.value;
    };

    return {
      contentRef,
      cssVars,
      dragIndicatorRef,
      handleArrowUpClick,
      isCollapsed,
      isScrolledToEnd,
      mwIconCollapse,
      mwIconExpand,
      onDragButtonClicked,
      scrollable,
      scrollIndex,
      scrollToNextStep
    };
  }
};
</script>

<style lang="less">
@import "../../variables/wikimedia-ui-base.less";

.mw-ui-expandable-content {
  &__container {
    display: flex;
    justify-content: flex-start;
  }
  &__body {
    flex: 1 0 0;

    margin-bottom: 12px;
    overflow: hidden;
    &--collapsed {
      max-height: var(--collapsed-height);
    }
  }
  &__scroll {
    flex: 0 1 0;
    margin-top: -4px;
    padding-inline-start: 12px;
    &-control {
      &.mw-ui-button {
        // Override min-height set for .mw-ui-button
        // in resources/src/mediawiki.less/mediawiki.ui/mixins.buttons.less
        // and resources/src/mediawiki.ui/components/buttons.less
        min-height: unset;
        padding: 0;
        border: none;
        &--disabled {
          color: @wmui-color-base50;
          &:hover {
            color: @wmui-color-base50;
          }
        }
      }
      &--down {
        margin-top: 12px;
      }
    }
  }

  &__drag-button {
    text-align: center;
    line-height: 0;
    touch-action: none;
    user-select: none;
    &__icon {
      &:after {
        content: " ";
        display: inline-block;
        border-bottom: @border-style-base 2px @color-accessory;
        border-top: @border-style-base 2px @color-accessory;
        border-radius: @border-radius-base;
        font-size: 4px;
        width: 28px;
        margin-right: 4px;
        cursor: grab;
      }
    }
  }
}
</style>
