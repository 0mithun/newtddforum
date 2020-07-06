<template>
    <div :id="'reply-'+id"  class="single-reply">        
        <div class="row reply-heading">
            <div class="col-md-4">
                <div class="thread_creator">               
                    <a :href="reply.ownerProfileUrl" class="creator_name">
                        <img :src="reply.owner.profileAvatarPath"
                            :alt="reply.owner.name"
                            width="25"
                            height="25"
                            class="avatar-photo">
                        <user-online :user="reply.owner"></user-online>
                        {{ reply.owner.name }}
                    </a>
                   <span v-text="ago" class="reply_created_at"></span>
                </div>
            </div>
            <div class="col-md-8">

            </div>
        </div>

        <div class="row reply-body">
            <div class="col-md-12">
                <div v-html="body" class="reply-body"></div>
                <div class="nested-reply-btn">
                    Reply
                    <div class="add-new-reply">
                        <div >
                            <form action="" @submit.prevent="addReply">
                                <div class="input-group">
                                    <input type="text" class="form-control" aria-label="..." name="body" id="body"  v-model="body" placeholder="Add a comment">
                                    <div class="input-group-btn">
                                        <button class="btn btn-default" type="submit">Post</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="more-reply">
                    View more replies
                    <NestedReplies :reply="reply" v-for="(reply, index) in replies"  :key="index"></NestedReplies>
                </div>
            </div>

        </div>

        <!-- <div class="panel-footer level reply-footer reply-footer" >
            <div class="col-md-12" v-if="authorize('owns', reply) || authorize('owns', reply.thread)">
                <div v-if="!authorize('isBan')">
                    <button class="btn btn-xs mr-1" @click="editing = true" v-if="! editing">Edit</button>
                    <button class="btn btn-xs btn-danger red-bg mr-1" @click="destroy">Delete</button>
                </div>
            </div>
            <div  class="col-md-1" v-if="signedIn && !authorize('isBan')">              
                <button class="btn btn-xs btn-danger ml-a red-bg pull-right" v-if="!authorize('owns', reply)">
                    <span class="glyphicon glyphicon-flag"></span>
                </button>
            </div>
        </div> -->
    </div>
</template>

<script>
    import Favorite from './Favorite.vue';
    import moment from 'moment';
    import NestedReplies from './NestedReplies.vue'

    import 'jquery.caret';
    import 'at.js';

    export default {
        props: ['reply'],

        components: {
            NestedReplies
        },

        data() {
            return {
                editing: false,
                id: this.reply.id,
                body: this.reply.body,
                addNested: false,
                replies: [],
                showNested: false,

            };
        },
        mounted(){
            $('#bodyedit').atwho({
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


        computed: {
            ago() {
                return  moment(this.reply.created_at, 'YYYY-MM-DD HH:mm:ss').fromNow() + '...';
            },
            signedIn(){
                return  (window.App.user)? true : false;
            },
        },

        created () {
            this.loadNestedReply();
            eventBus.$on('cancelAddReply',()=>{
                this.addNested = false;
            });

            eventBus.$on('addNestedReply',data=>{
                this.loadNestedReply();
                this.addNested = false;
                flash('Your reply has been posted.');
            });


            eventBus.$on('deleteNested',(id)=>{
                let newData = this.replies.filter(item=>{
                    return item.id !=id;
                });
                this.replies = newData;
                flash('Your reply has been deleted.');
            });
        },


        methods: {
            bodyChange(){
                $('#bodyedit').atwho({
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
            loadNestedReply(){
              let url = `/replies/${this.reply.id}/load-reply`;
                axios.get(url).then(({data})=>{
                    // console.log(data)
                    this.replies = data
                });
            },
            addNestedReply(){
                this.addNested = true;
            },
            update() {
                axios.patch(
                    '/replies/' + this.id, {
                        body: this.body
                    })
                    .catch(error => {
                        flash(error.response.data, 'danger');
                    });

                this.editing = false;

                flash('Updated!');
            },

            destroy() {
                if(confirm('Are you sure delete this reply')){
                    axios.delete('/replies/' + this.id);
                    this.$emit('deleted', this.id);
                }

            }
        }
    }
</script>


<style  scoped>
    .single-reply{
        margin: 5px;
    }
    .comment-body{
        resize: vertical !important;
    }

    .reply_created_at{
        color: #92959e;
        font-size: 12px;
        font-style: italic;
        margin-right: 10px;
    }
    .reply-body{
        padding: 0;
        margin-left: 20px;
        margin-top: -8px;
        color: #92959e;
    }
    .nested-reply-btn{
        margin-left: 20px;
    }
    .more-reply{
        margin-left: 20px;
    }
</style>