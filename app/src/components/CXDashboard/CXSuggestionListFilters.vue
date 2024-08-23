<script setup>
import { CdxInfoChip } from "@wikimedia/codex";
import { cdxIconHistory, cdxIconHeart } from "@wikimedia/codex-icons";
import { ref } from "vue";
import { useStore } from "vuex";
import { EDITS_SUGGESTION_PROVIDER } from "@/composables/useSuggestionsFetchByEdits";
import { POPULAR_SUGGESTION_PROVIDER } from "@/composables/useSuggestionFetchByMostPopular";

const store = useStore();

const chips = ref([
  {
    id: EDITS_SUGGESTION_PROVIDER,
    icon: cdxIconHistory,
    label: "Previous edits",
  },
  {
    id: POPULAR_SUGGESTION_PROVIDER,
    icon: cdxIconHeart,
    label: "Popular",
  },
]);

const isChipActive = (chip) =>
  chip.id === store.state.application.currentSuggestionProvider;

const selectChip = (selectedChip) => {
  store.commit("application/setCurrentSuggestionProvider", selectedChip.id);
};
</script>

<template>
  <div class="cx-suggestion-list__filters px-4 pb-2">
    <cdx-info-chip
      v-for="chip in chips"
      :key="chip.label"
      class="cx-suggestion-list__filter py-1 me-1"
      :class="{ 'cx-suggestion-list__filter--active': isChipActive(chip) }"
      :icon="chip.icon"
      @click="selectChip(chip)"
    >
      {{ chip.label }}
    </cdx-info-chip>
  </div>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-suggestion-list__filters {
  .cx-suggestion-list__filter {
    cursor: @cursor-base--hover;
    &--active {
      background-color: @background-color-progressive;
      .cdx-icon {
        color: @color-inverted;
      }
      .cdx-info-chip--text {
        color: @color-inverted;
      }
    }
  }
}
</style>
