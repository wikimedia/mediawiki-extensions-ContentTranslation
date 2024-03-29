<script setup>
import { MwRow, MwCol } from "@/lib/mediawiki.ui";
import { getAutonym, getDir } from "@wikimedia/language-data";
import SxSectionSelectorSectionList from "./SXSectionSelectorSectionList.vue";
import sadRobotSVG from "../../assets/sad-robot.svg?raw";
import { computed } from "vue";
import { CdxButton } from "@wikimedia/codex";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";

const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();

defineEmits(["select-section", "close"]);

const targetLanguageAutonym = computed(() =>
  getAutonym(suggestion.value?.targetLanguage)
);
const noMissingSectionExists = computed(
  () => Object.keys(suggestion.value?.missingSections || {}).length === 0
);
</script>

<template>
  <section class="sx-section-selector__missing-sections py-2">
    <h4
      v-i18n:cx-sx-section-selector-missing-sections-title="[
        targetLanguageAutonym,
      ]"
      class="sx-section-selector__list-title mb-0 pb-0 py-3 px-4"
    />
    <sx-section-selector-section-list
      v-if="!noMissingSectionExists"
      :sections="suggestion.orderedMissingSections"
      @select-section="$emit('select-section', $event)"
    >
      <template #default="{ sourceSection }">
        <h5
          class="ma-0"
          :lang="suggestion?.sourceLanguage"
          :dir="getDir(suggestion?.sourceLanguage)"
          v-text="sourceSection"
        />
      </template>
    </sx-section-selector-section-list>
    <mw-row
      v-else
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
        <cdx-button
          weight="quiet"
          action="progressive"
          class="px-0"
          @click="$emit('close')"
        >
          {{
            $i18n("cx-sx-section-selector-pick-other-translation-button-label")
          }}
        </cdx-button>
      </mw-col>
    </mw-row>
  </section>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-section-selector__empty-missing-sections {
  &-details {
    h6 {
      color: @color-subtle;
      font-weight: @font-weight-bold;
    }
  }
}
</style>
