<template>
  <GmapMap
    :center="center"
    :zoom="zoom"
    map-type-id="terrain"
    style="width: 100%; height: 55vh"
    
    >
        <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="false"
            />

    </GmapMap>
    
</template>

<script>
export default {
    props:['thread'],
    data(){
        return{
            //center:{lat: 42.363211, lng:-105.071875},
            center:{
                    lat:parseFloat(this.thread.lat),
                    lng:parseFloat(this.thread.lng),
                },
            // center:{lat: parseInt(this.userlat),lng: parseInt(this.userlng)},
            markers:[
                {
                    position:{
                        //lat: 42.363211, lng:-105.071875
                        lat:parseFloat(this.thread.lat),
                        lng:parseFloat(this.thread.lng),
                    }
                
                },
            ],
            zoom:2,

        }
    },
}
</script>

<style>

</style>