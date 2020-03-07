<template>   
    <div class="">
        <div class="">
            {{ this.infoContent.title }}
        </div>
        <div class="" style="margin-top:10px">
            <img :src="infoContent.creator.profileAvatarPath" alt="" width="25"> Posted By: {{ this.infoContent.creator.name }}   
            
            <span>
                <a :href="infoContent.path" class="btn btn-default btn-xs pull-right" target="_blank">View</a>
            </span>         
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
    },
    created(){
        eventBus.$on('markers_fetched', data=>{
            this.results=data.results
        });
    }
}
</script>

<style>

</style>