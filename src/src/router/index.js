import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 注册全局组件
import Tab from '../components/Commons/Tab.vue'
Vue.component(Tab.name, Tab)
import ScrollBar from '../components/Commons/ScrollBars.vue'
Vue.component(ScrollBar.name, ScrollBar)
import Search from '../components/Commons/Search.vue'
Vue.component(Search.name, Search)
import NavBar from '../components/Commons/NavBar.vue'
Vue.component(NavBar.name,NavBar)

//注册路由需要的组件
import HomePage from '../components/HomePage/HomePage.vue'
import Live from '../components/Live/Live.vue'
import Meeting from '../components/Meeting/Meeting.vue'
import Video from '../components/Video/Video.vue'
import Mine from '../components/Mine/Mine.vue'
import Community from '../components/Community/Community.vue'
import CommunityDetail from '../components/Community/CommunityDetail.vue'
import Navigation from '../components/HomePage-Children/Navigation.vue'
import CategoryDetail from '../components/HomePage-Children/CategoryDetail.vue'
import Technicaltopic from '../components/HomePage-Children/Technicaltopic.vue'
import PPTlist from '../components/HomePage-Children/PPTlist.vue'
import PPTdetail from '../components/HomePage-Children/PPTdetail.vue'
import Category from '../components/Commons/Category.vue'
import LivePage from '../components/Live-Chileren/LivePage.vue'


export default new Router({
  //把路由改成history模式后  build后得文件路径出错
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'homepage'
      }
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/Navigation',
      name: 'navigation',
      component: Navigation
    },
    {
      path: '/CategoryDetail',
      name: 'categorydetail',
      component: CategoryDetail
    },
    {
      path: '/Category',
      name: 'category',
      component: Category
    },
    {
      path: '/PPTlist',
      name: 'pptlist',
      component: PPTlist
    }, {
      path: '/PPTdetail',
      name: 'PPTdetail',
      component: PPTdetail
    },
    {
      path: '/Technicaltopic',
      name: 'Technicaltopic',
      component: Technicaltopic
    },
    {
      path: '/live',
      name: 'live',
      component: Live
    },
    {
      path: '/meeting',
      name: 'meeting',
      component: Meeting
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
    },
    {
        path: '/community/communitydetail',
        name: 'communitydetail',
        component: CommunityDetail
    },
    {
      path: '/test',
      name: 'test',
      component: Category
    },
    {
      path: '/live/livepage/:id',
      name: 'livepage',
      component: LivePage
    }
  ]
})
