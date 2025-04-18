<script setup>
defineProps({
  title: null
})
</script>

<template>
  <div class="title-section">
    {{ title }}
  </div>
</template>

<style scoped>
.title-section {
  padding-left: 60px;
  height: 42px;
  display: flex;
  align-items: center;
  background-image: url('@/assets/images/title-section.png');
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 21px;
}
</style>