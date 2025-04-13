<!-- 种植数据 -->
<script setup>
</script>

<template>
  <div class="plant">
    <title-section title="种植概况" />

    <div class="plant-row">
      <div class="plant-item">
        <img src="@/assets/images/category.png" class="plant-image" />
        <div class="plant-count">1480/种</div>
        <div class="plant-title">种植品类数</div>
      </div>
      <div class="plant-item">
        <img src="@/assets/images/production.png" class="plant-image" />
        <div class="plant-count">1480kg/亩</div>
        <div class="plant-title">亩均产量</div>
      </div>
      <div class="plant-item">
        <img src="@/assets/images/area.png" class="plant-image" />
        <div class="plant-count">1480亩/块</div>
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
  color: #b5c2e4;
  font-size: 14px;
}

.plant-count {
  font-size: 21px;
  font-weight: bold;
  color: #b5c2e4;
}
</style>