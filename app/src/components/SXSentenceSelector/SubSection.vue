<script setup>
import SubSection from "@/wiki/cx/models/subSection";
import useSubSectionContent from "./useSubSectionContent";
import { onMounted, ref, computed } from "vue";
import useTranslationUnitSelect from "./useTranslationUnitSelect";

const props = defineProps({
  subSection: {
    type: SubSection,
    required: true,
  },
});

const emit = defineEmits(["bounce-translation"]);

const subSectionRoot = ref(null);
const content = useSubSectionContent(props.subSection);

onMounted(() => {
  subSectionRoot.value.addEventListener("click", (event) => {
    let translationUnit;

    if (props.subSection.isBlockTemplate) {
      translationUnit = props.subSection;
    } else {
      // search among all ancestors of the event target to find the sentence element
      const sentenceEl = event
        .composedPath()
        .find(
          (target) =>
            target instanceof Element && target.classList.contains("cx-segment")
        );

      if (!sentenceEl) {
        return;
      }

      translationUnit = props.subSection.getSentenceById(
        sentenceEl.dataset.segmentid
      );
    }
    selectContentTranslationUnit(translationUnit);
  });
});

const { selectTranslationUnitById } = useTranslationUnitSelect();

/**
 * @param {SubSection|SectionSentence} translationUnit
 */
const selectContentTranslationUnit = (translationUnit) => {
  if (translationUnit.selected) {
    emit("bounce-translation");

    return;
  }
  selectTranslationUnitById(translationUnit.id);
};

const rootClasses = computed(() => ({
  "sx-sentence-selector__subsection--block-selected": props.subSection.selected,
}));
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    ref="subSectionRoot"
    class="sx-sentence-selector__subsection"
    :class="rootClasses"
    v-html="content"
  />
  <!--eslint-enable vue/no-v-html -->
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
@padding: 4px;
.highlight(@color) {
  box-decoration-break: clone;
  color: @color-base;
  background-color: @color;
  box-shadow: @padding 0 0 @color, -@padding 0 0 @color;
}
.sx-sentence-selector__subsection {
  &--block-selected&--block-selected&--block-selected {
    .highlight(@background-color-warning-subtle);
    .infobox {
      .highlight(@background-color-warning-subtle);
    }
  }
  .sx-sentence-selector__section-sentence {
    cursor: pointer;
    &--untranslated {
      color: @color-subtle;
    }
    &--selected {
      &.sx-sentence-selector__section-sentence--translated {
        .highlight(@background-color-progressive-subtle);
      }
      &.sx-sentence-selector__section-sentence--untranslated {
        .highlight(@background-color-warning-subtle);
      }
    }
  }
}
</style>
