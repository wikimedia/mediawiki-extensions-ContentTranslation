<template>
  <div v-if="thumbnail" class="mw-ui-thumbnail" :style="style" />
  <mw-ui-icon
    v-else
    class="mw-ui-thumbnail mw-ui-thumbnail--missing justify-center"
    :icon="mwIconImageLayoutFrameless"
    :size="80"
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
  computed: {
    style() {
      if (this.thumbnail.source) {
        return {
          "background-image": `url(${this.thumbnail.source})`
        };
      }
      return {};
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="less">
@import "../variables/wikimedia-ui-base.less";

.mw-ui-thumbnail {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  &.mw-ui-thumbnail--missing {
    background-color: @background-color-code;
  }
}
</style>
