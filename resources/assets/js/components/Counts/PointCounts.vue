<template>
    <div  class="counts-item">
        <i class="fa fa-arrow-up"></i><strong>{{ pointCounts }}</strong>  points
    </div>
</template>

<script>
    export default {
        props: ['like_count','dislike_count'],

        computed: {
            pointCounts(){
                return abbreviate((this.like_count - this.dislike_count), 1) 
            }
        },
    }
</script>

<style  scoped>
    .counts-item{
    }
</style>