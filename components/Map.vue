<template>
  <div id="map-wrap" style="height: 100vh">
    <client-only>
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker v-for="(point, index) in points" :key="index" :lat-lng="{ lat: point.lat, lng: point.lng }">
          <l-tooltip :content="point.name"></l-tooltip>
        </l-marker>
      </l-map>
    </client-only>
  </div>
</template>
  
<script>
export default {
  name: 'Map',
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    };
  },
  props: {
    center: Array,
    points: Array,
    zoom: Number,
  }
};
</script>
  