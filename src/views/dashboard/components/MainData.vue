<!-- 主要区域，地图 -->
<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";

import nanning from "@/assets/json/nanning.json";

const chartRef = ref(null);
let chartInstance = null;

const initChart = () => {
  chartInstance = echarts.init(chartRef.value);
  echarts.registerMap('nanning', nanning);
  const option = {
    // 地图背景色
    backgroundColor: 'transparent',
    // 地图配置
    geo: {
      map: 'nanning',
      roam: false, // 不允许缩放和平移
      // zoom: 1.2, // 缩放级别
      label: {
        show: true,
        color: '#fff',
        fontSize: 12
      },
      itemStyle: {
        areaColor: '#0c3e5f', // 地图区域颜色
        borderColor: '#4befff', // 边界颜色
        borderWidth: 1.5,
        shadowColor: 'rgba(75,239,255,0.3)',
        shadowBlur: 10
      },
      emphasis: {
        itemStyle: {
          areaColor: '#4977c3', // 鼠标悬浮时的颜色
          shadowColor: 'rgba(75,239,255,0.5)',
          shadowBlur: 20
        }
      }
    },
    series: [] // 如果需要在地图上添加散点等数据可以在这里配置
  };
  chartInstance.setOption(option);
}

onMounted(() => {
  initChart()
})
</script>

<template>
  <div class="main-data">
    <div class="total">
      <div class="total-item">
        <img src="@/assets/images/total-rice.png" class="total-image" />
        <div>
          <div>13万吨</div>
          <div>水稻产量</div>
        </div>
      </div>
      <div class="total-item">
        <img src="@/assets/images/total-rice.png" class="total-image" />
        <div>
          <div>47个</div>
          <div>数字农场数量</div>
        </div>
      </div>
      <div class="total-item">
        <img src="@/assets/images/total-rice.png" class="total-image" />
        <div>
          <div>13万亩</div>
          <div>种植面积</div>
        </div>
      </div>
      <div class="total-item">
        <img src="@/assets/images/total-efficiency.png" class="total-image" />
        <div>
          <div>140%</div>
          <div>土壤肥力</div>
        </div>
      </div>
    </div>

    <div ref="chartRef" class="chart"></div>
  </div>
</template>

<style scoped>
.main-data {
  padding: 0 10px;
}

.total {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.total-item {
  padding: 5px 10px;
  flex: 1;
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 14px;
  color: #fff;
  background: url('@/assets/images/total-bg.png') no-repeat center center;
  background-size: 100% 100%;
}

.total-image {
  width: 66px;
}

.chart {
  width: 100%;
  height: 800px;
}
</style>