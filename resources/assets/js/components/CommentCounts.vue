<template>
    <div  class="counts-item" :style="commentStyle">
        <i class="fa fa-comment"></i><strong>{{ replyCounts }}</strong> comments
    </div>
</template>

<script>
    export default {
        props: ['comment_counts', 'color'],
        
        computed: {
            replyCounts(){
                return abbreviate(this.comment_counts, 1)
            },
            commentStyle(){
                return {
                    color: this.color ? this.color : '#636b6f'
                }
            }
        },
    }
</script>


<style  scoped>
    .counts-item{
        
    }
</style>