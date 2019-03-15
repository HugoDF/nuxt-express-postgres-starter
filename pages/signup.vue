<template>
  <div class="section">
    <FormContainer>
      <template v-slot:form>
        <form @submit="submitSignup($event)">
          <h1 class="title">
            Sign up
          </h1>
          <b-field label="Email">
            <b-input v-model="email" type="email" use-html5-validation required />
          </b-field>
          <b-field label="Password" :type="passwordError && 'is-danger'" :message="passwordError">
            <b-input
              v-model="password"
              type="password"
              required
              @focus="checkPasswords('focus')"
              @blur="checkPasswords('blur')"
            />
          </b-field>

          <b-field label="Confirm Password" :type="passwordError && 'is-danger'">
            <b-input
              v-model="confirmPassword"
              type="password"
              required
              @focus="checkPasswords('focus')"
              @blur="checkPasswords('blur')"
            />
          </b-field>

          <b-field>
            <button class="button is-primary is-fullwidth" type="submit">
              Sign up
            </button>
          </b-field>
        </form>
      </template>
      <template v-slot:footer-link>
        <nuxt-link to="/login">
          Already have an account? Log in
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
      confirmPassword: '',
      passwordError: null
    }
  },
  fetch({ store, redirect }) {
    if (store.state.sessionId) {
      redirect('/dashboard')
    }
  },
  methods: {
    checkPasswords(checkType) {
      const passwordsMatch =
        this.password && this.password === this.confirmPassword

      if (passwordsMatch) {
        this.passwordError = null
      } else {
        switch (checkType) {
          case 'focus':
            this.passwordError = null
            break
          case 'blur':
            if (this.confirmPassword) {
              this.passwordError = `Password and confirmation don't match`
            }
            break
          default:
            break
        }
      }
    },
    submitSignup(e) {
      if (!this.email || !this.password) {
        return this.$toast.open('Please provide an email and passowrd')
      }
      e.preventDefault()
      this.$axios
        .$post('/api/users', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$toast.open({
            message: 'Signed up successfully',
            type: 'is-success'
          })
          this.$router.push('/login')
        })
        .catch(() => {
          this.$toast.open({
            message: 'Something happened, try again',
            type: 'is-danger'
          })
        })
    }
  }
}
</script>

<style>
</style>
