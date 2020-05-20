<template>
  <mw-dialog
    class="sx-selector"
    v-show="active"
    @close="onClose()"
    animation="slide-up"
    :fullscreen="true"
  >
    <template slot="header">
      <div class="row justify-end sx-selector__header">
        <div class="col-11">
          <h3
            class="sx-selector__header-text ma-0"
            v-i18n="'cx-sx-section-selector-title'"
          ></h3>
          <h2 class="sx-selector__title ma-0">{{ suggestion.sourceTitle }}</h2>
        </div>
        <div class="col-1 justify-end items-center">
          <mw-button
            class="pa-0"
            :large="true"
            type="icon"
            @click="onClose()"
            :icon="mwIconClose"
          />
        </div>
      </div>
    </template>
    <div class="sx-selector__body">
      <h3
        class="row justify-start ps-1"
        v-i18n="'cx-sx-section-selector-subtitle'"
      ></h3>
      <p
        class="row justify-start ps-1"
        v-i18n="'cx-sx-section-selector-desc'"
      ></p>
      <ul class="sx-selector__missing-sections-list ma-0">
        <li
          class="row"
          v-for="(sourceSection, key) in suggestion.missing"
          :key="key"
        >
          <mw-button
            class="col-12 justify-between"
            :indicator="mwIconArrowForward"
            :label="key"
            type="text"
            :outlined="false"
            :block="true"
          />
        </li>
      </ul>
    </div>
  </mw-dialog>
</template>

<script>
import MwDialog from "../lib/mediawiki.ui/components/MWDialog";
import MwButton from "../lib/mediawiki.ui/components/MWButton";
import {
  mwIconClose,
  mwIconArrowForward
} from "../lib/mediawiki.ui/components/icons";

export default {
  name: "sx-section-selector",
  components: { MwDialog, MwButton },
  data: () => ({
    mwIconClose,
    mwIconArrowForward
  }),
  props: {
    active: {
      type: Boolean,
      default: false
    },
    suggestion: {
      type: Object
    }
  },
  methods: {
    onClose() {
      this.$emit("close");
    },
    onSectionSelectorClick() {
      this.$emit("section-selector-button-click");
      this.$emit("section-listing-open");
    }
  }
};
</script>
<style lang="less">
@import "../lib/mediawiki.ui/variables/colors.less";

.sx-selector {
  .sx-selector__header {
    color: @colorGray1;
    border-bottom: 1px solid @colorGray12;
    .sx-selector__title {
      border: none;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}
</style>
