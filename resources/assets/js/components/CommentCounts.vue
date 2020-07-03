<template>
    <div  class="counts-item">
        <i class="fa fa-comment-alt"></i><strong>{{ replyCounts }}</strong>  comments
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
            replyCounts(){
                return abbreviate(this.thread.replies_count, 1)
            }
        },
    }
</script>


<style  scoped>
    .counts-item{
    }
</style>