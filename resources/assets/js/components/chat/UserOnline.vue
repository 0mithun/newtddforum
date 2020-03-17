<template>
  <div class="status">
        <div v-if="onlineUser()">
            <i class="fa fa-circle online" ></i> <span v-if="type == 'status'">online</span>
        </div>
        <div v-else>
            <i class="fa fa-circle offline"></i> <span  v-if="type == 'status'"> ofline</span>
        </div>
    </div>
</template>

<script>
export default {
    props:['user', 'type'],

    data(){
        return{

        }
    },
    computed:{
        getOnlineUsers(){
            return this.$store.getters.onlineUsers;
        }
    },
    created(){
        
    },
    methods:{
        onlineUser(){
            return _.find(this.getOnlineUsers,{'id':this.user.id})
        }
    },
}
</script>

<style>
     .online, .offline, .me {
            margin-right: 3px;
            font-size: 10px;
        }
        .online {
            color: #86bb71;
        }
        .offline {
            color: #e38968;
        }

        .status {
            display: inline-block;
        }
        .offline{
            color:#92959e;
            font-size: 10px
        }
</style>