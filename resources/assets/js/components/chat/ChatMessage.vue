<template>
    <div class="container">
            <div class="row">
                    <div class="col-md-4">
                        <div class="people-list" id="people-list">
                            <div class="search">
                                <input type="text" placeholder="search" />
                                <i class="fa fa-search"></i>
                            </div>
                            <ul class="list">
                                <li class="clearfix" v-for="(friend, index) in friendLists" :key="index" @click.prevent="selectUser(friend.id)" >
                                    <img :src="friend.profileAvatarPath" alt="avatar" style="width:50px; border-radius:50%;height:50px" />
                                    <div class="about">
                                        <div class="name" style="color:black">{{ friend.name }}</div>
                                        <div class="status">
                                            <i class="fa fa-circle online"></i> online
                                        </div>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-md-8">

                        <div class="chat">
                            <div class="chat-header clearfix">
                                <img :src="friendMessages.friend.profileAvatarPath" alt="avatar" v-if="friendMessages.friend" style="width:50px; border-radius:50%;height:50px"/>
                                
                                <div class="chat-about">
                                <div class="chat-with" v-if="friendMessages.friend">{{ friendMessages.friend.name }}</div>
                                <div class="chat-num-messages">already 1 902 messages</div>
                                </div>
                                <i class="fa fa-star"></i>
                            </div> <!-- end chat-header -->
                            
                            <div class="chat-history" v-chat-scroll>
                                <ul>


                                    <li class="clearfix" v-for="(friendMessage, index) in friendMessages.messages" :key="index">
                                        <div v-if="friendMessages.friend.id == (friendMessage.to || friendMessages.from) ">

                                            <div class="message-data align-right">
                                                
                                            <span class="message-data-time" >{{ formateMessageTime(friendMessage.created_at)}}</span> &nbsp; &nbsp;
                                            <span class="message-data-name" >{{ friendMessage.user.name}}</span> <i class="fa fa-circle me"></i>
                                            <img :src="authuser.profileAvatarPath" alt="" style="width:40px; border-radius:50%;height:40px">
                                            </div>
                                            <div class="message other-message float-right">
                                                {{ friendMessage.message }}
                                            </div>

                                        </div>
                                        <div v-else>
                                            <li>
                                                <div class="message-data">
                                                    
                                                    <img :src="friendMessage.user.profileAvatarPath" alt="" style="width:40px; border-radius:50%;height:40px">
                                                <span class="message-data-name"><i class="fa fa-circle online"></i>{{ friendMessage.user.name}}</span>
                                                <span class="message-data-time">{{ formateMessageTime(friendMessage.created_at)}}</span>
                                                </div>
                                                <div class="message my-message">
                                                    {{ friendMessage.message }}
                                                </div>
                                            </li>
                                        </div>
                                    </li>
                               
                                
                                </ul>
                                
                            </div> <!-- end chat-history -->
                            
                            <div class="chat-message clearfix" v-if="selectFriend">
                                <textarea @keydown.enter="sendMessage" name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="2" class="form-control" v-model="message"></textarea>
                                        
                                <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                                <i class="fa fa-file-image-o"></i>
                                
                                <button>Send</button>
                        
                            </div> <!-- end chat-message -->
                        
                        </div> <!-- end chat -->
                    </div>
        
                </div> <!-- end container -->
    
            </div>
    
</template>

<script>

    import moment from 'moment';
    export default {
        props:['authuser'],
        data(){
            return{
                message: '',
                selectFriend:null
            }
        },
        computed:{
            friendLists(){
                return this.$store.getters.friendLists
            },
            friendMessages(){
                return this.$store.getters.friendMessage;
            }
        },
        mounted(){
            this.$store.dispatch('friendList', this.authuser.id);
        },
        created(){
        
        },
        methods:{
            selectUser(friend){
                this.selectFriend = friend;
                this.message = '';
                this.$store.dispatch('userMessage', {friend});
            },
            formateMessageTime(timestamp){
               return moment(timestamp).format('MMM Do YYYY, h:mm:ss A');
            //    return moment(timestamp).fromNow();
               //return moment(timestamp).calendar();
            },
            sendMessage(e){
                e.preventDefault();

                if(this.message !=''){
                    axios.post('/chat-send-message',{
                        message:this.message,
                        friend:this.selectFriend
                    }).then(res=>{
                        // console.log(res);
                        this.selectUser(this.selectFriend)
                        // this.message = '';
                    })
                }
                
                
            }
        }
    }
</script>

<style  scoped>

    /* .people-list {
            width: 260px;
            float: left;
        } */
        .people-list .search {
            padding: 20px;
        }
        .people-list input {
            border-radius: 3px;
            border: none;
            padding: 14px;
            color: white;
            background: #6a6c75;
            width: 90%;
            font-size: 14px;
        }
        .people-list .fa-search {
            position: relative;
            left: -25px;
        }
        .people-list ul {
            padding: 20px;
            height: 770px;
            background: #6a6c75
        }
        .people-list ul li {
            padding-bottom: 20px;
            cursor: pointer;
        }
        .people-list img {
            float: left;
        }
        .people-list .about {
            float: left;
            margin-top: 8px;
        }
        .people-list .about {
            padding-left: 8px;
        }
        .people-list .status {
            color: #92959e;
        }
        .chat {
            float: left;
            background: #f2f5f8;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            color: #434651;
        }
        .chat .chat-header {
            padding: 20px;
            border-bottom: 2px solid white;
        }
        .chat .chat-header img {
            float: left;
        }
        .chat .chat-header .chat-about {
            float: left;
            padding-left: 10px;
            margin-top: 6px;
        }
        .chat .chat-header .chat-with {
            font-weight: bold;
            font-size: 16px;
        }
        .chat .chat-header .chat-num-messages {
            color: #92959e;
        }
        .chat .chat-header .fa-star {
            float: right;
            color: #d8dadf;
            font-size: 20px;
            margin-top: 12px;
        }
        .chat .chat-history {
            padding: 30px 30px 20px;
            border-bottom: 2px solid white;
            overflow-y: scroll;
            height: 575px;
        }
        .chat .chat-history .message-data {
            margin-bottom: 15px;
        }
        .chat .chat-history .message-data-time {
            color: #a8aab1;
            padding-left: 6px;
        }
        .chat .chat-history .message {
            color: white;
            padding: 18px 20px;
            line-height: 26px;
            font-size: 16px;
            border-radius: 7px;
            margin-bottom: 30px;
            width: 80%;
            position: relative;
        }
        .chat .chat-history .message:after {
            bottom: 100%;
            left: 7%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
            border-bottom-color: #86bb71;
            border-width: 10px;
            margin-left: -10px;
        }
        .chat .chat-history .my-message {
            background: #86bb71;
        }
        .chat .chat-history .other-message {
            background: #94c2ed;
        }
        .chat .chat-history .other-message:after {
            border-bottom-color: #94c2ed;
            left: 93%;
        }
        .chat .chat-message {
            padding: 30px;
        }
        .chat .chat-message textarea {
            /* width: 100%; */
            /* border: none;
            padding: 10px 20px;
            font: 14px/22px "Lato", Arial, sans-serif;
            margin-bottom: 10px;
            border-radius: 5px; */
            resize: none;
        }
        .chat .chat-message .fa-file-o, .chat .chat-message .fa-file-image-o {
            font-size: 16px;
            color: gray;
            cursor: pointer;
        }
        .chat .chat-message button {
            float: right;
            color: #94c2ed;
            font-size: 16px;
            text-transform: uppercase;
            border: none;
            cursor: pointer;
            font-weight: bold;
            background: #f2f5f8;
        }
        .chat .chat-message button:hover {
            color: #75b1e8;
        }
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
        .me {
            color: #94c2ed;
        }
        .align-left {
            text-align: left;
        }
        .align-right {
            text-align: right;
        }
        .float-right {
            float: right;
        }
        .clearfix:after {
            visibility: hidden;
            display: block;
            font-size: 0;
            content: " ";
            clear: both;
            height: 0;
        }
        
        .people-list ul li {
            padding-bottom: 20px;
            list-style: none;
        }
        .chat-history li{
            list-style: none;
        }
        .chat {
            width: 100%;
        }

        /**
            Change Chat Color
         */
        .chat .chat-history .other-message[data-v-61f93f4f] {
            background: #34a4ef;
        }

         .chat .chat-history .other-message {
            background: #34a4ef;
        }
        .chat .chat-history .other-message:after {
            border-bottom-color:  #34a4ef;;
            left: 93%;
        }

         .chat .chat-message button:hover {
            color:#34a4ef;
        }


        .me {
            color:#34a4ef;
        }

        #people-list ul{
            overflow-x: scroll
        }
</style>