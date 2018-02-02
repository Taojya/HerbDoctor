<template>
  <div class="community">
        <nav-bar title="热门社区"></nav-bar>
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="150">
          <li  v-for="item in communityList">
                <div class="top" @click="detail(item.id,item)">
                  <img :src="'http://itdks.com' + item.organizerLogo" alt="">
                </div>

                <div class="bottom">
                  <p>{{ item.organizerName|convertTitle(9)}}</p>
                </div>
          </li>
        </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            communityList: {},
            currentPage: 0,
            toggle: true,
            nomore: false,
            first: true
        }
    },
    computed: {
        getCommunity:function(){
            return this.$store.state.community
        }

    },
    created() {
        this.nomore = false
        let that = this
        this.$axios.get('mobile/organizers/?'+"page="+ that.currentPage)
        .then(res=> {
            that.communityList = res.data.data
            console.log(that.communityList)
            that.currentPage++
            that.first = false
        })
    },
    methods: {
        detail(ID,item) {
            this.$store.state.community = item
            this.$router.push(
                {name: 'communitydetail',
                query: {
                    id: ID
                }}
            )
        },
      loadMore: function() {
        if (this.first){
          return
        }
        if (this.nomore) {
          return
        }
        if (!this.toggle){
          return
        }
        this.toggle = false
        let that = this;
        this.loading = true;
        setTimeout(() => {
          this.$axios.get('mobile/organizers/?'+ "page=" + that.currentPage).then(res => {
            that.toggle = true
            if (res.data.data.length == 0) {
              that.nomore = true
            }
            console.log(1)
            that.communityList = that.communityList.concat(res.data.data)
            console.log(that.communityList)
            console.log(4)
            that.currentPage++
            this.loading = false
          })
        }, 100)
      }
    }
}
</script>

<style lang="less" scoped>
    * {
        margin: 0;
        padding: 0
    }
    body {
        background: #f4f4f4;
    }
    .community ul {
        padding: 18px 0px 0px 49px;
        box-sizing: border-box;
        margin-bottom: 92px;
        margin-top: 82px;
        li {
        margin-bottom: 18px;
        display: inline-block;
        margin-right: 20px;
        box-shadow: 2px 2px 2px #666;
            .top {
            width: 315px;
            height: 175px;
            overflow: hidden;
            background-color: #fff;
            padding: 40px 50px;
            box-sizing: border-box;
            img {
                // width: 200px;
                height: 100px;
            }
            }
            .bottom {
                width: 275px;
                margin-left: 20px;
                height: 69px;
                text-align: center;
                line-height: 69px;
                font-size: 26px;
                color: #000;
                font-weight: 700;
                border-top: 1px solid #cccccc;/*no*/
            }
        }
    }
</style>
