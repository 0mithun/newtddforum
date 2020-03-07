<template>
   
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">{{ this.infoContent.title }}</h4>
        </div>
        <div class="panel-body">
            <div class="col-md-3">

            </div>
            <div class="col-md-9">
                {{ this.infoContent.creator.name }}
            </div>
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