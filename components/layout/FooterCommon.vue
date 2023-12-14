<template>
  <footer class="footer">
  </footer>
</template>
<script>
export default {
  name: 'FooterCommon',
  methods: {
    handleRouter(route) {
      this.$router.push(route)
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
