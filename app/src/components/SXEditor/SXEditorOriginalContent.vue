<template>
  <section class="px-4 pt-3 pb-2 sx-editor__original-sentence-panel">
    <mw-row class="ma-0">
      <mw-col grow>
        <h5
          v-i18n:cx-sx-editor-original-panel-label
          class="sx-editor__original-sentence-panel__header mb-2"
        />
        <!-- eslint-disable vue/no-v-html -->
        <div
          ref="originalContentRef"
          class="sx-editor__original-sentence-panel__content mb-5"
          :lang="language"
          :dir="dir"
          :class="{
            'sx-editor__original-sentence-panel__content--collapsed': isOriginalContentCollapsed
          }"
          v-html="originalContent"
        />
        <!-- eslint-enable vue/no-v-html -->
      </mw-col>
      <mw-col shrink class="ps-3">
        <mw-button
          type="icon"
          :icon="mwIconCollapse"
          :disabled="
            isOriginalContentCollapsed && originalContentSegmentIndex === 0
          "
          class="sx-editor__original-sentence__pagination-control pa-0"
          @click="handleArrowUpClick"
        />
        <mw-button
          v-if="isOriginalContentCollapsed"
          type="icon"
          :icon="mwIconExpand"
          class="sx-editor__original-sentence__pagination-control pa-0 mt-5"
          :disabled="isOriginalContentScrolledToEnd"
          @click="scrollToNextSegment"
        />
      </mw-col>
    </mw-row>
    <div ref="dragIndicatorRef" class="sx-editor__drag-indicator">
      <span
        class="sx-editor__drag-indicator__icon"
        @click="onDragIndicatorClick"
      />
    </div>
  </section>
</template>

<script>
import { MwButton, MwCol, MwRow } from "@/lib/mediawiki.ui";
import {
  mwIconCollapse,
  mwIconExpand
} from "@/lib/mediawiki.ui/components/icons";
import { computed, onMounted, ref } from "@vue/composition-api";

export default {
  name: "SxEditorOriginalContent",
  components: { MwButton, MwCol, MwRow },
  props: {
    originalContent: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    dir: {
      type: String,
      required: true
    }
  },
  setup(props, context) {
    const originalContentRef = ref(null);
    const dragIndicatorRef = ref(null);

    // style property of HTML elements is not reactive,
    // so we have to use a ref instead of a computed
    // property, and manually update its value
    const isOriginalContentCollapsed = ref(true);
    const originalContentSegmentIndex = ref(0);
    const originalContentMinHeight = ref(0);
    const originalContentMaxHeight = ref(0);
    const originalContentLineHeight = ref(0);
    const dragStartHeight = ref(0);
    const dragStartY = ref(0);
    const dragIndicatorClickDisabled = ref(false);

    const originalContentLinesLength = computed(() => {
      /**
       * When line height is a decimal (as in our case), browsers can round down
       * line-height value (like Chrome does). So it is safer to round the division
       * between original content scroll height and line height, to ensure
       * that we get a valid integer for lines length
       */
      return Math.round(
        originalContentMaxHeight.value / originalContentLineHeight.value
      );
    });

    const isOriginalContentScrolledToEnd = computed(() => {
      /** Each segment takes up to two lines **/
      const segmentsLength = Math.ceil(originalContentLinesLength.value / 2);

      return originalContentSegmentIndex.value === segmentsLength - 1;
    });

    onMounted(async () => {
      await context.root.$nextTick;
      /**
       * Wait for original content to be rendered so that original content
       * max scrollTop is calculated correctly
       */
      originalContentMinHeight.value = originalContentRef.value.clientHeight;
      originalContentMaxHeight.value = originalContentRef.value.scrollHeight;
      originalContentLineHeight.value = parseFloat(
        document.defaultView
          .getComputedStyle(originalContentRef.value, null)
          .getPropertyValue("line-height")
      );

      dragIndicatorRef.value.addEventListener(
        "pointerdown",
        initiateDrag,
        false
      );
    });

    const onDragIndicatorClick = () => {
      if (dragIndicatorClickDisabled.value) {
        return;
      }
      collapseOriginalContent();
    };

    const collapseOriginalContent = () => {
      originalContentRef.value.style.removeProperty("height");
      isOriginalContentCollapsed.value = !isOriginalContentCollapsed.value;

      /** Show first sentence for collapsed content **/
      if (isOriginalContentCollapsed.value) {
        originalContentSegmentIndex.value = 0;
        scrollOriginalSentence();
      }
    };

    const scrollOriginalSentence = () => {
      /** scroll by a segment, i.e. scroll by two lines **/
      const scrollTop =
        originalContentSegmentIndex.value * originalContentLineHeight.value * 2;
      originalContentRef.value.scroll(0, scrollTop);
    };

    /** Scroll to next sentence segment (two next lines) **/
    const scrollToNextSegment = () => {
      originalContentSegmentIndex.value++;
      scrollOriginalSentence();
    };

    const handleArrowUpClick = () => {
      if (!isOriginalContentCollapsed.value) {
        collapseOriginalContent();

        return;
      }
      /** Scroll to previous sentence segment (two previous lines) **/
      originalContentSegmentIndex.value--;
      scrollOriginalSentence();
    };

    const initiateDrag = e => {
      dragIndicatorClickDisabled.value = false;
      dragStartY.value = e.clientY;

      dragStartHeight.value = parseInt(
        document.defaultView.getComputedStyle(originalContentRef.value).height,
        10
      );

      document.documentElement.addEventListener("pointermove", doDrag, false);
      document.documentElement.addEventListener(
        "pointerup",
        completeDrag,
        false
      );
    };

    const doDrag = e => {
      dragIndicatorClickDisabled.value = true;
      isOriginalContentCollapsed.value = false;

      originalContentRef.value.style.height =
        dragStartHeight.value + e.clientY - dragStartY.value + "px";
    };

    const completeDrag = () => {
      document.documentElement.removeEventListener(
        "pointermove",
        doDrag,
        false
      );
      document.documentElement.removeEventListener(
        "pointerup",
        completeDrag,
        false
      );
    };

    return {
      dragIndicatorRef,
      handleArrowUpClick,
      isOriginalContentCollapsed,
      isOriginalContentScrolledToEnd,
      mwIconCollapse,
      mwIconExpand,
      scrollToNextSegment,
      onDragIndicatorClick,
      originalContentRef,
      originalContentSegmentIndex
    };
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-editor__original-sentence-panel {
  background-color: @background-color-notice--framed;
  .sx-editor__original-sentence-panel__header {
    // TODO: Define color variable for base20
    color: @wmui-color-base20;
    font-size: 0.875rem;
  }
  .sx-editor__original-sentence-panel__content {
    // font-size: 1rem, line-height: 1.6. We need at least two visible
    // lines, so min height should be 2*1.6*1
    min-height: 3.2rem;
    overflow: hidden;
    //display: inline-block;
    &--collapsed {
      height: 3.2rem;
    }
  }
  .sx-editor__original-sentence__pagination-control {
    border: none;
    &.mw-ui-button--disabled {
      // TODO: Define text color variable for base50
      color: @wmui-color-base50;
    }
  }
  .sx-editor__drag-indicator {
    text-align: center;
    line-height: 0;
    touch-action: none;
    user-select: none;
    &__icon {
      &:after {
        content: " ";
        display: inline-block;
        border-bottom: @border-style-base 2px @wmui-color-base20;
        border-top: @border-style-base 2px @wmui-color-base20;
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
