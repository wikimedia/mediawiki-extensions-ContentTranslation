<template>
  <div class="mw-ui-card" :id="id">
    <div class="card-title" v-html="title" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mw-card",
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
@import "../variables/borders.less";
@import "../variables/colors.less";
@import "../typography.less";
@import "../mixins/common.less";
.mw-ui-card {
  background-color: @background-color-base;
  box-sizing: border-box;
  margin-bottom: 1em;
  border-radius: @borderRadius;
  padding: 8px;
  .box-shadow(0 1px 1px rgba(0, 0, 0, 0.15));
  .card-title {
    .title;
    color: @colorGray5;
  }
}
</style>
