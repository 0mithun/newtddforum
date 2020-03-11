<template>
    <nav>
        <ul class="pager" v-if="shouldPaginate">
        <li v-show="prevUrl" class="pull-left">
            <a href="#" aria-label="Previous" rel="prev" @click.prevent="page--">
                <span aria-hidden="true">&laquo; Previous</span>
            </a>
        </li>
        <li v-show="nextUrl" class="pull-right">
            <a href="#" aria-label="Next" rel="next" @click.prevent="page++">
                <span aria-hidden="true">Next &raquo;</span>
            </a>
        </li>
    </ul>
    </nav>
    
</template>

<script>
    export default {
        props: ['dataSet','query'],

        data() {
            return {
                page: 1,
                prevUrl: this.dataSet.prev_page_url,
                nextUrl: this.dataSet.next_page_url
            }
        },

        watch: {
            dataSet() {
                this.page = this.dataSet.current_page;
                this.prevUrl = this.dataSet.prev_page_url;
                this.nextUrl = this.dataSet.next_page_url;
            },

            page() {
                this.broadcast().updateUrl();
            }
        },
        created(){
            eventBus.$on('pageChange', pageUrl=>{
                this.prevUrl = pageUrl.prev_page_url;
                this.nextUrl = pageUrl.next_page_url;
            })
        },

        computed: {
            shouldPaginate() {
                return !! this.prevUrl || !! this.nextUrl;
            }
        },

        methods: {
            broadcast() {
                return this.$emit('changedSearch', this.page);
            },

            updateUrl() {
                history.pushState(null, null, '?query='+this.query+'&page=' + this.page);
                ///?query=${this.query}&page=${page}
            }
        }
    }
</script>
