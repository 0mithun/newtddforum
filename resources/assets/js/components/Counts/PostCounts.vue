<template>
  <div class="counts-item">
    <i class="fa fa-pencil-square"></i>
    <strong>{{ post_count | formatCount }}</strong>  {{ post_count | strPlural('post') }}
  </div>
</template>

<script>
export default {
  props: ["post_count"],
};
</script>


<style  scoped>
.counts-item {
}
</style>