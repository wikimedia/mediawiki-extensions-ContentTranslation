<template>
  <div class="row mw-ui-button-group ma-0 pa-0">
    <mw-button
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      :aria-selected="isActive(item)"
      v-bind="item.props"
      class="ma-0"
      :class="buttonClasses(item)"
      :style="activeIndicatorStyle(item)"
      @click.stop="$emit('select', item.value)"
    />
  </div>
</template>

<script>
import MwButton from "../MWButton";

export default {
  name: "MwButtonGroup",
  components: {
    MwButton
  },
  props: {
    /**
     * Array of objects that are options for building a button.
     * Example: { value: "ButtonLabel", props: { button props}}
     **/
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Value of the button that should be active
     **/
    active: {
      type: String,
      default: null
    },
    activeIndicatorColor: {
      type: String,
      required: false,
      default: "#202122"
    }
  },
  methods: {
    isActive(item) {
      return this.active === item.value;
    },
    activeIndicatorStyle(item) {
      return this.isActive(item)
        ? { "border-bottom-color": this.activeIndicatorColor }
        : {};
    },
    buttonClasses(item) {
      return {
        "mw-ui-button--selected": this.isActive(item),
        [item.props.class || ""]: true
      };
    }
  }
};
</script>

<style lang="less">
@import "../../variables/wikimedia-ui-base.less";

.mw-ui-button-group {
  background-color: white;
  min-height: 56px;
  .mw-ui-button {
    &:hover,
    &:focus {
      color: inherit;
      border-left-color: transparent;
      border-right-color: transparent;
      border-top-color: transparent;
      outline: none;
      box-shadow: none;
    }
    &--selected {
      border-bottom: 3px @border-style-base;
    }
  }
}
</style>
