<template>
    <div>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" v-if="showModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="exampleModalLabel">New message</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <textarea class="form-control" id="message-text" v-model="newMessage"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click.prevent="sendMessage" :disabled="newMessage == ''">Send message</button>
                    </div>
                </div>
            </div>
         </div>
                
        <div style="display:inline;margin-right:20px;" v-cloak>
                <div v-if="isFriend">
                    <button class="btn btn-danger btn-sm pull-right" @click.prevent="unFriend">Urfiend</button>
                </div>
                <div v-cloak v-else>
                    <button class="btn btn-success btn-sm pull-right" v-if="sentRequst">Request Sent</button>
                    <button class="btn btn-primary btn-sm pull-right" @click.prevent="addFriend" v-else>Add Friend</button>
                </div>

        </div>
         <!-- v-if="recipient.userprivacy.send_me_message" -->
        <div style="display:inline;" v-if="showMessageButton">
             <!-- <button type="button" class="btn btn-default btm-sm" data-toggle="modal" data-target="#exampleModal">Message</button> -->
             <button  type="button" style="margin-right:20px;" class="btn btn-default btn-sm pull-right" data-toggle="modal" data-target="#exampleModal" @click="showModal=true">Message</button>
         </div>
        
    </div>
</template>

<script>
    export default {
        props:['recipient'],
        data(){
            return {
                sentRequst:false,
                isFriend:false,
                newMessage:'',
                showModal:false,
                showMessageButton:false
            }
        },
        created(){
            this.checkFriend()
            this.checkSentRequest()
            this.checkPrivacy()
        },
        methods:{
            checkPrivacy(){
                if(this.isFriend){
                    this.showMessageButton = true;
                }else if(this.recipient.userprivacy.send_me_message ===2){
                   this.showMessageButton = true;
                }else if(this.recipient.userprivacy.send_me_message ===1){
                    this.showMessageButton = false;
                }
            },
            sendMessage(){
                axios.post('/chat-send-message',{
                    message:this.newMessage,
                    friend:this.recipient.id,
                    friend_message:this.isFriend
                }).then(res=>{
                    this.newMessage  = '';
                    this.showModal = false;
                    $('#exampleModal').modal('hide');
                });


            },
            addFriend(){
                axios.post('/friend/sent-request',{
                    recipient:this.recipient.id
                }).then(res=>{
                    this.sentRequst = true;
                })
            },
            checkFriend(){
                axios.post('/friend/check-friend',{
                    recipient:this.recipient.id
                }).then(res=>{
                    if(res.data  ==true){
                        this.isFriend = true
                    }
                })
            },
            checkSentRequest(){
                axios.post('/friend/check-request-sent',{
                    recipient:this.recipient.id
                }).then(res=>{
                    if(res.data  ==true){
                        this.sentRequst = true
                    }
                })
            },
            unFriend(){
                 axios.post('/friend/unfriend',{
                    friend:this.recipient.id
                }).then(res=>{
                    this.isFriend = false;
                    this.sentRequst = false;
                    
                })
            }



        }

    }
</script>

<style  scoped>
    [v-cloak]{
        display: none;
    }
    .modal-backdrop.in {
        display: none!important;
    }

    .modal-backdrop.in {
    opacity: 0.5;
    filter: alpha(opacity=50);
    display: none;
}
</style>