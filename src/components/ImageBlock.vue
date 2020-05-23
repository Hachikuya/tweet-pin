<template>
  <div
    class="thumbnail_container"
    :style="layout_info !== undefined ? layout_info.posize : ''"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  >
    <img
      v-show="layout_info !== undefined ? true : false"
      class="image"
      :src="tweet.imageID_list[0].image_url"
      :style="layout_info !== undefined ? layout_info.imgStyle : ''"
    />
    <div
      v-show="is_hover"
      class="thumbnail_cover"
      @click="$emit('image_clicked', tweet)"
    ></div>

    <div v-show="is_hover" class="action_container">
      <div class="top">
        <div class="avatar_container">
          <a target="_blank" rel="original post" :href="tweet.tweet_url">
            <img class="avatar" :src="tweet.profile_images_url" />
          </a>
        </div>
        <a target="_blank" rel="original post" :href="tweet.tweet_url">
          <span class="author_name">{{ tweet.author_name }}</span>
        </a>
      </div>

      <div class="bottom">
        <div class="button_container">
          <svg height="36" width="36">
            <circle
              class="option_icon"
              cx="24"
              cy="18"
              r="2"
              fill="#111"
            ></circle>
            <circle
              class="option_icon"
              cx="18"
              cy="18"
              r="2"
              fill="#111"
            ></circle>
            <circle
              class="option_icon"
              cx="12"
              cy="18"
              r="2"
              fill="#111"
            ></circle>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageLayout from '@/services/ImageLayout.js'

export default {
  props: {
    tweet: Object,
    image_layout: Array
  },
  data() {
    return {
      is_hover: false
    }
  },
  methods: {
    mouseover() {
      this.is_hover = true
    },
    mouseleave() {
      this.is_hover = false
    }
  },
  created() {
    var image = new Image()
    var image_display_ID = this.tweet.id
    var image_url = this.tweet.imageID_list[0].image_url
    image.onload = function() {
      ImageLayout.getBlockPosition({
        id: image_display_ID,
        oriWidth: image.width,
        oriHeight: image.height
      })
    }
    image.src = image_url
  },
  computed: {
    layout_info() {
      return this.image_layout.find(element => element.id === this.tweet.id)
    },
    source_tweet_post_url() {
      return `https://twitter.com/${this.tweet.screen_name}/status/${this.tweet.tweetID}`
    }
  }
}
</script>

<style scoped>
a {
  color: transparent;
}
.thumbnail_container {
  position: absolute;
  overflow: hidden;
  border-radius: 24px;
}
.image {
  position: absolute;
  left: 0px;
}
.thumbnail_cover {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.2;
}
.thumbnail_cover:hover {
  cursor: zoom-in;
}
.action_container {
  z-index: 2;
}
.top {
  position: absolute;
  display: flex;
  height: 36px;
  margin: 18px 18px 0px 18px;
  border-radius: 18px;
}
.avatar_container {
  margin-right: 10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar {
  width: 36px;
  height: 36px;
}
.avatar:hover {
  cursor: pointer;
}
.author_name_container {
  height: 36px;
}
.author_name {
  margin: 0px;
  line-height: 36px;
  height: 36px;
  text-align: center;
  color: #000;
  -webkit-text-fill-color: white;
  -webkit-text-stroke: 0.2px white;
  overflow: hidden;
}
.author_name:hover {
  cursor: pointer;
}
.bottom {
  position: absolute;
  bottom: 0px;
  right: 0px;
  /* width: calc(100% - 36px); */
  width: 36px;
  height: 36px;
  margin: 0px 18px 18px 18px;
  border-radius: 18px;
}
.button_container {
  position: absolute;
  right: 0px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
}
.button_container:hover {
  cursor: pointer;
}
</style>
