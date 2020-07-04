
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

window.tinekey = 'l1vdc832pqx5u7o6t5umdpxns0sak10bu9mrtb0m1qbspk9g';


//  import Flash from './components/Flash.vue';
//  import Paginator from './components/Paginator.vue';
//  import UserNotifications from './components/UserNotifications';
//  import AvatarForm from './components/AvatarForm';
//  import Wysiwyg from './components/Wysiwyg';

import ThreadView from './pages/Thread.vue';
// import Typhaed from './components/Typehead.vue';


Vue.component('Flash', () => import('./components/Flash'));
Vue.component('Paginator', () => import('./components/Paginator'));
Vue.component('UserNotifications', () => import('./components/UserNotifications'));
Vue.component('AvatarForm', () => import('./components/AvatarForm'));
Vue.component('Wysiwyg', () => import('./components/Wysiwyg'));
Vue.component('ThreadView', () => import('./pages/Thread.vue'));


// import TinyMCE from 'tinymce-vue-2';


// Vue.component('tiny-mce', TinyMCE);



// import UnscribeButton from './components/UnscribeButton';
// Vue.component('unscribe-button', UnscribeButton);
Vue.component('unscribe-button', () => import('./components/UnscribeButton'));


// import FavoriteThread from './components/FavoriteThread.vue';
// Vue.component('favorite-thread',FavoriteThread);

Vue.component('favorite-thread', () => import('./components/FavoriteThread.vue'));



// import LikeButton from './components/LikeButton.vue';
// Vue.component('like-button', LikeButton);
Vue.component('like-button', ()=>import('./components/LikeButton.vue'));




// import NewTag from './components/NewTag.vue'
// Vue.component('new-tag', NewTag);

Vue.component('new-tag', ()=>import('./components/NewTag.vue'));


// import vSelect from 'vue-select'
// Vue.component('v-select', vSelect)

Vue.component('v-select', ()=>import('vue-select'))
import 'vue-select/dist/vue-select.css';





// import * as uiv from 'uiv'
// Vue.use(uiv)
// import { Alert } from 'uiv'


// import ChannelHead from './components/ChannelHead.vue'
// Vue.component('channel-head', ChannelHead)
// Vue.component('channel-head', ()=>import('./components/ChannelHead.vue'))



// import FbShare from './components/FbShare.vue'
// import TwitterShare from './components/TwitterShare.vue'
// Vue.component('fb-share', FbShare)
// Vue.component('twitter-share', TwitterShare)

Vue.component('fb-share', ()=>import('./components/FbShare.vue'));
Vue.component('twitter-share', ()=>import('./components/TwitterShare.vue'));






// import ThreadMap from './components/gmap/ThreadMap.vue';
// Vue.component('thread-map', ThreadMap);
Vue.component('thread-map', ()=>import('./components/gmap/ThreadMap.vue'));


// import PlaceSearch from './components/gmap/PlaceSearch.vue';
// Vue.component('place-search',PlaceSearch);
Vue.component('place-search',()=>import('./components/gmap/PlaceSearch.vue'))



// import MapResults from './components/gmap/MapResults.vue';
// Vue.component('map-results',MapResults);
Vue.component('map-results',()=>import('./components/gmap/MapResults.vue'));



// import SimpleMap from './components/gmap/SimpleMap.vue';
// Vue.component('simple-map',SimpleMap);
Vue.component('simple-map', ()=>import('./components/gmap/SimpleMap.vue'))




// import ProfileMap from './components/gmap/ProfileMap.vue';
// Vue.component('profile-map',ProfileMap);
Vue.component('profile-map', ()=>import('./components/gmap/ProfileMap.vue'))



import * as VueGoogleMaps from 'vue2-google-maps'

// import GmapCluster from 'vue2-google-maps/dist/components/cluster' // replace src with dist if you have Babel issues
 
// Vue.component('GmapCluster', GmapCluster)
Vue.component('GmapCluster', ()=>import('vue2-google-maps/dist/components/cluster'))


// import UserOnline from './components/chat/UserOnline.vue'
// Vue.component('user-online',UserOnline);
Vue.component('user-online', ()=>import('./components/chat/UserOnline.vue'))



Vue.use(VueGoogleMaps, {
  load: {
    // key:process.env.MIX_GOOGLE_MAP_KEY,
    key:window.MIX_GOOGLE_MAP_KEY,
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})




// import SearchThreads from './components/SearchThreads';
// Vue.component('search-threads', SearchThreads);
Vue.component('search-threads', ()=>import('./components/SearchThreads'))



// import ChatMessage from './components/chat/ChatMessage.vue';
// Vue.component('chat-message', ChatMessage);
Vue.component('chat-message', ()=>import('./components/chat/ChatMessage.vue'))



// import MessageNotification from "./components/chat/MessageNotification.vue";
// Vue.component('message-notification', MessageNotification);
Vue.component('message-notification', ()=>import('./components/chat/MessageNotification.vue'))

import Vuex from 'vuex'
Vue.use(Vuex)
import storeVuex from './store/index'
const store = new Vuex.Store(storeVuex)


import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)


// import AddFriend from './components/AddFriend.vue'
// Vue.component('add-friend',AddFriend);
Vue.component('add-friend', ()=>import('./components/AddFriend.vue'))



// import TextHighlight from 'vue-text-highlight'; 
Vue.component('text-highlight', ()=>import('vue-text-highlight'));

Vue.component('star-rating', ()=>import('./components/StarRating.vue'));

Vue.component('thread-show', ()=>import('./pages/TheeadShow.vue'));
Vue.component('new-thread', ()=>import('./pages/NewThread.vue'));


Vue.component('thread-emojis', ()=>import('./components/ThreadEmojis.vue'))
Vue.component('emoji-counts', ()=>import('./components/EmojiCounts.vue'))


Vue.component('view-counts', ()=>import('./components/ViewCounts.vue'));
Vue.component('point-counts', ()=>import('./components/PointCounts.vue'));
Vue.component('comment-counts', ()=>import('./components/CommentCounts.vue'));

Vue.component('thread-replies', ()=>import('./components/Replies'));

window.eventBus = new  Vue();
const app = new Vue({
    el: '#app',
    store,
    created(){
      Echo.join(`liveUser`)
            .here((users) => {
                this.$store.dispatch('onlineUsers', users)
            })
            .joining((user) => {
                this.$store.dispatch('addUserOnline', user)
            })
            .leaving((user) => {
                this.$store.dispatch('removeUserOnline', user)
            });
    }
});
