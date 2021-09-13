<template>
  <div class="mw-ui-card">
    <!-- @slot Card header -->
    <slot name="header">
      <div v-if="title" class="mw-ui-card__title title" v-text="title" />
    </slot>
    <div class="mw-ui-card__content">
      <!-- @slot Card content -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MwCard",
  props: {
    /**
     * Card title
     **/
    title: {
      type: String,
      default: null
    }
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
    color: @color-base;
  }
}
</style>
