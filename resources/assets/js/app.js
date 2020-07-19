
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

Vue.component('Flash', () => import('./components/Flash'));
Vue.component('Paginator', () => import('./components/Paginator'));
Vue.component('unscribe-button', () => import('./components/UnscribeButton'));

Vue.component('favorite-thread', () => import('./components/FavoriteThread.vue'));


Vue.component('new-tag', () => import('./components/NewTag.vue'));


Vue.component('v-select', () => import('vue-select'))
import 'vue-select/dist/vue-select.css';


Vue.component('fb-share', () => import('./components/FbShare.vue'));
Vue.component('twitter-share', () => import('./components/TwitterShare.vue'));





Vue.component('thread-map', () => import('./components/gmap/ThreadMap.vue'));


Vue.component('place-search', () => import('./components/gmap/PlaceSearch.vue'))


Vue.component('map-results', () => import('./components/gmap/MapResults.vue'));


Vue.component('simple-map', () => import('./components/gmap/SimpleMap.vue'))




Vue.component('profile-map', () => import('./components/gmap/ProfileMap.vue'))
Vue.component('map-location', () => import('./components/gmap/MapLocation.vue'))



import * as VueGoogleMaps from 'vue2-google-maps'

Vue.component('GmapCluster', () => import('vue2-google-maps/dist/components/cluster'))


Vue.component('user-online', () => import('./components/chat/UserOnline.vue'))
Vue.component('UserNotifications', () => import('./components/UserNotifications'));


Vue.use(VueGoogleMaps, {
  load: {
    // key:process.env.MIX_GOOGLE_MAP_KEY,
    key: window.MIX_GOOGLE_MAP_KEY,
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})




Vue.component('search-threads', () => import('./components/SearchThreads'))


Vue.component('chat-message', () => import('./components/chat/ChatMessage.vue'))


Vue.component('message-notification', () => import('./components/chat/MessageNotification.vue'))

import Vuex from 'vuex'
Vue.use(Vuex)
import storeVuex from './store/index'
const store = new Vuex.Store(storeVuex)


import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)


import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)


Vue.component('add-friend', () => import('./components/AddFriend.vue'))


Vue.component('text-highlight', () => import('vue-text-highlight'));

Vue.component('star-rating', () => import('./components/StarRating.vue'));

Vue.component('emoji-counts', () => import('./components/EmojiCounts.vue'))


Vue.component('view-counts', () => import('./components/ViewCounts.vue'));
Vue.component('point-counts', () => import('./components/PointCounts.vue'));
Vue.component('comment-counts', () => import('./components/CommentCounts.vue'));

Vue.component('thread-replies', () => import('./components/Replies'));
Vue.component('up-votes', () => import('./components/UpVotes.vue'));
Vue.component('down-votes', () => import('./components/DownVotes.vue'));
Vue.component('focus-comment', () => import('./components/FocusComment.vue'));
Vue.component('vote-emojis', () => import('./components/VoteEmojis.vue'));
Vue.component('vote-emoji-list', () => import('./components/VoteEmojiList.vue'));
Vue.component('report-thread', () => import('./components/ReportThread.vue'));
Vue.component('show-source', () => import('./components/ShowSource.vue'));

Vue.component('add-new-thread', () => import('./components/threads/NewThread.vue'));
Vue.component('edit-thread', () => import('./components/threads/EditThread.vue'));
Vue.component('delete-thread-btn', () => import('./components/threads/DeleteThreadBtn.vue'));
Vue.component('profile-page', () => import('./components/profile/profile-page.vue'));


window.eventBus = new Vue();
const app = new Vue({
  el: '#app',
  store,
  created() {
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
