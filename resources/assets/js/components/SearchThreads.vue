<template>
    <div>
        <div class="col-md-12">
            <!-- <li v-for="(thread, index) in allThreads" :key="index">
                <a :href="thread.path">                  
                
                  <text-highlight :queries="q">{{ thread.title }}</text-highlight>
                </a>
            </li> -->
            <div class="panel">
                <div class="panel-body">
                    <div class="form-group">
                        <input type="text" name="query" id="q" v-model="q" class="form-control" placeholder="Search Threads" @keyup="searchThreads">
                    </div>
                </div>
            </div>

            <div class="panel" v-if="!allThreads.length">
                    <h3 class="text-center">No Results Found</h3>
            </div>


            <div class="panel" v-for="(thread, index) in allThreads" :key="index" style="margin-bottom:10px">
                <div class="panel-heading" style="padding-top:5px">
                    <h4 style="margin-top:5px">
                        <a :href="thread.path">
                        <text-highlight :queries="q">{{ thread.title }}</text-highlight>
                    </a> 
                    </h4>
                    <div class="media" style="margin-top: 0px;">
                         <div class="media-left">
                            <a href="#">
                                <img :src="thread.threadImagePath"
                                    alt="thread.title"
                                    width="25"
                                    height="25"
                                    class="mr-1 avatar-photo">
                            </a>
                        </div>
                        <div class="media-body">
                            <div class="col-md-9" style="padding:0px;">
                                <h5 class="media-heading thread-info">
                                    <a :href="'/threads?by='+thread.creator.username">{{ thread.creator.name }}</a>
                                    <small> Posted:  <span v-text="ago(thread.created_at)"></span></small>
                                </h5>
                            </div>                  

                        </div>
                    </div>            

                </div>
            </div>


            <SearchPagination :dataSet="threads" @changedSearch="fetch" :query="q"></SearchPagination>
            
        </div>
    </div>
</template>

<script>

    import SearchPagination from './SearchPagination';
    import moment from 'moment';

export default {
    props:['threads','query'],
    components:{
        SearchPagination
    },

    data(){
        return {
            allThreads:[],
            paginateThreads:this.threads,
            q:this.query
        }
    },
    created(){
        this.allThreads = this.threads.data
    },
    computed:{
        
    },
    
    methods:{
        ago(created_at) {
            return  moment(created_at, 'YYYY-MM-DD HH:mm:ss').fromNow() + '...';
        },
        searchThreads(){
            axios.get('/search-vue?query='+this.q).then(res=>{
                this.allThreads = res.data.data;
                let pageUrl = {
                    prev_page_url: res.data.prev_page_url,
                    next_page_url: res.data.next_page_url,
                }
                eventBus.$emit('pageChange',pageUrl );
            })
        },
        fetch(page) {

            axios.get('/search-vue?query='+this.q+'&page='+page)
            .then(res=>{
                this.allThreads = res.data.data
                let pageUrl = {
                    prev_page_url: res.data.prev_page_url,
                    next_page_url: res.data.next_page_url,
                }
                eventBus.$emit('pageChange',pageUrl );
            })
        },
    }


}
</script>

<style>

</style>