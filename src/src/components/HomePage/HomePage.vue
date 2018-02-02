<template>
<div>
    <!-- 搜索栏 -->
    <div>
      <search abc="搜索峰会、视频、直播、PPT"></search>
    </div>
    <!-- 轮播图     -->
    <div class="homepage-swipe">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in banner" :key="item.id">
                <img :src="'http://itdks.com' + item.middlePicture" alt="" @click="bannerDeatil(item.url)">
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <!-- menu -->
    <div class="homepage-menu">
        <ul>
            <li>
                <router-link :to="{name: 'navigation', params: {data: 'week'}}">
                    <img src="./../../assets/img/menu1.png" alt="">
                    <p>本周峰会</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'navigation', params: {sort: 'new'}}">
                    <img src="./../../assets/img/menu2.png" alt="">
                    <p>最新视频</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'navigation', params: {type: 'vip'}}">
                    <img src="./../../assets/img/menu3.png" alt="">
                    <p>VIP视频</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'pptlist'}">
                    <img src="./../../assets/img/menu4.png" alt="">
                    <p>会议PPT</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'community'}">
                    <img src="./../../assets/img/menu5.png" alt="">
                    <p>热门社区</p>
                </router-link>
            </li>
            <li>
              <router-link :to="{name: 'livepage'}">
                <img src="./../../assets/img/menu5.png" alt="">
                <p>测试直播页面按钮</p>
              </router-link>
            </li>
        </ul>
    </div>
    <!-- tag -->
    <div class="homepage-tag" >
        <div class="tag">
            <ul>
                <li v-for="(item,index) in categoryList" @click="changeState(index)">
                    <router-link :to="{name: 'categorydetail',query: {id: item.id}}" href="">{{ item.name }}</router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="homepagetab" v-bind:class="{stop: homepageTabStop}">
      <ul>
          <li @click="Live"  v-bind:class="{ active: live}">直播</li>
          <li @click="Subject" v-bind:class="{ active: subject}">技术专题</li>
          <li @click="Meet" v-bind:class="{active: meet}">技术峰会</li>
      </ul>
    </div>
    <div class="homepageScroll">
        <scroll-bar :url="url"></scroll-bar>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      banner: [],
      live: true,
      subject: false,
      meet: false,
      url: "mobile/live/?",
      categoryList: [],
       homepageTabStop: false,
       offsetTop: 0
    };
  },
  computed: {
    getId() {
      return this.$store.state.categoryId;
      console.log(this.$store.state.categoryId);
    }
  },
  watch: {
    selected(newV) {
      this.$router.push({
        name: newV
      });
    }
  },
  created() {
    this.$axios.get("mobile/banner/").then(res => {
      this.banner = res.data.data;
    });
    this.$axios.get("category/").then(res => {
      let result = res.data.data;
      for (var key in result) {
        this.categoryList.push(result[key]);
      }
      this.categoryList = this.categoryList.slice(0, 16);
      console.log(this.categoryList);
    });
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.offsetTop = document.querySelector('.homepagetab').offsetTop
  },
  methods: {
    Live() {
      this.url = "mobile/live/?";
      this.live = true;
      this.subject = false;
      this.meet = false;
    },
    Subject() {
      this.url = "mobile/subject/?";
      this.live = false;
      this.subject = true;
      this.meet = false;
    },
    Meet() {
      this.url = "mobile/meet/?";
      this.live = false;
      this.subject = false;
      this.meet = true;
    },
    bannerDeatil(url) {
      window.location.href = url;
    },
    changeState(i) {
      this.$store.state.categoryId = i;
      console.log(i);
    },
    handleScroll(e) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(scrollTop,this.offsetTop)
      if(this.offsetTop <= scrollTop) {
        this. homepageTabStop = true
      } else{
        this. homepageTabStop = false
      }
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
input {
  border: none;
  outline-style: none;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.homepage-swipe {
  position: relative;
  top: 86px;
}
.mint-swipe-item {
  height: 309px !important;
  position: relative;
  img {
    height: 320px;
    position: absolute;
    left: -250px;
  }
}
.mint-swipe {
  height: 309px !important;
}
.mint-swipe .mint-swipe-items-wrap {
  height: 309px !important;
}
.homepage-menu {
  margin-top: 100px;
}
.homepage-menu ul {
  padding: 20px 28px 25px 28px;
  display: flex;
  box-sizing: border-box;
  border-bottom: 10px solid #f2f6f2; /*no*/
  li {
    flex: 1;
    display: inline-block;
    text-align: center;
    a {
      text-align: center;
      color: #535353;
      img {
        height: 73px;
        margin-bottom: 16px;
      }
    }
  }
}

.homepage-tag {
  padding: 31px 26px;
  box-sizing: border-box;
  background-image: -webkit-linear-gradient(to right, #3079ec, #003095);
  background-image: linear-gradient(to right, #3079ec, #003095);
  h2 {
    font-weight: 300;
    color: #fff;
    font-size: 32px;/*px*/
    height: 54px;
  }
  .tag ul {
    height: 220px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    li {
      display: inlin-block;
      width: 148px;
      height: 44px;
      border-radius: 22px;
      text-align: center;
      line-height: 44px;
      border: 1px solid #fff;
      a {
        color: #fff;
        font-size: 24px; /*px*/
      }
    }
  }
}
.homepagetab ul {
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
    color: #3e92cb;
  }
}
.stop {
  position: fixed;
  top: 80px;
  width: 750px;
  z-index: 10;
}
</style>
