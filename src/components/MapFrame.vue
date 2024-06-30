<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useGoogleMapSetUp } from '../config/map';

const {mapCommonOption, createMapInstance} = useGoogleMapSetUp();

const mapElment = ref<HTMLDivElement>()

const mapObj = computed(() => {
  if (mapElment.value && mapElment.value instanceof HTMLDivElement) {
    return createMapInstance(mapElment.value, {...mapCommonOption, mapTypeId: google.maps.MapTypeId.HYBRID})
  } else {
    return null;
  }
})

defineExpose({mapObj, mapElment})

onMounted(async() => {
  const {googleMapApiLoader } = useGoogleMapSetUp();
  try {
    await googleMapApiLoader.importLibrary('maps')

    if (mapElment.value && mapElment.value instanceof HTMLDivElement) {
      return createMapInstance(mapElment.value, {...mapCommonOption, mapTypeId: google.maps.MapTypeId.HYBRID})
    } else {
      return null;
    }
  } catch (e) {
      console.error('マップの読み込みに失敗しました')
  }
})


</script>

<template>
    <div id="map" ref="mapElment" style="height: 100vh; width: 100vw;"/>
</template>

<style scoped>
#map {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
