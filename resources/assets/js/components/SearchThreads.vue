<template>
    <div>
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

                        <div class="btn-group">
                            <button class="btn btn-link btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                G/PG <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu search-dropdown">
                                <li>
                                        <div class="checkbox filter-item">
                                        <label>
                                            <input type="checkbox" name="rated" id=""  :value="0" v-model="filter_rated">   G-rated  
                                        </label>
                                    </div>
                                </li>
                                    <li>
                                        <div class="checkbox filter-item">
                                        <label>
                                            <input type="checkbox" name="rated" id=""  :value="13" v-model="filter_rated">   PG-rated 
                                        </label>
                                    </div>
                                </li>
                                    <li>
                                        <div class="checkbox filter-item">
                                        <label>
                                            <input type="checkbox" name="rated" id=""  :value="18" v-model="filter_rated">    R-rated 
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>


                        <div class="btn-group">
                            <button class="btn btn-link btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Include anecdotes <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu search-dropdown">
                                <li>
                                        <div class="checkbox filter-item">
                                        <label>
                                            <input type="checkbox" name="rated" id="" value="C"  v-model="category">   Celebrities 
                                        </label>
                                    </div>
                                </li>
                                    <li>
                                        <div class="checkbox filter-item">
                                        <label>
                                                <input type="checkbox" name="rated" id=""  value="N" v-model="category" >   Other notables 
                                        </label>
                                    </div>
                                </li>
                                    <li>
                                        <div class="checkbox filter-item">
                                        <label>
                                            <input type="checkbox" name="rated" id=""  value="O" v-model="category" >    Other People
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="btn-group">
                            <button class="btn btn-link btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Emojis <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu search-dropdown">
                                <li v-for="(emoji, index) in emojis" :key="index">
                                    <div class="checkbox filter-item "  >
                                        <label>
                                            <input type="checkbox" name="like" id="" :value="emoji.name" class="filter-emoji-checkbox" v-model="filter_emojis"> 
                                            <span class="filter-emoji"  :class="emoji.name"  :key="index" v-bind:style="{ 'background-image': 'url(/images/emojis/' + emoji.name + '.png)' }">
                                                {{emoji.name}}
                                            </span>
                                        </label>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        
                        <!-- <div class="btn-group">
                            <button class="btn btn-link btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                All Tags <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu search-dropdown">
                                <li>
                                    <div class="checkbox filter-item">
                                        <label>
                                            <input type="checkbox" name="rated" id=""  :value="0" v-model="filter_rated">   G-rated  
                                        </label>
                                    </div>
                                </li>
                                
                            </ul>
                        </div> -->

                    </div>
                </div>
            </div>
        </div>

        <div class="panel panel-default" v-if="search == false && allThreads.length == 0">
            <div class="panel-body">
                <h3 class="text-center">No Results Found</h3>
            </div>
        </div>

        <div class="panel panel-default" v-if="search">
            <div class="panel-body">
                <h3 class="text-center">Search.....</h3>
            </div>
        </div>
        


        <div class="panel panel-default" v-for="(thread, index) in allThreads" :key="index">
            <div class="card-header thread_thumb">
                <a :href="thread.path"> 
                    <img :src="thread.threadImagePath" class="thread-image" :alt="thread.title">
                </a>
            </div>
            <div class="panel-body">
                <div class="thread_title">
                        <a :href="thread.path"> <strong> <text-highlight :queries="q">{{ thread.title }}</text-highlight></strong></a> 
                </div>
                    

                    <text-highlight :queries="q">
                        {{ thread.excerpt }}
                    </text-highlight>
                
                <div class="thread_creator">
                        <a href="#" class="creator_name" v-if="thread.anonymous ==1">
                            <img src="/images/default.png"
                                alt="anonymous"
                                width="25"
                                height="25"
                                class="avatar-photo">
                            <user-online :user="thread.creator"></user-online>
                            anonymous
                        </a>
                        <a :href="thread.creator.username" class="creator_name" v-else>
                            <img :src="thread.creator.profileAvatarPath"
                                :alt="thread.creator.name"
                                width="25"
                                height="25"
                                class="avatar-photo">
                            <user-online :user="thread.creator"></user-online>
                            {{ thread.creator.name }}
                        </a> 
                </div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-md-3 social-share-btn">
                        <fb-share :thread="thread"></fb-share>
                        <twitter-share :thread="thread"></twitter-share>
                    </div>
                    <div class="col-md-4 thread_item_counts">
                        <view-counts :thread="thread"></view-counts>
                        <comment-counts :comment_counts="thread.replies_count"></comment-counts>
                        <point-counts :like_count="thread.like_count" :dislike_count="thread.dislike_count"></point-counts>
                    </div>
                    <div class="col-md-5 thread_emoji_count_map">
                        <emoji-counts :thread="thread"></emoji-counts>
                        <div  class="thread-map-icon">
                                <img src="/images/png/map-icon-red.png" alt="" v-if="thread.location !=null">                                    
                                <img src="/images/png/map-icon-black.png" alt="" v-else>                                    
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <SearchPagination :dataSet="threads" @changedSearch="fetch" :query="q"></SearchPagination>
           
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
            category:[],
            // famous:[0,1],
            filter_tags:[],
            emojis: ''
        }
    },
    watch:{
        filter_emojis(filter){
            this.filterThreads();
        },
        filter_rated(filter){
            this.filterThreads();
        },
        category(filter){
             this.filterThreads();

        },
        filter_tags(filter){
            this.filterThreads();
        }
    },
    created(){
        this.allThreads = this.threads.data;
        this.getAllEmojis();
    },
    computed:{
        
    },
    
    methods:{
        filterThreads(){
            let data = this.threads.data;
            // if(this.filter_emojis.length>0){
            //     data = this.filterByEmojis(this.filter_emojis, data);
            // }

            if(this.filter_rated.length>0){
                data = this.filterByRated(this.filter_rated, data);
            }

            if(this.category.length>0){
                data = this.filterByCategory(this.category, data);
            }

            if(this.filter_tags.length>0){
                data = this.filterByTags(this.filter_tags, data);
            }

            this.allThreads = data;
        },
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
            return filterThreads;
        },

        filterByRated(filter, data){
            let filterThreads = _.filter(data, (thread)=>{  
                if(_.includes(filter, thread.age_restriction)){
                    return true;
                }
            });
            return filterThreads;
        },
        filterByCategory(filter, data){

            let category = [];
            let newThreads = _.filter(data, (thread)=>{
                let threadCategory = thread.category;
                if(threadCategory !== null){
                    category = threadCategory.split('|');
                    return category.length>0;
                }
            })
            let filterThreads = _.filter(newThreads, (thread)=>{
                for(let i = 0; i<category.length; i++){
                    if(_.includes(filter, category[i])){
                        return true;
                    }
                }
            })
            return filterThreads;
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
            return filterThreads;
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
            axios.get('/threads/search?query='+this.q+'&sort_by='+this.sort_by).then(res=>{
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
            axios.get('threads/search?query='+this.q+'&page='+page)
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
        display: flex;
        margin-right: 20px;
        padding-left: 30px;
        align-items: center;
    }

    .filter-rated{
        display: inline-flex;
        margin-right: 20px;
        padding-top: 3px;
        margin-top: 10px;

    }

    .btn-link{
        color: #636b6f;
        text-decoration: none;
    }
    
    .btn-link:hover{
        color: #636b6f;
        text-decoration: none;
    }

    .btn-link:focus{
        outline: none;
        text-decoration: none;
    }
    .dropdown-menu.search-dropdown{
        font-size: 12px;
    }

    .dropdown-menu.search-dropdown li a:hover{
        background-color: #eeeeee;
    }

    .filter-item{
        display: block;
        padding: 3px 20px;
        clear: both;
        font-weight: normal;
        line-height: 1.6;
        color: #333333;
        white-space: nowrap;
    }
     .filter-item:hover{
          background-color: #eeeeee;
     }
</style>