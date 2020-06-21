<template>   
    <div class="info-content" @click="openThread">
        <div class="">
            {{ this.infoContent.title }}
        </div>
        <div class="" style="margin-top:10px" v-if="infoContent.anonymous ==0">
            <img :src="infoContent.creator.profileAvatarPath" alt="" width="25"> Posted By: {{ this.infoContent.creator.name }}   
        </div>
        <div class="" style="margin-top:10px" v-else>
            <img src="/images/default.png" alt="" width="25"> Posted By: Anonymous
        </div>
    </div>  
</template>

<script>
export default {
    props:['infoContent'],
    data(){
        return{
           drawer:null,
           results:[]
        }
    },
    methods:{
        focusMarker(index){
            eventBus.$emit('markers_result_clicked', index);
        },
        openThread(){
            window.open(
            this.infoContent.path,
            '_blank' // <- This is what makes it open in a new window.
            );
        }
    },
    created(){
        eventBus.$on('markers_fetched', data=>{
            this.results=data.results
        });
    }
}
</script>

<style scoped>
    .info-content{
        cursor: pointer;
    }
</style>