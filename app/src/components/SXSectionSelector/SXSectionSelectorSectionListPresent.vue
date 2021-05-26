<template>
  <section class="sx-section-selector__present-sections py-2">
    <h4
      v-i18n:cx-sx-section-selector-present-sections-title="[
        targetLanguageAutonym
      ]"
      class="sx-section-selector__list-title mb-0 pb-0 py-3 px-4"
    />
    <sx-section-selector-section-list
      :sections="suggestion.presentSections"
      v-on="$listeners"
    >
      <template #default="{ sourceSection, targetSection }">
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
      </template>
    </sx-section-selector-section-list>
  </section>
</template>

<script>
import { mwIconArrowForward } from "@/lib/mediawiki.ui/components/icons";
import { getAutonym } from "@wikimedia/language-data";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import SxSectionSelectorSectionList from "@/components/SXSectionSelector/SXSectionSelectorSectionList";

export default {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList
  },
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
      return getAutonym(this.suggestion.targetLanguage);
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
