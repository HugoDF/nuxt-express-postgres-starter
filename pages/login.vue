<template>
  <div class="section">
    <FormContainer>
      <template v-slot:form>
        <form @submit="submitLogin($event)">
          <h1 class="title">
            Login
          </h1>
          <div v-if="error">
            {{ error }}
          </div>
          <b-field label="Email">
            <b-input v-model="email" type="email" use-html5-validation />
          </b-field>
          <b-field label="Password">
            <b-input v-model="password" type="password" />
          </b-field>

          <b-field>
            <button class="button is-primary is-fullwidth" type="submit">
              Login
            </button>
          </b-field>
        </form>
      </template>
      <template v-slot:footer-link>
        <nuxt-link to="/signup">
          Don't have an account? Sign up
        </nuxt-link>
      </template>
    </FormContainer>
  </div>
</template>

<script>
import FormContainer from '~/components/FormContainer'

export default {
  components: {
    FormContainer
  },
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  fetch({ store, query, redirect }) {
    if (store.state.sessionId) {
      redirect('/dashboard')
    }
  },
  mounted() {
    if (this.$route.query.authError) {
      this.$toast.open({
        message: 'Please login for access'
      })
    }
  },
  methods: {
    submitLogin(e) {
      e.preventDefault()
      this.$axios
        .$post('/api/sessions', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$toast.open({
            message: 'Logged in successfully',
            type: 'is-success'
          })
          this.$router.push('/dashboard')
        })
        .catch(err => {
          this.$toast.open({
            message: `Whoops something went wrong: ${err.message}`,
            type: 'is-danger'
          })
        })
    }
  }
}
</script>

<style>
.form-container {
  margin-top: 50px;
  max-width: 320px;
}
.form-footer-link {
  text-align: center;
}
</style>
