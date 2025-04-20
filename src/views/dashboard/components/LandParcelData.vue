<!-- 地块数据分布 -->
<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";

const chartRef = ref(null);
let chartInstance = null;

const initChart = () => {
  chartInstance = echarts.init(chartRef.value);
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
      formatter: (params) => {
        let template  = ""
        params.forEach(item => {
          template += `<div>
            <span style="display:inline-block;width:10px;height:10px;background-color:${item.color}"></span>
            <span>${item.seriesName}</span>
            <span>${item.value}%</span>
          </div>`
        })
        return template
      }
    },
    legend: {
      padding: [20, 0, 0, 0],
      textStyle: {
        color: "#fff"
      },
      data: ["地域规模", "区域分布"],
    },
    grid: {
      // top: "5%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      // 隐藏x轴线
      axisLine: {
        show: false,
      },
      // 隐藏x轴刻度
      axisTick: {
        show: false,
      },
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
    },
    yAxis: {
      // 隐藏y轴线
      splitLine: {
        show: false,
      },
      type: "value",
    },
    series: [
      {
        name: "地域规模",
        type: "line",
        stack: "Total",
        // 弧形状
        smooth: true,
        // 隐藏面积图节点圆
        showSymbol: false,
        lineStyle: {
          width: 0,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#2af598" }, // 深蓝色
            { offset: 1, color: "#009efd" }, // 亮蓝色
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [32, 32, 11, 34, 33, 60, 20, 40],
      },
      {
        name: "区域分布",
        type: "line",
        stack: "Total",
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 0,
        },
        areaStyle: {},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#30cfd0" },
            { offset: 1, color: "#330867" },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [20, 82, 71, 64, 40, 34, 25, 60],
      },
    ],
  };
  chartInstance.setOption(option);
};

onMounted(() => {
  initChart();
});
</script>

<template>
  <div class="land">
    <title-section title="地块数据分布" />
    <div ref="chartRef" class="chart"></div>
  </div>
</template>

<style scoped>
.chart {
  width: 100%;
  height: 210px;
}
</style>
