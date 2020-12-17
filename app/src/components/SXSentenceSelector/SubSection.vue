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
        const highLightPostfixes = ["untranslated", "translated"];
        const selectedPrefix = `${sentenceClass}--selected`;
        segment.classList.remove(
          ...highLightPostfixes.map(postfix => `${selectedPrefix}-${postfix}`)
        );
        if (sentence.selected) {
          const highLightPostfix = sentence.isTranslated
            ? "translated"
            : "untranslated";
          segment.classList.add(`${selectedPrefix}-${highLightPostfix}`);
        }
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
  a {
    pointer-events: none;
  }
  cursor: pointer;
  // TODO: Fix this to be base20 (currently base30)
  color: @color-base--subtle;

  &--selected {
    &-translated {
      .highlight(@background-color-primary);
    }
    &-untranslated {
      .highlight(@wmui-color-yellow90);
    }
  }
}
</style>
