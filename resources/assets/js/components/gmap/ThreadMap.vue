<template>
  <GmapMap
    :center="center"
    :zoom="zoom"
    map-type-id="terrain"
    style="width: 100%; height: 800px"
    >
        <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
        />
    </GmapMap>
</template>

<script>
export default {
    data(){
        return{
            center:{lat: 42.363211, lng:-105.071875},
            markers:[],
            zoom:5
        }
    },
    methods:{
        fetchLocations(){
            axios.post('/map/nearest-threads',{
                center:this.center, 
            }).then(res=>{
                let data = res.data;
                eventBus.$emit('markers_fetched', data);
                //console.log(res)
            })
        }
    },
    created(){
        this.fetchLocations();
        eventBus.$on('markers_fetched', data=>{
            this.markers = data.markers;

            if(this.markers.length>0){
                this.center=data.markers[0].position;
            }

            console.log('evetn data', data);
        });
    }
}
</script>

<style>

</style>