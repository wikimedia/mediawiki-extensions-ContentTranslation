<template><div ref="subSectionRoot" v-html="content"/></template>

<script>
import SubSection from "@/wiki/cx/models/subSection";
import useSubSectionContent from "./useSubSectionContent";
import { onMounted, ref } from "@vue/composition-api";

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
        if (event.target.classList.contains("cx-segment")) {
          selectSentence(event.target.dataset.segmentid);
        }
      });
    });
    const store = context.root.$store;

    const selectSentence = segmentId => {
      const sentence = props.subSection.getSentenceById(segmentId);

      if (sentence.selected) {
        context.emit("bounce-translation");

        return;
      }
      store.dispatch("application/selectSentenceForCurrentSection", {
        id: segmentId
      });
    };

    return {
      content,
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
.sx-sentence-selector__section-sentence {
  cursor: pointer;

  &--untranslated {
    // TODO: Create color variable for base20
    color: @wmui-color-base20;
  }
  &--selected {
    &.sx-sentence-selector__section-sentence--translated {
      .highlight(@background-color-primary);
    }
    &.sx-sentence-selector__section-sentence--untranslated {
      .highlight(@wmui-color-yellow90);
    }
  }
}
</style>
