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

                        <div class="row">
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
                        <div class="row filter-row">
                            <div class="col-md-12">
                                <button class="btn btn-default mt-10" @click.prevent="filterOpen = !filterOpen">Filter 
                                    <!-- <span class="glyphicon  glyphicon-chevron-up "></span> -->
                                    <span class="glyphicon " :class="filterOpen ? 'glyphicon-chevron-up': 'glyphicon-chevron-down'" ></span>
                                </button>
                            </div>
                            <div class="col-md-12" v-if="filterOpen">
                                <div class="col-md-2">
                                    <h3 class="filter-title">Emoji</h3>
                                </div>
                                <div class="col-md-10">
                                        <div class="col-md-2 filter-emoji filter-emoji-like">
                                            <input type="checkbox" name="like" id="" value="like" class="filter-emoji-checkbox" v-model="filter_emojis"> Like
                                        </div>
                                        <div class="col-md-2 filter-emoji filter-emoji-love">
                                            <input type="checkbox" name="like" id="" value="love" class="filter-emoji-checkbox" v-model="filter_emojis"> Love
                                        </div>
                                        <div class="col-md-2 filter-emoji filter-emoji-haha">
                                            <input type="checkbox" name="like" id="" value="haha" class="filter-emoji-checkbox" v-model="filter_emojis"> Haha
                                        </div>
                                        <div class="col-md-2 filter-emoji filter-emoji-wow">
                                            <input type="checkbox" name="like" id="" value="wow" class="filter-emoji-checkbox" v-model="filter_emojis"> Wow
                                        </div>
                                        <div class="col-md-2 filter-emoji filter-emoji-sad">
                                            <input type="checkbox" name="like" id="" value="sad" class="filter-emoji-checkbox" v-model="filter_emojis"> Sad
                                        </div>
                                        <div class="col-md-2 filter-emoji filter-emoji-angry">
                                            <input type="checkbox" name="like" id="" value="angry" class="filter-emoji-checkbox" v-model="filter_emojis"> Angry
                                        </div>
                                </div>
                            </div>
                        </div>

                </div>
            </div>

            <div class="panel" v-if="search ==false && allThreads.length == 0">
                    <h3 class="text-center">No Results Found</h3>
            </div>

            <div class="panel" v-if="search">
                    <h3 class="text-center">Search.....</h3>
            </div>


            <div class="panel" v-for="(thread, index) in allThreads" :key="index" style="margin-bottom:10px" v-else>
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
    props:['threads','query','restriction'],
    components:{
        SearchPagination
    },

    data(){
        return {
            allThreads:[],
            paginateThreads:this.threads,
            q:this.query,
            sort_by:'created_at',
            filterOpen:false,
            filter_emojis:[],
            search: false
        }
    },
    watch:{
        filter_emojis(filter){
            if(filter.length>0){
                let newThreads = _.filter(this.threads.data, (thread)=>{
                    return thread.emojis.length>0;
                })
                let filterThreads = _.filter(newThreads, (thread)=>{
                    for(let i = 0; i<thread.emojis.length; i++){
                        if(_.includes(filter, thread.emojis[i].name)){
                            return true;
                        }
                    }
                })
                this.allThreads = filterThreads;
            }else{
                this.allThreads = this.threads.data;
            }
            
        }
    },
    created(){
        this.allThreads = this.threads.data;

        // let filtered = this.threads.data.filter((value)=>{
        //         if(this.restriction ==1){
        //             return ;
        //         }else{
        //             return value.age_restriction == 0;
        //         }
            
        // })
        // this.allThreads = filtered;

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
                let threads = _.orderBy(this.threads.data, [this.sort_by],'desc');
                this.allThreads = threads;
                this.threads.data = threads; 
            }
             
        },
        ago(created_at) {
            return  moment(created_at, 'YYYY-MM-DD HH:mm:ss').fromNow() + '...';
        },
        searchThreads(){
            if(this.q == ''){
                return;
            }
            this.search = true;
            axios.get('/search-vue?query='+this.q+'&sort_by='+this.sort_by).then(res=>{
                //console.log(res.data.data);

               
                this.allThreads = res.data.data;
                this.threads.data = res.data.data

                let pageUrl = {
                    prev_page_url: res.data.prev_page_url,
                    next_page_url: res.data.next_page_url,
                }
                eventBus.$emit('pageChange',pageUrl );

                this.search = false;
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

<style scoped>
    .panel-body .row {
        margin-top: 0px;
    }

    .row.filter-row{
        margin-top: 10px;
    }
    .filter-title{
        margin-top:10px;
    }
    .filter-emoji{
        background-size: 28px;
        background-image: url(/images/png/facebook_iconset.png);
        background-repeat: no-repeat;
        margin-left: 0px;
        /* padding-top: 10px; */
        padding-left: 35px!important;
        margin-top: 10px;
        height: 28px;
        /* display: inline-block; */
        /* margin-right: 10px; */
        padding-right: 0px!important;

        font-weight: bold;
    }
    .filter-emoji-like{
        background-position: 0px -84px;
    }
     .filter-emoji-love{
        background-position: 0px -112px;
    }
     .filter-emoji-haha{
        background-position: 0px -56px;
    }
     .filter-emoji-wow{
        background-position: 0px -224px;
    }
     .filter-emoji-sad{
        background-position: 0px -140px;
    }
     .filter-emoji-angry{
        background-position: 0px 0px;
    }

    .filter-emoji-checkbox{
        margin-top: 10px;
    }
</style>