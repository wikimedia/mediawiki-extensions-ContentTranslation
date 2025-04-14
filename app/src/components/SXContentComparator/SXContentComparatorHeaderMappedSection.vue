<script setup>
import { MwButton, MwCol, MwRow } from "@/lib/mediawiki.ui";
import { getAutonym } from "@wikimedia/language-data";
import { mwIconTrash, mwIconUndo } from "@/lib/mediawiki.ui/components/icons";
import { computed } from "vue";
import useExistingSectionPublishOption from "@/composables/useExistingSectionPublishOption";
import { useI18n } from "vue-banana-i18n";
import useCompareContents from "@/components/SXContentComparator/useCompareContents";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";

const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();
const { activeSectionTargetTitle: targetSectionTitle } = useCompareContents();

const bananaI18n = useI18n();

const { existingSectionPublishOption, setExistingSectionPublishOption } =
  useExistingSectionPublishOption();

const shouldBePublishedAsNew = computed(
  () => existingSectionPublishOption.value === "new"
);

const mappedSectionHeaderText = computed(() =>
  bananaI18n.i18n(
    "cx-sx-content-comparator-mapped-section-header-title",
    getAutonym(suggestion.value.targetLanguage)
  )
);
</script>

<template>
  <div class="sx-content-comparator-header__mapped-section">
    <mw-row
      class="sx-content-comparator-header__mapped-section-header pa-2 ma-0"
    >
      <mw-col grow>
        <h6
          class="sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1"
        >
          {{ mappedSectionHeaderText }}
          <span
            v-if="shouldBePublishedAsNew"
            v-i18n:cx-sx-content-comparator-discarded-section-label
          />
        </h6>
        <h6
          class="sx-content-comparator-header__mapped-section-target-title pa-0 ms-1"
          :class="{
            'sx-content-comparator-header__mapped-section-target-title--discarded':
              shouldBePublishedAsNew,
          }"
        >
          {{ targetSectionTitle }}
        </h6>
      </mw-col>
      <mw-col shrink>
        <mw-button
          v-if="!shouldBePublishedAsNew"
          class="pa-0"
          :icon="mwIconTrash"
          type="icon"
          @click="setExistingSectionPublishOption('new')"
        />
        <mw-button
          v-else
          class="pa-0"
          :icon="mwIconUndo"
          type="icon"
          @click="setExistingSectionPublishOption('expand')"
        />
      </mw-col>
    </mw-row>
    <p
      v-if="!shouldBePublishedAsNew"
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

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-content-comparator {
  .sx-content-comparator-header__mapped-section {
    background-color: @background-color-disabled-subtle;
    border-radius: @border-radius-base;
    .sx-content-comparator-header__mapped-section-header {
      border-bottom: @border-width-base @border-style-base
        @border-color-disabled;
      .sx-content-comparator-header__mapped-section-header-title {
        font-size: @font-size-small;
        font-weight: @font-weight-bold;
        color: @color-subtle;
      }
      .sx-content-comparator-header__mapped-section-target-title {
        font-weight: @font-weight-bold;
        color: @color-base;
        &.sx-content-comparator-header__mapped-section-target-title--discarded {
          text-decoration: line-through;
        }
      }
    }
    .sx-content-comparator-header__mapped-section-clarifications {
      font-size: @font-size-small;
      color: @color-base;
      line-height: @line-height-xx-small;
    }
  }
}
</style>
