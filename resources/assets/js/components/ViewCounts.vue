<template>
    <div class="counts-item">
        <i class="fa fa-eye"></i><strong>{{ viewCounts }}</strong> views
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
            viewCounts(){
                return abbreviate(this.thread.visits, 1)
            }
        },
    }
</script>


<style  scoped>
    .counts-item{
    }
</style>