<template>
  <div class="sx-content-comparator-header__mapped-section">
    <mw-row
      class="sx-content-comparator-header__mapped-section-header pa-2 ma-0"
    >
      <mw-col grow>
        <h6
          class="sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1"
        >
          {{ mappedSectionHeaderTitle }}
          <span
            v-if="isDiscardedSection"
            v-i18n:cx-sx-content-comparator-discarded-section-label
          />
        </h6>
        <h6
          class="sx-content-comparator-header__mapped-section-target-title pa-0 ms-1"
          :class="{
            'sx-content-comparator-header__mapped-section-target-title--discarded': isDiscardedSection
          }"
        >
          {{ targetSectionTitle }}
        </h6>
      </mw-col>
      <mw-col shrink>
        <mw-button
          v-if="!isDiscardedSection"
          class="pa-0"
          :icon="mwIconTrash"
          type="icon"
          @click="discardMapping"
        />
        <mw-button
          v-else
          class="pa-0"
          :icon="mwIconUndo"
          type="icon"
          @click="undoDiscard"
        />
      </mw-col>
    </mw-row>
    <p
      v-if="!isDiscardedSection"
      v-i18n:cx-sx-content-comparator-mapped-section-clarifications
      class="sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
    />
    <p
      v-else
      v-i18n:cx-sx-content-comparator-discarded-section-clarifications
      class="sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
    />
  </div>
</template>

<script>
import { MwButton, MwCol, MwRow } from "@/lib/mediawiki.ui";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import { getAutonym } from "@wikimedia/language-data";
import { mwIconTrash, mwIconUndo } from "@/lib/mediawiki.ui/components/icons";

export default {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow,
    MwCol,
    MwButton
  },
  props: {
    suggestion: {
      type: SectionSuggestion,
      required: true
    },
    targetSectionTitle: {
      type: String,
      required: true
    },
    discardedSections: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    mwIconTrash,
    mwIconUndo
  }),
  computed: {
    isDiscardedSection() {
      return this.discardedSections.includes(this.targetSectionTitle);
    },
    mappedSectionHeaderTitle() {
      return this.$i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        getAutonym(this.suggestion.targetLanguage)
      );
    }
  },
  methods: {
    discardMapping() {
      if (!this.isDiscardedSection) {
        this.$emit("update:discardedSections", [
          ...this.discardedSections,
          this.targetSectionTitle
        ]);
      }
    },
    undoDiscard() {
      if (this.isDiscardedSection) {
        this.$emit(
          "update:discardedSections",
          this.discardedSections.filter(
            sectionTitle => sectionTitle !== this.targetSectionTitle
          )
        );
      }
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-content-comparator-header__mapped-section {
  background-color: @background-color-base--disabled;
  border-radius: @border-radius-base;
  .sx-content-comparator-header__mapped-section-header {
    border-bottom: @border-width-base @border-style-base
      @border-color-base--disabled;
    .sx-content-comparator-header__mapped-section-header-title {
      // No typography style for this font-size in UI library
      font-size: 14px;
      // TODO: Fix this to be base20
      color: @color-base--subtle;
    }
    .sx-content-comparator-header__mapped-section-target-title {
      color: @color-base;
      &.sx-content-comparator-header__mapped-section-target-title--discarded {
        text-decoration: line-through;
      }
    }
  }
  .sx-content-comparator-header__mapped-section-clarifications {
    color: @color-base;
    line-height: 1.3;
  }
}
</style>
