<template>
    <div class="col-md-1">
        <div v-if="signedIn">
            <button v-if="!authorize('isBan')" data-toggle="tooltip" title="Report Thread Creator" class="btn btn-xs btn-danger ml-a red-bg pull-right"  data-placement="right">
                <span class="glyphicon glyphicon-flag"></span>
            </button>
        </div>
        <div v-else>
            <button data-toggle="tooltip" title="Please Login To Report Creator" class="btn btn-xs btn-danger ml-a red-bg pull-right" data-placement="top" onclick="alert('Please log in or sign up')">
                <span class="glyphicon glyphicon-flag"></span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>