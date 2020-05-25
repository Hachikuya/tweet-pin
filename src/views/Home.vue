<template>
  <div class="home">
    <div class="disclaimer">
      <span>This page is under development</span>
    </div>
    <div class="main_column">
      <div class="logo_container">
        <div class="main_logo_container">
          <img
            class="main_logo"
            alt="Tweet-Pin logo"
            src="../assets/tweet-pin-logo.png"
          />
        </div>
        <div class="main_logo_text_container">
          <img
            class="main_logo_text"
            alt="Tweet-Pin logo text"
            src="../assets/tweet-pin-text.png"
          />
        </div>
      </div>
      <div class="nav_button">
        <router-link to="/about">
          <div class="about">
            <button class="about_button">About</button>
          </div>
        </router-link>
        <router-link to="/likes">
          <div class="demo page">
            <button class="about_button">Demo Page</button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>
.main_column {
  height: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.disclaimer {
  position: absolute;
  top: 15px;
  left: 15px;
  color: #333;
}
.logo_container {
  display: flex;
  flex-direction: column;
}
.main_logo {
  height: 250px;
}
.main_logo_text {
  padding-top: 30px;
  width: 350px;
}
.nav_button {
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.about_button {
  margin: 0px 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-color: #1da1f2;
  width: 200px;
  height: 50px;
  border-radius: 25px;
  background-color: #1da1f2;
}
</style>
