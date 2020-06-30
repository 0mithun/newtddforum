<template>
    <div>
        <!-- @if($thread->tags->count())
                    Tagged: 
                    @foreach($thread->tags as $tag)
                        <span> <a href="{{ strtolower(route('tags.threads.list', $tag->name))  }}">{{ strtolower($tag->name)  }}</a> </span>
                    @endforeach
                @endif -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>