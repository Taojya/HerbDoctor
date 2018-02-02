<template>
  <div>
      <search></search>
      <div class="tab">
      <ul>
          <li @click="All"  v-bind:class="{ active: all}">全部</li>
          <li @click="Hot"  v-bind:class="{ active: hot}">热门</li>
          <li @click="Now"  v-bind:class="{ active: now}">最新</li>
          <li @click="Replay" v-bind:class="{ active: replay}">回放</li>
      </ul>
    </div>
    <div class="bars">
      <scroll-bar :url="urlcurrent"></scroll-bar>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      urlcurrent: 'mobile/live/?',
      all: true,
      hot: false,
      now: false,
      replay: false
    }
  },
  methods:{
    All: function () {
      this.urlcurrent = 'mobile/live/?'
      this.all = true
      this.hot = false
      this.now = false
      this.replay = false
    },
    Hot: function () {
      this.urlcurrent = 'mobile/live/?sort=hot&'
      this.all = false
      this.hot = true
      this.now = false
      this.replay = false
    },
    Now: function () {
      this.urlcurrent = 'mobile/live/?sort=new&'
      this.all = false
      this.hot = false
      this.now = true
      this.replay = false
    },
    Replay: function () {
       this.urlcurrent = 'mobile/live/?sort=reply&'
      this.all = false
      this.hot = false
      this.now = false
      this.replay = true
    }
  }
}
</script>

<style lang="less" scoped>
.tab ul{
    width: 750px;
    padding: 9px 29px 0 29px;
    background-color: #f4f4f4;
    box-sizing: border-box;
    list-style: none;
    display: flex;
    margin-top: 80px;
    position: fixed;
    top: 0;
    z-index: 10;
    li {
    width: 220px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    flex: 1;
    }
    .active {
    border-bottom: 1px solid #3e92cb;/*no*/
    }
}
.bars {
  margin-top: 180px;
}
</style>
