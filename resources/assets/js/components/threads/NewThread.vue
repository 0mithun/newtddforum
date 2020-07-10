<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            Post an Anecdote
        </div>
        <div class="panel-body">
            <form action="" method="" enctype="multipart/form-data">


                 <div class="form-group " >
                    <label for="input">Channel:</label>
                    <input id="input" class="form-control" type="text" placeholder="Enter channel name">
                    <typeahead v-model="form.channel" target="#input" :data="allchannels" item-key="name" force-select/>
                </div>



                <div class="form-group">
                    <label for="title" class="control-label">Title:</label>
                    <input type="text" id="title" class="form-control" v-model="form.title">
                </div>

                <div class="form-group">
                    <label for="tags" class="control-label">
                    Tags
                    </label>
                    <v-select taggable push-tags  v-model="form.tags" :options="alltags" label="name" multiple @input="tagChange"></v-select>
                </div>
                <div class="form-group">
                    <label for="body" class="control-label">Body:</label>
                    <editor
                        v-model="form.body"
                        height="500"
                        api-key=TINY_EDITOR_API_KEY
                        :init="{
                        selector: '#tinyeditor',
                                plugins: 'code',
                                toolbar: 'formatselect fontsizeselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | code | numlist bullist outdent indent  ',
                                menubar: 'tools',
                                toolbar_drawer: 'floating',
                                tinycomments_mode: 'embedded',
                                tinycomments_author: 'Author name'
                        }"
                    />
                </div>

                <div class="form-group">
                    <label for="location" class="control-label">Location:</label>
                    <input type="text" name="location" id="location" class="form-control" v-model="form.location">
                </div>

                <div class="form-group">
                    <label for="source" class="control-label">Source:</label>
                    <input type="text" name="source" id="source" class="form-control" v-model="form.source">
                </div>

                <div class="form-group">
                    <label for="main_subject" class="control-label">Main Subject:</label>
                    <input type="text" name="main_subject" id="main_subject" class="form-control" v-model="form.main_subject">
                    <span class="help-block">Who is this story about</span>
                </div>


                <div class="form-group">
                    <label for="category" class="control-label"> This story involves:</label>

                    <div class="checkbox">
                        <label><input type="checkbox" value="C" v-model="form.category">Celebrities</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="N" v-model="form.category">Other notables</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="O" v-model="form.category">Other people</label>
                    </div>

                </div>

                <div class="form-group " :class="image_path_error ? 'has-error' : ''">
                    <label for="image_path" class="control-label"> Upload an image </label>
                    <input type="file" name="image_path" accept="image/*" class="form-control" id="image_path" @change="onFileSelected">
                    <span class="help-block " v-if="image_path_error">
                        <strong class="" v-text="image_path_error_message"></strong>
                    </span>
                </div>

                <div class="form-group ">
                    <label for="wiki_info_page_url" class="control-label"> Wikipedia info-page link </label>
                    <input type="text" name="wiki_info_page_url" id="wiki_info_page_url" class="form-control" v-model="form.wiki_info_page_url">
                </div>

                <hr>
                <div class="form-group">
                    <div class="checkbox">
                        <label><input type="checkbox" value="1" name="share_on_facebook" v-model="form.share_on_facebook">Share on Facebook</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="1" name="share_on_twitter" v-model="form.share_on_twitter">Share on Twitter</label>
                    </div>
                </div>

                <hr>
                <div class="form-group">
                    <div class="checkbox">
                        <label><input type="checkbox" v-bind:value="1" name="anonymous" v-model="form.anonymous">Remain anonymous</label>
                    </div>
                </div>



            </form>
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
        data(){
            return {
                
                selectFile: null,
                formData: new FormData,
                form: {
                    channel: '',
                    tags: null,
                    title: '',
                    body: '',
                    location: '',
                    category: '',
                    main_subject: '',
                    image_path:null,
                    age_restriction: '',
                    wiki_info_page_url: '',
                    share_on_facebook:false,
                    share_on_twitter:false, 
                },

                image_path_error:false,
                image_path_error_message:'',

            }
        },
        methods:{
            tagChange(){
                let len = this.form.tags.length;
                if(len>0){
                    let lastIndex = this.form.tags[len-1];
                    
                    let separateItem = lastIndex.name.split(/[\s,]+/);
                    if(separateItem.length>0){
                        this.form.tags.pop()
                        for(let i = 0; i <separateItem.length; i++){
                            if(separateItem[i].length>0){
                                this.form.tags.push({name:separateItem[i]});
                            }
                            
                        }
                    }
                }              
                
            },
            onFileSelected(event){
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
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>