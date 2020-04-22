<template>
    <div class="row" >
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
                    <option value="1000">1000</option>  
                    <option value="2000">2000</option>  
                    <option value="5000">5000</option>  
                </select>    
            </div>
    </div>
  
</template>

<script>
export default {
    props:['userlat', 'userlng'],
    data(){
        return{
           radius:0,
        //    center:{lat:42.363211, lng:-105.071875},
            center:{lat: parseInt(this.userlat),lng: parseInt(this.userlng)},
           radiusOptions:[100, 200, 300,400,500,1000, 2000, 5000]
        }
    },
    created(){
        this.fetchNearestLocations();
    },
    methods:{
        fetchNearestLocations(){
            
            axios.post('/map/nearest-threads',{
                center:this.center, radius:this.radius
            }).then(res=>{
                let data = res.data;
                let center = this.center;
                let zoom = 5;
                eventBus.$emit('markers_fetched', data);
                eventBus.$emit('change_center', center);
                if(this.radius ==0){
                    zoom=2;
                }
                else if(this.radius ==500){
                    zoom=6;
                }
                else if(this.radius ==1000){
                    zoom =5
                }else if(this.radius == 2000){
                    zoom =4
                } else if(this.radius == 5000){
                    zoom =3
                }
                eventBus.$emit('zoom_decreased',zoom);
            })
        },
        setRelatedThread(place){
            this.radius = 500;
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