<!-- 农事管理 -->
<script setup></script>

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
          <div class="farming-count">1480kg/亩</div>
        </div>
      </div>
      <div class="farming-item">
        <img src="@/assets/images/operate-count.png" class="farming-image" />
        <div class="farming-item-content">
          <div>
            <div class="farming-title">农事进展</div>
            <div class="farming-label">农事操作数量</div>
          </div>
          <div class="farming-count">1480/个</div>
        </div>
      </div>
      <div class="farming-item">
        <img src="@/assets/images/output.png" class="farming-image" />
        <div class="farming-item-content">
          <div>
            <div class="farming-title">数字农场</div>
            <div class="farming-label">生产计划数量</div>
          </div>
          <div class="farming-count">1480/个</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.farming-item {
  position: relative;
  margin-top: 10px;
}

.farming-image {
  width: 100%;
}

.farming-item-content {
  position: absolute;
  top: 5px;
  left: 100px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.farming-title {
  color: #fff;
  font-size: 12px;
}

.farming-label {
  color: #02acf3;
  font-size: 12px;
}

.farming-count {
  color: #00c5ff;
  font-size: 16px;
  font-weight: bold;
}
</style>
