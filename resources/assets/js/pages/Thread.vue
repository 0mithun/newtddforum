<script>
    import Replies from '../components/Replies.vue';
    import SubscribeButton from '../components/SubscribeButton.vue';
    import Editor from '@tinymce/tinymce-vue'
    import {Typeahead} from 'uiv'
    export default {
        props: ['thread'],

        components: {Replies, SubscribeButton, Editor,Typeahead, },

        data () {
            return {
                repliesCount: this.thread.replies_count,
                locked: this.thread.locked,
                channel_id : this.thread.channel_id,
                title: this.thread.title,

                body: this.thread.body,
                location: this.thread.location,

                // is_famous:this.thread.is_famous,
                // category: this.thread.category === null ? []: this.thread.category.split('|'),
                
                category: this.thread.splitCategory,

                main_subject: this.thread.main_subject,
                image_path:null,
                age_restriction:this.thread.age_restriction,
                // allow_image: this.thread.allow_image,

                wiki_info_page_url:this.thread.wiki_info_page_url,

                share_on_facebook:false,
                share_on_twitter:false,
                anonymous: this.thread.anonymous,

                selectFile: null,
                formData: new FormData,
                form: {},
                editing: false,
                tags:this.thread.tags,

                model: '',
                states: [],
                report: false,
                report_reason: '',
                allTags:null,
                defaultChannel: this.thread.channel.name,

                //Typehad
                channels:null,
                typeChannelId: '',
                target:null,
                channels:null,
                showSource:false,
                image_path_error:false,
                image_path_error_message:'',
                isThreadReported:false,
                isCreatorReported:false,

                userReport:false

            };
        },
        mounted(){

        },
        computed:{
            signedIn(){
                return  (window.App.user)? true : false;
            },
            checkValidation(){
                if(this.form.title == '' || this.form.body == '' || this.defaultChannel ==''){
                    return true;কর
                }
                return false;
            },
        },

        created () {
            this.resetForm();
            this.getAllTags();
            this.fetchChannel();
            this.checkThreadReported();
            this.checkCreatorReported();
        },


        methods: {
            tagChange(){
                let len = this.tags.length;
                if(len>0){
                    let lastIndex = this.tags[len-1];
                    
                    let separateItem = lastIndex.name.split(/[\s,]+/);
                    if(separateItem.length>0){
                        this.tags.pop()
                        for(let i = 0; i <separateItem.length; i++){
                            if(separateItem[i].length>0){
                                this.tags.push({name:separateItem[i]});
                            }
                            
                        }
                    }
                }
                
                
            }, 
            checkCreatorReported(){
                if(this.signedIn){
                    axios.post('/api/users/check-user-report',{
                        reported_id: this.thread.creator.id,
                        user:window.App.user.id
                    })
                    .then((res=>{
                        if(res.data.reported){
                            return this.isCreatorReported = true;
                        }
                       return this.isCreatorReported = false;
                    }));
                }
                return this.isCreatorReported = false;
            },
            
            checkThreadReported(){
                if(this.signedIn){
                    axios.post('/threads/check-thread-report',{
                        thread: this.thread.id,
                        user:window.App.user.id
                    })
                    .then((res=>{
                        if(res.data.reported){
                            return this.isThreadReported = true;
                        }
                       return this.isThreadReported = false;
                    }));
                }
                return this.isThreadReported = false;                
            },
            fetchChannel(){
                let url  = '/channel/search';
                axios.post('/channel/search')
                    .then((res=>{
                        this.channels = res.data
                    }));
            },

            startEdit(){
              this.editing = true;
            },
            getAllTags(){
                axios.post('/tags/all-tags').then((res=>{
                    this.allTags = res.data
                }));
            },
            reportReply(){
                this.report = true;
            },
            makeReport(){
                axios.post('/threads/report',{
                    id: this.thread.id,
                    reason:this.report_reason,
                }).then((res=>{
                    flash('Your have successfully report to this Thread','success')
                    this.report =false;
                    this.thread.isReportd = true;

                }));
            },
            makeRestrictionReport(reason, type){
                axios.post('/threads/report-restriction',{
                    id: this.thread.id,
                    reason:reason,
                    type:type
                }).then((res=>{
                    flash('Your have successfully report to this Thread','success')
                    this.report =false;
                    this.thread.isReportd = true;

                }));
            },
            reportCreator(){
                this.userReport = true;
            },
            makeUserReport(){
                axios.post('/api/users/report',{
                    user_id: this.thread.creator.id,
                    reason:this.report_reason,
                }).then((res=>{
                    flash('Your have successfully report to this Thread','success')
                    this.userReport =false;
                    this.isCreatorReported = true;
                }));
            },
            channelTypeHead(){
                this.states = [];
                axios.post('/channel/search', {
                    channel_name: this.channel_name
                }).then((res)=>{
                    res.data.forEach((channel)=>{
                        this.states.push(channel)
                    })
                });
            },
            toggleLock () {
                let uri = `/locked-threads/${this.thread.slug}`;
                axios[this.locked ? 'delete' : 'post'](uri);
                this.locked = ! this.locked;
            },
            checked(){
                return (this.form.is_famous == 1 );
            },
            updateChecked(){
                this.form.is_famous = !this.form.is_famous;
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
            appendData(){
                let tagId = [];

                let index = 0;
                this.tags.map(function (value) {
                    let idKey = 'id' in value;

                    if(idKey){
                        tagId.push(value.id);
                    }else{
                        tagId.push(value.name)
                    }
                });

                tagId = JSON.stringify(tagId);
                let channel_id = this.typeChannelId.id;



                //tagId =  Object.assign({}, tagId);

                this.formData.append('title', this.form.title);
                this.formData.append('channel_id', this.form.channel_id);
                this.formData.append('body', this.form.body);
                // this.formData.append('is_famous', this.form.is_famous);
                this.formData.append('category', this.form.category);
                this.formData.append('age_restriction', this.form.age_restriction);
                this.formData.append('source', this.form.source);
                this.formData.append('location', this.form.location);
                this.formData.append('main_subject', this.form.main_subject);
                this.formData.append('tags',tagId);
                this.formData.append('channel_id', channel_id);

                this.formData.append('wiki_info_page_url', this.form.wiki_info_page_url);

                this.formData.append('share_on_facebook', this.form.share_on_facebook);
                this.formData.append('share_on_twitter', this.form.share_on_twitter);
                this.formData.append('anonymous', this.form.anonymous ? 1 : 0);

            },
            update () {
                this.appendData();
                let uri = `/threads/${this.thread.channel.slug}/${this.thread.slug}`;
                axios.post(uri, this.formData).then((res) => {
                    console.log(res.data)
                    this.editing = false;
                    this.channel_id = this.form.channel_id;
                    this.title = this.form.title;
                    this.body = this.form.body;

                    // this.is_famous = this.form.source;

                    this.category = this.form.category;

                    this.location = this.form.location;
                    this.age_restriction = this.form.age_restriction;
                    this.is_famous = this.form.is_famous;
                    this.main_subject = this.form.main_subject;
                    this.source = this.form.source;
                    this.image_path = this.form.image_path;

                    // this.allow_image = this.form.allow_image;

                    this.wiki_info_page_url = this.form.wiki_info_page_url;

                    this.share_on_facebook = false;
                    this.share_on_twitter = false;
                    this.anonymous = this.form.anonymous;
                    


                    this.tags = this.form.tags;
                    this.typeChannelId = '';
                   flash('Your thread has been updated.');
                   
                   
                });
            },
            resetForm () {
                this.form = {
                    title: this.thread.title,
                    body: this.thread.body,
                    channel_id: this.thread.channel_id,
                    location: this.thread.location,
                    source: this.thread.source,
                    age_restriction: this.thread.age_restriction,

                    // is_famous: this.thread.is_famous,

                    category: this.thread.splitCategory,

                    main_subject: this.thread.main_subject,
                    image_path: null,

                    // allow_image: false,

                    wiki_info_page_url: this.thread.wiki_info_page_url,

                    share_on_facebook: false,
                    share_on_twitter: false,
                    anonymous: this.thread.anonymous,

                    tags: this.thread.tags,
                    typeChannelId: ''
                };
                this.editing = false;
            }
        }
    }
</script>


<style scoped>
     #tinymce iframe {
            width: 100%!important;
            height: 350px!important;
        }
    .tox-tinymce{
        height:500px!important;
    }
</style>