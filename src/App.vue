<template>
  <div id="app">
    <div id="nav" v-if="!is_root_page">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/likes">Demo Page</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    is_root_page() {
      return this.$route.path === '/'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  color: #1da1f2;
}

body {
  margin: 0 !important;
}
</style>
