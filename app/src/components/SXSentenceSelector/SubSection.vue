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

<script>
import SubSection from "@/wiki/cx/models/subSection";
import useSubSectionContent from "./useSubSectionContent";
import { onMounted, ref, computed } from "@vue/composition-api";

export default {
  name: "SubSection",
  props: {
    subSection: {
      type: SubSection,
      required: true
    }
  },
  setup(props, context) {
    const subSectionRoot = ref(null);
    const content = useSubSectionContent(props.subSection);

    onMounted(() => {
      subSectionRoot.value.addEventListener("click", event => {
        let translationUnit;

        if (props.subSection.isBlockTemplate) {
          translationUnit = props.subSection;
        } else if (event.target.classList.contains("cx-segment")) {
          translationUnit = props.subSection.getSentenceById(
            event.target.dataset.segmentid
          );
        }
        selectContentTranslationUnit(translationUnit);
      });
    });
    const store = context.root.$store;

    /**
     * @param {SubSection|SectionSentence} translationUnit
     */
    const selectContentTranslationUnit = translationUnit => {
      if (translationUnit.selected) {
        context.emit("bounce-translation");

        return;
      }
      store.dispatch(
        "application/selectTranslationUnitById",
        translationUnit.id
      );
    };

    const rootClasses = computed(() => ({
      "sx-sentence-selector__subsection--block-selected":
        props.subSection.selected
    }));

    return {
      content,
      rootClasses,
      subSectionRoot
    };
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
@padding: 4px;
.highlight(@color) {
  box-decoration-break: clone;
  color: @color-base;
  background-color: @color;
  box-shadow: @padding 0 0 @color, -@padding 0 0 @color;
}
.sx-sentence-selector__subsection {
  &--block-selected&--block-selected&--block-selected {
    .highlight(@background-color-warning--framed);
    .infobox {
      .highlight(@background-color-warning--framed);
    }
  }
  .sx-sentence-selector__section-sentence {
    cursor: pointer;
    &--untranslated {
      color: @color-accessory;
    }
    &--selected {
      &.sx-sentence-selector__section-sentence--translated {
        .highlight(@background-color-primary);
      }
      &.sx-sentence-selector__section-sentence--untranslated {
        .highlight(@background-color-warning--framed);
      }
    }
  }
}
</style>
