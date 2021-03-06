import Axios from "axios";

export default {
    state: {
        friendList: [],
        friendMessage: [],
        onlineUsers: [],
        friends: [],
        friendRequests: [],
        blockLists: [],

        followers: [],
        followings: [],
        profilePosts: [],

        profileTotalRecords:0,

        profileFavoritePosts: [],
        profileFavoriteTotalRecords: 0,
        profileLikePosts: [],
        profileLikeTotalRecords:0
    },
    mutations: {
        friendList(state, payload) {
            return state.friendList = payload;
        },
        friendMessage(state, payload) {
            return state.friendMessage = payload;
        },
        onlineUsers(state, payload) {
            return state.onlineUsers = payload
        },
        addUserOnline(state, payload) {
            let status = _.find(state.onlineUsers, { 'id': payload.id });
            if (!status) {
                return state.onlineUsers.push(payload)
            }

            // let onlineUsers = state.onlineUsers.push(payload)
        },

        removeUserOnline(state, payload) {


            let onlineUsers = _.remove(state.onlineUsers, (n) => {
                return n.id != payload.id
            })
            state.onlineUsers = onlineUsers;


        },
        friends(state, payload) {
            state.friends = payload
        },
        removeFriend(state, payload) {
            let newFriends = _.remove(state.friends, (n) => {
                return n.id != payload
            })

            state.friends = newFriends;
        },
        addFriend(state, payload) {
            let newFriends = [...state.friends, payload];
            state.friends = newFriends;
        },

        friendRequests(state, payload) {
            state.friendRequests = payload
        },
        removeFriendRequest(state, payload) {
            let newFriendsRequest = _.remove(state.friendRequests, (n) => {
                return n.id != payload
            })
            state.friendRequests = newFriendsRequest;
        },
        addFriendRequest(state, payload) {
            let newFriendsRequest = [...state.friendRequests, payload];
            state.friendRequests = newFriendsRequest;

        },

        //Followers
        followers(state, payload) {
            state.followers = payload
        },
        removeFollowers(state, payload) {
            let newFollowers = _.remove(state.followers, (n) => {
                return n.id != payload
            })

            state.followers = newFollowers;
        },
        addFollowers(state, payload) {
            let newFollowers = [...state.followers, payload];
            state.followers = newFollowers;

        },

        //Followings
        followings(state, payload) {
            state.followings = payload
        },
        removeFollowings(state, payload) {
            let newFollowings = _.remove(state.followings, (n) => {
                if (n.followType == payload.followType && n.id == payload.id) {
                    return false
                }
                else return true

                // return n.id != payload
            })
            state.followings = newFollowings;
        },
        addFollowings(state, payload) {
            let newFollowings = [...state.followings, payload];
            state.followings = newFollowings;

        },



        //Block Lists
        blockLists(state, payload) {
            state.blockLists = payload
        },
        removeBlockLists(state, payload) {
            let newBlockLists = _.remove(state.blockLists, (n) => {
                return n.id != payload
            })
            state.blockLists = newBlockLists;
        },
        addBlockLists(state, payload) {
            let newBlockLists = [...state.blockLists, payload];
            state.blockLists = newBlockLists;

        },

        profilePosts(state, payload) {
            state.profilePosts = payload
        },

        profileTotalRecords(state, payload) {
            state.profileTotalRecords = payload
        },

        profileFavoritePosts(state, payload) {
            state.profileFavoritePosts = payload
        },

        profileFavoriteTotalRecords(state, payload) {
            state.profileFavoriteTotalRecords = payload
        },

        profileLikePosts(state, payload) {
            state.profileLikePosts = payload
        },
        profileLikeTotalRecords(state, payload) {
            state.profileLikeTotalRecords = payload
        },



    },
    actions: {
        friendList(context, id) {
            Axios.post('/chat-friends', { id }).then(res => {
                context.commit('friendList', res.data)
            })
        },
        userMessage(context, payload) {
            let friend = payload.friend;
            Axios.get('/chat-message/' + friend).then(res => {
                context.commit('friendMessage', res.data)
            });
        },
        onlineUsers(context, payload) {
            context.commit('onlineUsers', payload)
        },
        addUserOnline(context, payload) {
            context.commit('addUserOnline', payload);
        },
        removeUserOnline(context, payload) {
            context.commit('removeUserOnline', payload);
        },

        //Friends
        friends(context, payload) {
            context.commit('friends', payload)
        },
        removeFriend(context, payload) {
            context.commit('removeFriend', payload)
        },
        addFriend(context, payload) {
            context.commit('addFriend', payload)
        },

        //Friend Requests
        friendRequests(context, payload) {
            context.commit('friendRequests', payload);
        },
        removeFriendRequest(context, payload) {
            context.commit('removeFriendRequest', payload)
        },
        addFriendRequest(context, payload) {
            context.commit('addFriendRequest', payload)
        },

        //Followers
        followers(context, payload) {
            context.commit('followers', payload);
        },
        removeFollowers(context, payload) {
            context.commit('removeFollowers', payload)
        },
        addFollowers(context, payload) {
            context.commit('addFollowers', payload)
        },

        ///Followings
        followings(context, payload) {
            context.commit('followings', payload);
        },
        removeFollowings(context, payload) {
            context.commit('removeFollowings', payload)
        },
        addFollowings(context, payload) {
            context.commit('addFollowings', payload)
        },

        //Block Lists
        blockLists(context, payload) {
            context.commit('blockLists', payload);
        },
        removeBlockLists(context, payload) {
            context.commit('removeBlockLists', payload)
        },
        addBlockLists(context, payload) {
            context.commit('addBlockLists', payload)
        },


        //Profile Posts
        profilePosts(context, payload) {
            context.commit('profilePosts', payload)
        },

        profileTotalRecords(context, payload) {
            context.commit('profileTotalRecords', payload)
        },

        //Profile Favorite Posts
        profileFavoritePosts(context, payload) {
            context.commit('profileFavoritePosts', payload)
        },
        //Profile Favorite Posts
        profileFavoriteTotalRecords(context, payload) {
            context.commit('profileFavoriteTotalRecords', payload)
        },

        //Profile Favorite Posts
        profileLikePosts(context, payload) {
            context.commit('profileLikePosts', payload)
        },
        //Profile Favorite Posts
        profileLikeTotalRecords(context, payload) {
            context.commit('profileLikeTotalRecords', payload)
        }

    },
    getters: {
        friendLists(state) {
            return state.friendList;
        },
        friendMessage(state) {
            return state.friendMessage;
        },
        onlineUsers(state) {
            return state.onlineUsers
        },
        friends(state) {
            return state.friends
        },
        friendRequests(state) {
            return state.friendRequests
        },
        blockLists(state) {
            return state.blockLists
        },
        followers(state) {
            return state.followers
        },
        followings(state) {
            return state.followings
        },

        /**Profile Posts */
        profilePosts(state) {
            return state.profilePosts
        },
        profileTotalRecords(state) {
            return state.profileTotalRecords
        },

        profilePostCount(state) {
            // return state.profilePosts.length
            return state.profileTotalRecords
        },

        /**End profile Post */

    /**profile favorite */
        profileFavoritePosts(state) {
            return state.profileFavoritePosts
        },
        profileFavoriteTotalRecords(state) {
            return state.profileFavoriteTotalRecords
        },

        profileFavoriteCount(state) {
            return state.profileFavoriteTotalRecords
        },


        profileLikePosts(state) {
            return state.profileLikePosts
        },
        profileLikeTotalRecords(state) {
            return state.profileLikeTotalRecords
        },
        profileLikeCount(state) {
            return state.profileLikeTotalRecords
        },

    }
}