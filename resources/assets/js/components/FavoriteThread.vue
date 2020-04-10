<template>

   <button class="btn btn-xs btn-default">
            <!-- <span class="glyphicon glyphicon-thumbs-down like-icon" :class="dislikeClass">&nbsp;{{ dislikesCount }}</span>
             -->
              <span :class="classes"  class="glyphicon glyphicon-heart "  @click="toggle"></span>
    </button>

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
                    this.isFavoriteThread ? 'red-icon' : 'grey-icon'
                ];
            },

            endpoint() {
                return '/thread/' + this.thread.id + '/favorites';
            }
        },
        created(){
            this.checkIsFavoriteThread();
        },
        methods: {
            toggle() {
                this.isFavoriteThread ? this.destroy() : this.create();
            },

            create() {
                console.log('create favorite')
                axios.post(this.endpoint).then((res)=>{
                });

                this.isFavoriteThread = true;
                flash('You are successfully favorite this thread','success')
                //this.count++;
            },

            destroy() {
                console.log('destroy favorite')
                axios.delete(this.endpoint);

                this.isFavoriteThread = false;
                flash('You are successfully un favorite this thread','success')
                //this.count--;
            },
            checkIsFavoriteThread(){
                if(this.signedIn){
                     //console.log('calling')
                    axios.post('/thread/check-thread-favorite',{
                        thread: this.thread.id,
                        user:window.App.user.id

                    })
                    .then((res=>{
                        if(res.data.favorited){
                            console.log(res.data)
                            return this.isFavoriteThread = true;
                        }
                       return this.isFavoriteThread = false;
                    }));
                }
                return this.isFavoriteThread = false;
            }
        }
    }
</script>