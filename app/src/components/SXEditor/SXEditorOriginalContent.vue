<template>
  <section class="px-4 pt-3 pb-2 sx-editor__original-content-panel">
    <h5
      v-i18n:cx-sx-editor-original-panel-label
      class="sx-editor__original-content-panel__header mb-2"
    />
    <mw-expandable-content :min-height="twoLinesHeight" scroll>
      <!-- eslint-disable vue/no-v-html -->
      <div
        ref="originalContentRef"
        class="sx-editor__original-content-panel__body"
        :lang="language"
        :dir="dir"
        v-html="originalContent"
      />
      <!--eslint-enable vue/no-v-html -->
    </mw-expandable-content>
  </section>
</template>

<script>
import { MwExpandableContent } from "@/lib/mediawiki.ui";
import { ref, onMounted } from "vue";
import { siteMapper } from "@/utils/mediawikiHelper";

/**
 * Make all links open in new tabs and fix href to point to the
 * source wiki
 * @param {Element} containerEl
 */
function fixLinkTargets(containerEl, language) {
  const links = containerEl.getElementsByTagName("a");

  for (const link of links) {
    link.href = siteMapper.getPageUrl(language, link.title);
    link.target = "_blank";
  }
}

export default {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent },
  props: {
    originalContent: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    dir: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const originalContentRef = ref(null);
    const twoLinesHeight = ref(0);
    const getLineHeight = () =>
      parseFloat(
        document.defaultView
          .getComputedStyle(originalContentRef.value, null)
          .getPropertyValue("line-height")
      );

    onMounted(() => {
      twoLinesHeight.value = 2 * getLineHeight();
      fixLinkTargets(originalContentRef.value, props.language);
    });

    return {
      originalContentRef,
      twoLinesHeight,
    };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-editor__original-content-panel {
  background-color: @background-color-notice-subtle;
  &__header {
    color: @color-subtle;
    font-size: 0.875rem;
  }
}
</style>
