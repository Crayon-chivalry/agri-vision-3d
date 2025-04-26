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
    geo3D: {
      map: 'nanning',
      roam: false,
      top: '-5%',
      boxHeight: 40, // 3D地图的高度
      regionHeight: 5, // 区域高度
      shading: 'realistic',
      // 背景图
      realisticMaterial: {
        detailTexture: mapBg, // 图片路径或 Base64
        textureTiling: 1,
        roughness: 0.8
      },
      itemStyle: {
        // color: '#004b75',
        opacity: 0.8,
        borderWidth: 1.5,
        borderColor: '#1a9bfb'
      },
      label: {
        show: true,
        color: '#fff',      
        fontSize: 14,
        // backgroundColor: 'rgba(0,0,0,0.5)',
        padding: [5, 8],    
        borderRadius: 3
      },
      emphasis: {
        itemStyle: {
          color: '#4977c3',
          opacity: 1
        }
      },
      viewControl: {
        // 视角控制
        distance: 115,      // 调整到合适的缩放距离
        alpha: 35,          // 左右旋转度（水平视角）
        beta: 20,           // 略微俯视角度
        center: [0, 0, 0],  // 中心点居中
        autoRotate: false,   // 关闭自动旋转

        // 禁用所有交互操作
        rotateSensitivity: 0,  // 禁止拖拽旋转
        zoomSensitivity: 0,    // 禁止鼠标滚轮缩放
        panSensitivity: 0,     // 禁止平移
        damping: 0
      },
      light: {  // 光照配置
        main: {
          intensity: 1.2,
          shadow: true
        },
        ambient: {
          intensity: 0.3
        }
      },
      postEffect: {  // 后期效果
        enable: true,
        bloom: {
          enable: true,
          intensity: 0.1
        }
      },
      temporalSuperSampling: {
        enable: true
      }
    },
    series: []
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