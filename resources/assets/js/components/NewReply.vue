<template>
    <div class="add-new-reply">
        <div v-if="signedIn" >
            <form action="" @submit.prevent="addReply">
                <div class="input-group">
                    <input type="text" class="form-control" aria-label="..." name="body" id="body"  v-model="body" placeholder="Add a comment">
                    <div class="input-group-btn">
                        <button class="btn btn-default" type="submit">Post</button>
                    </div>
                </div>
            </form>

        </div>

        <p class="text-center" v-else>
            Please <a :href="redirectToLogin">sign in</a> to participate in this
            discussion.
        </p>
    </div>
</template>

<script>
    import 'jquery.caret';
    import 'at.js';

    export default {
        data() {
            return {
                body: '',
                completed: false,
            };
        },
        computed:{
            redirectToLogin(){
                return  '/redirect-to?page='+location.pathname;
            },
        },
        mounted() {
            $('#body').atwho({
                at: "@",
                delay: 750,
                callbacks: {
                    remoteFilter: function(query, callback) {
                        $.getJSON("/api/users", {name: query}, function(usernames) {
                            callback(usernames)
                        });
                    }
                }
            });
        },

        methods: {
            addReply() {
                axios.post(location.pathname + '/replies', { body: this.body })
                    .catch(error => {
                        flash(error.response.data, 'danger');
                    })
                    .then(({data}) => {
                        this.body = '';
                        this.completed = true;

                        flash('Your reply has been posted.');

                        this.$emit('created', data);
                    });
            },
            
        }
    }
</script>


<style  scoped>
    .comment-body{
        resize: vertical !important;
    }
    .add-new-reply{
        padding: 30px 15px;
    }
</style>