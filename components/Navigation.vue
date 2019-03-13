<template functional>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-start">
      <nuxt-link to="/" class="navbar-item">
        Nuxt Starter
      </nuxt-link>
      <a
        class="navbar-item"
        href="https://github.com/HugoDF/nuxt-express-postgres-starter"
        target="_blank"
      >Documentation</a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <nuxt-link to="/signup" class="button is-primary">
            <strong>Sign up</strong>
          </nuxt-link>
          <nuxt-link to="/login" class="button is-light">
            Log in
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>
