<template>
    <li class="dropdown" >
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
             <!-- <i class="fa fa-envelope text-default" >  </i> -->

             <img class="navbar-icon pen" src="/images/mail.png" alt="">
              <span style="color:red;font-weight:bold;font-size:14px" >{{ unreadNotifications.length }}</span>
        </a>
        <ul class="dropdown-menu message-notification  dropdown-menu-left list-group"  v-if="messageNotifications.length">
            <li class="list-group-item less-padding" v-for="(notification, index) in messageNotifications" :key="index">
                <a class="chat" href="/chat" @click="markAsRead(notification)">
                    <div class=" profile">                       
                        <img :src="notification.data.friend.profileAvatarPath" alt="" class="profile-image">
                         
                    </div>
                    <div class=" message">
                        <div class="profilename">
                            <b class="pull-left" v-text="notification.data.friend.name"></b>  
                        </div>

                        <div class="message-content">
                            <div class="message-body">

                            <span class="" v-text="notification.data.message.message"></span>
                            </div>
                            <div class="message-time">

                            <span style="margin-left:3px" class="text-muted" v-text="formateMessageTime(notification.data.message.created_at)"></span>
                            </div>
                        </div>
                        
                    </div>
                </a>

            </li>
            <li class="list-group-item">
                 <a href="/chat">
                    Go to Messenger
                </a>
            </li>

        </ul>
        <ul class="dropdown-menu message-notification dropdown-menu-left" v-else>
            <li class="list-group-item">
                <span class="text-center">No Message</span>
            </li>
            <li class="list-group-item">
                 <a href="/chat">
                    Go to Messenger
                </a>
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
            //    return moment(timestamp).format('MM-D-YYYY, h:mm:ss A');
               return moment(timestamp).startOf('hour').fromNow();
            //    return moment(timestamp).calendar();
            },
        }
    }
</script>

<style  scoped>
    li.list-group-item {
        /* width: 500px;
        height: 55px; */
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
        /* padding:5px ; */
        /* border:none; */
         border-bottom: 1px solid #ddd;
    }
   
    
        .navbar-nav > li > .dropdown-menu.message-notification {
            overflow-y: scroll;
            width: 300px;
        }
         .dropdown-menu.message-notification > li {
           
            /* margin-top: 5px; */
        }
        .dropdown-menu.message-notification > li > a {
            display: block;
            /* padding: 3px 20px; */
            clear: both;
            font-weight: normal;
            line-height: 1.6;
            color: #333333;
            white-space: normal;
            overflow: hidden;
            height: auto;
            text-align: justify;
            /* width: 100%; */
        }
        .less-padding{
            padding: 5px;
        }

        .dropdown-menu.message-notification > li > a.chat{
            display: flex;
            justify-content: space-between;
        }

        .profile{
            width:15%;
        }
        .message{
            width:85%;
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: space-around;
            justify-content: space-between;
            font-size: 12px;
        }

        .profilename{
            align-self: flex-end;
        }
        .message-content{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-left: 5px;
        }

        .message-body{
            
        }

        .message-time{

        }

</style>