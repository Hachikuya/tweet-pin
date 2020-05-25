<template>
  <div class="home">
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
          <div class="button_container">
            <button class="about_button">About</button>
          </div>
        </router-link>
        <router-link to="/likes">
          <div class="button_container">
            <button class="about_button">Demo Page</button>
          </div>
        </router-link>
        <div class="button_container">
          <a
            target="_blank"
            rel="demo page sorce code"
            href="https://github.com/Hachikuya/tweet-pin"
          >
            <button class="about_button">Source Code</button>
          </a>
        </div>
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
  max-width: 600px;
  width: 80%;
  margin: 0px 30px;
}
.logo_container {
  display: flex;
  flex-direction: column;
}
.main_logo {
  width: 45%;
}
.main_logo_text {
  padding-top: 30px;
  width: 60%;
}
.nav_button {
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.button_container {
  margin: 0px 20px;
}
.about_button {
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
