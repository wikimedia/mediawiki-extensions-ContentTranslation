<template>
  <section class="px-4 pt-3 pb-2 sx-editor__original-sentence-panel">
    <mw-row class="ma-0">
      <mw-col grow>
        <h5
          v-i18n:cx-sx-editor-original-panel-label
          class="sx-editor__original-sentence-panel__header mb-2"
        />
        <div
          ref="originalContent"
          class="sx-editor__original-sentence-panel__content mb-5"
          :class="{
            'sx-editor__original-sentence-panel__content--collapsed': originalContentCollapsed
          }"
          v-html="originalContent"
        />
      </mw-col>
      <mw-col shrink class="ps-3">
        <mw-button
          type="icon"
          :icon="mwIconCollapse"
          :disabled="
            originalContentCollapsed && originalContentSegmentIndex === 0
          "
          class="sx-editor__original-sentence__pagination-control pa-0"
          @click="handleArrowUpClick"
        />
        <mw-button
          v-if="originalContentCollapsed"
          type="icon"
          :icon="mwIconExpand"
          class="sx-editor__original-sentence__pagination-control pa-0 mt-5"
          :disabled="isOriginalContentScrolledToEnd"
          @click="nextOriginalSentenceSegment"
        />
      </mw-col>
    </mw-row>
    <div ref="dragIndicator" class="sx-editor__drag-indicator">
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

export default {
  name: "SxEditorOriginalContent",
  components: { MwButton, MwCol, MwRow },
  props: {
    originalContent: {
      type: String,
      required: true
    }
  },
  data: () => ({
    mwIconCollapse,
    mwIconExpand,
    originalContentCollapsed: true,
    originalContentSegmentIndex: 0,
    originalContentScrollHeight: 0,
    originalContentLineHeight: 0,
    dragStartHeight: 0,
    dragStartY: 0,
    dragIndicatorClickDisabled: false,
    isDrawing: false
  }),
  computed: {
    originalContentLinesLength() {
      /**
       * When line height is a decimal (as in our case), browsers can round down
       * line-height value (like Chrome does). So it is safer to round the division
       * between original content scroll height and line height, to ensure
       * that we get a valid integer for lines length
       */
      return Math.round(
        this.originalContentScrollHeight / this.originalContentLineHeight
      );
    },
    isOriginalContentScrolledToEnd() {
      /** Each segment takes up to two lines **/
      const segmentsLength = Math.ceil(this.originalContentLinesLength / 2);

      return this.originalContentSegmentIndex === segmentsLength - 1;
    }
  },
  mounted() {
    /**
     * Wait for original content to be rendered so that original content
     * max scrollTop is calculated correctly
     */
    this.$nextTick(() => {
      this.originalContentScrollHeight = this.$refs.originalContent.scrollHeight;
      this.originalContentLineHeight = parseFloat(
        document.defaultView
          .getComputedStyle(this.$refs.originalContent, null)
          .getPropertyValue("line-height")
      );
    });
    this.$refs.dragIndicator.addEventListener(
      "pointerdown",
      this.initiateDrag,
      false
    );
  },
  methods: {
    onDragIndicatorClick() {
      if (this.dragIndicatorClickDisabled) {
        return;
      }
      this.toggleOriginalContent();
    },
    toggleOriginalContent() {
      this.$refs.originalContent.style.removeProperty("height");
      this.originalContentCollapsed = !this.originalContentCollapsed;

      /** Show first sentence sentence for collapsed content **/
      if (this.originalContentCollapsed) {
        this.originalContentSegmentIndex = 0;
        this.scrollOriginalSentence();
      }
    },
    /** Scroll to next sentence segment (two next lines) **/
    nextOriginalSentenceSegment() {
      this.originalContentSegmentIndex++;
      this.scrollOriginalSentence();
    },
    handleArrowUpClick() {
      if (!this.originalContentCollapsed) {
        this.toggleOriginalContent();

        return;
      }
      /** Scroll to previous sentence segment (two previous lines) **/
      this.originalContentSegmentIndex--;
      this.scrollOriginalSentence();
    },
    scrollOriginalSentence() {
      /** scroll by a segment, i.e. scroll by two lines **/
      const scrollTop =
        this.originalContentSegmentIndex * this.originalContentLineHeight * 2;
      this.$refs.originalContent.scroll(0, scrollTop);
    },
    initiateDrag(e) {
      this.dragIndicatorClickDisabled = false;
      this.dragStartY = e.clientY;

      this.dragStartHeight = parseInt(
        document.defaultView.getComputedStyle(this.$refs.originalContent)
          .height,
        10
      );

      document.documentElement.addEventListener(
        "pointermove",
        this.doDrag,
        false
      );
      document.documentElement.addEventListener(
        "pointerup",
        this.completeDrag,
        false
      );
    },
    doDrag(e) {
      this.dragIndicatorClickDisabled = true;
      this.originalContentCollapsed = false;
      this.$refs.originalContent.style.height =
        this.dragStartHeight + e.clientY - this.dragStartY + "px";
    },
    completeDrag() {
      document.documentElement.removeEventListener(
        "pointermove",
        this.doDrag,
        false
      );
      document.documentElement.removeEventListener(
        "pointerup",
        this.completeDrag,
        false
      );
    }
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
