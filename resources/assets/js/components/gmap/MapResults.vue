<template>
    <div class="map_thraed_list ">
        <div class="list-group" >
            <a style="padding:10px 5px" href="#" class="list-group-item " 
                v-for="(item, i) in results" :key="i"
                @click="focusMarker(i)"
                :class="isActive(i)"
                >
                    <div class="col-md-10">
                        {{ item.text }}
                    </div>
                    <button class="btn-default btn btn-sm" @click="viewThread(item.thread_id)" > View</button>
                    
                    <!-- <small>3 days ago</small> -->
                
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
           results:[],
           activeIndex:null
        }
    },
    methods:{
         isActive(index){
           //return this.activeIndex == index ? 'active' : '';
            //return 'active';
        },
        focusMarker(index){
            this.activeIndex = index;
            eventBus.$emit('markers_result_clicked', index);
        },
        viewThread(thread_id){
            this.getThreadDetails(thread_id);
            
        },
        getThreadDetails(thread_id){            
            axios.post('/map/thread-details',{
                thread_id
            }).then(res=>{
                window.open(res.data.path, "_blank");
            })
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
    .map_thraed_list {
   height: 100vh;
    overflow-y: scroll;
}
</style>
