<template>
  <GmapMap
    :center="center"
    :zoom="zoom"
    map-type-id="terrain"
    style="width: 100%; height: 35vh"
    :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false,
        draggable:false
    }"
    >
       <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
            />

    </GmapMap>
    
</template>

<script>
export default {
    props:['lat','lng'],
    data(){
        return{
            center:{
                    lat:parseFloat(this.lat),
                    lng:parseFloat(this.lng),
                },
            markers:[
                {
                    position:{
                        //lat: 42.363211, lng:-105.071875
                       lat:parseFloat(this.lat),
                        lng:parseFloat(this.lng),
                    }
                
                },
            ],
        zoom:4,          

        }
    },
   
    
}
</script>

<style>

</style>