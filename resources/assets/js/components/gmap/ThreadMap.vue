<template>
  <GmapMap
    :center="mapCenter"
    :zoom="zoom"
    map-type-id="terrain"
    style="width: 100%; height: 85vh"    
    >
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
            
            
        </gmap-cluster> -->

        <GmapMarker
                :position="center"
                :clickable="true"
                :draggable="false"
            />

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
    props:['userlat', 'userlng','nearest'],
    components:{
        InfoContent
    },
    data(){
        return{
            //center:{lat: 42.363211, lng:-105.071875},
            center:{lat: parseFloat(this.userlat),lng: parseFloat(this.userlng)},
            mapCenter:{lat: parseFloat(this.userlat),lng: parseFloat(this.userlng)},
            markers:[],
            zoom:2,
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
            if(this.center.lat == NaN || this.center.lng == NaN){
                alert('You must provide your location first')
            }
            let url = ''
            if(this.nearest == true){
                url = '/map/nearest-threads'
            }else{
                url = '/map/all-threads'
            }
            axios.post(url,{
                center:this.center, 
            }).then(res=>{
                let data = res.data;
                if(res.data.status =='failed'){
                    alert('You must provide your location first')
                }else{
                    eventBus.$emit('markers_fetched', data);
                }
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
            this.markers = null;
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

        eventBus.$on('zoom_decreased', zoom=>{
            this.zoom = zoom;
        });
        eventBus.$on('change_center', center=>{
            this.mapCenter =center;
        });

        
    }
}
</script>

<style>

</style>