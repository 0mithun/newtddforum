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
            <div class="col-md-8 reply-edit-delete-btn" v-if="signedIn">
                <div class="form-g">                        
                    <button class="btn btn-xs btn-danger" @click="destroy" v-if="(authorize('owns', reply) || authorize('isAdmin')) && !authorize('isBan') ">Delete</button>
                    <button class="btn btn-xs btn-primary" @click="editing=true" v-if="(authorize('owns', reply) && !authorize('isBan'))">Edit</button>
                </div>
            </div>
        </div>

        <div class="row reply-body">
            <div class="col-md-12">
                <div v-html="body" class="reply-body"></div>
                <div class="nested-reply-btn" >

                    <button class="btn btn-link add-nested-reply-btn" @click="addNested = true; showLoadMore= false" v-if="signedIn">Reply</button>
                    <a :href="redirectToLogin" class="btn btn-link add-nested-reply-btn" v-else>Reply</a>


                    <div class="edit-reply" v-if="editing">
                        <div >
                            <form action="" @submit.prevent="update">
                                <div class="form-group">
                                    <input @keyup="addReplySuggest" type="text" class="form-control" aria-label="..."  :id="'bodyedit-'+reply.id"  v-model="editBody" placeholder="Add a comment">
                                </div>
                                <div class="form-group" >
                                    <button class="btn btn-primary btn-xs" type="submit">Save</button>
                                    <button class="btn btn-danger btn-xs" @click="editing=false">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="edit-reply" v-if="addNested">
                        <div >
                            <form action="" @submit.prevent="addNestedReply">
                                <div class="form-group">
                                    <input @keyup="addNestedReplySuggest" type="text" class="form-control" aria-label="..." :id="'addNested-'+reply.id"   v-model="nestedbody" placeholder="Add a comment">
                                </div>
                                <div class="form-group" >
                                    <button class="btn btn-primary btn-xs" type="submit">Add</button>
                                    <button class="btn btn-danger btn-xs" @click="addNested=false; showLoadMore = true">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="more-reply" v-if="showLoadMore && replies_count>0">
                    <button class="btn btn-xs btn-link show-nested-replies-btn" @click="toggleNestedReplies">
                        <div v-if="showNested">
                            <span class="glyphicon glyphicon-triangle-top"></span> Hide Reply
                        </div>
                         <div v-else>
                            <span class="glyphicon glyphicon-triangle-bottom"></span>  {{ `View ${replies_count} Reply` }}
                        </div>
                    </button>
                   
                    <NestedReplies :reply="reply" v-for="(reply, index) in replies"  :key="index" v-if="showNested"></NestedReplies>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import 'jquery.caret';
    import 'at.js';  

    export default {
        name: 'NestedReplies',
        props: ['reply'],

        components: {
            NestedReplies: () => import('./NestedReplies.vue')
        },

        data() {
            return {
                editing: false,
                id: this.reply.id,
                body: this.reply.body,
                editBody: this.reply.body,
                replies: [],
                replies_count: this.reply.reply_count,
                showNested: false,
                addNested: false,
                nestedbody: '',
                showLoadMore: true,
            };
        },

        computed: {
            ago() {
                return  moment(this.reply.created_at, 'YYYY-MM-DD HH:mm:ss').fromNow() + '...';
            },
            signedIn(){
                return  (window.App.user)? true : false;
            },
            redirectToLogin(){
                return '/redirect-to?page='+location.pathname;
            }
        },
        created(){
            eventBus.$on('nested_delete-'+this.reply.id, id=>{
               let newReplies = this.replies.filter(item=>{
                    return item.id != id;
                })
                this.replies = newReplies;
                this.replies_count = this.replies_count - 1
            });
        },
        methods: {
            toggleNestedReplies(){
                if(this.showNested){
                     this.showNested = false;
                }else{
                    this.loadNestedReply();
                    this.showNested = true;
                }
            },

            addReplySuggest(){
                $('#bodyedit-'+this.reply.id).atwho({
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

                $('#addNested-'+this.reply.id).atwho({
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
            addNestedReplySuggest(){
                $('#addNested-'+this.reply.id).atwho({
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
                    this.replies = data
                });
            },
            
            update() {
                axios.patch(
                    '/replies/' + this.id, {
                        body: this.editBody
                    })
                    .catch(error => {
                        flash(error.response.data, 'danger');
                    });
                this.body = this.editBody
                this.editing = false;

                flash('Updated!');
            },

            destroy() {
                 if(this.replies_count>0){
                    flash('Your reply has many replies.','danger');
                    return;
                }
                if(confirm('Are you sure delete this reply')){
                    axios.delete('/replies/' + this.id);
                    eventBus.$emit('nested_delete-'+this.reply.parent_id, this.id);
                    flash('Your reply has been deleted.');
                }

            },
             addNestedReply() {
                let url = `/replies/${this.reply.id}/new-reply`;
                axios.post(url, { body: this.nestedbody })
                    .catch(error => {
                        flash(error.response.data, 'danger');
                    })
                    .then(({data}) => {
                        this.nestedbody = '';
                        this.replies.push(data)
                        this.replies_count  =  this.replies_count + 1;
                        
                        this.addNested = false
                        this.showLoadMore = true
                         flash('Your reply has been posted.');
                    });
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
        margin-left: 10px;
    }
    .more-reply{
        margin-left: 20px;
    }

    .add-nested-reply-btn{
        color: #92959e;
    }
    .add-nested-reply-btn:hover{
        color: #92959e;
        text-decoration: none;
    }
    .add-nested-reply-btn:focus{
        outline: none;
        text-decoration: none;
    }
    .reply-edit-delete-btn{
        display: flex;
        justify-content: flex-end;
    }
    .show-nested-replies-btn{
        /* color: black; */
         color: #92959e;
    }

    
    .show-nested-replies-btn:focus{
        outline: none;
        text-decoration: none;
    }
    .show-nested-replies-btn:hover{
        color: #92959e;
        text-decoration: none;
    }
    .glyphicon-triangle-top,
    .glyphicon-triangle-bottom{
        margin-right: 5px;
        font-size: 10px;
    }
</style>