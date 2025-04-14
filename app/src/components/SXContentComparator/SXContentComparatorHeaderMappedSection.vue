<script setup>
import { MwButton, MwCol, MwRow } from "@/lib/mediawiki.ui";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import { getAutonym } from "@wikimedia/language-data";
import { mwIconTrash, mwIconUndo } from "@/lib/mediawiki.ui/components/icons";
import { computed } from "vue";
import useExistingSectionPublishOption from "@/composables/useExistingSectionPublishOption";
import { useI18n } from "vue-banana-i18n";

const bananaI18n = useI18n();

const props = defineProps({
  suggestion: {
    type: SectionSuggestion,
    required: true,
  },
  targetSectionTitle: {
    type: String,
    required: true,
  },
});

const { existingSectionPublishOption, setExistingSectionPublishOption } =
  useExistingSectionPublishOption();

const shouldBePublishedAsNew = computed(
  () => existingSectionPublishOption.value === "new"
);

const mappedSectionHeaderTitle = computed(() =>
  bananaI18n.i18n(
    "cx-sx-content-comparator-mapped-section-header-title",
    getAutonym(props.suggestion.targetLanguage)
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
          {{ mappedSectionHeaderTitle }}
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

.sx-content-comparator-header__mapped-section {
  background-color: @background-color-disabled-subtle;
  border-radius: @border-radius-base;
  .sx-content-comparator-header__mapped-section-header {
    border-bottom: @border-width-base @border-style-base @border-color-disabled;
    .sx-content-comparator-header__mapped-section-header-title {
      // No typography style for this font-size in UI library
      font-size: 14px;
      color: @color-subtle;
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
