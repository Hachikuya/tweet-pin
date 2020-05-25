<template>
  <div class="about">
    <h1 class="title">About</h1>
    <div class="description" style="padding-bottom: 20px;">
      <p>
        Tweet-Pin is a project inspired by Twitter and Pinterest. As part of the
        Twitter user collect their favorite images by hitting likes, we found
        that managing liked images is not an easy work. On the other hand,
        Pinterest usually pins the the image and bind the source directly to the
        pinned page, which losses its connectivity to the original tweet if one
        pins an image in one's own timeline. To solve this problem, we're now
        developing a service providing Twitter user a better way to view and
        manage their liked tweets, at the same time updating their likes to
        Pinterest board with correct original source.
      </p>
    </div>
    <h1 class="">Project Plan</h1>
    <div class="description">
      <p style="text-align: center;">This project is mainly for PC user.</p>
    </div>
    <h2>Browser Extension</h2>

    <p class="sub_title">(Chrome, Firefox)</p>
    <div class="description">
      <p>
        A browser extension would be developed to help user extract useful
        information and store it when an user clicks a like button. There are
        two reasons that we don't use Twitter API as our main data source:
      </p>
      <ul>
        <li>
          As the like (favorite) list provided by Twitter API sorts result by
          the created time of the tweet, instead of the liked time by the user,
          we need to track user's like action in order to provide like list
          sorted by the liked time.
        </li>
        <li>
          The max tweet of like list responsed by Twitter API has a limmit to
          200 results, so it's better to store the data by the user instead of
          relying on Twitter's service.
        </li>
      </ul>
    </div>
    <h2>Front End Webpage</h2>
    <p class="sub_title">(Vue.js)</p>
    <div class="description">
      <p>
        A front end webpage is used to display images from their history likes.
        It also provides the following features for user to easily manage their
        likes:
      </p>
      <ul>
        <li>
          Image based display for one to view and find liked tweets at a glance.
        </li>
        <li>Tag function to label their likes.</li>
        <li>Search likes by liked time or post time.</li>
        <li>Sharing and download one or more images with just a click.</li>
        <li>
          Randomly display images for artists who needs to quickly get some idea
          or references.
        </li>
      </ul>
    </div>
    <h2>Backend API &amp; Database</h2>
    <p class="sub_title">(Node.js, Express.js, FireBase)</p>
    <div class="description">
      <p>
        A backend server is mainly used to store user's Twitter likes data. If
        needed, our backend service would provide API to help user transfer data
        between Twitter and Pinterest.
      </p>
    </div>
  </div>
</template>

<style scoped>
ul {
  padding-left: 20px;
}
h2 {
  margin-top: 30px;
}
li {
  padding-bottom: 10px;
}
.description {
  margin: 0px auto;
  max-width: 600px;
  width: 90%;
  text-align: justify;
}
.sub_title {
  margin-top: -20px;
  margin-bottom: 20px;
}
</style>
