<!-- 监管指标 -->
<script setup></script>

<template>
  <div class="metrics">
    <title-section title="监管指标" />

    <div class="metrics-row">
      <div class="metrics-item">
        <div class="metrics-title">监管指标数</div>
        <img src="@/assets/images/supervise.png" class="metrics-image" />
        <div class="metrics-count">65</div>
      </div>
      <div class="metrics-item">
        <div class="metrics-title">运行指标数</div>
        <img src="@/assets/images/run.png" class="metrics-image" />
        <div class="metrics-count">35</div>
      </div>
      <div class="metrics-item">
        <div class="metrics-title">异常指标数</div>
        <img src="@/assets/images/abnormal.png" class="metrics-image" />
        <div class="metrics-count">30</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.metrics-row {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}

.metrics-item {
  flex: 1;
  text-align: center;
}

.metrics-image {
  width: 60%;
}

.metrics-title {
  color: #b5c2e4;
  font-size: 14px;
}

.metrics-count {
  font-size: 21px;
  font-weight: bold;
  color: #b5c2e4;
}
</style>
