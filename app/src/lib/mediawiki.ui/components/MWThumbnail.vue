<template>
  <img
    v-if="thumbnail"
    class="mw-ui-thumbnail"
    loading="lazy"
    width="100px"
    height="100px"
    :src="thumbnail.source"
  />
  <mw-ui-icon
    v-else
    class="mw-ui-thumbnail mw-ui-thumbnail--missing justify-center"
    :icon="mwIconImageLayoutFrameless"
    :size="48"
  >
  </mw-ui-icon>
</template>

<script>
import MwUiIcon from "./MWIcon";
import { mwIconImageLayoutFrameless } from "./icons";

export default {
  name: "mw-ui-thumbnail",
  data: () => ({ mwIconImageLayoutFrameless }),
  props: {
    thumbnail: {
      type: Object,
      default: null
    }
  },
  components: { MwUiIcon },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="less">
@import "../variables/colors.less";

.mw-ui-thumbnail {
  display: flex;
  align-items: center;

  &.mw-ui-thumbnail--missing {
    background-color: @colorGray15;
  }
}
</style>
