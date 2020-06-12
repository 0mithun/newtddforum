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
                                <button class="btn btn-default btn-sm mt-10" @click.prevent="filterOpen = !filterOpen">Filter 
                                    <!-- <span class="glyphicon  glyphicon-chevron-up "></span> -->
                                    <span class="glyphicon " :class="filterOpen ? 'glyphicon-chevron-up': 'glyphicon-chevron-down'" ></span>
                                </button>
                            </div>
                            <div class="col-md-12" v-if="filterOpen">
                                <div class="row">
                                     <div class="col-md-2">
                                        <h4 class="filter-title">Emoji</h4>
                                    </div>
                                    <div class="col-md-10">
                                            <div class=" filter-emoji filter-emoji-like" :class="emoji.name" v-for="(emoji, index) in emojis" :key="index" v-bind:style="{ 'background-image': 'url(/images/emojis/' + emoji.name + '.png)' }" >
                                                <input type="checkbox" name="like" id="" :value="emoji.name" class="filter-emoji-checkbox" v-model="filter_emojis"> {{emoji.name}}
                                            </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <h4 class="filter-title">Include</h4>
                                    </div>
                                    <div class="col-md-10">
                                        <div class=" filter-rated " >
                                            <input type="checkbox" name="rated" id=""  :value="0" v-model="filter_rated">   G-rated 
                                        </div>
                                        <div class=" filter-rated " >
                                            <input type="checkbox" name="rated" id=""  :value="13" v-model="filter_rated">   PG-rated 
                                        </div>
                                        <div class=" filter-rated " >
                                            <input type="checkbox" name="rated" id=""  :value="18" v-model="filter_rated">    R-rated
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-2">
                                        <h4 class="filter-title">Include anecdotes</h4>
                                    </div>
                                    <div class="col-md-10">
                                        <div class=" filter-rated " >
                                            <input type="checkbox" name="rated" id="" value="celebrities"  v-model="tags">   Celebrities 
                                        </div>
                                        <div class=" filter-rated " >
                                            <input type="checkbox" name="rated" id=""  :value="1" v-model="famous" >   Notables 
                                        </div>
                                        <div class=" filter-rated " >
                                            <input type="checkbox" name="rated" id=""  :value="0" v-model="famous" e>    Other People
                                        </div>
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


            <div class="panel" v-for="(thread, index) in allThreads" :key="index" style="margin-bottom:10px;" v-else>
                <div class="panel-heading" style="padding-top:5px;">
                    <h4 style="margin-top:5px;">
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
            filter_rated:[],
            search: false,
            emojis:[],
            famous:[0,1],
            tags:[]
        }
    },
    watch:{
        filter_emojis(filter){
            if(filter.length>0){
               this.filterByEmojis(filter, this.threads.data);
            }else{
                this.allThreads = this.threads.data;
            }
            if(this.filter_rated.length>0){
                this.filterByRated(this.filter_rated, this.allThreads);
            }

            if(this.famous.length>0){
                this.filterByFamaous(this.famous, this.allThreads);
            }

            if(this.tags.length>0){
                this.filterByTags(this.tags, this.allThreads);
            }
        },
        filter_rated(filter){
            if(filter.length>0){
                this.filterByRated(filter, this.threads.data);
            }else{
                this.allThreads = this.threads.data;
            }

            if(this.filter_emojis.length>0){
                this.filterByEmojis(this.filter_emojis, this.allThreads);
            }

            if(this.famous.length>0){
                this.filterByFamaous(this.famous, this.allThreads);
            }
             if(this.tags.length>0){
                this.filterByTags(this.tags, this.allThreads);
            }
        },
        famous(filter){
            if(filter.length>0){
               this.filterByFamaous(filter, this.threads.data);
            }else{
                this.allThreads = this.threads.data;
            }

            if(this.filter_rated.length>0){
                this.filterByRated(this.filter_rated, this.allThreads);
            }
            if(this.filter_emojis.length>0){
                this.filterByRated(this.filter_emojis, this.allThreads);
            }

            if(this.tags.length>0){
                this.filterByTags(this.tags, this.allThreads);
            }

        },
        tags(filter){
            if(filter.length>0){
               this.filterByTags(filter, this.threads.data);
            }else{
                this.allThreads = this.threads.data;
            }

            if(this.filter_rated.length>0){
                this.filterByRated(this.filter_rated, this.allThreads);
            }
            if(this.filter_emojis.length>0){
                this.filterByRated(this.filter_emojis, this.allThreads);
            }

            if(this.famous.length>0){
                this.filterByFamaous(this.famous, this.allThreads);
            }
            
        }
    },
    created(){
        this.allThreads = this.threads.data;
        this.getAllEmojis();
    },
    computed:{
        
    },
    
    methods:{
        filterByEmojis(filter, data){
             let newThreads = _.filter(data, (thread)=>{
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
        },

        filterByRated(filter, data){
            let filterThreads = _.filter(data, (thread)=>{  
                if(_.includes(filter, thread.age_restriction)){
                    return true;
                }
            });
            this.allThreads = filterThreads;
        },
        filterByFamaous(filter, data){
           let filterThreads = _.filter(data, (thread)=>{  
                if(_.includes(filter, thread.is_famous)){
                    return true;
                }
            });
            this.allThreads = filterThreads;
        },

        filterByTags(filter, data){
            let newThreads = _.filter(data, (thread)=>{
                return thread.tags.length>0;
            })
            let filterThreads = _.filter(newThreads, (thread)=>{
                for(let i = 0; i<thread.tags.length; i++){
                    if(_.includes(filter, thread.tags[i].name.toLowerCase())){
                        return true;
                    }
                }
            })
            this.allThreads = filterThreads;
        },

        getAllEmojis(){
            axios.get('/all-emojis')
            .then(res=>{
                this.emojis = res.data
            })
        },
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
        height: 24px;
        background-color: transparent;
        background-size: 24px;
        background-repeat: no-repeat;
        padding-left: 30px;
        display: inline-flex;
        margin-right: 20px;
        padding-top: 3px;
        margin-top: 10px;
    }
    .filter-rated{
        display: inline-flex;
        margin-right: 20px;
        padding-top: 3px;
        margin-top: 10px;

    }
/* 
    .funny{
      background-image :url(/images/emojis/funny.png);
    }
    .sad{
      background-image :url(/images/emojis/sad.png);
    }
    .strange{
      background-image :url(/images/emojis/strange.png);
    }
    .inspiring{
      background-image :url(/images/emojis/inspiring.png);
    }
    .amazing{
      background-image :url(/images/emojis/amazing.png);
    }
    .dumb{
      background-image :url(/images/emojis/dumb1.png);
    }
    .famous{
      background-image :url(/images/emojis/famous.png);
    } */

</style>