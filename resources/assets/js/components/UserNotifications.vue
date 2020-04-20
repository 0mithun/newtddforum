<template>
    <li class="dropdown" >
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
             <span class="glyphicon glyphicon-bell"></span> <span style="color:red;font-weight:bold;font-size:16px" >{{ unreadNotifications.length }}</span>
        </a>

        <ul class="dropdown-menu" v-if="unreadNotifications.length">
            <li v-for="(notification, index) in unreadNotifications" :key="index">
                <a :href="notification.data.link"
                   v-text="notification.data.message"
                   @click="markAsRead(notification)"
                   target="_blank"
                ></a>
            </li>


        </ul>
        <ul class="dropdown-menu" v-else>
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
                    //console.log(notification);
                    //1this.notifications.unshift(notification)
                    this.fetchNotifications();
                });
            
        },
        computed:{
            unreadNotifications(){
                return this.notifications.filter(notification=>{
                    return notification.read_at == null;
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
            }
        }
    }
</script>
