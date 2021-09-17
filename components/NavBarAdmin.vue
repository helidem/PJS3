<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Mon App</b-navbar-brand>

    <b-navbar-nav class="ml-auto">
      <li class="nav-item">
        <nuxt-link to="/admin/login" class="nav-link">Logout</nuxt-link>
      </li>
    </b-navbar-nav>

  </b-navbar>
</template>

<script>
export default {
  name: "NavBarAdmin"
}
</script>

<style scoped>

</style>
