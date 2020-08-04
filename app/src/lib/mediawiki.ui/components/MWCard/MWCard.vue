<template>
  <div :id="id" class="mw-ui-card">
    <slot name="header">
      <div class="mw-ui-card__title title" v-text="title" />
    </slot>
    <div class="mw-ui-card__content"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "MwCard",
  props: {
    id: {
      type: String,
      default: null
    },
    title: String
  }
};
</script>
<style lang="less">
@import "../../variables/wikimedia-ui-base.less";

.mw-ui-card {
  background-color: @background-color-base;
  box-sizing: border-box;
  margin-bottom: 1em;
  border-radius: @border-radius-base;
  padding: 8px;
  box-shadow: @box-shadow-card;
  .mw-ui-card__title {
    height: 2em;
    color: @color-base;
  }
}
</style>
