<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            Post an Anecdote
        </div>
        <div class="panel-body">
            <form class="" action="" method="post" enctype="multipart/form-data" @submit.prevent="updateThread">
                <div class="row">

                    <div class="col-md-6">
                        <div class="form-group" :class="{'has-error': errors.title }">
                            <label for="title" class="control-label" >Title (required)</label>
                            <input type="text" id="title" class="form-control" v-model="form.title">
                            <span class="help-block" v-if="errors.title">{{ errors.title[0] }}</span>
                        </div>
                    </div>
                </div>
                
                <div class="row">

                    <div class="col-md-4">
                        <div class="form-group " >
                            <label for="input">Category</label>
                            <input id="input" class="form-control" type="text" placeholder="Enter channel name" v-model="defaultChannel">
                            <typeahead v-model="form.channel" target="#input" :data="allchannels" item-key="name" force-select/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="form-group">
                            <label for="tags" class="control-label">
                            Tags
                            </label>
                            <v-select taggable push-tags  v-model="form.tags" :options="alltags"  multiple @search="searchTag">
                                <template v-slot:no-options="{ search, searching }">
                                    <template v-if="searching">
                                        No results found for <em>{{ search }}</em>.
                                    </template>
                                    <em style="opacity: 0.5;" v-else>Start typing to search for a tags.</em>
                                </template>
                            </v-select>
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-md-12">
                        <div class="form-group" :class="{'has-error': errors.body }">
                            <label for="body" class="control-label">Your Story (required)</label>
                            <editor
                                v-model="form.body"
                                height="500"
                                api-key=TINY_EDITOR_API_KEY
                                :init="{
                                selector: '#tinyeditor',
                                        plugins: 'code | autoresize',
                                        toolbar: 'formatselect fontsizeselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | code | numlist bullist outdent indent  ',
                                        
                                        toolbar_drawer: 'floating',
                                        tinycomments_mode: 'embedded',
                                        tinycomments_author: 'Author name'
                                }"
                            />
                            
                            <span class="help-block" v-if="errors.body">{{ errors.body[0] }}</span>

                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3">                        
                        <div class="form-group " :class="{ 'has-error': errors.image_path, 'has-error': image_path_error }">
                            <label for="image_path" class="control-label">Add an image</label>
                            <div class="thread-thumb-placeholder" @click="OpenImgUpload">
                                <img :src="thumb" width="100%" height="100%">
                            </div>
                            <input style="display:none" type="file" name="image_path" accept="image/*" class="form-control" id="image_path" @change="onFileSelected">

                            <span class="help-block " v-if="image_path_error">
                                <strong class="" v-text="image_path_error_message"></strong>
                            </span>

                            <span class="help-block" v-if="errors.body">{{ errors.body[0] }}</span>

                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <button tton class="btn btn-default btn-sm" type="button" @click="show_more_fields = !show_more_fields">{{ show_more_fields ? 'Hide More Fields' : 'Show More Fields' }}</button>
                        </div>
                    </div>
                </div>
                <div class="more-fields" v-if="show_more_fields">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label for="wiki_info_page_url" class="control-label"> Or Enter Image link </label>
                                <input type="text" id="wiki_info_page_url" class="form-control" v-model="form.wiki_info_page_url">
                            </div>
                            <div class="form-group" v-if="form.wiki_info_page_url !=''">
                                <label for="">
                                    <input type="checkbox" v-model="form.wiki_image_copyright_free" required> 
                                    This image is copyright-free (or the description includes license information)
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label for="wiki_image_description" class="control-label"> Image description</label>
                                <input type="text"  class="form-control" id="wiki_image_description" v-model="form.wiki_image_description">
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                                            
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="main_subject" class="control-label">Main Subject:</label>
                                <input type="text" name="main_subject" id="main_subject" class="form-control" v-model="form.main_subject">
                                <span class="help-block">Who or what is this story about? This will be added as a tag. </span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="source" class="control-label">Source</label>
                                <input type="text" name="source" id="source" class="form-control" v-model="form.source">
                                <span class="help-block" > Where did you hear this story? If this story was reported on a website or other publication please list it here (&lt;i&gt; &lt;a&gt; tags are allowed).</span>
                            </div>
                        </div>
                        <div class="col-md-4">                            
                            <div class="form-group">
                                <label for="location" class="control-label">Location</label>
                                <input type="text" name="location" id="location" class="form-control" v-model="form.location">
                                <span class="help-block">Where did your story take place? If google can find it, we'll add maps & markers for this story. Example locations are: "111 5th ave, NYC" and "Louvre."</span>
                            </div>
                        </div>
                    </div>
                  

                    <div class="row">
                        <div class="col-md-2">
                             <div class="form-group">
                                <label for="age_restriction">Age Restriction</label>
                                <select name="age_restriction" id="age_restriction" class="form-control " v-model="form.age_restriction">
                                    <option :value="0" selected>Ok for everyone</option>
                                    <option :value="13">PG-13</option>
                                    <option :value="18">R-rated (18+)</option>
                                </select>
                            </div>
                        </div>  
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="category" class="control-label"></label>

                                <div class="checkbox">
                                    <label><input type="checkbox" value="1" v-model="form.cno.famous">This story involves a famous person or thing</label>
                                </div>
                                
                                <div class="checkbox" v-if="form.cno.famous" style="margin-left:30px">
                                    <label><input type="checkbox" value="1" v-model="form.cno.celebrity">Is it a celebrity?</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <div class="checkbox">
                                    <label><input type="checkbox" v-bind:value="1" name="anonymous" v-model="form.anonymous">Post Anonymously</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">                               
                                <!-- <button class="btn btn-primary" type="submit" :disabled="form.wiki_info_page_url !='' && form.wiki_image_copyright_free != true">Update Thread</button> -->
                                <button class="btn btn-primary" type="submit">Update Thread</button>
                            </div>
                        </div>
                    </div>
            </form>
            <!-- Modal -->
            <div class="modal fade " id="shareThreadModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <div class="checkbox">
                                    <label><input type="checkbox" value="1" name="share_on_facebook" v-model="share_on_facebook">Share on Facebook</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="1" name="share_on_twitter" v-model="share_on_twitter">Share on Twitter</label>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-default btn-sm" type="button" @click.prevent="closeShareModal">close</button>
                            <button class="btn btn-primary btn-sm" type="button" @click.prevent="shareThread">Share</button>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue'
    import {Typeahead} from 'uiv'
    export default {
        props: {
            allchannels:{
                type: Array,
                require: true
            },
            thread:{
                type: Object,
                require: true
            }
        },
        components: {Editor,Typeahead, },
        computed:{
            thumb(){
                return  (this.threadThumb !='') ? this.threadThumb :  (this.thread.threadImagePath == '' ? '/images/default-thread-thumb.jpg' : this.thread.threadImagePath)
            },            
        },
        
        data(){
            return {
                alltags:[],
                errors: [],
                show_more_fields: false,
                threadThumb: '',
                selectFile: null,
                defaultChannel: this.thread.channel.name,
                formData: new FormData,
                form: {
                    channel: this.thread.channel,
                    tags: '',
                    title: this.thread.title,
                    body: this.thread.body,
                    source: this.thread.source == 'null' ? '': this.thread.source ,
                    location: this.thread.location == 'null' ? '':this.thread.location ,
                    cno: {
                        famous: false,
                        celebrity: false
                    },
                    main_subject: this.thread.main_subject =='null' ? '':  this.thread.main_subject ,
                    image_path:null,
                    age_restriction: this.thread.age_restriction,
                    wiki_info_page_url: this.thread.wiki_info_page_url == 'null' ? '': this.thread.wiki_info_page_url,
                    wiki_image_copyright_free: false,
                    wiki_image_description: this.thread.wiki_image_description == 'null' ? '' : this.thread.wiki_image_description ,
                    anonymous: this.thread.anonymous
                },
                
                share_on_facebook:false,
                share_on_twitter:false,
                image_path_error:false,
                image_path_error_message:'',

            }
        },
        created(){
            this.formatedTags();
        },
        methods:{
            searchTag(search, loading){
                loading(true)
                axios.get(`/threads/get-all-tags?q=${search}`).then(res=>{
                    let unique = res.data.filter((value,index,arr)=>{
                        return arr.indexOf(value) == index;
                    });
                    this.alltags = unique;
                    loading(false)
                })
            },
            formatedTags(){
                let tag_names = this.thread.tag_names;
                if(tag_names != null){
                    this.form.tags = tag_names.split(",");
                }
            },
            OpenImgUpload(){
                $('#image_path').trigger('click')
            },
            
            onFileSelected(event){
                if (! event.target.files.length) return;
                
                this.image_path_error = false;
                this.image_path_error_message = '';
                let file =  event.target.files[0];
                
                if (file.size > 1024 *2048) {
                    event.preventDefault();
                    this.image_path_error = true;
                    this.image_path_error_message = 'Thread image may not be greater than 2048 kilobytes';
                    return;
                }
                this.selectFile = event.target.files[0];
                this.formData.append('image_path', this.selectFile);


                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = e => {
                    let src = e.target.result;
                    this.threadThumb = src
                };
            },
            appendData(){
                if(this.form.channel !=''){
                    let newChannel =  {
                        id: this.form.channel.id,
                        name: this.form.channel.name
                    };

                    this.formData.append('channel',JSON.stringify(newChannel));
                }else{
                    this.formData.append('channel', '');
                }
                this.formData.append('title', this.form.title);
                this.formData.append('tags', this.form.tags);
                this.formData.append('body', this.form.body);
                this.formData.append('source', this.form.source);
                this.formData.append('location', this.form.location);
                this.formData.append('main_subject', this.form.main_subject);
                this.formData.append('age_restriction', this.form.age_restriction);
                
                this.formData.append('wiki_info_page_url', this.form.wiki_info_page_url);
                this.formData.append('wiki_image_description', this.form.wiki_image_description);
                this.formData.append('anonymous', this.form.anonymous ? 1 : 0);

                

                if(this.form.cno.famous == false){
                    this.formData.append('cno', 'O');
                }else if(this.form.famous == true && this.form.cno.celebrity == true){
                    this.formData.append('cno', 'C');
                }
                else{
                    this.formData.append('cno', 'N');
                }

                
            },
            updateThread(){
                this.errors = []
                this.appendData();
                let url = '/threads/'+this.thread.slug;                
                axios.post(url, this.formData).then(res=>{
                    $('#shareThreadModal').modal('show');
                    flash('Thread Created Successfully')
                }).catch(err=>{
                    this.errors = err.response.data.errors
                })
            },
            shareThread(){
                axios.post('/thread/share', {
                    thread: this.thread.id,
                    share_on_facebook:this.share_on_facebook,
                    share_on_twitter:this.share_on_twitter,
                }).then(res=>{
                     $('#shareThreadModal').modal('hide');
                     window.location = this.thread.path
                }).catch(err=>{

                })
            },
            closeShareModal(){
                $('#shareThreadModal').modal('hide');
                window.location = this.thread.path
            },
        }
    }
</script>

<style lang="scss" scoped>
    .thread-thumb-placeholder{
        width: 150px;
        height: 150px;
        background-color: #eeeeee;
    }

     #tinymce iframe {
            width: 100%!important;
            height: 350px!important;
        }
    .tox-tinymce{
        min-height:500px!important;
    }
</style>