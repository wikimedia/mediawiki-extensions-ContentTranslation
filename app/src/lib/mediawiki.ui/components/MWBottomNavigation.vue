<template>
  <footer class="mw-ui-bottom-navigation row ma-0 justify-center">
    <div class="col-12 ma-0 pa-0">
      <slot></slot>
    </div>
  </footer>
</template>

<script>
export default {
  name: "mw-ui-bottom-navigation"
};
</script>

<style lang="less">
@import "../variables/colors.less";
@import "../mixins/common.less";

.mw-ui-bottom-navigation {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: @background-color-base;
  .box-shadow(2px -2px 2px rgba(0, 0, 0, 0.15));

  .mw-ui-icon {
    display: block;
  }
}
</style>
