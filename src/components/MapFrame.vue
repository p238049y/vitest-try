<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGoogleMapSetUp } from '../config/map';

const {mapCommonOption, createMapInstance} = useGoogleMapSetUp();

(async () => {
  const {googleMapApiLoader } = useGoogleMapSetUp();
  try {
      console.log('4')
      await googleMapApiLoader.importLibrary('maps')
  } catch (e) {
      console.error('マップの読み込みに失敗しました')
  }
})

const mapElment = ref<HTMLElement>()

const mapObj = computed(() => {
  if (mapElment.value && mapElment.value instanceof HTMLDivElement) {
    return createMapInstance(mapElment.value, {...mapCommonOption, mapTypeId: google.maps.MapTypeId.HYBRID})
  } else {
    return null;
  }
})


defineExpose({mapObj, mapElment})

</script>

<template>
    <div id="map" ref="mapElment" class="mapStyle" />
</template>

<style scoped>
.mapStyle {
  height: 100%;
}
</style>
