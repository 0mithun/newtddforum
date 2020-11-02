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
                axios.delete('/threads/'+this.thread.slug).then(res=>{    
                     flash("Thread Delete Successfully.");               
                    window.location = '/'
                }).catch(err=>{
                    console.log(err)
                })
            },
        }
    }
</script>