<template>
  <section class="section">
    <h1 class="subtitle">
      Logging out
    </h1>
  </section>
</template>

<script>
export default {
  asyncData({ $axios, redirect }) {
    return $axios.$delete('/api/sessions').finally(() => {
      redirect('/')
    })
  }
}
</script>

<style>
</style>
