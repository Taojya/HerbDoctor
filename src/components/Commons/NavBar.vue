<template>
  <div class="top">
      <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
    name: 'nav-bar',
    props: ['title']
}
</script>

<style lang="less" scoped>
    .top {
        width: 750px;
        height: 80px;
        border-bottom: 1px solid #c4baba; /*no*/
        background-color: #fff;
        z-index: 10;
        position: fixed;
        top: 0;
        p {
            font-size: 30px;
            // color: #807474;
            height: 80px;
            font-weight: 600;
            line-height: 80px;
            text-align: center;
        }
    }
</style>
