<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
Auth::routes();

Route::get( 'redirect-to', 'Auth\LoginController@redirectToPage' );

/*
 *
Sociali Login
 */
Route::get( 'login/facebook', 'Auth\LoginController@redirectToFacebookProvider' );
Route::get( 'login/facebook/callback', 'Auth\LoginController@handleFacebookProviderCallback' );

Route::get( 'login/twitter', 'Auth\LoginController@redirectToTwitterProvider' );
Route::get( 'login/twitter/callback', 'Auth\LoginController@handleTwitterProviderCallback' );

Route::get( 'login/instagram', 'Auth\LoginController@redirectToInstagramProvider' );
Route::get( 'login/instagram/callback', 'Auth\LoginController@handleInstagramProviderCallback' );

Route::get( '/map/show', 'UserlocationController@show' )->name( 'map.show' );
Route::post( '/map/all-threads', 'UserlocationController@getAllThread' );

Route::get( 'threads/search', 'SearchController@search' );

Route::get( '/', 'ThreadsController@index' );
Route::get( '/home', 'ThreadsController@index' );

Route::resource( 'threads', 'ThreadsController' )->except( ['show', 'update'] );
Route::get( 'anecdotes/{channel}/{thread}', 'ThreadsController@show' );
Route::post( 'threads/{thread}', 'ThreadsController@update' );

Route::post( '/thread/share', 'ThreadsController@share' );

Route::get( "/threads/{tag}", 'ThreadsController@loadByTag' )->name( 'tags.threads.list' );

Route::get( '/threads?by={username}', 'ThreadsController@index' )->name( 'threadsbyuser' );

Route::get( '/anecdotes/{channel}/{thread}/replies', 'RepliesController@index' );

Route::get( '/tags-show', 'FrontendController@showTags' )->name( 'show.tags' );

// Route::get("threads/most-likes",'ThreadsController@loadByLikes')->name('likes.threads.list');
// Route::get("/threads/most-views",'ThreadsController@loadByViews')->name('views.threads.list');
// Route::get("/threads/most-recents",'ThreadsController@loadByRecents')->name('recents.threads.list');
// Route::get("/threads/top-rated",'ThreadsController@loadByTopRated')->name('toprated.threads.list');
// Route::get("/threads/best-of-week",'ThreadsController@loadByBestOfWeek')->name('bestofweek.threads.list');

Route::get( '/user/confirm-new-email', 'ProfilesController@confirmNewEmail' )->name( 'conform.new.email' );
Route::get( '/register/confirm', 'Auth\RegisterConfirmationController@index' )->name( 'register.confirm' );

Route::get( '/contact', 'FrontendController@contact' )->name( 'contact' );
Route::get( '/privacy', 'FrontendController@privacyPolicy' )->name( 'privacypolicy' );
Route::get( '/terms', 'FrontendController@tos' )->name( 'tos' );
Route::get( '/faq', 'FrontendController@faq' )->name( 'faq' );
Route::post( 'contact', 'FrontendController@contactAdmin' )->name( 'contactadmin' );

Route::get( '/replies/{reply}/load-reply', 'RepliesController@lodReply' );

Route::get( '/thread/{thread}/likes-count', 'LikeController@getLikesCount' );
Route::get( '/thread/{thread}/dislikes-count', 'LikeController@getDisikesCount' );

//Emojis

//Not using
Route::post( '/thread/{thread}/like-typ/threads/sharee', 'LikeController@getUserLikeType' );
Route::post( '/thread/{thread}/all-like-type', 'LikeController@getAllLikeType' );
Route::get( '/thread/{thread}/like-type-users/{type}', 'LikeController@getLikeTypeUsers' );
//Not Using

//Should be change
Route::get( '/thread/{thread}/emojis', 'EmojiController@index' );

Route::get( '/thread/{thread}/emoji-counts', 'EmojiController@emojiCounts' );

Route::post( '/thread/{thread}/emojis', 'EmojiController@saveEmoji' )->middleware( 'auth' );

Route::get( '/thread/{thread}/user-emoji-type', 'EmojiController@getUserEmojiType' )->middleware( 'auth' );
Route::get( '/all-emojis', 'EmojiController@allEmojis' );

Route::get( '/thread/{thread}/is-rated', 'RatingController@isRated' )->middleware( 'auth' );
Route::post( '/thread/{thread}/rating', 'RatingController@saveRating' )->middleware( 'auth' );
Route::get( '/thread/{thread}/total', 'RatingController@totalRating' );
//Emojis

Route::middleware( ['auth'] )->group( function () {
    Route::get( '/chat', 'ChatController@index' )->name( 'chat.index' );

    Route::post( '/chat-friends', 'ChatController@getAllFriends' );
    Route::get( '/chat-message/{friend}', 'ChatController@getFriendMessage' );
    Route::post( '/chat-send-message', 'ChatController@sendMessage' );
    Route::post( '/chat-seen-message', 'ChatController@seenMessage' );

    //Other users message
    // Route::get('/chat-others','ChatController@getOtherMessageUsers');
    // Route::get('/other-users-message','ChatController@getOtherUsersMessage');

    Route::get( '/closet/threads', 'UserlocationController@showCloset' )->name( 'closet.thread' );

    Route::post( '/anecdotes/{channel}/{thread}/replies', 'RepliesController@store' );
    Route::patch( '/replies/{reply}', 'RepliesController@update' );
    Route::delete( '/replies/{reply}', 'RepliesController@destroy' )->name( 'replies.destroy' );
    Route::post( '/replies/{reply}/new-reply', 'RepliesController@newReply' );

    /*Should be delete*/
    Route::post( '/replies/{reply}/best', 'BestRepliesController@store' )->name( 'best-replies.store' );
    Route::post( '/reply/check-reply-isbest', 'BestRepliesController@checkIsBest' );

    Route::post( '/replies/{reply}/favorites', 'FavoritesController@store' );
    Route::delete( '/replies/{reply}/favorites', 'FavoritesController@destroy' );

    /*Favorites*/
    Route::post( '/thread/{thread}/favorites', 'FavoritesController@threadStore' );
    Route::delete( '/thread/{thread}/favorites', 'FavoritesController@thraeadDestroy' );
    Route::post( '/thread/check-thread-favorite', 'FavoritesController@checkFavorite' );

    Route::post( '/thread/{thread}/likes', 'LikeController@like' );
    Route::post( '/thread/{thread}/dislikes', 'LikeController@dislike' );

/**
 *
 * Report Controller
 */

    Route::post( '/report/thread', 'ReportController@thread' );
    Route::post( '/threads/check-thread-report', 'ReportController@checkThreadReport' );

    // Route::post('/replies/{reply}/report', 'ReportController@reply');
    // Route::post('/reply/check-reply-report','ReportController@checkReplyReport');
    // //Need New Route for check isReply Report

    // Route::post('api/users/report','ReportController@user');
    // Route::post('api/users/check-user-report','ReportController@checkUserReport');

    // Route::get('/profiles/{user}', 'ProfilesController@show')->name('profile');

    Route::get( '/profiles/{user}', 'ProfilesController@show' )->name( 'profile' );

    Route::get( '/profiles/{user}/notifications', 'UserNotificationsController@index' );
    Route::get( '/profiles/{user}/message-notifications', 'UserNotificationsController@messageNotifications' );
    Route::delete( '/profiles/{user}/notifications/{notification}', 'UserNotificationsController@destroy' );

/*Authentication check added*/
    Route::get( '/profiles/{user}/avatar', 'ProfilesController@avatar' )->name( 'profile.avatar.page' );
    Route::post( '/profiles/{user}/avatar/change', 'ProfilesController@avatarChange' )->name( 'profile.avatar.change' );

    Route::get( '/profiles/{user}/edit', 'ProfilesController@edit' )->name( 'profile.user.edit' );
    Route::post( '/profiles/{user}/update', 'ProfilesController@update' )->name( 'profile.user.update' );
    Route::post( '/profiles/{user}/update-about', 'ProfilesController@updateAbout' );

    Route::get( '/profiles/{user}/subscriptions', 'ProfilesController@mySubscriptionsShow' )->name( 'profile.subscriptions' );
    Route::get( '/profiles/{user}/favorites', 'ProfilesController@myFavoritesShow' )->name( 'profile.favorites' );
    Route::get( '/profiles/{user}/threads', 'ProfilesController@myThreadsShow' )->name( 'profile.threads' );
    Route::get( '/profiles/{user}/likes', 'ProfilesController@myLikesShow' )->name( 'profile.likes' );

/*Authentication check added*/

    //Friend System

    Route::post( '/friend/sent-request', 'FriendController@sentRequest' )->name( 'friendrequest.sent' );
    Route::post( '/profiles/cancel-friend-request', 'FriendController@cancelRequest' );

    Route::post( '/friend/check-friend', 'FriendController@checkFriend' ); //should delete
    Route::post( '/friend/check-request-sent', 'FriendController@checkFriendRequestSent' );

    //Route::get('profiles/{user}/friend-list','FriendController@friendList')->name('profile.friendlist');

    Route::get( '/profiles/{user}/friend-list', 'ProfilesController@friendList' )->name( 'profile.friendlist' );

    Route::get( '/profiles/{user}/friend-request', 'FriendController@getAllFriendRequest' )->name( 'profile.friendrequest' );
    Route::post( '/profiles/accept-friend', 'FriendController@acceptFriendRequest' )->name( 'profile.acceptfriendrequest' );

    // Route::post('profiles/{user}/unfriend','FriendController@unfriend')->name('profile.unfriend');

    Route::post( '/friend/unfriend', 'FriendController@unfriend' )->name( 'friend.unfriend' );
    Route::post( '/profiles/block-friend', 'FriendController@blockFriend' )->name( 'profile.friend.block' );
    Route::get( '/profiles/{user}/block-friends', 'FriendController@getBlockFriends' )->name( 'profile.blockfriends' );
    Route::post( 'profiles/unblock-friends', 'FriendController@unBlockFriends' )->name( 'profile.unblockfriends' );

    //User Settings Notifications
    Route::get( '/profiles/{user}/settings', 'UserSettingsController@index' )->name( 'user.settnigs' );
    Route::post( '/profiles/{user}/settings', 'UserSettingsController@update' )->name( 'user.settnigs.update' );

    //User Settings Privacy
    Route::get( '/profiles/{user}/settings/privacy', 'UserSettingsController@getPrivacy' )->name( 'user.settnigs.privacy' );
    Route::post( '/profiles/{user}/settings/privacy', 'UserSettingsController@updatePrivacy' )->name( 'user.settnigs.privacy.update' );

    Route::get( 'api/users', 'Api\UsersController@index' );
    Route::post( 'api/users/{user}/avatar', 'Api\UserAvatarController@store' )->middleware( 'auth' )->name( 'avatar' );
    Route::get( '/users/change-password', 'ProfilesController@editPassword' )->name( 'user.edit.password' );
    Route::post( '/user/update-password', 'ProfilesController@updatePassword' )->name( 'user.update.password' );

    Route::post( '/tag/{tag}/follow', 'FollowController@followTag' );
    Route::get( '/tag/{tag}/is-follow', 'FollowController@isFollowTag' );

    Route::post( '/user/{user}/follow', 'FollowController@followUser' );
    Route::get( '/user/{user}/is-follow', 'FollowController@isFollowUser' );

} );

Route::post( '/channel/search', 'ChannelController@search' )->name( 'chanel.search' ); //Will delete

Route::post( '/anecdotes/{channel}/{thread}/subscriptions', 'ThreadSubscriptionsController@store' )->middleware( 'auth' );
Route::delete( '/anecdotes/{channel}/{thread}/subscriptions', 'ThreadSubscriptionsController@destroy' )->middleware( 'auth' );
Route::post( '/thread/check-thread-subscribe', 'ThreadSubscriptionsController@checkSubscribe' )->middleware( 'auth' );

//Route::get('/profiles/{user}/settings/notifications','UserSettingsController@notifications')->name('user.settnigs.notifications');
//Route::get('/profiles/{user}/settings/subscriptions','UserSettingsController@subscriptions')->name('user.settnigs.subscriptions');

/*
 * Admin Route
 *
 * */
Route::middleware( ['admin'] )->group( function () {
    Route::get( '/admin/site-settings', 'AdminController@siteSettings' )->name( 'admin.setesettings' );
    Route::post( '/admin/site-settings', 'AdminController@siteSettingsUpdate' )->name( 'admin.setesettings.update' );

    Route::get( '/admin/tags', 'AdminController@tags' )->name( 'admin.tag' );
    Route::post( '/admin/tags/add', 'AdminController@tagsAdd' )->name( 'admin.tag.create' );
    Route::post( '/admin/tags/update', 'AdminController@tagsUpdate' )->name( 'admin.tag.update' );

    Route::get( '/admin/tos', 'AdminController@tos' )->name( 'admin.tos' );
    Route::get( '/admin/privacy-policy', 'AdminController@privacyPolicy' )->name( 'admin.privacypolicy' );
    Route::get( '/admin/faq', 'AdminController@faq' )->name( 'admin.faq' );

    Route::post( '/admin/tos', 'AdminController@tosUpdate' )->name( 'admin.tos.update' );
    Route::post( '/admin/privacy-policy', 'AdminController@privacyPolicyUpdate' )->name( 'admin.privacypolicy.update' );
    Route::post( '/admin/faq', 'AdminController@faqUpdate' )->name( 'admin.faq.update' );

    /**
     * Batch Tools
     */

    //Ban User
    Route::get( 'admin/manage-users', 'AdminController@banUsers' )->name( 'admin.manage.user' );
    Route::post( 'admin/users/ban-all-users', 'UserbanController@ban' )->name( 'admin.bans.users' );
    Route::post( 'admin/users/unban-all-users', 'UserbanController@unban' )->name( 'admin.unbans.users' );
    Route::post( 'admin/users/unban-single-user', 'UserbanController@unbanSingleUser' )->name( 'admin.unbans.single.users' );
    Route::post( 'admin/users/ban-single-users', 'UserbanController@banSingleUser' )->name( 'admin.bans.singleusers' );

    //Thread
    Route::get( '/admin/batch-tools', 'AdminController@batchTools' )->name( 'admin.batchtools' );
    Route::post( 'batch-tools/delete-thread', 'BatchToolController@deleteThread' )->name( 'batchtools.delete.thread' );

    Route::post( 'batch-tools/set-age-thirteen', 'BatchToolController@setAgeThirteen' )->name( 'batchtools.setage.thirteen' );
    Route::post( 'batch-tools/set-age-thirteen', 'BatchToolController@setAgeThirteen' )->name( 'batchtools.setage.thirteen' );
    Route::post( 'batch-tools/set-age-eighteen', 'BatchToolController@setAgeEighteen' )->name( 'batchtools.setage.eighteen' );

    Route::post( 'batch-tools/thread-search-replace', 'BatchToolController@threadSearchReplace' )->name( 'batchtools.search.replace' );

    Route::post( 'batch-tools/add-tag', 'BatchToolController@addTag' )->name( 'batchtools.add.tag' );
    Route::post( 'batch-tools/rename-tag', 'BatchToolController@renameTag' )->name( 'batchtools.rename.tag' );
    Route::post( 'batch-tools/delete-tag', 'BatchToolController@deleteTag' )->name( 'batchtools.delete.tag' );
    Route::post( 'batch-tools/set-famaus', 'BatchToolController@setFamaus' )->name( 'batchtools.set.famaus' );
    Route::post( 'batch-tools/add-emoji', 'BatchToolController@addEmoji' )->name( 'batchtools.add.emoji' );

    Route::post( 'batch-tools/thread-replace', 'BatchToolController@replaceSource' )->name( 'batchtools.replace.source' );
    Route::post( 'batch-tools/thread-assign-user', 'BatchToolController@assignUser' )->name( 'batchtools.assign.user' );

} );
