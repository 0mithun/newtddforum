<template>
    <div>
        <div class="about-header">
            <h4 class="about-name" >About {{profile_user.name  }}</h4>
            <button class="btn btn-default btn-sm about-edit-btn">
            <i class="fa fa-pencil"></i>
            </button>
        </div>
        <div v-html="profile_user.about"></div>
        <profile-map :profile_user="profile_user"></profile-map>
    </div>
</template>

<script>
    export default {
        props:['profile_user']
        
    }
</script>

<style lang="scss" scoped>
    .about-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 15px;
    }
    .about-name{
    color: black;
    font-weight: bold;
    padding: 0;
    }
    .about-edit-btn{
    font-size: 16px;
    color: black;
    }
</style>