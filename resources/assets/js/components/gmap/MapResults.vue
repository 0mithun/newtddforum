<template>
    <div class="col-md-12">
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" 
                v-for="(item, i) in results" :key="i"
                @click="focusMarker(i)"
                >
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ item.text }}</h5>
                    <!-- <small>3 days ago</small> -->
                </div>
                <!-- <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p> -->
            </a>
        </div>
    </div>
  
</template>

<script>
export default {
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