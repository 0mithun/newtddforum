import Axios from "axios";

export default {
    state: {  
        friendList:[],
        friendMessage:[],
        onlineUsers:[]
    },
    mutations: { 
        friendList(state, payload){
            return state.friendList = payload;
        },
        friendMessage(state, payload){
            return state.friendMessage = payload;
        },
        onlineUsers(state, payload){
            return state.onlineUsers = payload
        },
        addUserOnline(state, payload){
            let status = _.find(state.onlineUsers,{'id':payload.id});
            if(!status){
                return state.onlineUsers.push(payload)
            }
            
            // let onlineUsers = state.onlineUsers.push(payload)
        },

        removeUserOnline(state, payload){


            let onlineUsers = _.remove(state.onlineUsers, (n)=>{
                return n.id != payload.id
            })
            state.onlineUsers = onlineUsers;


        },
        // otherMessageUserList(state, payload){

        //      const newUsers = state.friendList.concat(payload)
        //      return state.friendList = newUsers;

        //      //let old_friend_lists = state.friendList;
        //      //console.log(old_friend_lists)
            

        // }
    },
    actions: {
        friendList(context, id){
            Axios.post('/chat-friends',{id}).then(res=>{
               context.commit('friendList', res.data)
            })
        },
        userMessage(context, payload){
            let friend = payload.friend;
            Axios.get('/chat-message/'+friend).then(res=>{
                context.commit('friendMessage',res.data)
            });
        },
        onlineUsers(context, payload){
            context.commit('onlineUsers', payload)
        },
        addUserOnline(context, payload){
            context.commit('addUserOnline', payload);
        },
        removeUserOnline(context, payload){
            context.commit('removeUserOnline', payload);
        },


        // otherMessageUserList(context){

        //     Axios.get('/chat-others').then(res=>{
        //         //context.commit('friendList', res.data)
        //         //console.log(res)
        //         context.commit('otherMessageUserList',res.data);
        //     })
            
            
        // }
    },
    getters: { 
        friendLists(state){
            return state.friendList;
        },
        friendMessage(state){
            return state.friendMessage;
        },
        onlineUsers(state){
            return state.onlineUsers
        }
    }
}