<template>
  <div class="wrap">
    <div class="header-bar">
      <span>视频标题</span>
    </div>
    <div>
      <video controls='controls' class="video"></video>
    </div>
    <div class="play-desc">
      <ul>
        <li class="info" @click="toggleInfo">简介</li>
        <li class="comment" @click="toggleComment">PPT</li>
        <li class="comment" @click="">聊天</li>
      </ul>
    </div>
    <div class="content">
      <div class="show-info" v-show="isInfoShow">
        <div class="titlecontent">
          <div class="titleact">
            <p class="maintitle">WIID.china | 世界云计算大会·中国站</p>
            <p style="color: #656b79;margin: 0.2rem">时间：2017-05-06 09:20:00</p>
          </div>
          <div class="livetype">
            即将开始
          </div>
        </div>
        <div class="liveintroduction">
          <div style="display: flex;align-items: center;margin-top: 1rem">
            <div style="background: #ff0033;width: 3px;height: 9px;margin: 8px"></div>
            <p style="font-size: 17px;color: #666666">活动简介</p>
          </div>
          <div style="margin-top: 0.2rem">
            <p  :class="{active : isActive}">
              七月半，鬼门现，诞生在这一天的我，被视为不祥，
              母因我而死，父惧弃，我还来不及好好感受这个世界的温暖，
              就被无情的抛弃，险境横生，阴邪大黑蛇将我卷入一古老的地洞中，
              未曾想这竟是一个千年古墓，我的到来，似乎唤醒了沉睡了上千年的灵魂
              ，至此，我竟被一个神秘的千年美男父亲养育成人。 长大后，外出历练
              ，发现外面的世界太精彩，想要成龙的大蛟龙，深海的美人鱼，各种奇形
              怪状的恶鬼凶灵，好刺激，好危险。 逆天神魔体，阴阳眼，收灵宠，降神
              兽，我不得已与药神融为一体，在不平凡的道路上越走越远，直到看不见
              尽头。 什么？你问谁最宠我？这个我得想想......</p>
            <div @click="introtoggle" style="text-align: center">
              <img style="margin: 0.3rem;" :src="toggleupordown" width="15px" height="15px">
            </div>
          </div>
          <div v-if=""></div>
        </div>
        <div class="teacher">
          <div style="display: flex;align-items: center;margin-top: 1rem">
            <div style="background: #ff0033;width: 3px;height: 9px;margin: 8px"></div>
            <p style="font-size: 17px;color: #666666">嘉宾简介</p>
          </div>
          <ul>
            <li>
              <div class="teachercontent">
                <div class="teacherimg">
                  <img src="" alt="">
                </div>
                <div class="teacherindoc">
                  <p>宗福季</p>
                  <p>香港科技大学工业设计与物流管理教授</p>
                </div>
                <div class="toggledown">
                  <img src="" alt="">
                </div>
              </div>
              <div class="teachercontent">
                <div class="teacherimg">
                  <img src="" alt="">
                </div>
                <div class="teacherindoc">
                  <p>宗福季</p>
                  <p>香港科技大学工业设计与物流管理教授</p>
                </div>
                <div class="toggledown">
                  <img src="" alt="">
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="youlike">
          <div style="display: flex;align-items: center;margin-top: 1rem">
            <div style="background: #ff0033;width: 3px;height: 9px;margin: 8px"></div>
            <p style="font-size: 17px;color: #666666">你可能感兴趣的</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isActive:true,
        isInfoShow: true,
        toggleupordown: ''
       }
    },
    methods: {
      introtoggle() {
        this.isActive = !this.isActive
        if (this.toggleupordown == ''){
          this.toggleupordown = ''
        }else{
          this.toggleupordown = ''
        }
      }
      }

  }
</script>

<style lang="less" scoped>
  @import "./../../assets/css/LivePage.less";
</style>
