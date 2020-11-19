<template>
  <div>
    <img :src="mapIcon" alt />
    <span class="map-location" v-if="location !=null && location != 'null' && location !=''">{{location}}</span>
  </div>
</template>

<script>
export default {
  props: ["location"],
  computed: {
    mapIcon() {
      if (this.location == null || this.location == '' || this.location == 'null') {
        return "/images/png/map-icon-black.png";
      } else {
        return "/images/png/map-icon-red.png";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.map-location {
  color: black;
  font-weight: bold;
  font-size: 13px;
}
</style>