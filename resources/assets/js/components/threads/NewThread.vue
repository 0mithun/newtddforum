<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            Post an Anecdote
        </div>
        <div class="panel-body">
            <form class="" action="" method="post" enctype="multipart/form-data" @submit.prevent="addNewThread">
                <div class="row">

                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="title" class="control-label">Title (required)</label>
                            <input type="text" id="title" class="form-control" v-model="form.title">
                        </div>
                    </div>
                </div>
                
                <div class="row">

                    <div class="col-md-4">
                        <div class="form-group " >
                            <label for="input">Category</label>
                            <input id="input" class="form-control" type="text" placeholder="Enter channel name">
                            <typeahead v-model="form.channel" target="#input" :data="allchannels" item-key="name" force-select/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="form-group">
                            <label for="tags" class="control-label">
                            Tags
                            </label>
                            <v-select taggable push-tags  v-model="form.tags" :options="alltags"  multiple @input="tagChange"></v-select>
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-md-12">
                        <div class="form-group">
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
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3">
                        
                        <div class="form-group " :class="image_path_error ? 'has-error' : ''">
                            <label for="image_path" class="control-label">Add an image</label>
                            <div class="thread-thumb-placeholder" @click="OpenImgUpload">
                                <img :src="thumb" width="100%" height="100%">
                            </div>

                            <input style="display:none" type="file" name="image_path" accept="image/*" class="form-control" id="image_path" @change="onFileSelected">
                            


                            <span class="help-block " v-if="image_path_error">
                                <strong class="" v-text="image_path_error_message"></strong>
                            </span>


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
                            <div class="form-group">
                                <label for="">
                                    <input type="checkbox"> 
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
                        <div class="col-md-4">
                             <div class="form-group">
                                <label for="age_restriction">Age Restriction</label>
                                <select name="age_restriction" id="age_restriction" class="form-control " v-model="form.age_restriction">
                                    <option :value="0">Ok for everyone</option>
                                    <option :value="13">PG-13</option>
                                    <option :value="18">R-rated (18+)</option>
                                </select>
                            </div>
                        </div>  
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="category" class="control-label"> This story involves:</label>

                                <div class="checkbox">
                                    <label><input type="checkbox" value="C" v-model="form.cno">Celebrities</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="N" v-model="form.cno">Other notables</label>
                                </div>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="O" v-model="form.cno">Other people</label>
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
                                <button class="btn btn-primary" type="submit">Add Thread</button>
                            </div>
                        </div>
                    </div>
                


            </form>

            <div class="form-group">
                <div class="checkbox">
                    <label><input type="checkbox" value="1" name="share_on_facebook" v-model="form.share_on_facebook">Share on Facebook</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value="1" name="share_on_twitter" v-model="form.share_on_twitter">Share on Twitter</label>
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
            alltags:{
                type: Array,
                require: true,
            },
            allchannels:{
                type: Array,
                require: true
            }
        },
        components: {Editor,Typeahead, },
        computed:{
            thumb(){
                return this.threadThumb == '' ? '/images/default-thread-thumb.jpg' : this.threadThumb
            }
        },
        data(){
            return {
                show_more_fields: false,
                threadThumb: '',
                selectFile: null,
                formData: new FormData,
                form: {
                    channel: '',
                    tags: '',
                    title: '',
                    body: '',
                    source: '',
                    location: '',
                    cno: [],
                    main_subject: '',
                    image_path:null,
                    age_restriction: '',
                    wiki_info_page_url: '',
                    wiki_image_description: '',
                    anonymous: 0
                },
                
                share_on_facebook:false,
                share_on_twitter:false,
                image_path_error:false,
                image_path_error_message:'',

            }
        },
        methods:{
            OpenImgUpload(){
                $('#image_path').trigger('click')
            },
            tagChange(){
                let len = this.form.tags.length;
                if(len>0){
                    let lastIndex = this.form.tags[len-1];
                    
                    let separateItem = lastIndex.split(/[\s,]+/);
                    if(separateItem.length>0){
                        this.form.tags.pop()
                        for(let i = 0; i <separateItem.length; i++){
                            if(separateItem[i].length>0){
                                this.form.tags.push(separateItem[i]);
                            }
                            
                        }
                    }
                }              
                
            },
            onFileSelected(event){
                if (! event.target.files.length) return;
                
                this.image_path_error = false;
                this.image_path_error_message = '';
                let file =  event.target.files[0];
                
                if (file.size > 1024 *1024) {
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
                    this.formData.append('channel',  JSON.stringify(this.form.channel));
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
                this.formData.append('cno', this.form.cno);

                this.formData.append('anonymous', this.form.anonymous ? 1 : 0);
            },
            addNewThread(){
                this.appendData();
                axios.post('/threads', this.formData).then(res=>{
                    let thread = res.data.thread;
                    window.location = thread.path
                }).catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .thread-thumb-placeholder{
        width: 150px;
        height: 150px;
        background-color: #eeeeee;
    }
</style>