<template>
    <div class="col-md-12">
        <form action="">
            <div class="col-md-9">
                <gmap-autocomplete
                    class="form-control"
                    placeholder="Type location for search thread"
                    @place_changed="setRelatedThread">
                </gmap-autocomplete>  
            </div>
            <div class="col-md-3">
                <select name="" id="" class="form-control" v-model="radius" @change="fetchNearestLocations">
                    <option value="">Select Radius</option>  
                    <option value="100">100</option>  
                    <option value="200">200</option>  
                    <option value="300">300</option>   
                    <option value="400">400</option>   
                    <option value="500">500</option>   
                </select>    
            </div>
        </form>
    </div>
  
</template>

<script>
export default {
    props:['userlat', 'userlng'],
    data(){
        return{
           radius:200,
        //    center:{lat:42.363211, lng:-105.071875},
            center:{lat: parseInt(this.userlat),lng: parseInt(this.userlng)},
           radiusOptions:[100, 200, 300,]
        }
    },
    methods:{
        fetchNearestLocations(){
            axios.post('/map/nearest-threads',{
                center:this.center, radius:this.radius
            }).then(res=>{
                let data = res.data;
                eventBus.$emit('markers_fetched', data);
            })
        },
        setRelatedThread(place){
            let center = {
                lat:place.geometry.location.lat(),
                lng:place.geometry.location.lng()
            };
            this.center = center;
            this.fetchNearestLocations();
        },
        onRadiusChange(){
            //console.log(this.radius);
        }
    },
}
</script>

<style>

</style>