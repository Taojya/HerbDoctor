<template>
  <div class="wrap">
    <div class="tech">
      <img :src="'http://itdks.com' + banner" alt="">
    </div>

    <scroll-bar :tech="true" class="techscroll" :url="techurl"></scroll-bar>
  </div>
</template>

<script>
    export default {
        name: "technicaltopic",
        data () {
          return {
            banner:'',
            techurl:''
          }
        },
        created () {
          const that = this
          var aid = window.localStorage.getItem("techId")
          this.techurl = 'mobile/subject/' + aid + '?'
          this.$axios.get(that.techurl).then(res => {
            that.banner = res.data.data.img
            console.log(res.data.data.courseList)
          })
        }
    }
</script>

<style scoped lang="less" scoped>
  .wrap{
    position: relative;
    overflow-y: hidden;
    .tech{

    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;

    img{
      position: relative;
      margin: 0;
      width: 100%;
      height: inherit;
      text-align: center;

    }
  }
    .techscroll{

    }}

</style>
