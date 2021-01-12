<template>
  <mw-card class="experimental-support-banner mb-1">
    <mw-row>
      <mw-col shrink class="experimental-support-banner__icon me-3">
        <mw-icon :icon="mwIconLabFlask" />
      </mw-col>
      <mw-col>
        <h5 v-i18n:cx-dashboard-experimental-support-banner-title />
        <p
          v-i18n:cx-dashboard-experimental-support-banner-description
          class="complementary"
        />
        <p class="complementary mt-4">
          <a
            v-i18n:cx-dashboard-experimental-support-banner-learn-more-anchor
            target="_blank"
            :href="learnMoreUrl"
          />
        </p>
        <p class="complementary">
          <a
            v-i18n:cx-dashboard-experimental-support-banner-share-feedback-anchor
            target="_blank"
            :href="feedbackUrl"
          />
        </p>
      </mw-col>
    </mw-row>
  </mw-card>
</template>

<script>
import { MwCard, MwRow, MwCol, MwIcon } from "@/lib/mediawiki.ui";
import { mwIconLabFlask } from "@/lib/mediawiki.ui/components/icons";
export default {
  name: "ExperimentalSupportBanner",
  components: { MwCol, MwRow, MwCard, MwIcon },
  data: () => ({
    mwIconLabFlask,
    learnMoreUrl:
      "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl:
      "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.experimental-support-banner {
  &__icon {
    align-self: start;
  }
  a {
    font-weight: @font-weight-bold;
    color: @color-primary;
  }
}
</style>
