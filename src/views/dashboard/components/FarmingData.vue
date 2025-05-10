<!-- 农事管理 -->
<script setup>
import CountUp from 'vue-countup-v3'
</script>

<template>
  <div class="farming">
    <title-section title="农事管理" />

    <div class="farming-list">
      <div class="farming-item">
        <img src="@/assets/images/spread-manure.png" class="farming-image" />
        <div class="farming-item-content">
          <div>
            <div class="farming-title">农资数据</div>
            <div class="farming-label">亩均施肥量</div>
          </div>
          <div class="farming-count">
            <count-up :end-val="1480"></count-up>
            <span>kg/亩</span>
          </div>
        </div>
      </div>
      <div class="farming-item">
        <img src="@/assets/images/operate-count.png" class="farming-image" />
        <div class="farming-item-content">
          <div>
            <div class="farming-title">农事进展</div>
            <div class="farming-label">农事操作数量</div>
          </div>
          <div class="farming-count">
            <count-up :end-val="1480"></count-up>
            <span>/个</span>
          </div>
        </div>
      </div>
      <div class="farming-item">
        <img src="@/assets/images/output.png" class="farming-image" />
        <div class="farming-item-content">
          <div>
            <div class="farming-title">数字农场</div>
            <div class="farming-label">生产计划数量</div>
          </div>
          <div class="farming-count">
            <count-up :end-val="1480"></count-up>
            <span>/个</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.farming-item {
  margin-bottom: 10px;
  position: relative;
}

.farming-item:first-child {
  margin-top: 15px;
}

.farming-image {
  width: 90%;
}

.farming-item-content {
  position: absolute;
  top: 15px;
  left: 120px;
  right: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.farming-title {
  color: #fff;
  font-size: 12px;
}

.farming-label {
  margin-top: 4px;
  color: #02acf3;
  font-size: 12px;
}

.farming-count {
  display: flex;
  align-items: center;
  gap: 2px;
  color: #00c5ff;
  font-size: 16px;
  font-weight: bold;
}

.farming-count span {
  font-size: 12px;
}
</style>
