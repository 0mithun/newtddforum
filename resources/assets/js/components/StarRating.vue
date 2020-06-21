<template>
    <div class="col-md-12">
        <VStar v-model="rating" @rating-selected="setRating" :star-size="20" :increment="0.5" :show-rating="false" active-color="#f43939" inactive-color="#808080" :padding="5"></VStar>
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
                rating:0
            }
        },
        created(){
            this.isRated()
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
            }
        },
        computed:{
            signedIn() {
            return window.App.user ? true : false;
        },
    },

    }
</script>

<style  scoped>
    .vue-star-rating{
        justify-content: flex-end !important;
    }
</style>