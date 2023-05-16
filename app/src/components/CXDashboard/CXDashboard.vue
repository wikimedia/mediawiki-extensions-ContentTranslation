<template>
  <div>
    <experimental-support-banner
      v-if="$incompleteVersion"
      class="col-mobile-12 col-tablet-12 col-desktop-7 col-offset-desktop-1 mb-4"
    />
    <mw-row class="ma-0">
      <mw-button
        progressive
        :icon="mwIconAdd"
        :label="$i18n('cx-create-new-translation')"
        class="col-desktop-3 col-offset-desktop-1 col-mobile-12 my-4"
        @click="searchTranslation"
      />
    </mw-row>
    <mw-row class="ma-0" align="start">
      <mw-col
        class="cx-dashboard__main-panel col-offset-desktop-1 px-0"
        cols="12"
        desktop="7"
      >
        <!--    TODO: Check if we need to adjust the breakpoint to tabletAndDown as this is the breakpoint that is used to determine if -->
        <!--    application should be fullscreen (and thus in mobile mode). We can even create a new "isMobile" computed property inside-->
        <!--    breakpoint.js-->
        <nav v-if="$mwui.breakpoint.tabletAndUp">
          <mw-button-group
            :items="listSelector"
            :active="active"
            class="justify-around"
            @select="active = $event"
          />
        </nav>
        <cx-favorite-list />
        <cx-suggestion-list :active="active === 'suggestions'" />
        <cx-translation-list
          translation-status="draft"
          :active="active === 'draft'"
        />
        <cx-translation-list
          translation-status="published"
          :active="active === 'published'"
        />
      </mw-col>
      <mw-col
        class="ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0"
        cols="12"
        desktop="4"
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
      v-model:active="active"
      :items="listSelector"
    />
  </div>
</template>

<script>
import CxTranslationList from "./CXTranslationList.vue";
import CxSuggestionList from "./CXSuggestionList.vue";
import CxFavoriteList from "./CXFavoriteList.vue";
import CxHelpPanel from "./CXHelpPanel.vue";
import CxStatsPanel from "./CXStatsPanel.vue";
import { ref, watch, computed, onMounted } from "vue";
import {
  MwButtonGroup,
  MwBottomNavigation,
  MwButton,
  MwRow,
  MwCol,
} from "@/lib/mediawiki.ui";
import {
  mwIconAdd,
  mwIconArticleCheck,
  mwIconLightBulb,
  mwIconEdit,
} from "@/lib/mediawiki.ui/components/icons";
import ExperimentalSupportBanner from "./ExperimentalSupportBanner.vue";
import useDashboardInitialization from "./useDashboardInitialization";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";

export default {
  name: "CxDashboard",
  components: {
    CxHelpPanel,
    MwCol,
    CxFavoriteList,
    CxStatsPanel,
    CxSuggestionList,
    CxTranslationList,
    ExperimentalSupportBanner,
    MwBottomNavigation,
    MwButton,
    MwButtonGroup,
    MwRow,
  },
  setup() {
    const active = ref("suggestions");
    const bananaI18n = useI18n();
    const listSelector = computed(() => [
      {
        value: "suggestions",
        props: {
          label: bananaI18n.i18n(
            "cx-translation-filter-suggested-translations"
          ),
          icon: mwIconLightBulb,
          type: "text",
        },
      },
      {
        value: "draft",
        props: {
          label: bananaI18n.i18n("cx-translation-filter-draft-translations"),
          icon: mwIconEdit,
          type: "text",
        },
      },
      // Temporarily remove the published option, until the list is properly supported
      // {
      //   value: "published",
      //   props: {
      //     label: bananaI18n.i18n(
      //       "cx-translation-filter-published-translations"
      //     ),
      //     icon: mwIconArticleCheck,
      //     type: "text",
      //   },
      // },
    ]);
    onMounted(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const isSectionTranslation = urlParams.get("sx");

      if (isSectionTranslation) {
        active.value = "suggestions";
      }
    });

    const router = useRouter();

    const searchTranslation = () => router.push({ name: "sx-article-search" });

    watch(active, () => window.scrollTo(0, 0));
    const initializeDashboard = useDashboardInitialization();
    initializeDashboard();

    const store = useStore();
    store.dispatch("translator/fetchTranslatorStats");
    const translatorStats = computed(
      () => store.state.translator.translatorStats
    );

    return {
      active,
      listSelector,
      mwIconAdd,
      mwIconArticleCheck,
      mwIconLightBulb,
      mwIconEdit,
      searchTranslation,
      translatorStats,
    };
  },
};
</script>
