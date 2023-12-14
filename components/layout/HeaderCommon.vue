<template>
  <div class="header-common">
  </div>
</template>
<script>

export default {
  name: 'HeaderCommon',
  methods: {
    handleRouter(route) {
      this.$router.push(route)
    }
  }
}
</script>
