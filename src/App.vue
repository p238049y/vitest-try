<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import MapFrame from './components/MapFrame.vue'

const mapRef = ref<HTMLElement>()
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <MapFrame ref="mapRef"/>
</template>

