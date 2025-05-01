<!-- 主要区域，地图 -->
<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import "echarts-gl"; // 引入 echarts-gl

import nanning from "@/assets/json/nanning.json";
import mapBg from '@/assets/images/map-bg.png';

const chartRef = ref(null);
let chartInstance = null;

const initChart = () => {
  chartInstance = echarts.init(chartRef.value);
  echarts.registerMap('nanning', nanning);
  const option = {
    backgroundColor: 'transparent',
    // 提示组件
    tooltip: {
      show: true,
      trigger: "item",
      formatter: function (params) {
        if (params.componentSubType === 'map3D') {
          return `<div style="padding: 5px">
          <div style="font-size: 16px;color:#fff">${params.name}</div>
          <div style="color:#fff">种植面积：${(params.value || 0).toFixed(0)}亩</div>
        </div>`;
        }
        return '';
      },
      backgroundColor: 'rgba(0,0,0,0.75)',
      borderColor: '#1a9bfb',
      borderWidth: 1,
      textStyle: {
        color: '#fff'
      }
    },
    series: [{
      type: 'map3D',
      map: 'nanning',
      roam: false,
      top: '-10%',
      boxHeight: 40,    // 3D地图的高度
      regionHeight: 5,  // 区域块的高度
      // 地图材质相关配置
      shading: 'realistic',  // 真实感渲染
      realisticMaterial: {
        detailTexture: mapBg,    // 区域纹理贴图
        textureTiling: 1,        // 纹理平铺度
        roughness: 0.8           // 材质粗糙度
      },
      // 区域样式配置
      itemStyle: {
        opacity: 0.8,
        borderWidth: 1.5,
        borderColor: '#1a9bfb'
      },
      // 标签文字配置
      label: {
        show: true,
        color: '#fff',
        fontSize: 14,
        padding: [5, 8],
        borderRadius: 3
      },
      // 鼠标悬停强调效果
      emphasis: {
        itemStyle: {
          color: '#4977c3',
          opacity: 1
        }
      },
      // 视角控制配置
      viewControl: {
        distance: 115,         // 视角距离
        alpha: 35,            // 视角垂直角度
        beta: -20,            // 视角水平角度
        center: [0, 0, 0],    // 视角中心点
        autoRotate: false,    // 禁用自动旋转
        rotateSensitivity: 0, // 禁用旋转
        zoomSensitivity: 0,   // 禁用缩放
        panSensitivity: 0,    // 禁用平移
        damping: 0            // 惯性阻尼
      },
      light: {
        main: {
          intensity: 1.2,   // 主光源强度
          shadow: true      // 启用阴影
        },
        ambient: {
          intensity: 0.3    // 环境光强度
        }
      },
      // 地图数据配置
      data: nanning.features.map(feature => ({
        name: feature.properties.name,
        value: Math.floor(Math.random() * 10000) // 随机数据值
      }))
    }]
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