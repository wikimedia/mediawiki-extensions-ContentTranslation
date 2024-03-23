<template>
  <mw-row
    ref="contentHeader"
    class="sx-content-comparator__content-header ma-0 pt-1"
    direction="column"
    align="stretch"
    :class="{ sticky: isSticky }"
    :reverse="isSticky"
  >
    <sx-content-comparator-source-vs-target-selector
      :is-mapped-section="isMappedSection"
      :selection="sourceVsTargetSelection"
      @update:selection="updateSelection"
    />
    <mw-row
      justify="between"
      class="sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
    >
      <mw-col>
        <h3
          :lang="activeContent.lang"
          :dir="activeContent.dir"
          class="ma-0 pa-0"
          v-text="activeContent.title"
        />
      </mw-col>
      <mw-col shrink>
        <mw-button
          v-if="isSticky"
          :icon="mwIconEdit"
          progressive
          :label="
            $i18n(
              'cx-sx-content-comparator-content-header-translate-button-label'
            )
          "
          @click="$emit('translation-button-clicked')"
        />
        <mw-button
          v-else
          class="sx-content-comparator__open-content-link-button pa-0 pe-2"
          :icon="mwIconLinkExternal"
          type="icon"
          :href="activeContent.path"
          target="_blank"
        />
      </mw-col>
    </mw-row>
  </mw-row>
</template>

<script>
import { MwRow, MwCol, MwButton } from "@/lib/mediawiki.ui";
import { siteMapper } from "@/utils/mediawikiHelper";

import {
  mwIconEdit,
  mwIconLinkExternal,
} from "@/lib/mediawiki.ui/components/icons";
import SxContentComparatorSourceVsTargetSelector from "./SourceVsTargetSelector.vue";
import useCompareContents from "./useCompareContents";
import { getDir } from "@wikimedia/language-data";
import { ref, computed, onMounted } from "vue";
import useURLHandler from "@/composables/useURLHandler";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";

export default {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector,
    MwRow,
    MwCol,
    MwButton,
  },
  props: {
    sourceVsTargetSelection: {
      type: String,
      required: true,
    },
    isMappedSection: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:sourceVsTargetSelection", "translation-button-clicked"],
  setup(props, context) {
    const isSticky = ref(false);
    const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();

    const { sectionURLParameter } = useURLHandler();
    const sourceSectionAnchor = computed(() =>
      (sectionURLParameter.value || "").replace(/ /g, "_")
    );

    const updateSelection = (selection) =>
      context.emit("update:sourceVsTargetSelection", selection);

    const { activeSectionTargetTitle, targetSectionAnchor } =
      useCompareContents();

    const activeContent = computed(() => {
      switch (props.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: sectionURLParameter.value,
            path: `${siteMapper.getPageUrl(
              suggestion.value.sourceLanguage,
              suggestion.value.sourceTitle
            )}#${sourceSectionAnchor.value}`,
            lang: suggestion.value.sourceLanguage,
            dir: getDir(suggestion.value.sourceLanguage),
          };
        case "target_article":
          return {
            title: suggestion.value.targetTitle,
            path: targetArticlePath.value,
            lang: suggestion.value.targetLanguage,
            dir: getDir(suggestion.value.targetLanguage),
          };
        default:
          return {
            title: activeSectionTargetTitle.value,
            path: `${targetArticlePath.value}#${targetSectionAnchor.value}`,
          };
      }
    });

    const targetArticlePath = computed(() =>
      siteMapper.getPageUrl(
        suggestion.value.targetLanguage,
        suggestion.value.targetTitle
      )
    );

    const contentHeader = ref(null);

    onMounted(() => {
      /**
       * Only watch for vertical intersection, as horizontal
       * intersection is happening when component is being mounted
       * due to router transitions, inserting UI glitches.
       */
      const observer = new IntersectionObserver(
        ([e]) => {
          isSticky.value =
            e.intersectionRect.height < e.boundingClientRect.height;
        },
        { threshold: [1] }
      );

      observer.observe(contentHeader.value.$el);
    });

    return {
      activeContent,
      contentHeader,
      isSticky,
      mwIconLinkExternal,
      mwIconEdit,
      updateSelection,
    };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-content-comparator__content-header {
  z-index: 1;
  &-title {
    // No border style defined in specifications
    border-bottom: @border-style-base @border-width-base @border-color-disabled;
    .mw-ui-button.sx-content-comparator__open-content-link-button {
      color: #72777d;
      pointer-events: auto;
    }
  }
  &.sticky {
    position: sticky;
    top: -4px;
    background-color: @background-color-base;
    box-shadow: @box-shadow-drop-small;
    .sx-content-comparator__content-header-title {
      border-bottom: none;
    }
  }
}
</style>
