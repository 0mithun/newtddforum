<template>
    <div  class="counts-item">
        <i class="fa fa-arrow-up"></i><strong>{{ pointCounts }}</strong>  points
    </div>
</template>

<script>
    export default {
        props: {
            thread:{
                type:Object
            }
        },

        computed: {
            pointCounts(){
                return abbreviate((this.thread.like_count - this.thread.dislike_count), 1) 
            }
        },
    }
</script>

<style  scoped>
    .counts-item{
    }
</style>