<template>
  <main class="cx-translation-list-container">
    <nav class="d-xs-only-none d-sm-only-none">
      <mw-button-group
        :items="listSelector"
        :active="active"
        v-on:select="active = $event"
      />
    </nav>
    <mw-card
      class="translation-list published"
      v-show="active === 'published'"
      :title="$i18n('cx-translation-label-published')"
    >
    </mw-card>
    <mw-card
      class="translation-list draft"
      v-show="active === 'draft'"
      :title="$i18n('cx-translation-label-draft')"
    >
    </mw-card>
    <mw-card
      class="translation-list suggestions"
      v-show="active === 'suggestions'"
      :title="$i18n('cx-suggestionlist-title')"
    >
    </mw-card>
    <mw-bottom-navigation class="d-xs-only-flex d-sm-only-flex d-none">
      <mw-button-group
        :items="listSelector"
        :active="active"
        v-on:select="active = $event"
    /></mw-bottom-navigation>
  </main>
</template>

<script>
import MwCard from "../lib/mediawiki.ui/components/MWCard";
import MwButtonGroup from "../lib/mediawiki.ui/components/MWButtonGroup";

import MwBottomNavigation from "../lib/mediawiki.ui/components/MWBottomNavigation";
import {
  mwIconArticleCheck,
  mwIconLightBulb,
  mwIconEdit
} from "../lib/mediawiki.ui//components/icons";

export default {
  name: "cx-translation-list",
  components: {
    MwCard,
    MwButtonGroup,
    MwBottomNavigation
  },
  data: () => ({
    mwIconArticleCheck,
    mwIconLightBulb,
    mwIconEdit,
    active: "suggestions"
  }),
  computed: {
    listSelector() {
      return [
        {
          value: "suggestions",
          props: {
            label: this.$i18n("cx-translation-filter-suggested-translations"),
            icon: mwIconLightBulb
          }
        },
        {
          value: "draft",
          props: {
            label: this.$i18n("cx-translation-filter-draft-translations"),
            icon: mwIconEdit
          }
        },
        {
          value: "published",
          props: {
            label: this.$i18n("cx-translation-filter-published-translations"),
            icon: mwIconArticleCheck
          }
        }
      ];
    }
  }
};
</script>
