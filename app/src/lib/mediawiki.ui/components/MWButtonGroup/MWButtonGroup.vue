<template>
  <div class="row mw-ui-button-group ma-0 pa-0">
    <mw-button
      v-for="item in items"
      :key="item.value"
      :class="`ma-0 col-${12 / items.length}`"
      :value="item.value"
      :aria-selected="active === item.value"
      :depressed="active === item.value"
      v-bind="item.props"
      @click="$emit('select', item.value)"
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
    }
  }
};
</script>
<style lang="less">
@import "../../variables/wikimedia-ui-base.less";

.mw-ui-button-group {
  background-color: white;
  min-height: 56px;
  .mw-ui-button--depressed {
    border-bottom: 2px solid @color-primary--hover;
  }
}
</style>
