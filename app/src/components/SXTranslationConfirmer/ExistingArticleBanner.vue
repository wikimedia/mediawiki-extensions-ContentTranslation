<template>
  <section v-if="!!sectionSuggestion.missingSectionsCount" class="mt-1">
    <mw-row
      class="sx-translation-confirmer__translation-status ma-0 pb-2"
      justify="between"
    >
      <mw-col
        v-i18n:cx-sx-existing-translation-status="[targetLanguageAutonym]"
        tag="h5"
        class="ma-0 pe-2"
      />
      <mw-col shrink>
        <a :href="targetArticlePath">
          <mw-icon
            :icon="mwIconLinkExternal"
            size="16"
            :icon-color="$mwui.colors.base30"
          />
        </a>
      </mw-col>
    </mw-row>
    <mw-row class="ma-0">
      <mw-col>
        <span
          v-i18n:cx-sx-existing-translation-additional-info="[
            `&quot;${firstMissingSection}&quot;`,
            sectionSuggestion.missingSectionsCount - 1
          ]"
        />
      </mw-col>
    </mw-row>
  </section>
</template>

<script>
import { MwCol, MwRow, MwIcon } from "@/lib/mediawiki.ui";
import { mapState } from "vuex";
import { getAutonym } from "@wikimedia/language-data";
import { siteMapper } from "@/utils/mediawikiHelper";
import { mwIconLinkExternal } from "@/lib/mediawiki.ui/components/icons";

export default {
  name: "ExistingArticleBanner",
  components: { MwRow, MwCol, MwIcon },
  data: () => ({
    mwIconLinkExternal
  }),
  computed: {
    ...mapState({
      sectionSuggestion: state => state.application.currentSectionSuggestion
    }),
    targetArticlePath: vm =>
      siteMapper.getPageUrl(
        vm.sectionSuggestion.targetLanguage || "",
        vm.sectionSuggestion.targetTitle || ""
      ),
    targetLanguageAutonym: vm =>
      getAutonym(vm.sectionSuggestion.targetLanguage),
    firstMissingSection: vm =>
      Object.keys(vm.sectionSuggestion.missingSections)[0]
  }
};
</script>
