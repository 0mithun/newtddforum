<template>
  <GmapMap
    :center="mapCenter"
    :zoom="zoom"
    map-type-id="terrain"
    style="width: 100%; height: 100vh"
    >
        <gmap-cluster :zoomOnClick="true" :maxZoom="5">
        
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                icon='/images/png/pin.png'
                @click="toggleInfoWindow(m,index)"
            />
            <GmapMarker
                :position="center"
                :clickable="true"
                :draggable="true"
                icon='/images/png/google-maps.png'
            />

            
        </gmap-cluster>
        <gmap-info-window
            :options="infoOptions"
            :position="infoWindowPos"
            :opened="infoWinOpen"
            @closeclick="infoWinOpen=false"
        >
            <info-content :infoContent="infoContent" v-if="this.infoContent !=null"></info-content>
        </gmap-info-window>

    </GmapMap>
    
</template>

<script>
import InfoContent from './InfoContent.vue';

export default {
    
    //@click="center=m.position"
    props:['userlat', 'userlng'],
    components:{
        InfoContent
    },
    data(){
        return{
            //center:{lat: 42.363211, lng:-105.071875},
            center:{lat: parseInt(this.userlat),lng: parseInt(this.userlng)},
            mapCenter:{lat: parseInt(this.userlat),lng: parseInt(this.userlng)},
            markers:[],
            zoom:7,
          infoContent: null,
          infoWindowPos: {
              lat: 0,
              lng: 0
          },
          infoWinOpen: false,
          currentMidx: null,
          infoOptions: {
              pixelOffset: {
                  width: 0,
                  height: -35
              }
          }

        }
    },
    methods:{
        fetchLocations(){
            axios.post('/map/nearest-threads',{
                center:this.center, 
            }).then(res=>{
                let data = res.data;
                eventBus.$emit('markers_fetched', data);
            })
        },
        toggleInfoWindow(marker, idx){
            this.infoWindowPos = marker.position;
            
            // this.infoContent = marker.name;
            this.getThreadDetails(marker.thread_id);

            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
                this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
                this.infoWinOpen = true;
                this.currentMidx = idx;
            }
        },
        getThreadDetails(thread_id){
            
            axios.post('/map/thread-details',{
                thread_id
            }).then(res=>{
                this.infoContent = res.data;
            })
        }
    },
    created(){
        this.fetchLocations();
        eventBus.$on('markers_fetched', data=>{
            this.markers = data.markers;

            if(this.markers.length>0){
                let center = Math.floor(Math.random() * Math.floor(this.markers.length));
                this.mapCenter=data.markers[center].position;
            }

        });
        eventBus.$on('markers_result_clicked', index=>{
           let targetMarkers = this.markers[index]
           this.mapCenter = targetMarkers.position;
           this.toggleInfoWindow(targetMarkers, index);
        });

        
    }
}
</script>

<style>

</style>