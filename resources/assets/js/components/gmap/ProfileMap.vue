<template>
  <div >
      <div style="padding: 15px 0">
        <map-location :location="location"></map-location>
      </div>
      <div v-if="profile_user.lat != null || profile_user.lng !=null">
        <GmapMap
        :center="center"
        :zoom="zoom"
        map-type-id="terrain"
        style="width: 100%; height: 40vh"
        
        >
        <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="false"
        />

        </GmapMap>
      </div>
  </div>
    
</template>

<script>
export default {
    props:['profile_user'],
    data(){
        return{
            center:{
                    lat:parseFloat(this.profile_user.lat),
                    lng:parseFloat(this.profile_user.lng),
                },
            markers:[
                {
                    position:{
                        //lat: 42.363211, lng:-105.071875
                       lat:parseFloat(this.profile_user.lat),
                        lng:parseFloat(this.profile_user.lng),
                    }
                
                },
            ],
        zoom:4,          

        }
    },
    computed:{
        location(){
            if(this.profile_user.lat !=null || this.profile_user.lng !=null){
                return `${this.profile_user.city}, ${this.profile_user.country}`
            }
            return null
        }
    }
   
    
}
</script>

<style>

</style>