<template>
  <div class="section">
    <h1 class="title">
      Dashboard
    </h1>
    {{ userId }}
    <nuxt-link to="/logout">
      Logout
    </nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData({ $axios }) {
    return $axios.$get('/api/sessions').catch(err => {
      return {
        error: err.message,
        userId: null
      }
    })
  },
  mounted() {
    if (this.error) {
      this.$toast.open({
        message: `Whoops, something went wrong: ${this.error}`,
        type: 'is-danger'
      })
    }
  }
}
</script>

<style>
</style>
