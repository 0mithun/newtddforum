<template>
        <!-- <VStar v-model="rating" @rating-selected="setRating" :star-size="20" :increment="0.5" :show-rating="false" active-color="#f43939" inactive-color="#808080" :padding="5"></VStar> -->
        <div class="star-rating">
            <VStar v-model="rating" @rating-selected="setRating" :star-size="15" :increment="0.5" :show-rating="false" active-color="#ffa931"  :padding="5"></VStar>
            <span class="rating-count">
            {{ ratingCount }} Ratings
            </span>
        </div>

</template>

<script>
    export default {
        props: ['thread'],
        components:{
            VStar: ()=>import('vue-star-rating')
        },
        data(){
            return {
                rating:0,
                total:0
            }
        },
        computed:{
            signedIn() {
                return window.App.user ? true : false;
            },
            ratingCount(){
                return abbreviate(this.total, 1)
            }
        },
        created(){
            this.isRated();
            this.totalRatings()
        },
        methods:{
            setRating(){
                if (!this.signedIn) {
                    return false;
                }
                axios.post(`/thread/${this.thread.id}/rating`,{
                        rating: this.rating,
                        threadId:  this.thread.id
                }).then(res => {
                    
                });
            },
            isRated(){
                 axios.get(`/thread/${this.thread.id}/is-rated`).then(res => {
                    if(res.data.success){
                        this.rating = res.data.data.rating;
                    }
                });
            },
            totalRatings(){
                axios.get(`/thread/${this.thread.id}/total`).then(res => {
                    if(res.data.success){
                        this.total = res.data.count;
                    }
                });
            }
        },

    }
</script>

<style  scoped>
    .star-rating{
        /* justify-content: flex-end !important; */
        display: flex
    }
    .rating-count{
        color: #1b6ca8;
    }
</style>