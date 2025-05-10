<!-- 种植数据 -->
<script setup>
import CountUp from 'vue-countup-v3'
</script>

<template>
  <div class="plant">
    <title-section title="种植概况" />

    <div class="plant-row">
      <div class="plant-item">
        <img src="@/assets/images/category.png" class="plant-image" />
        <div class="plant-count">
          <count-up :end-val="1564"></count-up>
          <span>/种</span>
        </div>
        <div class="plant-title">种植品类数</div>
      </div>
      <div class="plant-item">
        <img src="@/assets/images/production.png" class="plant-image" />
        <div class="plant-count">
          <count-up :end-val="256486"></count-up>
          <span>kg/亩</span>
        </div>
        <div class="plant-title">亩均产量</div>
      </div>
      <div class="plant-item">
        <img src="@/assets/images/area.png" class="plant-image" />
        <div class="plant-count">
          <count-up :end-val="182"></count-up>
          <span>亩/块</span>
        </div>
        <div class="plant-title">地块平均面积</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plant-row {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}

.plant-item {
  flex: 1;
  text-align: center;
}

.plant-image {
  width: 80%;
}

.plant-title {
  margin-top: 6px;
  color: #b5c2e4;
  font-size: 14px;
}

.plant-count {
  margin-top: 6px;
  font-size: 21px;
  font-weight: bold;
  background: linear-gradient(to bottom, #fff 0%, #2a90b9 100%);
  color: transparent;
  text-shadow: 0 0 10px rgba(94, 231, 255, 0.3);
  -webkit-background-clip: text;
  background-clip: text;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.plant-count span {
  font-size: 12px;
}
</style>