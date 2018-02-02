<template>
  <div class="ppt">
     <div class="top">
        <div class="PPTtab">
            <ul>
                <li @click="All"  v-bind:class="{ active: all}">全部</li>
                <li @click="Hot" v-bind:class="{ active: hot}">热门</li>
                <li @click="New" v-bind:class="{active: vnew}">最新</li>
                <li @click="Recommend" v-bind:class="{active: recommend}">推荐</li>
            </ul>
        </div>
        <div>
            <search></search>
        </div>
        <div class="pptscroll">
            <scroll-bar :url="myurl"></scroll-bar>
        </div>
     </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            all: true,
            hot: false,
            vnew: false,
            recommend: false,
            myurl: "mobile/ppt/?"
        }
    },
    methods: {
        All() {
            this.all = true
            this.hot = false
            this.vnew = false
            this.recommend = false
            this.myurl = "mobile/ppt/?"
        },
        Hot() {
            this.all = false
            this.hot = true
            this.vnew = false
            this.recommend = false
            this.myurl = "mobile/ppt/?sort=hot&"
        },
        New() {
            this.all = false
            this.hot = false
            this.vnew = true
            this.recommend = false
            this.myurl = "mobile/ppt/?sort=new&"
        },
        Recommend() {
            this.all = false
            this.hot = false
            this.vnew = false
            this.recommend = true
            this.myurl = "mobile/ppt/?sort=recommend&"
        } 
    }
};
</script>

<style lang="less" scoped>
.PPTtab ul {
  width: 680px; 
  padding: 9px 29px 0 29px;
  background-color: #f4f4f4;
  box-sizing: border-box;
  list-style: none;
  display: flex;
  top: 0;
  position: fixed;
  z-index: 201;
  li {
    width: 220px;
    height: 72px;
    text-align: center;
    line-height: 80px;
    flex: 1;
  }
  .active {
    border-bottom: 1px solid #3e92cb; /*no*/
    color: #3e92cb;
  }
}
.pptscroll {
    margin-top: 74px;
}
</style>

<style lang="less">
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
    >img {
      width: 270px;
      height: 169px;
    }
    .Play{
      position: absolute;
      width: 50px;
      height: 50px;
      right: 5px;
      bottom: 50px;
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
.top p {
    text-align: left;
}
.right .organizer {
    color: #f3855d;
    height: .48rem;
    margin-top: .426667rem;
   overflow: hidden;
}
</style>
