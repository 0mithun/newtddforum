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

Route::get('/test', 'UserlocationController@threadDetails');


Route::get('/map/show','UserlocationController@show')->name('map.show');
Route::post('/map/nearest-threads','UserlocationController@getNearestThread')->name('map.nearest');

Route::post('/map/thread-details','UserlocationController@threadDetails')->name('thread.details');

Route::get('/','ThreadsController@index');

Auth::routes();

Route::get('/home', 'ThreadsController@index');

Route::get('threads', 'ThreadsController@index')->name('threads');
Route::get('threads/create', 'ThreadsController@create');

Route::get('threads/search', 'SearchController@show');

Route::get('search-vue', 'SearchController@search');


//Replace threads with anecdotes
Route::get('anecdotes/{channel}/{thread}', 'ThreadsController@show');




Route::post('threads', 'ThreadsController@store')->middleware('must-be-confirmed');
Route::get('threads/{channel}', 'ThreadsController@index');

Route::get('/anecdotes/{channel}/{thread}/replies', 'RepliesController@index');






Route::get('/tags','FrontendController@getTags');

Route::get("/tags/{tag}/threads",'ThreadsController@loadByTag')->name('tags.threads.list');

// Route::get("threads/most-likes",'ThreadsController@loadByLikes')->name('likes.threads.list');
// Route::get("/threads/most-views",'ThreadsController@loadByViews')->name('views.threads.list');
// Route::get("/threads/most-recents",'ThreadsController@loadByRecents')->name('recents.threads.list');
// Route::get("/threads/top-rated",'ThreadsController@loadByTopRated')->name('toprated.threads.list');
// Route::get("/threads/best-of-week",'ThreadsController@loadByBestOfWeek')->name('bestofweek.threads.list');
Route::get('/threads?by={username}','ThreadsController@index')->name('threadsbyuser');


Route::get('/user/confirm-new-email','ProfilesController@confirmNewEmail')->name('conform.new.email');
Route::get('/register/confirm', 'Auth\RegisterConfirmationController@index')->name('register.confirm');


Route::get('/contact','FrontendController@contact')->name('contact');
Route::get('/privacy','FrontendController@privacyPolicy')->name('privacypolicy');
Route::get('/terms','FrontendController@tos')->name('tos');
Route::get('/faq','FrontendController@faq')->name('faq');
Route::post('contact','FrontendController@contactAdmin')->name('contactadmin');

Route::get('/replies/{reply}/load-reply','RepliesController@lodReply');





Route::middleware(['auth'])->group(function (){

    Route::get('/chat','ChatController@index')->name('chat.index');
    
    Route::post('/chat-friends','ChatController@getAllFriends');
    Route::get('/chat-message/{friend}','ChatController@getFriendMessage');    
    Route::post('/chat-send-message','ChatController@sendMessage');
    Route::post('/chat-seen-message','ChatController@seenMessage');



   Route::get('/closet/threads','UserlocationController@show')->name('closet.thread');





    //Route::patch('threads/{channel}/{thread}', 'ThreadsController@update');
    Route::post('threads/{channel}/{thread}', 'ThreadsController@update');
    Route::delete('threads/{channel}/{thread}', 'ThreadsController@destroy');



    Route::post('/anecdotes/{channel}/{thread}/replies', 'RepliesController@store');
    Route::patch('/replies/{reply}', 'RepliesController@update');
    Route::delete('/replies/{reply}', 'RepliesController@destroy')->name('replies.destroy');
    Route::post('/replies/{reply}/best', 'BestRepliesController@store')->name('best-replies.store');
    Route::post('/replies/{reply}/new-reply','RepliesController@newReply');

    Route::post('/replies/{reply}/favorites', 'FavoritesController@store');
    Route::delete('/replies/{reply}/favorites', 'FavoritesController@destroy');
    Route::post('/thread/{thread}/favorites', 'FavoritesController@threadStore');
    Route::delete('/thread/{thread}/favorites', 'FavoritesController@thraeadDestroy');
    Route::post('/thread/{thread}/likes', 'LikeController@like');
    Route::post('/thread/{thread}/dislikes', 'LikeController@dislike');



//Route::post('/replies/{reply}/report', 'RepliesController@report');
    Route::post('/replies/{reply}/report', 'ReportController@reply');

//Route::post('/threads/report','ThreadsController@report');
    Route::post('/threads/report','ReportController@thread');

//Route::post('api/users/report','Api\UsersController@report');
    Route::post('api/users/report','ReportController@user');
//Route::post('/users/report', '')

    Route::get('/profiles/{user}', 'ProfilesController@show')->name('profile');
    Route::get('/profiles/{user}/notifications', 'UserNotificationsController@index');
    Route::delete('/profiles/{user}/notifications/{notification}', 'UserNotificationsController@destroy');

    Route::get('/profiles/{user}/avatar','ProfilesController@avatar')->name('profile.avatar.page');
    Route::post('/profiles/{user}/avatar/change','ProfilesController@avatarChange')->name('profile.avatar.change');


    Route::get('/profiles/{user}/edit', 'ProfilesController@edit')->name('profile.user.edit');
    Route::post('/profiles/{user}/update', 'ProfilesController@update')->name('profile.user.update');


    Route::get('/profiles/{user}/my-subscriptions','ProfilesController@mySubscriptionsShow')->name('profile.subscriptions');
    Route::get('/profiles/{user}/my-favorites','ProfilesController@myFavoritesShow')->name('profile.favorites');
    Route::get('/profiles/{user}/my-threads','ProfilesController@myThreadsShow')->name('profile.threads');
    Route::get('/profiles/{user}/my-likes','ProfilesController@myLikesShow')->name('profile.likes');


    //Friend System

    Route::post('/friend/sent-request', 'FriendController@sentRequest')->name('friendrequest.sent');

    Route::get('profiles/{user}/friend-list','FriendController@friendList')->name('profile.friendlist');
    Route::get('profiles/{user}/friend-request','FriendController@getFriendRequest')->name('profile.friendrequest');

    Route::post('profiles/{user}/accept-friend-request','FriendController@acceptFriendRequest')->name('profile.acceptfriendrequest');
    Route::post('profiles/{user}/unfriend','FriendController@unfriend')->name('profile.unfriend');
    Route::post('profiles/{user}/block-friend','FriendController@blockFriend')->name('profile.friend.block');


    Route::get('profiles/{user}/block-friends', 'FriendController@getBlockFriends')->name('profile.blockfriends');
    Route::post('profiles/{user}/unblock-friends', 'FriendController@unBlockFriends')->name('profile.unblockfriends');




    //User Settings Notifications
    Route::get('/profiles/{user}/settings','UserSettingsController@index')->name('user.settnigs');
    Route::post('/profiles/{user}/settings','UserSettingsController@update')->name('user.settnigs.update');
    

    
    //User Settings Privacy
    Route::get('/profiles/{user}/settings/privacy','UserSettingsController@getPrivacy')->name('user.settnigs.privacy');
    Route::post('/profiles/{user}/settings/privacy','UserSettingsController@updatePrivacy')->name('user.settnigs.privacy.update');








    Route::post('/tags/load','FrontendController@tagLoad')->name('tags.load');




    Route::get('api/users', 'Api\UsersController@index');
    Route::post('api/users/{user}/avatar', 'Api\UserAvatarController@store')->middleware('auth')->name('avatar');
    Route::get('/users/change-password','ProfilesController@editPassword')->name('user.edit.password');
    Route::post('/user/update-password','ProfilesController@updatePassword')->name('user.update.password');

    Route::get("/threads/my-favorites",'ThreadsController@loadByMyFavorites')->name('myfavorites.threads.list');
});


Route::post('/tags/all-tags','FrontendController@allTags');

Route::post('/channel/search', 'ChannelController@search')->name('chanel.search');



Route::post('/threads/{channel}/{thread}/subscriptions', 'ThreadSubscriptionsController@store')->middleware('auth');
Route::delete('/threads/{channel}/{thread}/subscriptions', 'ThreadSubscriptionsController@destroy')->middleware('auth');


//Route::get('/profiles/{user}/settings/notifications','UserSettingsController@notifications')->name('user.settnigs.notifications');
//Route::get('/profiles/{user}/settings/subscriptions','UserSettingsController@subscriptions')->name('user.settnigs.subscriptions');



/*
 * Admin Route
 *
 * */
Route::middleware(['admin'])->group(function (){
    Route::get('/admin/site-settings','AdminController@siteSettings')->name('admin.setesettings');
    Route::post('/admin/site-settings','AdminController@siteSettingsUpdate')->name('admin.setesettings.update');

    Route::get('/admin/tags','AdminController@tags')->name('admin.tag');
    Route::post('/admin/tags/add','AdminController@tagsAdd')->name('admin.tag.create');
    Route::post('/admin/tags/update','AdminController@tagsUpdate')->name('admin.tag.update');

    Route::get('/admin/tos','AdminController@tos')->name('admin.tos');
    Route::get('/admin/privacy-policy','AdminController@privacyPolicy')->name('admin.privacypolicy');
    Route::get('/admin/faq','AdminController@faq')->name('admin.faq');


    Route::post('/admin/tos','AdminController@tosUpdate')->name('admin.tos.update');
    Route::post('/admin/privacy-policy','AdminController@privacyPolicyUpdate')->name('admin.privacypolicy.update');
    Route::post('/admin/faq','AdminController@faqUpdate')->name('admin.faq.update');


    Route::post('locked-threads/{thread}', 'LockedThreadsController@store')->name('locked-threads.store');
    Route::delete('locked-threads/{thread}', 'LockedThreadsController@destroy')->name('locked-threads.destroy');


//    Route::post('locked-threads/{thread}', 'LockedThreadsController@store')->name('locked-threads.store')->middleware('admin');
//    Route::delete('locked-threads/{thread}', 'LockedThreadsController@destroy')->name('locked-threads.destroy')->middleware('admin');;
});









