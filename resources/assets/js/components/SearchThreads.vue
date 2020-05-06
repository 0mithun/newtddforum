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

                        <div class="col-md-10">

                            

                            <div class="input-group">
                                <!-- <input type="text" class="form-control" placeholder="Search for..."> -->
                                <input type="text" name="query" id="q" v-model="q" class="form-control" placeholder="Search Threads" @keyup="searchThreads">
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button" @click="searchThread">Search!</button>
                                </span>
                            </div><!-- /input-group -->

                        </div>

                        <div class="col-md-2">
                            <select name="" id="" class="form-control" v-model="sort_by" @change="sortBy">
                                
                                <option value="created_at">Most Recent</option>
                                <!-- <option value="top_rated">Top Rated</option> -->
                                <option value="like_count">Most Liked</option>
                                <option value="favorite_count">Most Favorited</option>
                                <option value="visits">Most Visits</option>

                                <!-- <option value="most_favorited">Most Favorited</option> -->
                                <!-- <option value="top_rated">Top Rated</option> -->

                            </select>
                        </div>

                </div>
            </div>

            <div class="panel" v-if="allThreads.length == 0">
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
            q:this.query,
            sort_by:'created_at'
        }
    },
    created(){
        this.allThreads = this.threads.data;
        //this.allThreads = this.threads.data;
        //  this.allThreads =_.orderBy(this.threads.data, [this.sort_by],'desc');
    },
    computed:{
        
    },
    
    methods:{
        searchThread(){
            // /threads/search
            let url = '/threads/search?query='+this.q;

            window.location.href = url;
          
        },
        sortBy(){
            if(this.sort_by == 'top_rated'){


                //axios.get('/search-by-top-rated?query='+this.q).then(res=>{
                  //  console.log(res.data);
                
                    // this.allThreads = res.data.data;
                    // let pageUrl = {
                    //     prev_page_url: res.data.prev_page_url,
                    //     next_page_url: res.data.next_page_url,
                    // }
                    // eventBus.$emit('pageChange',pageUrl );

               // })


            }else{
                this.allThreads =_.orderBy(this.threads.data, [this.sort_by],'desc');
            }
             
        },
        ago(created_at) {
            return  moment(created_at, 'YYYY-MM-DD HH:mm:ss').fromNow() + '...';
        },
        searchThreads(){
            if(this.q == ''){
                return;
            }
            axios.get('/search-vue?query='+this.q+'&sort_by='+this.sort_by).then(res=>{
                //console.log(res.data.data);

               
                this.allThreads = res.data.data;
                //_.sortBy(this.allThreads, 'visits');
                //let threads = _.sortBy(res.data.data, ['visits'],'desc');

                //this.allThreads = threads;
                 //console.log(this.allThreads);


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