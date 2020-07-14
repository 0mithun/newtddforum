<template>
    <div>
        <button class="btn btn-sm btn-danger" @click="confirmDelete">Delete</button>
    </div>
</template>

<script>
    export default {
        props: {
            thread:{
                type: Object,
                require: true
            }
        },
        
        data(){
            return {
               

            }
        },
        computed:{
            signedIn(){
                return  (window.App.user)? true : false;
            },
        },
        methods:{       
            confirmDelete(){
                if(confirm('Are you sure ?')){
                    this.deleteThread()
                }
                return false
            },
            deleteThread(){
                console.log(this.thread.slug)
                axios.delete('/threads/'+this.thread.slug).then(res=>{
                    console.log(res.data)
                    window.location = '/'
                }).catch(err=>{

                })
            },
        }
    }
</script>