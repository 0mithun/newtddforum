<template>
    <button :class="classes" @click="subscribe">Subscribe</button>
</template>

<script>
    export default {
        props: ['thread'],
        data(){
            return{
                isThreadSubscribed:false
            }
        },
        computed: {
            classes() {
                return ['btn', this.isThreadSubscribed ? 'btn-primary' : 'btn-default'];
            },
            signedIn(){
                return  (window.App.user)? true : false;
            },
        },
        created(){
            this.checkIsSubscribe()
        },

        methods: {
            subscribe() {
                axios[
                    (this.isThreadSubscribed ? 'delete' : 'post')
                ](location.pathname + '/subscriptions');

                this.isThreadSubscribed = ! this.isThreadSubscribed;
            },
            checkIsSubscribe(){
               
                if(this.signedIn){
                    axios.post('/thread/check-thread-subscribe',{
                        thread: this.thread.id,
                        user:window.App.user.id
                    })
                    .then((res=>{
                        if(res.data.subscribed){
                            return this.isThreadSubscribed = true;
                        }
                       return this.isThreadSubscribed = false;
                    }));
                }
                return this.isThreadSubscribed = false;
            }
        }
    }
</script>
