<template>
  <section class="sx-section-selector__missing-sections py-2">
    <h4
      v-i18n:cx-sx-section-selector-missing-sections-title="[
        targetLanguageAutonym,
      ]"
      class="sx-section-selector__list-title mb-0 pb-0 py-3 px-4"
    />
    <sx-section-selector-section-list
      v-if="!emptySections"
      :sections="suggestion.orderedMissingSections"
      @select-section="$emit('select-section', $event)"
    >
      <template #default="{ sourceSection }">
        <h5
          class="ma-0"
          :lang="suggestion.sourceLanguage"
          :dir="getDir(suggestion.sourceLanguage)"
          v-text="sourceSection"
        />
      </template>
    </sx-section-selector-section-list>
    <mw-row
      v-if="emptySections"
      class="sx-section-selector__empty-missing-sections px-4 my-0"
    >
      <!--eslint-disable vue/no-v-html -->
      <mw-col class="py-6 justify-center" v-html="sadRobotSVG" />
      <!--eslint-enable vue/no-v-html -->
      <mw-col
        cols="12"
        class="sx-section-selector__empty-missing-sections-details pa-0"
      >
        <h6 v-i18n:cx-sx-section-selector-empty-missing-sections-title />
      </mw-col>
      <mw-col
        cols="12"
        class="sx-section-selector__empty-missing-sections-details pa-0 mb-2"
      >
        <p v-i18n:cx-sx-section-selector-empty-missing-sections-desc />
      </mw-col>
      <mw-col cols="12" class="pa-0 mb-2">
        <mw-button
          v-i18n:cx-sx-section-selector-pick-other-translation-button-label
          class="sx-section-selector__empty-missing-sections__close-button px-0"
          type="text"
          @click="$emit('close')"
        />
      </mw-col>
    </mw-row>
  </section>
</template>

<script>
import { MwButton, MwRow, MwCol } from "@/lib/mediawiki.ui";
import { getAutonym, getDir } from "@wikimedia/language-data";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import SxSectionSelectorSectionList from "./SXSectionSelectorSectionList";
import sadRobotSVG from "../../assets/sad-robot.svg?raw";
import { computed } from "vue";

export default {
  name: "SxSectionSelectorSectionListMissing",
  components: {
    SxSectionSelectorSectionList,
    MwRow,
    MwCol,
    MwButton,
  },
  props: {
    suggestion: {
      type: SectionSuggestion,
      required: true,
    },
  },
  emits: ["select-section", "close"],
  setup(props) {
    const targetLanguageAutonym = computed(() =>
      getAutonym(props.suggestion.targetLanguage)
    );
    const emptySections = computed(
      () => Object.keys(props.suggestion.missingSections).length === 0
    );

    return {
      sadRobotSVG,
      getAutonym,
      getDir,
      targetLanguageAutonym,
      emptySections,
    };
  },
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-section-selector__empty-missing-sections-details {
  h6 {
    /*Fix this to be base20*/
    color: @color-base--subtle;
  }
}

.sx-section-selector__empty-missing-sections__close-button {
  color: @color-primary;
}
</style>
