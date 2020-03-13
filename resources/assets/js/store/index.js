import Axios from "axios";

export default {
    state: {  
        friendList:[],
        friendMessage:[]
    },
    mutations: { 
        friendList(state, payload){
            return state.friendList = payload;
        },
        friendMessage(state, payload){
            return state.friendMessage = payload;
        }
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
        }
    },
    getters: { 
        friendLists(state){
            return state.friendList;
        },
        friendMessage(state){
            return state.friendMessage;
        }
    }
}