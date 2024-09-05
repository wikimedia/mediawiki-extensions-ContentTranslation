<script setup>
import CxTranslationList from "./CXTranslationList.vue";
import CxSuggestionList from "./CXSuggestionList.vue";
import CxFavoriteList from "./CXFavoriteList.vue";
import CxHelpPanel from "./CXHelpPanel.vue";
import CxStatsPanel from "./CXStatsPanel.vue";
import { computed } from "vue";
import {
  MwButtonGroup,
  MwBottomNavigation,
  MwRow,
  MwCol,
} from "@/lib/mediawiki.ui";
import ExperimentalSupportBanner from "./ExperimentalSupportBanner.vue";
import useDashboardInitialization from "./useDashboardInitialization";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import useActiveTabInitialize from "./useActiveTabInitialize";
import useDashboardListOptions from "./useDashboardListOptions";
import { CdxButton, CdxIcon } from "@wikimedia/codex";
import { cdxIconAdd } from "@wikimedia/codex-icons";

const router = useRouter();

const searchTranslation = () => router.push({ name: "sx-article-search" });

const initializeDashboard = useDashboardInitialization();
initializeDashboard();

const store = useStore();
store.dispatch("translator/fetchTranslatorStats");
const translatorStats = computed(() => store.state.translator.translatorStats);

const activeTab = useActiveTabInitialize();
const listSelector = useDashboardListOptions();
</script>

<template>
  <div>
    <experimental-support-banner
      v-if="$incompleteVersion"
      class="col-mobile-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2 mb-4"
    />
    <mw-row class="ma-0 py-4">
      <cdx-button
        id="dashboard-search-translation-button"
        action="progressive"
        weight="primary"
        size="large"
        class="col-offset-desktop-2 col-offset-tablet-3"
        @click="searchTranslation"
      >
        <cdx-icon class="me-1" :icon="cdxIconAdd" />
        {{ $i18n("cx-create-new-translation") }}
      </cdx-button>
    </mw-row>
    <mw-row class="ma-0" align="start">
      <mw-col
        v-if="$mwui.breakpoint.tabletAndUp"
        class="px-0"
        tablet="3"
        desktop="2"
      >
        <mw-button-group
          id="dashboard-list-selector--desktop"
          :items="listSelector"
          :active="activeTab"
          @select="activeTab = $event"
        />
      </mw-col>
      <mw-col
        class="cx-dashboard__main-panel px-0"
        cols="12"
        tablet="9"
        desktop="7"
      >
        <cx-favorite-list />
        <cx-suggestion-list :active="activeTab === 'suggestions'" />
        <cx-translation-list
          translation-status="draft"
          :active-status="activeTab"
        />
        <cx-translation-list
          translation-status="published"
          :active-status="activeTab"
        />
      </mw-col>
      <mw-col
        class="ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0"
        cols="12"
        tablet="9"
        desktop="3"
      >
        <mw-row class="ma-0" align="start">
          <mw-col
            cols="12"
            tablet="6"
            desktop="12"
            class="px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
          >
            <cx-stats-panel :stats="translatorStats" />
          </mw-col>
          <mw-col
            cols="12"
            tablet="6"
            desktop="12"
            class="px-0 ps-tablet-2 ps-desktop-0"
          >
            <cx-help-panel />
          </mw-col>
        </mw-row>
      </mw-col>
    </mw-row>
    <mw-bottom-navigation
      v-if="$mwui.breakpoint.mobile"
      v-model:active="activeTab"
      :items="listSelector"
    />
  </div>
</template>

<style lang="less">
@import "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

#dashboard-list-selector--desktop {
  background-color: transparent;
  display: block;
  .mw-ui-button {
    display: block;
    float: none;
    border: none;
    color: @color-base;
    font-weight: @font-weight-normal;
    padding: 8px;
    border-radius: 16px;
    margin-bottom: 8px;

    &--selected {
      background-color: @background-color-interactive-subtle;
      color: @color-progressive;
    }
  }
}
</style>
