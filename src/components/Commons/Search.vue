<template>
    <div class="search">
        <div class="left"><input type="text" :placeholder="abc" v-model="key"><img src="./../../assets/img/search.png" alt="" @click="Search"></div>
        <div class="right" @click="categoryShow"><img src="./../../assets/img/separat.png" alt=""></div>
    </div>  
</template>

<script>
export default {
  name: "search",
  props: ["abc"], //接收父组件值
  data() {
    return {
      categoryshow: false,
      key: ""
    };
  },
  methods: {
    categoryShow() {
      this.$router.push({ name: "category" })
    },
    Search() {
      window.location.href = "http://www.itdks.com/mobile/search?q=" + this.key;
    }
  }
};
</script>

<style lang="less" scoped>
.search {
  background-color: #f4f4f4;
  // padding: 14px 19px 16px 26px;
  box-sizing: border-box;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 750px;
  z-index: 100;
  .left {
    float: left;
    position: relative;
    input {
      height: 54px;
      width: 645px;
      border-radius: 10px;
      border: 1px solid #c7c7c7; /*no*/
      padding-left: 15px;
      box-sizing: border-box;
      margin-left: 26px;
      margin-top: 14px;
      margin-bottom: 16px;
    }
    img {
      position: absolute;
      height: 40px;
      right: 10px;
      top: 20px;
    }
  }
  .right {
    width: 36px;
    float: right;
    padding-top: 10px;
    box-sizing: border-box;
    margin-right: 16px;
    margin-top: 14px;
    img {
      width: 36px;
      height: 36px;
    }
  }
}
.category img {
  position: static !important;
}
::-webkit-input-placeholder {
  /*Chrome/Safari*/
  color: #d1d1d1;
  font-size: 22px;
}
::-moz-placeholder {
  /*Firefox*/
  color: #d1d1d1;
  font-size: 22px;
}
::-ms-input-placeholder {
  /*IE*/
  color: #d1d1d1;
  font-size: 22px;
}
</style>
