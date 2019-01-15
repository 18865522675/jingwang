import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import intoJw from './views/intoJW/intoJw.vue'
import commonModule from './views/commonModule.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/jw',
      name: '走进京旺',
      component:commonModule,
      redirect:"/company",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      children: [
        {path: '/company', name: '公司简介', component: intoJw},
        {path: '/organization', name: '组织架构', component: () => import('./views/intoJW/organization.vue')},
        {path: '/list', name: '工程案例', component: () => import('./views/intoJW/list.vue')},
      ]
    },
    {
      path: '/products',
      name: '产品与技术',
      component: () => import('./views/product/products.vue')
    },
    {
      path: '/qiye',
      name: '企业信息',
       component:commonModule,
      redirect:"/enterpriseIntro",
      // route level code-splitting contactUs
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      children: [{path: '/enterpriseIntro', name: '设计与专利', component: () => import('./views/enterprise/enterpriseIntro.vue')}]
    },
    {
      path: '/contact',
      name: '联系我们',
      component:commonModule,
      redirect:"/contactUs",
      // route level code-splitting 
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      children: [
        {path: '/contactUs', name: '联系我们', component: () => import('./views/contact/contactUs.vue')},
        {path: '/talents', name: '人才引进', component: () => import('./views/contact/talents.vue')},
        {path: '/technicalServer', name: '技术服务', component: () => import('./views/contact/technicalServer.vue')},
      ]
    },
  ]
})
