<template>
  <!--eslint-disable vue/no-v-html -->
  <span
    class="sx-sentence-selector__section-sentence py-1 me-1"
    :class="sentenceClass"
    @click="selectSentence"
    v-html="sentence.content"
  />
  <!--eslint-enable vue/no-v-html -->
</template>

<script>
import SectionSentence from "@/wiki/cx/models/sectionSentence";
import { computed } from "@vue/composition-api";

export default {
  name: "SxSentenceSelectorSentence",
  props: {
    sentence: {
      type: SectionSentence,
      required: true
    }
  },
  setup(props, context) {
    const sentenceClass = computed(() => {
      if (props.sentence.isTranslated) {
        return "sx-sentence-selector__section-sentence--translated";
      } else if (props.sentence.selected) {
        return "sx-sentence-selector__section-sentence--selected";
      } else {
        return "";
      }
    });

    const selectSentence = () => {
      context.emit("sentence-selected", props.sentence);
    };

    return { selectSentence, sentenceClass };
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
@padding: 4px;

.sx-sentence-selector__section-sentence {
  cursor: pointer;
  // TODO: Fix this to be base20 (currently base30)
  color: @color-base--subtle;

  &--selected {
    box-decoration-break: clone;
    color: @color-base;
    background-color: @wmui-color-yellow90;
    box-shadow: @padding 0 0 @wmui-color-yellow90,
      -@padding 0 0 @wmui-color-yellow90;
  }
  &--translated {
    box-decoration-break: clone;
    color: @color-base;
    background-color: @background-color-primary;
    box-shadow: @padding 0 0 @background-color-primary,
      -@padding 0 0 @background-color-primary;
  }
}
</style>
