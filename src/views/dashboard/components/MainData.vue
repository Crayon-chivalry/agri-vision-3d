<!-- 主要区域，地图 -->
<script setup>
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
</style>