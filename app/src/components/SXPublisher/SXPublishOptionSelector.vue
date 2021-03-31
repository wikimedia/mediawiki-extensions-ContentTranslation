<template>
  <mw-dialog
    :value="active"
    class="sx-publisher__publish-options"
    :title="$i18n('cx-sx-publisher-preview-options-title')"
    :overlay-opacity="0.7"
    :overlay-color="overlayColor"
    @input="$emit('update:active', $event)"
    @close="onPublishOptionsClose"
  >
    <template #header>
      <div class="mw-ui-dialog__header">
        <div class="row ma-0 pa-4">
          <div class="col shrink justify-center">
            <mw-button
              class="pa-0"
              type="icon"
              :icon="mwIconArrowPrevious"
              @click="onPublishOptionsClose"
            />
          </div>
          <div
            class="col grow items-center mw-ui-dialog__header-title justify-start ps-2"
          >
            <h4 v-i18n:cx-sx-publisher-preview-options-title class="mb-0" />
          </div>
        </div>
        <mw-divider />
      </div>
    </template>
    <div class="pa-4">
      <mw-radio-group
        :value="selectedOption"
        name="publish-options"
        @input="updateOption"
      >
        <template v-for="option in publishOptions">
          <mw-radio
            :key="`${option.label}-label`"
            class="pa-0 my-1"
            :label="option.label"
            :input-value="option.value"
            :disabled="option.disabled"
          />
          <p
            :key="`${option.label}-details`"
            class="complementary ms-7 mt-0 mb-4"
            :class="optionMarginBottom"
            v-text="option.details"
          />
        </template>
      </mw-radio-group>
    </div>
  </mw-dialog>
</template>

<script>
import { mwIconArrowPrevious } from "@/lib/mediawiki.ui/components/icons";
import {
  MwButton,
  MwDialog,
  MwDivider,
  MwRadio,
  MwRadioGroup
} from "@/lib/mediawiki.ui";
import { mapState } from "vuex";

export default {
  name: "SxPublishOptionSelector",
  components: {
    MwButton,
    MwRadioGroup,
    MwRadio,
    MwDivider,
    MwDialog
  },
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    mwIconArrowPrevious
  }),
  computed: {
    ...mapState({
      selectedOption: state => state.application.publishTarget,
      isAnon: state => state.translator.isAnon
    }),
    publishOptions: vm => [
      {
        label: vm.$i18n("cx-sx-publisher-new-section-option-label"),
        details: vm.$i18n("cx-sx-publisher-new-section-option-details"),
        value: "NEW_SECTION",
        disabled: false
      },
      {
        label: vm.$i18n("cx-sx-publisher-sandbox-option-label"),
        details: vm.$i18n("cx-sx-publisher-sandbox-option-details"),
        value: "SANDBOX_SECTION",
        disabled: vm.isAnon
      }
    ],
    overlayColor: vm => vm.$mwui.colors.base10
  },
  methods: {
    optionMarginBottom(index) {
      const isLastOption = index === this.publishOptions.length - 1;

      return isLastOption ? "mb-1" : "mb-4";
    },
    onPublishOptionsClose() {
      this.$emit("update:active", false);
    },
    updateOption(option) {
      this.$store.commit("application/setPublishTarget", option);
      this.onPublishOptionsClose();
    }
  }
};
</script>

<style lang="less">
@import "@/lib/mediawiki.ui/variables/wikimedia-ui-base.less";
.sx-publisher {
  &__publish-options {
    .mw-ui-dialog__shell {
      max-width: 100%;
      width: 100%;
      margin: 1rem;
    }
    .mw-ui-dialog__header {
      h4 {
        color: @color-base;
      }
      // Set divider width to 1px
      .mw-ui-divider {
        border-bottom: none;
      }
    }
    .mw-ui-radio-group {
      .mw-ui-radio {
        label {
          padding-bottom: 0;
          font-weight: 700;
          line-height: 1.25rem;
        }
      }
    }
  }
}
</style>
