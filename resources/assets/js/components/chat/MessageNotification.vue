<template>
    <li class="dropdown" >
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
             <!-- <i class="fa fa-envelope text-default" >  </i> -->

             <img class="navbar-icon pen" src="images/mail.png" alt="">
              <span style="color:red;font-weight:bold;font-size:14px" >{{ unreadNotifications.length }}</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-left list-group"  v-if="messageNotifications.length">
            <li class="list-group-item" v-for="(notification, index) in messageNotifications" :key="index">
                <a href="/chat" @click="markAsRead(notification)">
                    <div class="col-md-1 profile">                       
                        <img :src="notification.data.friend.profileAvatarPath" alt="" class="profile-image">
                    </div>
                    <div class="col-md-11 message">
                        
                        <b class="pull-left" v-text="notification.data.friend.name"></b>
                        <span class="pull-right" v-text="formateMessageTime(notification.data.message.created_at)"></span>                     
                        <br>
                        <span class="text-muted" v-text="notification.data.message.message"></span>
                    </div>
                </a>

            </li>

        </ul>
        <ul class="dropdown-menu dropdown-menu-left" v-else>
            <li class="list-group-item" style="height:30px;width: 175px">
                <span class="text-center">No Message</span>
            </li>
        </ul>
    </li>
</template>

<script>
    import moment from 'moment-timezone';
    moment.tz.setDefault("America/New_York");

    export default {
        data() {
            return {
                notifications: []
            }
        },

        created() {
            
                this.fetchNotifications();
                Echo.private(`App.User.${window.App.user.id}`)
                .notification((notification) => {
                    this.fetchNotifications();
                    if(notification.type == "App\\Notifications\\NewMessageNotification"){
                        this.playNotification()
                    }
                    
                });
            
        },
        computed:{
            unreadNotifications(){
                return this.notifications.filter(notification=>{
                    return notification.type == "App\\Notifications\\NewMessageNotification" && notification.read_at == null;
                })
            },
            messageNotifications(){
                 return this.notifications.filter(notification=>{
                    return notification.type == "App\\Notifications\\NewMessageNotification"
                })
            }
        },

        methods: {
            markAsRead(notification) {
                axios.delete('/profiles/' + window.App.user.username + '/notifications/' + notification.id).then(res=>{
                    
                    let notifications = this.notifications.filter(item=>{
                        return item.id != notification.id;
                    });
                    this.notifications = notifications;                   
                })
            },
            fetchNotifications(){
                axios.get('/profiles/' + window.App.user.username + '/message-notifications')
                .then(response=>{
                    
                    let newArray = _.uniqBy(response.data, "data.friend.id");

                    this.notifications = newArray;
                });
            },
            playNotification(){
                 let sound = new Audio('http://soundbible.com/mp3/glass_ping-Go445-1207030150.mp3');
                //let sound = new Audio('https://notificationsounds.com/soundfiles/08b255a5d42b89b0585260b6f2360bdd/file-sounds-1137-eventually.mp3');
                sound.play();
            },
            formateMessageTime(timestamp){
               return moment(timestamp).format('MM-D-YYYY, h:mm:ss A');
            //    return moment(timestamp).fromNow();
               //return moment(timestamp).calendar();
            },
        }
    }
</script>

<style  scoped>
    li.list-group-item {
        width: 500px;
        height: 55px;
        vertical-align: center;
    }
    li.list-group-item:last-child{
        border-bottom: none;
        
    }
    li.list-group-item:first-child{
        border-top: none;
    }
    li.list-group-item a:hover{
        background: none;
    }
    li.list-group-item:hover{
        background:#dddfe2;
    }
    .profile-image{
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .profile{
            padding: 0;
    }
    .message{

    }
    .dropdown-menu > li > a {
        padding: 0px;
    }
    li.list-group-item{
        padding:5px ;
    }
</style>