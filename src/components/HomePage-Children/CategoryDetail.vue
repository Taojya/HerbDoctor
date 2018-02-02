<template>
  <div class="demo">
    <div class="Category">
      <ul>
          <li v-for="(item,index) in List" @click="changeId(item.id)">
            <!-- <img :src="'http://itdks.com/'+item.icon_gray" alt=""> -->
            <img :src="'http://itdks.com/'+item.icon_gray" alt="" v-show="item.grayshow" @click="changeState(index)">
            <img :src="'http://itdks.com/'+item.icon_blue" alt="" v-show="item.blueshow" @click="changeState(index)">
            <p>{{ item.name }}</p>
          </li>
        </ul>
    </div>
    <div class="Categorytab">
      <ul>
          <li @click="Live"  v-bind:class="{ active: live}">直播</li>
          <li @click="Meet" v-bind:class="{ active: meet}">技术峰会</li>
          <li @click="Video" v-bind:class="{active: video}">大咖视频</li>
          <li @click="Ppt" v-bind:class="{active: ppt}">会议PPT</li>
      </ul>
    </div>
    <div class="categoryUl">
        <scroll-bar :url="myurl"></scroll-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [],
      dark: true,
      blue: false,
      part: true,
      live: true,
      meet: false,
      video: false,
      ppt: false,
      myurl: "",
      myid: 0,
      grayShow: true,
      blueShow: false,
      categoryVuex: 0
    };
  },
  computed: {
    getId() {
      return this.$store.state.categoryId;
    }
  },
  methods: {
    Live() {
      this.live = true;
      this.meet = false;
      this.video = false;
      this.ppt = false;
      this.myurl = "mobile/live/?categoryId=" + this.myid + '&'
    },
    Meet() {
      this.live = false;
      this.meet = true;
      this.video = false;
      this.ppt = false;
      this.myurl = "mobile/meet/?categoryId=" + this.myid + '&'
    },
    Video() {
      this.live = false;
      this.meet = false;
      this.video = true;
      this.ppt = false;
      this.myurl = "mobile/video/?categoryId=" + this.myid + '&'
    },
    Ppt() {
      this.live = false;
      this.meet = false;
      this.video = false;
      this.ppt = true;
      this.myurl = "mobile/ppt/?categoryId=" + this.myid + '&'
    },
    changeId(id) {
      // console.log(this.myurl);
      // this.myurl = this.myurl + id + "&";

      let newUrl = this.myurl
      let num = newUrl.indexOf("=")
      let array = newUrl.split("")
      let newarray = []
      let newstr
      for (var i = 0; i < num + 1; i++) {
        newarray.push(array[i])
      }
      newstr = newarray.join("")
      this.myurl = newstr + id + "&"
    },
    changeState(id) {
      this.$store.state.categoryId = id;
      let categoryId = this.$store.state.categoryId;
      for (var i = 0; i < this.List.length; i++) {
        this.List[i].grayshow = true;
        this.List[i].blueshow = false;
      }
      console.log(this.List);
      this.List[id].grayshow = !this.List[id].grayshow;
      this.List[id].blueshow = !this.List[id].blueshow;
    }
  },
  created() {
    this.categoryVuex = this.$store.state.categoryId;

    this.myid = this.$route.query.id;
    this.myurl = "mobile/live/?categoryId=" + this.myid + "&";
    console.log(this.myurl);

    this.$axios.get("category/").then(res => {
      let result = res.data.data;
      for (var i = 0; i < result.length; i++) {
        result[i].grayshow = true;
        result[i].blueshow = false;

        result[this.categoryVuex].grayshow = false;
        result[this.categoryVuex].blueshow = true;
      }
      this.List = result;
    });
  },
  mounted() {
    // this.myurl = this.myurl + this.myid + "&";
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.Category {
  width: 750px;
  z-index: 200;
  background-color: #f2f6f2;
  height: 200px;
  padding: 0px 0 0 48px;
  box-sizing: border-box;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  ul {
    width: 700px;
    width: 700px;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 82px;
      height: 71px;
      display: inline-block;
      text-align: center;
      margin-right: 32px;
      margin-top: 26px;
      img {
        height: 35px;
      }
      p {
        font-size: 18px; /*px*/
        color: #bcbdba;
      }
    }
  }
}
.Categorytab ul {
  width: 750px;
  padding: 9px 29px 0 29px;
  background-color: #f4f4f4;
  box-sizing: border-box;
  list-style: none;
  display: flex;
  border-top: 10px solid #fff;
  top: 200px;
  position: fixed;
  z-index: 10;
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
.categoryUl {
  margin-top: 300px;
  overflow: hidden;
}
.categoryUl ul.list {
  // margin-top: 300px;
}
</style>
