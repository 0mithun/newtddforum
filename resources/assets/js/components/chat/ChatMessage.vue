<template>
    <div class="container">
            <div class="row">
                    <div class="col-md-4">
                        <div class="people-list" id="people-list">
                            <!-- <div class="search">
                                <input type="text" placeholder="search" />
                                <i class="fa fa-search"></i>
                            </div> -->
                            <ul class="list">
                                <li class="clearfix" v-for="(friend, index) in friendLists" :key="index" @click.prevent="selectUser(friend.id)" :class="friend.id == selectFriend ? 'active-friend': '' " >
                                    <img :src="friend.profileAvatarPath" alt="avatar" style="width:50px; border-radius:50%;height:50px" />
                                    <div class="about">
                                        <div class="name" style="color:black">{{ friend.name }}</div>
                                        
                                        <user-online :user="friend" type="status"></user-online>
                                        
                                        <!-- <div class="status">
                                            <div v-if="onlineUser(friend.id)">
                                                <i class="fa fa-circle online" ></i> online
                                            </div>
                                            <div v-else>
                                                <i class="fa fa-circle "></i> ofline
                                            </div>

                                            
                                        </div> -->
                                    </div>
                                    <div>
                                        <span class="glyphicon glyphicon-comment messageStatus" style="color:red;display:none;" :id="'messageStatus'+friend.id "></span>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-md-8">

                        <div class="chat">
                            <div class="chat-header clearfix">
                                <img :src="friendMessages.friend.profileAvatarPath" alt="avatar" v-if="friendMessages.friend" style="width:50px; border-radius:50%;height:50px"/>
                                
                                <div class="chat-about" v-if="friendMessages.friend">
                                    <div class="chat-with" >
                                        <a :href="'/profiles/'+friendMessages.friend.username">{{ friendMessages.friend.name }}</a>
                                        
                                        </div>
                                    <div class="chat-num-messages" v-if="friendMessages.messages.length==0">No Message</div>

                                    <div class="chat-num-messages" v-if="last_seen">
                                        Last seen  <span>{{ last_seen }}</span>
                                    </div>
                                    <div class="chat-num-messages" v-else>
                                        <div class="" v-if="lastSeen">
                                            Last seen <span>{{ lastSeen }}</span>
                                        </div>
                                       
                                    </div>
                                </div>
                                <i class="fa fa-star"></i>
                            </div> <!-- end chat-header -->
                            
                            <div id="chat-history" class="chat-history" v-chat-scroll >
                                
                                <ul style="margin:0px; padding:0px">

                                    <!-- <li  v-if="friendMessages.messages">
                                        <div class="alert alert-danger" role="alert" >No Message...</div>
                                    </li> -->

                                    <li class="clearfix" v-for="(friendMessage, index) in friendMessages.messages" :key="index" >
                                        <div v-if="friendMessages.friend.id == (friendMessage.to || friendMessages.from) ">

                                            <div class="message-data align-right">
                                                
                                            <span class="message-data-time" >{{ formateMessageTime(friendMessage.created_at)}}</span> &nbsp; &nbsp;
                                            <span class="message-data-name" >{{ authuser.name}}</span> 
                                            
                                            <!-- <i class="fa fa-circle me"></i> -->
                                            
                                            <img :src="authuser.profileAvatarPath" alt="" style="width:40px; border-radius:50%;height:40px">
                                            </div>
                                            <div class="message other-message float-right">
                                                {{ friendMessage.message }}
                                            </div>

                                        </div>
                                        <div v-else>
                                            <li>
                                                <div class="message-data">
                                                    
                                                <img :src="friendMessages.friend.profileAvatarPath" alt="" style="width:40px; border-radius:50%;height:40px">
                                                <span class="message-data-name">

                                                    <!-- <i class="fa fa-circle online"></i> -->
                                                    <user-online :user="friendMessages.friend" type="message"></user-online>


                                                    {{ friendMessages.friend.name}}</span> 
                                                <span class="message-data-time">{{ formateMessageTime(friendMessage.created_at)}}</span>
                                                </div>
                                                <div class="message my-message" @click="seenMessage(friendMessage)">
                                                    {{ friendMessage.message }}
                                                    
                                                </div>
                                            </li>
                                        </div> 
                                    </li>                                   
                                
                                </ul>
                                
                            </div> <!-- end chat-history -->
                            
                            
                            <!-- <div class="chat-message clearfix" v-if="selectFriend"> -->
                            <div class="chat-message clearfix">
                                <div v-if="typing">   {{ typing.user.name }} <img src="/images/png/pen.png" alt=""> .............</div>
                                <textarea @keydown.enter="sendMessage" @keyup="typingMessage(friendMessages.friend.id)" name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="2" class="form-control" v-model="message" :disabled="!selectFriend"></textarea>
<!--                                         
                                <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                                <i class="fa fa-file-image-o"></i>
                                
                                <button>Send</button> -->
                        
                            </div> 
                        
                        </div> <!-- end chat -->
                    </div>
        
                </div> <!-- end container -->
    
            </div>
    
</template>

<script>

    import moment from 'moment-timezone';
    moment.tz.setDefault("America/New_York");

    export default {
        props:['authuser'],
        data(){
            return{
                message: '',
                selectFriend:null,
                typing:'',
                last_seen:'',
                typingClock:null,
            }
        },
        computed:{
            friendLists(){
                return this.$store.getters.friendLists
            },
            friendMessages(){
                return this.$store.getters.friendMessage;
            },
            lastSeen(){
                
                if(this.$store.getters.friendMessage.last_seen != null){
                    
                    if(this.$store.getters.friendMessage.last_seen.seen_at !=null){
                        let last_seen = this.$store.getters.friendMessage.last_seen.seen_at;
                        return  moment(last_seen, 'YYYY-MM-DD HH:mm:ss').fromNow()
                    }                   
                    
                }
            }
        },
        mounted(){
            
            this.$store.dispatch('friendList', this.authuser.id);
            //this.$store.dispatch('otherMessageUserList');

            Echo.private(`chat.${this.authuser.id}`)
            .listen('MessegeSentEvent', (e) => {
                
                if(e.message.friend_message == 0){

                    
                    this.$store.dispatch('friendList', this.authuser.id);

                    //this.$store.dispatch('otherMessageUserList', this.authuser.id);
                }
               
                if(this.selectFriend == e.message.from){
                    this.selectUser(e.message.from, true)
                }else{
                    this.selectUser(e.message.from, false)
                                        
                }
                //this.messageSound();

               
            });


            


        },
        created(){
            
            Echo.private('typingevent')
            .listenForWhisper('typing', (e) => {
                
                if(this.selectFriend){
                    if(e.user.id == this.friendMessages.friend.id && e.userId == this.authuser.id){
                        this.typing = e;
                       
                       if(this.typingClock){
                        clearTimeout(this.typingClock)
                       }

                        this.typingClock = setTimeout(()=>{
                            this.typing = '';
                        }, 2000)
                    }
                }
               
                

            });

            //User Online

            // Echo.join(`liveUser`)
            // .here((users) => {
            //     //this.onlineUsers = users;
            //     this.$store.dispatch('onlineUsers', users)
            // })
            // .joining((user) => {
            //     this.onlineUsers.push(user)
            // })
            // .leaving((user) => {
            //     let onlineUsers = _.remove(this.onlineUsers, (n)=>{
            //         return n.id != user.id
            //     })
            //     this.onlineUsers = onlineUsers;
            // });




        },
        methods:{

            messageSound(){
                let sound = new Audio('https://notificationsounds.com/soundfiles/acc3e0404646c57502b480dc052c4fe1/file-sounds-1140-just-saying.mp3');
                sound.play();
            },
            
            seenMessage(message){
                this.last_seen = '';
                if(message.seen_at == null){
                    
                    axios.post('/chat-seen-message',{
                        message:message.id
                    }).then(res=>{
                        
                        // this.selectUser(res.data.from, true);
                        this.last_seen = moment(res.data.seen_at, 'YYYY-MM-DD HH:mm:ss').fromNow()
                    })
                }
            },
            typingMessage(userId){
                Echo.private('typingevent')
                .whisper('typing', {
                    'user':this.authuser,
                    'typing':this.message,
                    'userId': userId
                    
                });
            },
            selectUser(friend, change=true){
                
                if(change){
                    this.selectFriend = friend;
                    this.$store.dispatch('userMessage', {friend});
                    this.messageStatus(friend, false);
                }else{
                    this.messageStatus(friend, true)
                }
                
                this.message = '';                
                // this.scrollToBottom();
                
            },
            messageStatus(friend, show = false){
                let element = "messageStatus"+friend;
                let container = this.$el.querySelector("#"+element);

                if(show){
                    container.style.display = "block";
                }else{
                    container.style.display = "none";
                }
            },
            scrollToBottom(){
                let container = this.$el.querySelector("#chat-history");
                let height = container.scrollHeight;
                container.scrollTop = height
               
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
                        this.selectUser(this.selectFriend)
                    })
                }
                
                
            },
            selected(index){
                if(this.selectFriend == index){
                    return 'active-friend';
                }
            },
            onlineUser(userId){
                return _.find(this.onlineUsers,{'id':userId})
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
        .active-friend{
            background: white;
        }
        .people-list ul[data-v-61f93f4f] {
            padding: 0;
        }
        .people-list ul li[data-v-61f93f4f] {
            cursor: pointer;
            padding: 10px 20px;
        }
        .chat .chat-history[data-v-61f93f4f] {
            padding: 10px 15px;
        }

        .people-list ul[data-v-61f93f4f] {
            height: 670px;
        }
        .chat .chat-message[data-v-61f93f4f] {
            padding: 15px;
        }
        .badge-danger{
            background: red
        }
        .messageStatus{
            color: #d84660;
            float: right;
            margin-top: 10px;
            font-size: 20px;
        }
</style>