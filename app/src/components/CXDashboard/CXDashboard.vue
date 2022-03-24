<template>
  <div>
    <experimental-support-banner v-if="$incompleteVersion" class="mb-4" />
    <mw-row class="ma-0">
      <mw-button
        progressive
        :icon="mwIconAdd"
        :label="$i18n('cx-create-new-translation')"
        class="col-md-4 col-xs-12 col-lg-3 my-4"
        @click="searchTranslation"
      />
    </mw-row>
    <!--    TODO: Check if we need to adjust the breakpoint to mdAndDown as this is the breakpoint that is used to determine if -->
    <!--    application should be fullscreen (and thus in mobile mode). We can even create a new "isMobile" computed property inside-->
    <!--    breakpoint.js-->
    <nav v-if="!$incompleteVersion && $mwui.breakpoint.mdAndUp">
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
      v-if="!$incompleteVersion"
      translation-status="published"
      :active="active === 'published'"
    />
    <cx-translation-list
      v-if="!$incompleteVersion"
      translation-status="draft"
      :active="active === 'draft'"
    />
    <mw-bottom-navigation
      v-if="!$incompleteVersion && $mwui.breakpoint.smAndDown"
      v-model:active="active"
      :items="listSelector"
    />
  </div>
</template>

<script>
import CxTranslationList from "./CXTranslationList";
import CxSuggestionList from "./CXSuggestionList";
import CxFavoriteList from "./CXFavoriteList";
import { ref, watch, computed, onMounted } from "vue";
import {
  MwButtonGroup,
  MwBottomNavigation,
  MwButton,
  MwRow,
} from "@/lib/mediawiki.ui";
import {
  mwIconAdd,
  mwIconArticleCheck,
  mwIconLightBulb,
  mwIconEdit,
} from "@/lib/mediawiki.ui/components/icons";
import ExperimentalSupportBanner from "./ExperimentalSupportBanner";
import initializeDashboard from "./useDashboardInitialization";
import { useEventLogging } from "@/plugins/eventlogging";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useI18n } from "vue-banana-i18n";

export default {
  name: "CxDashboard",
  components: {
    CxFavoriteList,
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
      {
        value: "published",
        props: {
          label: bananaI18n.i18n(
            "cx-translation-filter-published-translations"
          ),
          icon: mwIconArticleCheck,
          type: "text",
        },
      },
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
    const store = useStore();
    initializeDashboard(router, store, useEventLogging());

    return {
      active,
      listSelector,
      mwIconAdd,
      mwIconArticleCheck,
      mwIconLightBulb,
      mwIconEdit,
      searchTranslation,
    };
  },
};
</script>
