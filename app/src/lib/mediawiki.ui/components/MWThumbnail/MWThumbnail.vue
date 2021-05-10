<template>
  <div v-if="thumbnail" class="mw-ui-thumbnail" :style="style" />
  <mw-ui-icon
    v-else
    class="mw-ui-thumbnail mw-ui-thumbnail--missing justify-center"
    :icon="mwIconImageLayoutFrameless"
    :size="iconSize"
  >
  </mw-ui-icon>
</template>

<script>
import MwUiIcon from "../MWIcon";
import { mwIconImageLayoutFrameless } from "../icons";

export default {
  name: "MwUiThumbnail",
  components: { MwUiIcon },
  props: {
    thumbnail: {
      type: Object,
      default: null
    },
    iconSize: {
      type: Number,
      default: 80
    }
  },
  data: () => ({ mwIconImageLayoutFrameless }),
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
@import "../../variables/wikimedia-ui-base.less";

.mw-ui-thumbnail {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  &.mw-ui-thumbnail--missing {
    svg {
      // apply background only to svg as whole icon can extend to larger height than svg
      background-color: @background-color-code;
    }
  }
}
</style>
