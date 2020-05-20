<template>
  <div>
    <div class="main_column" :style="main_column_width_style">
      <ImageBlock
        v-for="tweet in tweets"
        :key="tweet.id"
        :tweet="tweet"
        :image_layout="image_layout"
        v-on:image_clicked="image_clicked($event)"
      />
    </div>
    <ImageDetail
      v-show="show_detail"
      :tweet="selected_tweet"
      v-on:detail_closed="detail_closed"
    />
  </div>
</template>

<script>
import ImageBlock from '@/components/ImageBlock.vue'
import ImageDetail from '@/components/ImageDetail.vue'
import EventService from '@/services/EventService.js'
import imageLayout from '@/services/ImageLayout.js'

export default {
  components: {
    ImageBlock,
    ImageDetail
  },
  data() {
    return {
      tweets: [],
      image_layout: imageLayout.data,
      main_column_width_style: imageLayout.main_column_width_style,
      show_detail: false,
      selected_tweet: {}
    }
  },
  methods: {
    resize_handler() {
      console.log('resize detected')
    },
    image_clicked(tweet) {
      this.selected_tweet = tweet
      this.show_detail = true
    },
    detail_closed() {
      this.show_detail = false
    }
  },
  created() {
    EventService.getLikesList()
      .then(response => {
        this.tweets = response.data // the data starts from the oldest
        this.tweets = this.tweets.reverse() // sort data from latest
        this.tweets = this.tweets.map((element, index) => {
          element.id = index // add id = index to every tweet data
          return element
        })
      })
      .catch(error => {
        console.log('There was an error:' + error.response)
      })
    window.addEventListener('resize', this.resize_handler())
  },
  destroyed() {
    window.removeEventListener('resize', this.resize_handler())
    imageLayout.resetData()
  }
}
</script>

<style>
.main_column {
  margin: auto;
  padding-top: 36px;
}
</style>
