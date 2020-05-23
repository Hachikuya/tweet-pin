<template>
  <div>
    <div class="overlay_background">
      <div
        class="image_container"
        :style="image_container_width"
        @click.self="$emit('detail_closed')"
      >
        <img class="image" :src="tweet.imageID_list[0].image_url" />
      </div>
      <div class="detail_container">
        <div class="main_column">
          <div class="author">
            <a
              class="author_link"
              target="_blank"
              rel="author profile"
              :href="author_profile"
            >
              <div class="profile_image_container">
                <img class="profile_image" :src="tweet.profile_images_url" />
                <div class="profile_image_cover"></div>
              </div>
            </a>
            <a
              class="author_link"
              target="_blank"
              rel="author profile"
              :href="author_profile"
            >
              <div class="author_info_container">
                <div class="author_info">
                  <div class="author_name_container">
                    <span class="author_name">{{ tweet.author_name }}</span>
                  </div>
                  <div class="screen_name_container">
                    <span class="screen_name">@{{ tweet.screen_name }}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="text_content_container">
            <span class="text_content">{{ tweet.text_content }}</span>
          </div>
          <div class="divider_1px_gray"></div>
          <div class="liked_time_container">
            <span class="liked_time"
              >Liked at: {{ tweet.clicked_at_UTC }} (UTC+8)</span
            >
          </div>
        </div>
      </div>
      <div class="close_button_container" @click="$emit('detail_closed')">
        <button class="close_button">
          <svg margin="auto" width="20px" height="20px">
            <g fill="none" stroke="white">
              <path stroke-width="2" d="M0 0 L20 20" />
              <path stroke-width="2" d="M20 0 L0 20" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tweet: Object
  },
  computed: {
    window() {
      return window
    },
    image_container_width() {
      return 'width: ' + (window.innerWidth - 350) + 'px;'
    },
    author_profile() {
      return `https://twitter.com/${this.tweet.screen_name}`
    }
  },
  methods: {
    stop_onclick() {
      console.log('stop onclick penatration')
    }
  }
}
</script>

<style scoped>
.author_link {
  color: transparent;
  display: flex;
}
.overlay_background {
  left: 0px;
  top: 0px;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}
.detail_container {
  display: flex;
  box-sizing: border-box;
  flex-shrink: 1;
  width: 350px;
  background-color: #fff;
}
.main_column {
  padding: 0px 15px;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}
.author {
  display: flex;
  margin-top: 15px;
  flex-direction: row;
}
.profile_image_container {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  border: 1px solid #000;
}
.profile_image_cover {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  cursor: pointer;
  background-color: rgb(0, 0, 0);
  transition: 0.2s;
  opacity: 0;
}
.profile_image_cover:hover {
  opacity: 0.1;
}
.author_info_container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 17px;
  line-height: 1.1;
  cursor: pointer;
}
.author_name:hover {
  text-decoration-line: underline;
}
.author_name_container {
  text-align: left;
}
.author_name {
  color: #000;
  font-weight: bold;
}
.screen_name_container {
  text-align: left;
}
.screen_name {
  color: #555;
}
.profile_image {
  width: 100%;
  height: 100%;
}
.image_container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
}
.image {
  position: relative;
  max-height: 100%;
  max-width: 100%;
}
.text_content_container {
  text-align: left;
  font-size: 23px;
  line-height: 1.31;
  margin: 15px 0px;
}
.close_button_container {
  position: absolute;
  left: 0px;
  top: 0px;
  padding: 10px;
}
.close_button {
  position: relative;
  border: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(48, 48, 48, 0);
  transition-duration: 0.1s;
}
.close_button:hover {
  background-color: rgba(48, 48, 48, 0.3);
}
.close_button:active {
  background-color: rgba(48, 48, 48, 0.5);
}
.divider_1px_gray {
  height: 1px;
  width: 100%;
  background-color: #777;
}
.liked_time_container {
  margin: 5px 0px;
  text-align: left;
}
.liked_time {
  color: #555;
  font-size: 13px;
}
</style>
