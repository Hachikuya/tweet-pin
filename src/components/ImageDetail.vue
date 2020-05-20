<template>
  <div>
    <div class="overlay_background" @click.stop="$emit('detail_closed')"></div>
    <div class="detail_container"></div>
    <div class="image_container">
      <img />
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
    }
  }
}
</script>

<style>
.overlay_background {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
}
.detail_container {
  position: fixed;
  top: 0px;
  right: 0px;
  width: 350px;
  height: 100%;
  background-color: #fff;
}
.image_container {
  left: 0px;
  width: 100%;
}
</style>
