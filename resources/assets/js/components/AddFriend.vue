<template>
    <div>
        <!-- Small modal -->
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Your Messagfe</button> -->

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
                
        <div style="display:inline;margin-right:20px" v-cloak>
                <!-- <button class="btn btn-danger btn-sm pull-right" @click.prevent="addFriend">Request Sent</button> -->


                
                <div v-if="isFriend">
                    <!-- <button class="btn btn-success btn-sm pull-right" @click.prevent="addFriend" v-if="sentRequst">Request Sent</button> -->
                    <button class="btn btn-danger btn-sm pull-right" @click.prevent="unFriend">Urfiend</button>
                </div>
                <div v-cloak v-else>
                    <button class="btn btn-success btn-sm pull-right" v-if="sentRequst">Request Sent</button>
                    <button class="btn btn-primary btn-sm pull-right" @click.prevent="addFriend" v-else>Add Friend</button>
                </div>

        </div>
        <div style="display:inline;">
             <!-- <button type="button" class="btn btn-default btm-sm" data-toggle="modal" data-target="#exampleModal">Message</button> -->
             <button  type="button" style="margin-right:20px" class="btn btn-default btn-sm pull-right" data-toggle="modal" data-target="#exampleModal" @click="showModal=true">Message</button>
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
                showModal:false
            }
        },
        created(){
            this.checkFriend()
            this.checkSentRequest()
        },
        methods:{
            sendMessage(){
                
                //this.showModal = false;
                //console.log(this.recipient)

                //console.log(this.newMessage)
                axios.post('/chat-send-message',{
                    message:this.newMessage,
                    friend:this.recipient.id,
                    friend_message:this.isFriend
                }).then(res=>{
                    console.log(res)
                    this.newMessage  = '';
                    this.showModal = false;
                    $('#exampleModal').modal('hide');

                    //this.selectUser(this.selectFriend)
                });


            },
            addFriend(){
                ///friend/sent-request
                axios.post('/friend/sent-request',{
                    recipient:this.recipient.id
                }).then(res=>{
                    this.sentRequst = true;
                })
            },
            checkFriend(){
                // /friend/check-friend
                axios.post('/friend/check-friend',{
                    recipient:this.recipient.id
                }).then(res=>{
                    // this.sentRequst = true;
                    //console.log(res)
                    if(res.data  ==true){
                        this.isFriend = true
                    }
                })
            },
            checkSentRequest(){
                //'/friend/check-request-sent
                axios.post('/friend/check-request-sent',{
                    recipient:this.recipient.id
                }).then(res=>{
                    // this.sentRequst = true;
                    
                    if(res.data  ==true){
                        this.sentRequst = true
                    }
                })
            },
            unFriend(){
                console.log('Unfriend')
                //profiles/{user}/unfriend

                 axios.post('/friend/unfriend',{
                    friend:this.recipient.id
                }).then(res=>{
                    //  this.sentRequst = true;
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