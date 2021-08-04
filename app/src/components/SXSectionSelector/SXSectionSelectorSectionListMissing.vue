<template>
  <section class="sx-section-selector__missing-sections py-2">
    <h4
      v-i18n:cx-sx-section-selector-missing-sections-title="[
        targetLanguageAutonym
      ]"
      class="sx-section-selector__list-title mb-0 pb-0 py-3 px-4"
    />
    <sx-section-selector-section-list
      v-if="!emptySections"
      :sections="suggestion.missingSections"
      v-on="$listeners"
    >
      <template #default="{ sourceSection }">
        <h5 class="ma-0" v-text="sourceSection" />
      </template>
    </sx-section-selector-section-list>
    <mw-row
      v-if="emptySections"
      class="sx-section-selector__empty-missing-sections px-4 my-0"
    >
      <mw-col class="py-6 justify-center" v-html="sadRobotSVG" />
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
import { getAutonym } from "@wikimedia/language-data";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import SxSectionSelectorSectionList from "./SXSectionSelectorSectionList";

export default {
  name: "SxSectionSelectorSectionListMissing",
  components: {
    SxSectionSelectorSectionList,
    MwRow,
    MwCol,
    MwButton
  },
  props: {
    suggestion: {
      type: SectionSuggestion,
      required: true
    }
  },
  data: () => ({
    sadRobotSVG: require("!html-loader!@/assets/sad-robot.svg")
  }),
  computed: {
    targetLanguageAutonym() {
      return getAutonym(this.suggestion.targetLanguage);
    },
    emptySections() {
      return Object.keys(this.suggestion.missingSections).length === 0;
    }
  }
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
