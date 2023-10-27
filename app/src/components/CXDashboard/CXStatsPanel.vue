<template>
  <div class="cx-stats-panel pa-4">
    <h5 v-i18n:cx-sx-dashboard-stats-panel-title />
    <mw-row>
      <mw-col class="cx-stats-panel__monthly-stats">
        <h3 v-text="thisMonthStats" />
        <h5
          v-i18n:cx-sx-dashboard-stats-panel-monthly-stats-label
          class="cx-stats-panel__monthly-stats-label"
        />
      </mw-col>
      <mw-col class="cx-stats-panel__total-stats">
        <h3 v-text="total" />
        <h5
          v-i18n:cx-sx-dashboard-stats-panel-total-stats-label
          class="cx-stats-panel__total-stats-label"
        />
      </mw-col>
    </mw-row>
    <canvas ref="canvasRef" class="cx-stats-panel__canvas" />
  </div>
</template>

<script>
import { MwRow, MwCol } from "@/lib/mediawiki.ui";
import { ref, computed, watch } from "vue";

export default {
  name: "CxStatsPanel",
  components: { MwCol, MwRow },
  props: {
    stats: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    const thisMonthKey = new Date().toISOString().slice(0, 7) + "-01";
    const total = computed(() => props.stats?.[thisMonthKey]?.count || 0);
    const thisMonthStats = computed(
      () => props.stats?.[thisMonthKey]?.delta || 0
    );

    const canvasRef = ref(null);

    watch(
      () => props.stats,
      () => {
        const stats = props.stats;
        const context = canvasRef.value.getContext("2d");
        const monthKeys = Object.keys(props.stats || {}).sort();

        const maxValue = monthKeys.reduce(
          (max, month) => Math.max(max, stats[month].delta),
          0
        );
        const monthData = monthKeys.map((month) => stats[month].delta);

        const canvasWidth = canvasRef.value.getBoundingClientRect().width;
        const canvasHeight = canvasRef.value.getBoundingClientRect().height;

        canvasRef.value.width = canvasWidth;
        canvasRef.value.height = canvasHeight;

        const spacing = 4;
        const barWidth = 6;
        const height = 50;
        const segment = (height - spacing) / maxValue;
        let offsetX = spacing;
        // Limit the number of bars displayed
        const numOfBars = Math.floor(
          (canvasWidth - spacing) / (barWidth + spacing)
        );

        const slicedData = monthData.slice(
          Math.max(monthData.length - numOfBars, 0)
        );

        slicedData.forEach((element, index) => {
          // Last bar in chart is displayed using progressive color (Accent50) from WikimediaUI color palette
          if (index === slicedData.length - 1) {
            context.fillStyle = "#36c";
          }

          const offsetY = height - element * segment;
          context.fillRect(offsetX, offsetY, barWidth, element * segment);
          offsetX += barWidth + spacing;
        });
      }
    );

    return { canvasRef, thisMonthStats, total };
  },
};
</script>

<style lang="less">
@import (reference) "~@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";

.cx-stats-panel {
  background-color: @background-color-base;

  &__monthly-stats {
    color: @color-progressive;

    &-label {
      font-size: 0.875rem;
    }
  }

  &__total-stats {
    color: @color-subtle;

    &-label {
      font-size: 0.875rem;
    }
  }

  &__canvas {
    background-color: @background-color-interactive-subtle;
    width: 100%;
    height: 50px;
  }
}
</style>
