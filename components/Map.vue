<template>
  <div id="map-wrap" style="height: 100vh">
    <client-only>
      <l-map :zoom="zoom" :center="center" @click="handleClickMap">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker :lat-lng="center">
          <l-tooltip :content="'Your address'"></l-tooltip>
        </l-marker>
        <l-marker v-for="(point, index) in points" :key="index" :lat-lng="{ lat: point.lat, lng: point.lng }">
          <l-tooltip :content="point.name"></l-tooltip>
          <l-icon
            icon-url="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png" />
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
  },
  methods: {
    handleClickMap(e) {
      this.$emit('updateLatLng', e.latlng.lat, e.latlng.lng)
    }
  }
};
</script>
  