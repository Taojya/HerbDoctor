<template slot-scope>
<div>
  <div v-if="data == 'week'">
    <nav-bar title="本周峰会"></nav-bar>
    <div class="navi">
      <scroll-bar url="mobile/meet/?date=week&"></scroll-bar>
    </div>
  </div>
  <div v-if="sort == 'new'">
    <nav-bar title="最新视频"></nav-bar>
    <div class="navi">
      <scroll-bar url="mobile/meet/?sort=new&" play="true"></scroll-bar>
    </div>
  </div>
  <div v-if="type == 'vip'">
    <nav-bar title="VIP视频"></nav-bar>
    <div class="navi">
       <scroll-bar url="mobile/video/?type=vip&" paly="true"></scroll-bar>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data() {
      return {
        data: '',
        sort: '',
        type: ''
      }
    },
    created() {
      this.data = this.$route.params.data
      this.sort = this.$route.params.sort
      this.type = this.$route.params.type
    }
}
</script>

<style lang="less" scoped>
  .navi {
    margin-top: 82px;
  }
</style>
