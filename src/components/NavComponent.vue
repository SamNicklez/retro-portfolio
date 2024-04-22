<template>
  <a2k-panel>
    <div style="min-width: 100%; align-items: center; display: flex">
      <a2k-button class="button-inline-icon">
        <a2k-icon icon="windows-icon" />
        <span>Start</span>
      </a2k-button>
      <div class="time-display">
        <div style="padding: 5px">{{ currentTime }}</div>
      </div>
    </div>
  </a2k-panel>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref(new Date().toLocaleTimeString())

function updateTime() {
  currentTime.value = new Date().toLocaleTimeString()
}

onMounted(() => {
  const interval = setInterval(updateTime, 1000)
  onUnmounted(() => clearInterval(interval))
})
</script>

<style scoped>
.button-inline-icon {
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 2.5px;
}

.button-inline-icon a2k-icon {
  display: inline-block;
  margin-right: 8px;
}

.time-display {
  float: right;
  max-width: fit-content;
  margin-left: auto;
  margin-right: 2.5px;
  margin-bottom: 2.5px;
  box-shadow: 0 0 3px black;
}
</style>
