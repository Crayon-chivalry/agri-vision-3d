<script setup>
import VScaleScreen from "v-scale-screen";

import SuperviseData from "./components/SuperviseData.vue";
import SoilData from "./components/SoilData.vue";
import FarmingData from "./components/FarmingData.vue";
import PlantData from "./components/PlantData.vue";
import LandParcelData from "./components/LandParcelData.vue";
import RiceData from "./components/RiceData.vue";
import MainData from "./components/MainData.vue";
</script>

<template>
  <v-scale-screen width="1920" height="1080">
    <div class="dashboard">
      <!-- 顶部 -->
      <div class="header">
        <img src="@/assets/images/header.png" class="header-image" />
        <div class="header-title">南宁市农业大数据监控中心</div>
      </div>

      <!-- 主要区域容器 -->
      <div class="container">
        <div class="aside">
          <supervise-data class="aside-item" />
          <soil-data class="aside-item" />
          <farming-data class="aside-item" />
        </div>
        <div class="main">
          <main-data />
        </div>
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
  </v-scale-screen>
</template>

<style scoped>
.dashboard {
  height: 100%;
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
  color: #fff;
  font-size: 28px;
}

.header-image {
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

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
}

.footer-image {
  display: block;
  width: 100%;
}

/* .aside-item {
  flex: 1;
} */
</style>
