<template>
    <div class="demo">
      <ul  class="list"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="150">
            <li v-for="item in scrollList" @click="skip(item.url, item.id, item.pptNum)">
                <div class="left" >
                    <img :src="'http://itdks.com'+item.middlePicture.replace('public://','/files/') || 'http://itdks.com' + item.organizerLogo.replace('public://','/files/')">
                    <p v-if="item.status == '直播中'" class="living">直播中</p>
                    <p v-if="item.status == '直播'" class="living">直播</p>
                    <p v-if="item.status == '即将开始'" class="begin">即将开始</p>
                    <p v-if="item.subjectType == 'live'" class="begin">直播</p>
                    <p v-if="item.status == '已结束'" class="end">已结束</p>
                    <p v-if="item.status == '结束'" class="end">结束</p>
                    <p v-if="item.status == '视频回放'" class="agin">回放</p>
                     <p v-if="item.status == '回放'" class="agin">回放</p>
                    <div v-if="play" class="Play"><img src="./../../assets/img/watch.png" alt=""></div>
                </div>
                <div class="right">
                    <h3 class="title != null">{{ item.title|convertTitle(28) }}</h3>
                    <p class="name" v-if="item.teacherInfo != null">大 咖：{{ item.teacherInfo.trueName }}</p>
                    <p class="name" v-if="item.teacherArr != null">大 咖：{{ item.teacherArr.truename }}</p>
                    <p class="organizer" v-if="item.OrganizerInfo != null">主办方：{{ item.OrganizerInfo.organizerName }}</p>
                    <p class="organizer" v-if="item.organizerInfo != null">主办方：{{ item.organizerInfo.organizerName }}</p>
                    <p class="livetime" v-if="item.liveTime != null && item.pptNum == null && item.price == null">时 间：{{ item.liveTime }}</p>
                    <p class="livetime" v-if="item.updatedTime != null">时间：{{ item.updatedTime }}</p>
                    <p class="liveTime" v-if="item.pptNum != null">时间：{{ item.liveTime }}<span>{{ item.pptNum }}个</span></p>
                    <p class="hitNum" v-if="item.price != null && item.organizerInfo == null">{{ item.hitNum }}人已观看<span  v-if="item.price != 0 && item.price != null">￥{{ item.price }}元</span></p>
                    <p class="hitNum" v-if="item.usedCount != null">{{ item.usedCount}}</p>
                </div>
            </li>

            <!-- <li> -->
                <!-- <div class="left"> -->
                    <!-- <img src="./../../assets/img/test.jpg"> -->
                <!-- </div> -->
                <!-- <div class="right"> -->
                    <!-- <h3 class="title">2017中国人工智能发展大会啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</h3> -->
                    <!-- <p class="name">大咖：董耀祖：英特尔首席工程师</p> -->
                    <!-- <p class="organizer">主办方：美国国际数据集团</p> -->
                    <!-- <p class="livetime">时间：12月08日09：00 ~ 09日18：00</p> -->
                    <!-- <p class="liveTime">时间：12月08日<span>12个</span></p> -->
                    <!-- <p class="hitNum">8888人已观看<span>￥199.00元</span></p>   -->
                <!-- </div> -->
            <!-- </li> -->

        </ul>
    </div>
</template>

<script>
export default {
  name: "scroll-bar",
  data() {
    return {
      scrollList: "",
      currentPage: 0,
      toggle: true,
      nomore: false,
      imgurl: ""
    };
  },
  props: ["url", "tech", "play"],
  created() {
    window.localStorage.removeItem('url')

    let that = this;
    this.$axios
      .get(that.url + "page=" + that.currentPage)
      .then(res => {
        if (typeof res.data.data.list === "object") {
          that.scrollList = res.data.data.list;
          this.$store.state.community = res.data.data;
        } else if (typeof res.data.data.courseList === "object") {
          that.scrollList = res.data.data.courseList;
          this.$store.state.community = res.data.data;
        } else if (typeof res.data.data.pptList === "object") {
          that.scrollList = res.data.data.pptList;
          this.$store.state.community = res.data.data;
        } else {
          that.scrollList = res.data.data;
        }
        that.currentPage++;
      })
      .catch(err => {
        console.log(err);
      })

      window.localStorage.setItem('url', this.url)
  },
  computed: {
    getCommunity() {
      return this.$store.state.community;
    }
  },
  methods: {
    loadMore: function() {
      if (this.nomore) {
        return;
      }
      if (this.tech) {
        return;
      }
      if (!this.toggle) {
        return;
      }
      if (this.currentPage == 0) {
        return;
      }
      this.toggle = false;
      let that = this;
      this.loading = true;
      setTimeout(() => {
        this.$axios.get(that.url + "page=" + that.currentPage).then(res => {
          that.toggle = true;
          if (res.data.data.length == 0) {
            that.nomore = true;
          }
          that.scrollList = that.scrollList.concat(res.data.data);
          if (typeof res.data.data.list == "object") {
            if (res.data.data.list.length == 0) {
              that.nomore = true;
            }
            that.scrollList = that.scrollList.concat(res.data.data.list);
          }
          that.currentPage++;
          this.loading = false;
          // console.log(this.scrollList)
        });
      }, 100);
    },
    skip(url, aid, test) {
      if (arguments[2] != null) {
        window.localStorage.removeItem("pptId")
        this.$router.push({
          name: "PPTdetail",
        })
        window.localStorage.setItem("pptId", aid)
      } else if (arguments[0] == null || arguments[0] == undefined) {
        window.localStorage.removeItem("techId")
        this.$router.push({
          name: "Technicaltopic",
        })
        window.localStorage.setItem("techId", aid)
      } else {
        window.location.href = url;
      }
    }
  },
  watch: {
    url: function() {
      this.scrollList = ''
      this.nomore = false;
      this.currentPage = 0;
      let that = this;
      this.$axios.get(that.url + "page=" + that.currentPage).then(res => {
        that.scrollList = res.data.data;
        if (typeof res.data.data.list == "object") {
          that.scrollList = res.data.data.list;
        }
        if (typeof res.data.data.courseList == "object") {
          that.scrollList = res.data.data.courseList;
        }
        that.currentPage++;
      });
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  outline: none;
}
.demo {
  margin-bottom: 92px;
}
.demo .list li {
  /* width: 750px; */
  height: 219px;
  padding: 25px 28px;
  box-sizing: border-box;
  border-bottom: 1px solid #b3b3b3; /*no*/
  list-style: none;
  .left {
    width: 270px;
    height: 169px;
    line-height: 169px;
    margin-right: 10px;
    float: left;
    border-radius: 10px;
    background-color: red;
    overflow: hidden;
    position: relative;
    display: flex;
    > img {
      width: 270px;
      height: 169px;
    }
    .Play {
      position: absolute;
      width: 50px;
      height: 50px;
      right: 5px;
      bottom: 50px;
      z-index: 100;
      img {
        width: 50px;
        height: 50px;
      }
    }
    p {
      position: absolute;
      line-height: 30px;
      left: 0;
      color: #fff;
      top: 15px;
      font-size: 18px; /*px*/
      padding: 2px 10px;
    }
    .living {
      background-color: #f9a24e;
    }
    .begin {
      background-color: #e73d53;
    }
    .agin {
      background-color: #0399cf;
    }
    .end {
      background-color: #666667;
    }
  }
  .right {
    width: 390px;
    margin-left: 20px;
    float: right;
    font-size: 22px; /*px*/
    .title {
      font-size: 26px; /*px*/
      // line-height: 56px;
      height: 76px;
      font-weight: 550;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .name {
      color: #f2845a;
      margin-top: 30px;
      margin-bottom: 6px;
    }
    .organizer {
      color: #f3855d;
      height: 36px;
      margin-top: 32px;
      overflow: hidden;
    }
    .liveTime,
    .hitNum {
      color: #8c8c8c;
      span {
        float: right;
      }
    }
    .hitNum {
      margin-top: 10px;
      span {
        color: #fe0200;
        font-weight: 700;
      }
    }
    .livetime {
      color: #8c8c8c;
      span {
        float: right;
      }
    }
  }
}
</style>





