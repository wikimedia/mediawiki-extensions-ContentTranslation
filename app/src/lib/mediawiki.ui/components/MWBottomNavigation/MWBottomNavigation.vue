<template>
  <footer class="mw-ui-bottom-navigation row ma-0 justify-center">
    <div class="col-12 ma-0 pa-0">
      <slot>
        <mw-button-group
          class="mw-ui-bottom-navigation__button-group"
          :active="active"
          :items="items"
          @select="$emit('update:active', $event)"
        />
      </slot>
    </div>
  </footer>
</template>

<script>
import MwButtonGroup from "../MWButtonGroup";
export default {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup },
  props: {
    items: Array,
    id: String,
    active: String
  }
};
</script>

<style lang="less">
@import "../../variables/wikimedia-ui-base.less";

.mw-ui-bottom-navigation {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: @background-color-base;
  box-shadow: 2px -2px 2px rgba(0, 0, 0, 0.15);

  .mw-ui-bottom-navigation__button-group {
    .mw-ui-button {
      border: none;
      padding: 12px 0;
      .mw-ui-button__content {
        display: block;
        margin: 0;
      }
      .mw-ui-button__icon {
        display: block;
      }
      .mw-ui-button__label {
        padding: 0;
      }
    }
  }
}
</style>
