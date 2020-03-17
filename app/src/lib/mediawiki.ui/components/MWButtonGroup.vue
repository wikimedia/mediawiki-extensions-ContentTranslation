<template>
  <div class="row mw-ui-button-group ma-0 pa-0" :class="classes" :id="id">
    <mw-button
      v-for="item in items"
      :class="`ma-0 col-${12 / items.length}`"
      :key="item.value"
      :value="item.value"
      :aria-selected="active === item.value"
      :depressed="active === item.value"
      v-bind="item.props"
      @click="$emit('select', item.value)"
    />
  </div>
</template>

<script>
import MwButton from "./MWButton";

export default {
  name: "mw-button-group",
  components: {
    MwButton
  },
  props: {
    items: Array,
    id: String,
    active: String
  },
  computed: {
    classes() {
      return {
        "mw-ui-button-group": true
      };
    }
  }
};
</script>
<style lang="less">
@import "../variables/colors.less";

.mw-ui-button-group {
  background-color: white;
  min-height: 56px;
  .mw-ui-button--depressed {
    border-bottom: 2px solid @colorProgressiveHighlight;
  }
}
</style>
