<script setup lang="ts">
import { ref } from 'vue';

import MapFrame from './components/MapFrame.vue'

const mapRef = ref<HTMLElement>()
</script>

<template>
  <div class="wrapper">
    <MapFrame ref="mapRef" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

