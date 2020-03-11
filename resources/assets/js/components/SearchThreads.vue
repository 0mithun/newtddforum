<template>
    <div>
        <div class="col-md-8">
            <li v-for="(thread, index) in allThreads" :key="index">
                <a :href="thread.path">                  
                
                  <text-highlight :queries="q">{{ thread.title }}</text-highlight>
                </a>
            </li>
            <SearchPagination :dataSet="threads" @changedSearch="fetch" :query="q"></SearchPagination>
            
        </div>

        <div class="col-md-4">
            <div class="panel">
                <div class="panel-heading">
                    Search
                </div>
                <div class="panel-body">
                    <form action="">
                        <div class="form-group">
                            <input type="text" name="query" id="q" v-model="q" class="form-control" placeholder="Search Threads" @keyup="searchThreads">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import SearchPagination from './SearchPagination'

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
    
    methods:{
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