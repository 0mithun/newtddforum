<template>
    <div>
         
        <div style="display:inline;margin-right:20px" v-cloak>
                <!-- <button class="btn btn-danger btn-sm pull-right" @click.prevent="addFriend">Request Sent</button> -->


                
                <div v-if="isFriend">
                    <!-- <button class="btn btn-success btn-sm pull-right" @click.prevent="addFriend" v-if="sentRequst">Request Sent</button> -->
                    <button class="btn btn-danger btn-sm pull-right" @click.prevent="addFriend">Urfiend</button>
                </div>
                <div v-cloak v-else>
                    <button class="btn btn-success btn-sm pull-right" @click.prevent="addFriend" v-if="sentRequst">Request Sent</button>
                    <button class="btn btn-primary btn-sm pull-right" @click.prevent="addFriend" v-else>Add Friend</button>
                </div>

        </div>
        <div style="display:inline;">
             <button style="margin-right:20px" class="btn btn-default btn-sm pull-right" @click="sendMessage">Message</button>
         </div>
        
    </div>
</template>

<script>
    export default {
        props:['recipient'],
        data(){
            return {
                sentRequst:false,
                isFriend:false
            }
        },
        created(){
            this.checkFriend()
            this.checkSentRequest()
        },
        methods:{
            sendMessage(){
                console.log('send Message')
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
                    console.log(res)
                    if(res.data  ==true){
                        this.sentRequst = true
                    }
                })
            }



        }

    }
</script>

<style  scoped>
    [v-cloak]{
        display: none;
    }
</style>