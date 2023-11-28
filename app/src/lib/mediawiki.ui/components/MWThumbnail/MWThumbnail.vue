<template>
  <div v-if="thumbnail" class="mw-ui-thumbnail" :style="style" />
  <mw-ui-icon
    v-else
    class="mw-ui-thumbnail mw-ui-thumbnail--missing justify-center"
    :style="style"
    :icon="placeholderIcon"
    :size="placeholderIconSize"
  >
  </mw-ui-icon>
</template>

<script>
import MwUiIcon from "../MWIcon";
import { mwIconArticle } from "../icons";
import { computed } from "vue";
import colors from "../../variables/colors";

export default {
  name: "MwUiThumbnail",
  components: { MwUiIcon },
  props: {
    thumbnail: {
      type: Object,
      default: null,
    },
    thumbnailSize: {
      type: Number,
      default: 84,
    },
    placeholderIcon: {
      type: String,
      default: mwIconArticle,
    },
    placeholderIconSize: {
      type: Number,
      default: 50,
    },
    placeholderColor: {
      type: String,
      default: colors.gray600,
    },
    placeholderBackgroundColor: {
      type: String,
      default: colors.gray200,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const style = computed(() => {
      const style = {
        height: `${props.thumbnailSize}px`,
        width: `${props.thumbnailSize}px`,
      };

      if (props.thumbnail?.source) {
        style["background-image"] = `url(${props.thumbnail.source})`;
      } else {
        style.color = props.placeholderColor;
        style["background-color"] = props.placeholderBackgroundColor;
      }

      return style;
    });

    const handleClick = (event) => emit("click", event);

    return {
      handleClick,
      style,
    };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.mw-ui-thumbnail {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  &.mw-ui-thumbnail--missing {
    background-color: @background-color-interactive;
  }
}
</style>
