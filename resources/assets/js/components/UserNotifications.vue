<template>
    <li class="dropdown" >
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
             <!-- <span class="glyphicon glyphicon-bell"></span>  -->
            <img class="navbar-icon pen" src="/images/bell.png" alt="">

             <span style="color:red;font-weight:bold;font-size:16px;" >{{ unreadNotifications.length }}</span>
        </a>

        <ul class="dropdown-menu user-notification" v-if="unreadNotifications.length">
            <li v-for="(notification, index) in unreadNotifications" :key="index">
                <a :href="notification.data.link"
                   v-text="notification.data.message"
                   @click="markAsRead(notification)"
                   target="_blank"
                ></a>
            </li>


        </ul>
        <ul class="dropdown-menu user-notification" v-else>
            <li>
                <a href="#">No Notification</a>
            </li>
        </ul>
    </li>
</template>

<script>
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
                    
                    //1this.notifications.unshift(notification)
                    this.fetchNotifications();
                    
                    if(notification.type != "App\\Notifications\\NewMessageNotification"){
                        this.playNotification()
                    }
                });
            
        },
        computed:{
            unreadNotifications(){
                return this.notifications.filter(notification=>{
                    //return notification.read_at == null;
                    return notification.type != "App\\Notifications\\NewMessageNotification" && notification.read_at == null;
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
                axios.get('/profiles/' + window.App.user.username + '/notifications')
                .then(response => this.notifications = response.data);
            },
            playNotification(){
                // let sound = new Audio('http://soundbible.com/mp3/glass_ping-Go445-1207030150.mp3');
                let sound = new Audio('https://notificationsounds.com/soundfiles/08b255a5d42b89b0585260b6f2360bdd/file-sounds-1137-eventually.mp3');
                sound.play();
            }
        }
    }
</script>

<style lang="scss" scoped>
   

      .navbar-nav > li > .dropdown-menu.user-notification {
            overflow-y: scroll;
            width: 250px;
        }
         .dropdown-menu.user-notification > li {
            border-bottom: 1px solid #ddd;
            margin-top: 5px;
        }
        .dropdown-menu.user-notification > li > a {
            display: block;
            padding: 3px 20px;
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
</style>