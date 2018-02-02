<template>
  <div class="wrap">
    <div class="header-bar">
      <router-link to="/recommend">
        <i class="fa fa-arrow-left"></i>
      </router-link>
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
 .wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  background-color: #fff;
  .header-bar {
    position: relative;
    width: 100%;
    height: 3rem;
    display: flex;
    background-color: #26a2ff;
    .fa {
      font-size: 1.8rem;
      color: #fff;
      line-height: 3rem;
    }
    a {
      width: 3.5rem;
      .fa-arrow-left {
        margin-left: 1.3rem;
        line-height: 3rem;
      }
    }
    span {
      line-height: 3rem;
      font-size: 1.6rem;
      color: #fff;
    }
  }
  .video {
    width: 100%;
    height: 30%;
    background-color: #000;
  }
  .play-desc {
    position: relative;
    width: 100%;
    height: 3rem;
    background-color: #fff;
    ul {
      display: flex;
      line-height: 3.5rem;
      align-items: center;
      li {
        font-size: 1.3rem;
        margin-left: 2.5rem;
      }
      li:nth-child(2){
        margin-left: 3.5rem;
      }
      li:nth-child(3){
        margin-left: 3.5rem;
      }
      li:active {
        color: #26a2ff;
        font-weight: 550;
        position: relative;
      }
      li:active:after {
        content: ' ';
        position: absolute;
        bottom: 0rem;
        left: 0.04rem;
        right: 3rem;
        width: 100%;
        border-bottom: .27rem solid #26a2ff;
      }
    }
  }
  .content {
    .show-info {
      position: relative;
      margin-top: .5rem;
      background-color: #d9d9d9;
      .titlecontent {
        display: flex;
        height: 5rem;
        align-items: center;
        border-bottom:#d3d3d3 solid 1px;
        .titleact{
          margin-right: auto;
          .maintitle {
            font-size: 1.6rem;
            margin: 0.2rem;
          }
        }
        .livetype{
          margin: 0.2rem;
          width: 6rem;
          height: 3rem;
          line-height: 3rem;
          background-color: #fd4c5d;
          border-radius: 0.3rem;
          color: #fff;
          font-size: 1.4rem;
          text-align: center;
        }
      }
      .liveintroduction {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-bottom:#d3d3d3 solid 1px;
      }
      .teachercontent{
        position: relative;
        display: flex;
        border-bottom:#d3d3d3 solid 1px;
        align-items: center;
        .teacherimg{
          flex: 2;
          margin-left: 0.5rem;
          img{
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
          }
        }
        .teacherindoc{
          flex: 7;
          p{
            font-size: 1.4rem;
          }
          p:nth-child(2){
            color: #9c9c9c;
          }
        }
        .toggledown{
          flex: 1;
          img{
            width: 2rem;
            height: 2rem;
          }
        }
      }
      .title {
        margin-left: 1rem;
        margin-right: .5rem;
        padding-top: .5rem;
        font-size: 1.8rem;
        font-weight: normal;
      }
      .desc {
        margin-right: .5rem;
        padding-left: .8rem;
        padding-top: 1rem;
        font-size: 1.3rem;
        color: #9c9c9c;
      }
      .about {
        padding-left: .5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        color: #9c9c9c;
      }
      .author {
        position: relative;
        display: flex;
        line-height: 4.5rem;
        margin-top: 2rem;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        img {
          width: 4rem;
          height: 4rem;
          margin-left: 1rem;
          margin-top: .5rem;
          padding-bottom: .8rem;
          border-radius: 50%;
        }
        h4 {
          margin-top: .5rem;
          margin-left: .8rem;
          font-size: 1.6rem;
          font-weight: normal;
          color: #999999;
        }
        .author-name {
          margin-top: .5rem;
          margin-left: .8rem;
          font-size: 1.4rem;
          color: #999999;
        }
        .follow {
          position: absolute;
          right: 0;
          margin-top: 1rem;
          margin-right: 1rem;
          width: 6rem;
          height: 3rem;
          line-height: 3rem;
          background-color: #fd4c5d;
          text-align: center;
          border-radius: 1rem;
          color: #fff;
          font-size: 1.4rem;
        }
      }
    }
    .show-comment {
      .cmt-list {
        display: flex;
        flex-direction: column;
        padding-bottom: 4.5rem;
        overflow-y: scroll;
        li {
          border-bottom: 1px solid #afafaf;
          color: #afafaf;
          .avatar {
            width: 4rem;
            height: 4rem;
            margin-left: 1rem;
            margin-top: 1rem;
            margin-bottom: -2.5rem;
            border-radius: 50%;
          }
          .name {
            color: #fd4c5d;
            margin-left: .9rem;
            font-size: 1.6rem;
          }
          .ico {
            float: right;
            margin-right: 1.7rem;
            margin-top: 1.4rem;
            .fa {
              margin-right: .5rem;
            }
          }
          .comment-msg {
            margin-left: 6rem;
            margin-right: 1rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            color: #000;
            font-size: 1.4rem;
          }

        }
      }
      .talk {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        margin-top: 3rem;
        height: 4.5rem;
        line-height: 4.5rem;
        background-color: #FAFAFA;
        .emoji {
          left: .3rem;
          margin-top: .7rem;
        }
        input {
          outline: none;
          border: 0;
          background-color: #FAFAFA;
          border-bottom: 1px solid #FA7198;
          width: 72%;
          position: relative;
          top: -1.4rem;
          height: 2.5rem;
        }
        .send {
          position: relative;
          margin-left: .1rem;
        }
      }
    }
  }
}

</style>
