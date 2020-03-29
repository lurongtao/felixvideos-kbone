<template>
  <div class="cnt">
    <p>I am AAA</p>
    <p>route: {{route}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    route() {
      return this.$route.path
    }
  }
}
</script>

<style>
.cnt {
  width: 100%;
  text-align: center;
}
</style>