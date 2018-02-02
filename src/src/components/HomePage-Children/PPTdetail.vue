<template>
  <div class="PPTwrap">
    <div class="pptBanner">
      <img :src="'http://itdks.com' + banner" alt="">
    </div>
    <div class="PPTtab">
        <ul>
            <li @click="List" v-bind:class="{ active: bar}">PPT列表</li>
            <li @click="Introduce" v-bind:class="{ active: about}">会议介绍</li>
        </ul>
    </div>
    <div v-if="bar" class="PPTlist">
      <ul>
        <li v-for="(item,index) in scrollList" :key="index"  @click="pptjump(item.id)">
          <div class="left">
            <img :src="item.img" alt="">
          </div>
          <div class="right">
            <h3>{{ item.title|convertTitle(28)}}</h3>
            <p class="name">大 咖：{{ item.teacherInfo.trueName }}</p>
            <p class="hitNum">{{ item.usedCount }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-html="html" class="about" v-if="about">
    </div>
  </div>
</template>

<script>
export default {
  name: "technicaltopic",
  data() {
    return {
      banner: "",
      PPTurl: "",
      html: "",
      about: false,
      bar: true,
      scrollList: []
    };
  },
  created() {
    const that = this;
    let aid = window.localStorage.getItem("pptId")
    this.PPTurl = "mobile/ppt/" + aid;
    this.$axios.get(that.PPTurl).then(res => {
      that.banner = res.data.data.middlePicture.replace("public://", "/files/")
      that.html = res.data.data.about
      console.log(this.html)
      this.scrollList = res.data.data.pptList
      console.log(res.data.data.pptList);
    });
  },
  methods: {
    List() {
      this.bar = true;
      this.about = false;
    },
    Introduce() {
      this.bar = false;
      this.about = true;
    },
    pptjump(pptid){
      let aid = this.$route.params.tid;
      let ppturl=''
      this.$axios.get('mobile/ppt/'+aid+'?pptId='+pptid).then(res =>{
        ppturl = res.data.data.url
        alert('安卓手机用户观看ppt需要下载之后更改文件名后缀为.pdf方可观看')
        window.location.href = ppturl
      })
    }
  },
  
  updated() {
    document.querySelector('.about p img').style.width = '100%'
  }
}
</script>

<style scoped lang="less">
.PPTwrap {
  position: relative;
  overflow-y: hidden;
  .pptBanner {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;

    img {
      position: relative;
      margin: 0;
      width: 100%;
      height: inherit;
      text-align: center;
    }
  }
  .techscroll {
  }
}

.PPTtab ul {
  /* width: 750px; */
  padding: 9px 400px 0 29px;
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
.about {
  width: 750px;
  padding-top: 10px;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 88px;
  p {
    width: 750px !important;
  
    box-sizing: border-box;
    img {
      width: 750px !important;
    }
  }
}


.PPTlist {
  margin-bottom: 92px;
}
.PPTlist ul li {
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
    p {
      position: absolute;
      line-height: 30px;
      left: 0;
      color: #fff;
      top: 15px;
      font-size: 18px; /*px*/
      padding: 2px 10px;
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
      margin-top: 20px;
      margin-bottom: 6px;
    }
    .hitNum {
      color: #8c8c8c;
      span {
        float: right;
      }
    }
    .hitNum {
      margin-top: 5px;
      span {
        color: #fe0200;
        font-weight: 700;
      }
    }
  }
}
</style>
