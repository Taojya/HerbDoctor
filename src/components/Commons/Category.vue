<template>
  <div class="demo">
    <!-- <div class="category" v-show="part">
      <div class="left">
        <ul>
          <li v-for="item in List"">
            <img :src="'http://itdks.com/'+item.icon" alt="">
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
      <div class="right">
        <img src="./../../assets/img/bottom.png" alt="" @click="showAll">
      </div>
    </div>-->
    <div class="category all">
      <h2>全部分类</h2>
      <div class="left">
        <ul>
          <li v-for="(item,index) in List" @click="toCategoryshow(item.id)">
            <!-- <img :src="'http://itdks.com/'+item.icon_gray" alt=""> -->
            <img :src="'http://itdks.com/'+item.icon_gray" @click="changeState(index)" alt="">
            <!-- <img :src="'http://itdks.com/'+item.icon_blue" @click="changeState(index)" alt=""> -->
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
      <div class="showall"  @click="showAll">
        <img src="./../../assets/img/top.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      List: [],
      dark: true,
      blue: false,
      part: true
    };
  },
  computed: {
    getId() {
      return this.$store.state.categoryId
      console.log(this.$store.state.categoryId)
    }
  },
  methods: {
    toCategoryshow(aid) {
      //到达分类的播放页
      this.$router.push({
        name: "categorydetail",
        query: {
          id: aid
        }
      })
    },
    changeState(i) {
      this.$store.state.categoryId = i
      }, 
    showAll() {
      this.$router.push({
        name: "categorydetail"
      })
    }
    
  },
  created() {
    this.$axios.get("category/").then(res => {
      let result = res.data.data;
      for (var i = 0; i < result.length; i++) {
        result[i].grayshow = true
        result[i].blueshow = false
      }
      this.List = result
    });
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
body {
   background-color: #f2f6f2;
}
li {
  list-style: none;
}
.category {
  width: 750px;
  height: 200px;
  padding: 0px 0 0 48px;
  box-sizing: border-box;
  .left ul {
    width: 700px;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 140px;
      height: 90px;
      display: inline-block;
      text-align: center;
      margin-right: 32px;
      margin-top: 26px;
      img {
        height: 35px;
      }
      p {
        font-size: 20px; /*px*/
        color: #bcbdba;
      }
    }
  }
}
.all {
  padding-top: 45px;
  h2 {
    font-size: 30px; /*px*/
    color: #bcbdba;
    font-weight: 400;
    height: 60px;
  }
}
.showall {
  width: 50px;
  height: 50px;
  position: fixed;
  top: 50px;
  right: 30px;
  // box-shadow: -2px 0 0 #000;
  border-left: 1px solid #bbb;
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
