<template>
  <div id="app">
    <div class="disclaimer">
      <span>This page is under development</span>
    </div>
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
  padding-top: 50px;
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

.disclaimer {
  position: fixed;
  width: 100%;
  padding: 0px 5px;
  background-color: #1da1f2;
  color: #fff;
  z-index: 2;
}
</style>
