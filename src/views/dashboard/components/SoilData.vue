<!-- 土壤肥力分布 -->
<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import "echarts-gl";

const chartRef = ref(null);
let chartInstance = null;

const chartData = [
  {
    name: "高",
    value: 10.28,
  },
  {
    name: "极高",
    value: 26.50,
  },
  {
    name: "中",
    value: 23.14,
  },
  {
    name: "低",
    value: 20.50,
  },
  {
    name: "极低",
    value: 10.28,
  },
];

const colorList = [
  "rgba(31, 198, 255, 0.9)",
  "rgba(89, 255, 255, 0.9)",
  "rgba(247, 196, 88, 0.9)",
  "rgba(239, 122, 48, 0.9)",
  "rgba(25, 87, 167, 0.9)",
];

// 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
const getParametricEquation = (
  startRatio,
  endRatio,
  isSelected,
  isHovered,
  k,
  h
) => {
  // 计算
  let midRatio = (startRatio + endRatio) / 2;

  let startRadian = startRatio * Math.PI * 2;
  let endRadian = endRatio * Math.PI * 2;
  let midRadian = midRatio * Math.PI * 2;

  // 如果只有一个扇形，则不实现选中效果。
  // if (startRatio === 0 && endRatio === 1) {
  //     isSelected = false;
  // }
  isSelected = false;
  // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
  k = typeof k !== "undefined" ? k : 1 / 3;

  // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
  let offsetX = isSelected ? Math.sin(midRadian) * 0.1 : 0;
  let offsetY = isSelected ? Math.cos(midRadian) * 0.1 : 0;

  // 计算高亮效果的放大比例（未高亮，则比例为 1）
  let hoverRate = isHovered ? 1.05 : 1;

  // 返回曲面参数方程
  return {
    u: {
      min: -Math.PI,
      max: Math.PI * 3,
      step: Math.PI / 32,
    },

    v: {
      min: 0,
      max: Math.PI * 2,
      step: Math.PI / 20,
    },

    x: function (u, v) {
      if (u < startRadian) {
        return (
          offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
        );
      }
      if (u > endRadian) {
        return (
          offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
        );
      }
      return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
    },

    y: function (u, v) {
      if (u < startRadian) {
        return (
          offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
        );
      }
      if (u > endRadian) {
        return (
          offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
        );
      }
      return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
    },

    z: function (u, v) {
      if (u < -Math.PI * 0.5) {
        return Math.sin(u);
      }
      if (u > Math.PI * 2.5) {
        return Math.sin(u) * h * 0.1;
      }
      return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
    },
  };
};

// 生成模拟 3D 饼图的配置项
const getPie3D = (pieData, internalDiameterRatio) => {
  let series = [];
  let sumValue = 0;
  let startValue = 0;
  let endValue = 0;
  let legendData = [];
  let k =
    typeof internalDiameterRatio !== "undefined"
      ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
      : 1 / 3;

  // 为每一个饼图数据，生成一个 series-surface 配置
  for (let i = 0; i < pieData.length; i++) {
    sumValue += pieData[i].value;

    let seriesItem = {
      name:
        typeof pieData[i].name === "undefined" ? `series${i}` : pieData[i].name,
      type: "surface",
      parametric: true,
      wireframe: {
        show: false,
      },
      pieData: pieData[i],
      pieStatus: {
        selected: false,
        hovered: false,
        k: 1 / 10,
      },
    };

    if (typeof pieData[i].itemStyle != "undefined") {
      let itemStyle = {};

      typeof pieData[i].itemStyle.color != "undefined"
        ? (itemStyle.color = pieData[i].itemStyle.color)
        : null;
      typeof pieData[i].itemStyle.opacity != "undefined"
        ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
        : null;

      seriesItem.itemStyle = itemStyle;
    }
    series.push(seriesItem);
  }

  // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
  // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
  for (let i = 0; i < series.length; i++) {
    endValue = startValue + series[i].pieData.value;

    series[i].pieData.startRatio = startValue / sumValue;
    series[i].pieData.endRatio = endValue / sumValue;
    series[i].parametricEquation = getParametricEquation(
      series[i].pieData.startRatio,
      series[i].pieData.endRatio,
      false,
      false,
      k,
      series[i].pieData.value
    );

    startValue = endValue;

    legendData.push(series[i].name);
  }

  // 准备待返回的配置项，把准备好的 legendData、series 传入。
  let option = {
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {},
    grid3D: {
      viewControl: {
        autoRotate: true, // 自动旋转
        distance: 120,    // 减小视角距离
        beta: 40,
        zoomSensitivity: 0,   // 禁用缩放
        rotateSensitivity: 0, // 禁用鼠标旋转
      },
      left: "0%",
      right: "0%",
      top: "-10%",
      bottom: "0%",
      show: false,
      boxHeight: 60,
    },
    series: series,
  };
  return option;
}

const initChart = () => {
  chartInstance = echarts.init(chartRef.value);
  const serData = chartData.map((dItem, index) => {
    return {
      ...dItem,
      value: Number(dItem.value),
      itemStyle: {
        color: colorList[index],
      },
    };
  });
  const option = getPie3D(serData, 0.7);
  chartInstance.setOption(option);
};

onMounted(() => {
  initChart();
});
</script>

<template>
  <div class="soil">
    <title-section title="土壤肥力分布" />
    <div class="chart-row">
      <div class="chart-bg">
        <div ref="chartRef" class="chart"></div>
      </div>
      <div class="legend">
        <div class="legend-item" v-for="(item, index) in chartData" :key="index">
          <span class="legend-round" :style="{'--color': colorList[index]}"></span>
          <span class="legend-name">{{ item.name }}</span>
          <span class="legend-value" :style="{'--color': colorList[index]}">{{ item.value }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chart-row {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.chart-bg {
  width: 230px;
  height: 200px;
  display: flex;
  justify-content: center;
  background-image: url("@/assets/images/pie-bg.png");
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
}

.chart {
  width: 140px;
  height: 140px;
}

legend {
  flex: 1;
}

.legend-item {
  padding: 8px 0;
  color: #fff;
  font-size: 16px;
}

.legend-round {
  margin-right: 10px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color);
}

.legend-name {
  display: inline-block;
  width: 50px;
}

.legend-value {
  color: var(--color);
}
</style>
