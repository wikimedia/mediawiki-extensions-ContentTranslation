<script setup>
import MwButtonGroup from "@/lib/mediawiki.ui/components/MWButtonGroup";
import useDashboardTabSelectInstrument from "./useDashboardTabSelectInstrument";

const props = defineProps({
  /**
   * Array of objects that are options for building a button.
   * Example: { value: "ButtonLabel", props: { button props}}
   **/
  items: {
    type: Array,
    default: () => [],
  },
  /**
   * Value of the button that should be active
   **/
  active: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["update:active"]);

const logDashboardTabSelectEvent = useDashboardTabSelectInstrument();

const onSelect = (event) => {
  logDashboardTabSelectEvent(event);
  emit("update:active", event);
};
</script>

<template>
  <footer class="mw-ui-bottom-navigation row ma-0 justify-center">
    <div class="col-12 ma-0 pa-0">
      <!-- @slot Default bottom navigation content -->
      <slot>
        <mw-button-group
          class="mw-ui-bottom-navigation__button-group justify-around"
          :active="active"
          :items="items"
          @select="onSelect"
        />
      </slot>
    </div>
  </footer>
</template>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.mw-ui-bottom-navigation {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: @background-color-base;
  box-shadow: 2px -2px 2px rgba(0, 0, 0, 0.15);
  z-index: 1;

  .mw-ui-bottom-navigation__button-group {
    .mw-ui-button {
      border: none;
      padding: 12px 0;
      color: @color-subtle;
      &--selected {
        color: @color-progressive;
      }
      .mw-ui-button__content {
        display: block;
        margin: 0;
        font-size: 14px;
        font-weight: normal;
      }
      .mw-ui-button__icon {
        display: flex;
        margin-bottom: 4px;
        padding: 0;
      }
      .mw-ui-button__label {
        padding: 0;
      }
    }
  }
}
</style>
