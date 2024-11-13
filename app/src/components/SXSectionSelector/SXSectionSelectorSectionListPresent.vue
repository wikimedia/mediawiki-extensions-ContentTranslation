<script setup>
import { mwIconArrowForward } from "@/lib/mediawiki.ui/components/icons";
import { getAutonym, getDir } from "@wikimedia/language-data";
import { computed } from "vue";
import SxSectionSelectorSectionList from "@/components/SXSectionSelector/SXSectionSelectorSectionList.vue";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";

defineEmits(["select-section"]);

const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();

const targetLanguageAutonym = computed(() =>
  getAutonym(suggestion.value?.targetLanguage)
);
</script>

<template>
  <section class="sx-section-selector__present-sections py-2">
    <h4
      v-i18n:cx-sx-section-selector-present-sections-title="[
        targetLanguageAutonym,
      ]"
      class="sx-section-selector__list-title mb-0 pb-0 py-3 px-4"
    />
    <sx-section-selector-section-list
      :sections="suggestion?.orderedPresentSections || []"
      @select-section="$emit('select-section', $event)"
    >
      <template #default="{ sourceSection, targetSection }">
        <div class="sx-section-selector__present-section-button-content">
          <h5
            class="sx-section-selector__present-section-button-source"
            :lang="suggestion?.sourceLanguage"
            :dir="getDir(suggestion?.sourceLanguage)"
            v-text="sourceSection"
          />
          <h6
            class="sx-section-selector__present-section-button-target"
            :lang="suggestion?.targetLanguage"
            :dir="getDir(suggestion?.targetLanguage)"
            v-text="targetSection"
          />
        </div>
      </template>
    </sx-section-selector-section-list>
  </section>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.sx-section-selector__present-sections {
  background-color: @background-color-interactive-subtle;
  .sx-section-selector__present-section-button-content {
    text-align: start;
    .sx-section-selector__present-section-button-target {
      color: @color-subtle;
    }
  }
}
</style>
