<template>
  <div>
    <experimental-support-banner v-if="$incompleteVersion" class="mb-4" />
    <mw-row class="ma-0">
      <mw-button
        progressive
        :icon="mwIconAdd"
        :label="$i18n('cx-create-new-translation')"
        class="col-md-4 col-xs-12 col-lg-3 mb-4 mt-4"
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
      :items="listSelector"
      :active.sync="active"
    />
  </div>
</template>

<script>
import CxTranslationList from "./CXTranslationList";
import CxSuggestionList from "./CXSuggestionList";
import { ref, watch, computed, onMounted } from "@vue/composition-api";
import {
  MwButtonGroup,
  MwBottomNavigation,
  MwButton,
  MwRow
} from "@/lib/mediawiki.ui";
import {
  mwIconAdd,
  mwIconArticleCheck,
  mwIconLightBulb,
  mwIconEdit
} from "@/lib/mediawiki.ui/components/icons";
import ExperimentalSupportBanner from "./ExperimentalSupportBanner";

export default {
  name: "CxDashboard",
  components: {
    MwRow,
    ExperimentalSupportBanner,
    CxSuggestionList,
    CxTranslationList,
    MwButtonGroup,
    MwBottomNavigation,
    MwButton
  },
  setup(props, context) {
    const active = ref("suggestions");

    const listSelector = computed(() => [
      {
        value: "suggestions",
        props: {
          label: context.root.$i18n(
            "cx-translation-filter-suggested-translations"
          ),
          icon: mwIconLightBulb,
          type: "text"
        }
      },
      {
        value: "draft",
        props: {
          label: context.root.$i18n("cx-translation-filter-draft-translations"),
          icon: mwIconEdit,
          type: "text"
        }
      },
      {
        value: "published",
        props: {
          label: context.root.$i18n(
            "cx-translation-filter-published-translations"
          ),
          icon: mwIconArticleCheck,
          type: "text"
        }
      }
    ]);
    onMounted(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const isSectionTranslation = urlParams.get("sx");

      if (isSectionTranslation) {
        active.value = "suggestions";
      }

      context.root.$logEvent({
        event_type: "dashboard_open",
        event_source: "direct",
        content_translation_session_position: 0
      });
    });

    const searchTranslation = () =>
      context.root.$router.push({ name: "sx-article-search" });

    watch(active, () => window.scrollTo(0, 0));

    context.root.$store.dispatch("application/initializeDashboardContext");

    return {
      mwIconAdd,
      mwIconArticleCheck,
      mwIconLightBulb,
      mwIconEdit,
      searchTranslation,
      listSelector,
      active
    };
  }
};
</script>
