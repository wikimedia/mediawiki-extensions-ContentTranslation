<template>
  <section class="sx-section-selector__present-sections py-2">
    <h4
      v-i18n:cx-sx-section-selector-present-sections-title="[
        targetLanguageAutonym
      ]"
      class="sx-section-selector__list-title mb-0 pb-0 py-3 px-4"
    />
    <ul class="sx-section-selector__present-sections-list ma-0 pa-0">
      <mw-row
        v-for="(targetSection, sourceSection) in suggestion.presentSections"
        :key="sourceSection"
        tag="li"
        class="ma-0"
        @click="$emit('select-section', sourceSection)"
      >
        <mw-button
          class="col justify-between items-center py-3 px-4"
          :indicator="mwIconArrowForward"
          type="text"
          :outlined="false"
        >
          <div class="sx-section-selector__present-section-button-content">
            <h5
              class="sx-section-selector__present-section-button-source"
              v-text="sourceSection"
            />
            <h6
              class="sx-section-selector__present-section-button-target"
              v-text="targetSection"
            />
          </div>
        </mw-button>
      </mw-row>
    </ul>
  </section>
</template>

<script>
import { MwButton, MwRow } from "@/lib/mediawiki.ui";
import { mwIconArrowForward } from "@/lib/mediawiki.ui/components/icons";
import autonymMixin from "@/mixins/autonym";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

export default {
  name: "SxSectionSelectorPresentSections",
  components: {
    MwRow,
    MwButton
  },
  mixins: [autonymMixin],
  props: {
    suggestion: {
      type: SectionSuggestion,
      required: true
    }
  },
  data: () => ({
    mwIconArrowForward
  }),
  computed: {
    targetLanguageAutonym() {
      return this.getAutonym(this.suggestion.targetLanguage);
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";

.sx-section-selector__present-sections {
  background-color: @background-color-framed;
  .sx-section-selector__present-section-button-content {
    text-align: start;
    .sx-section-selector__present-section-button-target {
      // TODO: Fix this to be @base20 color - currently base30
      color: @color-base--subtle;
    }
  }
}
</style>
