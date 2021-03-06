<div class="panel panel-default" v-if="editing">
    <div class="panel-heading">
        <div class="level">
            <h3 class="flex">Edit Thread:  <span  v-text="title"></span> </h3>
        </div>
    </div>

    <div class="panel-body">
        <div class="form-group " >
            <label for="input">Channel:</label>
            <input id="input" class="form-control" type="text" placeholder="Enter channel name" v-model="defaultChannel" >
            <typeahead v-model="typeChannelId" target="#input" :data="channels" item-key="name" force-select/>
         </div>



        <div class="form-group">
            <label for="title" class="control-label">Title:</label>
            <input type="text" id="title" class="form-control" v-model="form.title">
        </div>

        <div class="form-group">
            <label for="tags" class="control-label">
               Tags
            </label>
            <v-select taggable push-tags  v-model="tags" :options="allTags" label="name" multiple @input="tagChange"></v-select>
        </div>
        <div class="form-group">
            <label for="body" class="control-label">Body:</label>
            <editor
                v-model="form.body"
                height="500"
                api-key="{{  config('services.tiny.key')  }}}"
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

        {{-- <div class="form-group ">
            <label for="age_restriction">Age Restriction</label>
            <select name="age_restriction" id="age_restriction" class="form-control " v-model="form.age_restriction">
                <option value="0">Ok for everyone</option>
                <option value="13">PG-13</option>
                <option value="18">R-rated (18+)</option>
            </select>
        </div> --}}


        <div class="form-group">
            <label for="category" class="control-label"> This story involves:</label>

            <div class="checkbox">
                <label><input type="checkbox" value="C" v-model="form.category">Celebrities</label>
                {{-- <span class="help-block">Check this box if the subject is Famous</span> --}}
            </div>
            <div class="checkbox">
                <label><input type="checkbox" value="N" v-model="form.category">Other notables</label>
                {{-- <span class="help-block">Check this box if the subject is Famous</span> --}}
            </div>
            <div class="checkbox">
                <label><input type="checkbox" value="O" v-model="form.category">Other people</label>
                {{-- <span class="help-block">Check this box if the subject is Famous</span> --}}
            </div>

        </div>

        <div class="form-group " :class="image_path_error ? 'has-error' : ''">
            <label for="image_path" class="control-label"> Upload an image </label>

            <input type="file" name="image_path" accept="image/*" class="form-control" id="image_path" @change="onFileSelected">

            <span class="help-block " v-if="image_path_error">
                <strong class="" v-text="image_path_error_message"></strong>
            </span>

        </div>

        <div class="form-group {{ $errors->has('wiki_info_page_url') ? ' has-error' : '' }}">
            <label for="wiki_info_page_url" class="control-label"> Wikipedia info-page link </label>

            <input type="text" name="wiki_info_page_url" id="wiki_info_page_url" class="form-control" v-model="form.wiki_info_page_url">

            @if ($errors->has('wiki_info_page_url'))
                <span class="help-block ">
                    <strong class="">{{ $errors->first('wiki_info_page_url') }}</strong>
                </span>
            @endif
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

    </div>

    <div class="panel-footer">
        <div class="level">
            <button class="btn btn-xs level-item" v-show="! editing">Edit</button>
            <button class="btn btn-primary btn-xs level-item" @click="update" :disabled="checkValidation">Update</button>
            <button class="btn btn-xs level-item" @click="resetForm">Cancel</button>

            @can ('update', $thread)
                <form action="{{ $thread->path() }}" method="POST" class="ml-a">
                    {{ csrf_field() }}
                    {{ method_field('DELETE') }}

                    <button type="submit" class="btn btn-link">Delete Thread</button>
                </form>
            @endcan

        </div>
    </div>
</div>