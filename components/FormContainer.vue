<template>
  <div class="container form-container">
    <slot name="form" />

    <b-field class="form-footer-link">
      <slot name="footer-link" />
    </b-field>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.form-container {
  margin-top: 50px;
  max-width: 320px;
}
.form-footer-link {
  padding-top: 20px;
  text-align: center;
}
</style>
