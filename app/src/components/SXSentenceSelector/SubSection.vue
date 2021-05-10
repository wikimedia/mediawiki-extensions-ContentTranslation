<template><div ref="subSectionRoot" v-html="content"/></template>

<script>
import SubSection from "@/wiki/cx/models/subSection";
const sentenceClass = "sx-sentence-selector__section-sentence";
export default {
  name: "SubSection",
  props: {
    subSection: {
      type: SubSection,
      required: true
    }
  },
  computed: {
    content() {
      const cloneNode = this.subSection.node.cloneNode(true);
      const segments = Array.from(
        cloneNode.getElementsByClassName("cx-segment")
      );

      segments.forEach(segment => {
        const sentence = this.subSection.getSentenceById(
          segment.dataset.segmentid
        );
        segment.classList.add(sentenceClass, "py-1", "me-1");
        const sentenceClasses = ["untranslated", "translated", "selected"].map(
          postfix => `${sentenceClass}--${postfix}`
        );
        segment.classList.remove(...sentenceClasses);

        if (sentence.selected) {
          segment.classList.add(`${sentenceClass}--selected`);
        }

        const highLightPostfix = sentence.isTranslated
          ? "translated"
          : "untranslated";
        segment.classList.add(`${sentenceClass}--${highLightPostfix}`);
        segment.innerHTML = sentence.content;
      });

      return cloneNode.innerHTML;
    }
  },
  mounted() {
    this.$refs.subSectionRoot.addEventListener("click", event => {
      if (event.target.classList.contains("cx-segment")) {
        this.selectSentence(event.target.dataset.segmentid);
      }
    });
  },
  methods: {
    selectSentence(segmentId) {
      const sentence = this.subSection.getSentenceById(segmentId);

      if (sentence.selected) {
        this.$emit("bounce-translation");

        return;
      }
      this.$store.dispatch("application/selectSentenceForCurrentSection", {
        id: segmentId
      });
    }
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
