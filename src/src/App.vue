<template>
  <div id="app">
    <transition name="fade" mode="out-in">
              <router-view></router-view>
    </transition>
       <!-- 热门社区 -->
    <mt-tabbar v-model="selected" ref="footer">
              <mt-tab-item id="homepage">
                <img slot="icon" src="./assets/img/homepage.png">
                首页
              </mt-tab-item>
              <mt-tab-item id="live">
                <img slot="icon" src="./assets/img/live1.png">
                直播
              </mt-tab-item>
              <mt-tab-item id="meeting">
                <img slot="icon" src="./assets/img/meeting1.png">
                峰会
              </mt-tab-item>
              <mt-tab-item id="video">
                <img slot="icon" src="./assets/img/video1.png">
                视频
              </mt-tab-item>
              </mt-tab-item>
              <mt-tab-item id="mine" @click="mine">
                <img slot="icon" src="./assets/img/mine1.png">
                我的
              </mt-tab-item>
     </mt-tabbar>
  </div>
</template>

<script>
export default {

        data(){
            return {
                selected: ''
            }
        },
        watch: {
            selected(newV) {
                console.log(this)
                this.src = "./assets/img/" +newV+ ".png"
                this.$router.push({
                    name: newV
                })
            }
        }
    }
</script>
<style lang="less">
    .mint-tab-item {
      padding: 20px 0 6px 0 !important;
      text-align: center;
      position: relative;
      img {
        width: 38px;
        height: 33px;
        position: absolute;
        left: 56px;
      }
    }
  
    .mint-tabbar{
        height: 94px;
        border-top: 2px solid #b7b7b7;
        position: fixed !important;
        bottom:0;
        box-sizing: border-box;
        margin-top: 94px;
   } 
   .mint-tab-item-label {
     margin-top: 6px;
     font-size: 20px;/*px*/
     color: #666;
   }
   .mint-tab-item-icon{
    margin:0rem 0.92rem 0.066667rem 0.7rem;
}
.mint-tab-item-label {
 margin-top: 0.2rem;
}

   .fade-enter-active,.fade-leave-active{
    transition: opacity 0.5s
   }

/*元素移除的时候home,默认透明度1 --> 0*/
/*元素插入的时候news,默认透明度0 --> 1*/

/*插入元素之后的1不需要设置*/
  .fade-entry,.fade-leave-to{
    opacity: 0;
  }
</style>
