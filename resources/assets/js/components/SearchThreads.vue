<template>
    <div>
        <div class="col-md-8">
            <li v-for="(thread, index) in allThreads" :key="index">
                <a :href="thread.path">                  
                
                  <text-highlight :queries="q">{{ thread.title }}</text-highlight>
                </a>
            </li>
            <paginator :dataSet="threads"></paginator>
            
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

    import Paginator from './Paginator'

export default {
    props:['threads','query'],
    components:{
        Paginator
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
            axios.get('/search-vue?query='+this.q,{
                query:this.query
            }).then(res=>{
                //this.allThreads = null,
                this.allThreads = res.data.data
                console.log(res.data.data)
            })
        }
    }


}
</script>

<style>

</style>