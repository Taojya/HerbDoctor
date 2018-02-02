<template>
  <div>
      <div class="detail">
          <div class="left">
              <div class="top">
                  <img :src="'http://itdks.com' + message.organizerLogo" alt="">
              </div>
              <div class="bottom">
                  <p>{{ message.organizerName}}</p>
              </div>
          </div>
          <div class="right">
              <p>{{ message.brief|convertTitle(100)}}</p>
          </div>
      </div>
      <div class="communityScroll">
             <div class="tab">
      <ul>
          <li @click="Meet"  v-bind:class="{ active: meet}">峰会</li>
          <li @click="Live" v-bind:class="{ active: live}">直播</li>
          <li @click="Video" v-bind:class="{active: video}">视频</li>
      </ul>
    </div>
      <div v-if="meet">
          <scroll-bar :url="'mobile/organizers/' + newid +'?type='+ mytype +'&'"></scroll-bar>
      </div>  
      </div>
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {},
      meet: true,
      live: false,
      video: false,
      newid: 0,
      mytype: "meet"
    };
  },
  computed: {
    getCommunity() {
      return this.$store.state.community;
    }
  },
  created() {
    this.message = this.$store.state.community;
    this.newid = this.$route.query.id;
    console.log(this.newid);
  },
  mounted() {
    this.first = true;
  },
  methods: {
    Meet() {
      this.meet = true;
      this.live = false;
      this.video = false;
      this.mytype = "meet";
    },
    Live() {
      this.meet = false;
      this.live = true;
      this.video = false;
      this.mytype = "live";
    },
    Video() {
      this.meet = false;
      this.live = false;
      this.video = true;
      this.mytype = "video";
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.detail {
  height: 3.35333rem;
  padding: 38px 40px 0 46px;
  box-sizing: border-box;
  background-image: -webkit-linear-gradient(to right, #3079ec, #003095);
  background-image: linear-gradient(to right, #3079ec, #003095);
  .left {
    width: 200px;
    float: left;
    .top {
      width: 200px;
      height: 100px;
      background-color: #fff;
      img {
        width: 200px;
      }
    }
    .bottom {
      width: 200px;
      height: 69px;
      text-align: center;
      line-height: 69px;
      font-size: 26px;
      font-weight: 700;
      border-top: none;
      color: #fff;
      font-weight: 400;
    }
  }
  .right {
    width: 440px;
    height: 140px;
    display: inline-block;
    margin-left: 20px;
    color: #fff;
  }
}
.tab ul {
  /* width: 750px; */
  padding: 9px 29px 0 29px;
  background-color: #f4f4f4;
  box-sizing: border-box;
  list-style: none;
  display: flex;
  li {
    width: 220px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    flex: 1;
  }
  .active {
    border-bottom: 1px solid #3e92cb; /*no*/
  }
}
.communityScroll {
    position: absolute;
    top: 3.30666rem;
    right: 0;
    width: 750px;
}
</style>
