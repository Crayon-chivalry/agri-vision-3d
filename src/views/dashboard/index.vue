<script setup>
import SuperviseData from './components/SuperviseData.vue'
import SoilData from './components/SoilData.vue'
import FarmingData from './components/FarmingData.vue'
import PlantData from './components/PlantData.vue'
import LandParcelData from './components/LandParcelData.vue'
import RiceData from './components/RiceData.vue'
</script>

<template>
  <div class="dashboard">
    <!-- 顶部 -->
    <div class="header">
      <img src="@/assets/images/header.png" class="header-image" />
      <div class="header-title">xx农业大数据监控中心</div>
    </div>

    <!-- 主要区域容器 -->
    <div class="container">
      <div  class="aside">
        <supervise-data class="aside-item" />
        <soil-data class="aside-item" />
        <farming-data class="aside-item" />
      </div>
      <div class="main"></div>
      <div class="aside">
        <plant-data class="aside-item" />
        <land-parcel-data class="aside-item" />
        <rice-data class="aside-item" />
      </div>
    </div>
    
    <!-- 底部 -->
    <div class="footer">
      <img src="@/assets/images/footer.png" class="footer-image" />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #000;
}

.header {
  position: relative;
}

.header-title {
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
}

.header-image {
  width: 100%;
}

.footer-image {
  width: 100%;
}

.container {
  flex: 1;
  display: flex;
}

.main {
  flex: 2;
}

.aside {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.aside-item {
  flex: 1;
}
</style>