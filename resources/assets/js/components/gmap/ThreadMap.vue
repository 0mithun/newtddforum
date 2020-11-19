<template>
<div>
  <div class="loading" v-if="loading">
    <div class="image">
    <img src="/images/loading.gif" alt="">
      <h4 style="color:white;font-weignt:bold;">Loading....</h4>
    </div>
  </div>
  <div>
     <GmapMap @center_changed="centerChanged" @click="clicked" :center="mapCenter" :zoom="zoom" map-type-id="terrain" style="width: 100%; height: 85vh" :options="{   zoomControl: true,}">
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @click="toggleInfoWindow(m,index)"
    />

    <!-- <gmap-cluster :zoomOnClick="true" :maxZoom="5">
        
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"                
                @click="toggleInfoWindow(m,index)"
            />
            
            
    </gmap-cluster>-->

    <GmapMarker :position="center" :clickable="true" :draggable="false" @click="toggleInfoWindow(m,index)" />

    <gmap-info-window
      :options="infoOptions"
      :position="infoWindowPos"
      :opened="infoWinOpen"
      @closeclick="infoWinOpen=false"
    >
      <info-content :thread="infoContent" v-if="this.infoContent !=null"></info-content>
    </gmap-info-window>
  </GmapMap>
  </div>
</div>
 
</template>

<script>
import InfoContent from "./InfoContent.vue";

export default {
  props: ["userlat", "userlng", "nearest"],
  components: {
    InfoContent,
  },
  data() {
    return {
      loading:false,
      query: "",
      center: { lat: parseFloat(this.userlat), lng: parseFloat(this.userlng) },
      mapCenter: {
        lat: parseFloat(this.userlat),
        lng: parseFloat(this.userlng),
      },
    
      fetchRunningCenter:null,
      markers: [],
      results: [],
      zoom: 5,
      infoContent: null,
      infoWindowPos: {
        lat: 0,
        lng: 0,
      },
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  methods: {
    centerChanged(event){
      const center = {
        lat:event.lat(),
        lng: event.lng()
      }

        this.fetchRunningCenter = center;
        this.fetchLocations();
    },
    clicked(e){

      this.mapCenter.lat = e.latLng.lat();
      this.mapCenter.lng = e.latLng.lng();

      // this.center.lat = e.latLng.lat();
      // this.center.lng = e.latLng.lng();
      this.loading = true;
      this.fetchLocations();
    },
    fetchLocations() {
      
      if(this.query ==''){
        if (this.center.lat == NaN || this.center.lng == NaN) {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position=>{
                 const lat  = position.coords.latitude;
                 const long = position.coords.longitude; 
                 this.center.lat = lat;
                 this.center.lng = long;      
                
                 this.mapCenter.lat = lat;
                 this.mapCenter.lng = long;   
            });
          }else{
            alert("You must provide your location first");
            return;
          }
        }
      }

      let url = "/map/all-threads";
      axios
        .post(url, {
          center: this.fetchRunningCenter != null ? this.fetchRunningCenter : this.center,
          query: this.query,
        })
        .then((res) => {
          let data = res.data;
          if (res.data.status == "failed") {
            alert("You must provide your location first");
          } else {
            eventBus.$emit("markers_fetched", data);
            if(this.fetchRunningCenter != null){
              // this.mapCenter = this.fetchRunningCenter;
              // this.center = this.fetchRunningCenter;
            }
          }
        });
    },
    toggleInfoWindow(marker, idx) {
      const center = {
        lat:  this.results[idx].lat,
        lng: this.results[idx].lng
      }
      // this.center = center;
      this.mapCenter = center;
      if(this.zoom < 10){
        this.zoom = this.zoom + 1
      }

      this.infoWindowPos = marker.position;

      this.infoContent = this.results[idx];

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }

      this.fetchLocations();
    },
  },
  created() {
    this.query = location.search;

    this.fetchLocations();
    eventBus.$on("markers_fetched", (data) => {
      this.markers = data.markers;
      this.results = data.results;

      if (this.markers.length > 0) {
        let center = Math.floor(
          Math.random() * Math.floor(this.markers.length)
        );
        // this.mapCenter = data.markers[center].position;
        this.loading = false;
      }
    });
    eventBus.$on("markers_result_clicked", (index) => {
      let targetMarkers = this.markers[index];
      this.mapCenter = targetMarkers.position;
      this.toggleInfoWindow(targetMarkers, index);
    });

    eventBus.$on("zoom_decreased", (zoom) => {
      this.zoom = zoom;
    });
    eventBus.$on("change_center", (center) => {
      this.mapCenter = center;
    });

    eventBus.$on("query_removed", () => {
      this.query = '';
      const uri = window.location.toString();
      if (uri.indexOf("?") > 0) {
          const clean_uri = uri.substring(0, uri.indexOf("?"));
          window.history.replaceState({}, document.title, clean_uri);
      }
    });
  
      
  },
};
</script>

<style>
.loading{
    position: absolute;
    left: 0;
    /* right: 0; */
    z-index: 99999;
    top: 0;
    background: rgba(0,0,0,0.4);
    height: 100%;
    width: 100%;
}
.loading .image{
  position: absolute;
    left: 48%;
    /* right: 0; */
    top: 48%;
}
</style>