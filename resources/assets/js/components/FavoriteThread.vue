

<template>
  <div class="tools-single-item"  >
    <button class="btn  thread-items-show-tools-btn" @click="toggle" :class="classes">
      <i class="fa fa-heart"></i>
    </button>
  </div>
</template>

<script>
    export default {
        props: {
            thread:{
                type:Object
            }
        },
        data() {
            return {
                active: this.thread.isFavorited,
                isFavoriteThread:false

            }
        },
        computed: {
            classes() {
                return [
                    this.isFavoriteThread ? 'active-favorite' : 'inactive-favorite'
                ];
            },

            endpoint() {
                return '/thread/' + this.thread.id + '/favorites';
            },
            signedIn(){
                return  (window.App.user)? true : false;
            },
        },
        created(){
            this.checkIsFavoriteThread();
        },
        methods: {
            toggle() {
                if(this.signedIn){
                    this.isFavoriteThread ? this.destroy() : this.create();
                }
                this.redirectToLogin();               
            },

            create() {
                axios.post(this.endpoint).then((res)=>{
                });
                this.isFavoriteThread = true;
                flash('You are successfully favorite this thread','success')
            },

            destroy() {
                axios.delete(this.endpoint);
                this.isFavoriteThread = false;
                flash('You are successfully un favorite this thread','success')
            },
            checkIsFavoriteThread(){
                if(this.signedIn){
                    axios.post('/thread/check-thread-favorite',{
                        thread: this.thread.id,
                        user:window.App.user.id
                    })
                    .then((res=>{
                        if(res.data.favorited){
                            return this.isFavoriteThread = true;
                        }
                       return this.isFavoriteThread = false;
                    }));
                }
                return this.isFavoriteThread = false;
            },
            redirectToLogin(){
                window.location =  '/redirect-to?page='+location.pathname;
            },
        }
    }
</script>