<template>
  <div id="app">
    <div id="nav">
      <el-row>
        <el-col class="top">
          <div class="">
            <div class="topTitle">杭州京旺科技有限公司</div>
            <div class="topTitle1">HANG&nbsp;&nbsp;ZHOU&nbsp;&nbsp;JING&nbsp;&nbsp;WANG&nbsp;&nbsp;KE&nbsp;&nbsp;JI&nbsp;&nbsp;YOU&nbsp;&nbsp;XIAN&nbsp;&nbsp;GONG&nbsp;&nbsp;SI</div>
          </div>
          <div class="topTitle2">以诚信和质量为宗旨</div>
        </el-col>
        <el-col class="nav" :span="24" style="width: 100%;">
        <div style="width: 1200px; margin: 0 auto;">
          <el-menu :default-active="$route.path" id="menu" ref="menu" mode="horizontal" @select="handleselect" unique-opened router background-color="#FF6C00" text-color="#fff" active-text-color="#fff">
            <template v-for="(item, index) in $router.options.routes">
              <el-menu-item v-if="!item.children" :index="item.path" class="routeChild" :key="item.path">{{item.name}}</el-menu-item>
              <el-submenu :index="index + ''" v-else style="width: 200px" class="routeChild">
                <template slot="title">{{item.name}}</template>
                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{child.name}}</el-menu-item>
                <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
              </el-submenu>
            </template>
          </el-menu>
        </div>
        </el-col>
      </el-row>
    </div>
    <el-carousel :interval="5000" arrow="always" height="300px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <el-row class="imgWrap">
          <el-col :span="24"><img ref="" class="bannerImg" :src="item.imgUrls"/></el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
    <router-view style="margin: 0 auto;width: 1200px;padding-bottom: 150px;"/>
        <div class="bottom">
      <ul>
        <li>
          <!-- <router-link to=""> -->
            <span>关于我们 丨</span>
          <!-- </router-link> -->
        </li>
        <li>
          <!-- <router-link> -->
            <span>联系我们 丨</span>
          <!-- </router-link> -->
        </li>
        <li>
          <!-- <router-link> -->
            <span>客服中心 丨</span>
          <!-- </router-link> -->
        </li>
        <li>
          <!-- <router-link> -->
            <span>隐私策略 丨</span>
          <!-- </router-link> -->
        </li>
        <li>
          <!-- <router-link> -->
            <span>会员协议 丨</span>
          <!-- </router-link> -->
        </li>
        <li>
          <!-- <router-link> -->
            <span>法律声明 丨</span>
          <!-- </router-link> -->
        </li>
        <li>
          <!-- <router-link> -->
            <span>繁体站 丨</span>
          <!-- </router-link> -->
        </li>
        <li>
          <!-- <router-link> -->
            <span>友情链接 </span>
          <!-- </router-link> -->
        </li>
      </ul>
      <div>Copyright © 2018 焦点科技. 版权所有</div>
    </div>	
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      numbers: '',
       imgList: [
        {id: 0, imgUrls: require('@/assets/img/banner1.jpg')},
        {id: 0, imgUrls: require('@/assets/img/banner2.jpg')},
        {id: 0, imgUrls: require('@/assets/img/banner3.jpg')}
      ]
    }
  },
  mounted() {
  this.$nextTick(() => {})
  },
  methods: {
    handleselect () {
    }
  }
}
</script>

<style lang="less">
@import "./assets/css/main.less";
.el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  background: #FF852C!important;
}
.el-menu--horizontal>.el-submenu:hover .el-submenu__title{
  color: #fff!important;
}
@font-face {
  font-family: yuweij;
  src: url('./assets/ywjt.ttf')
}
html{
  height:100%;
}
body {
  margin: 0;
  padding:0;
  min-height: 100%;
  position: relative;
}
#app {
  width: 100%;
  margin: 0 auto;
  min-width: 1200px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  .top {
    width: 100%;
    height: 100px;
    padding: 0 20%;
    // line-height: 100px;
    display: flex;
    justify-content: space-around;
    background:rgba(31,31,31,1);
    .topTitle {
      margin-top: 20px;
      font-size: 28px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color:rgba(255,108,0,1);
    }
    .topTitle1 {
      margin-top: 10px;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color:rgba(255,255,255,1);
    }
    .topTitle2 {
      font-size: 28px;
      font-family: 'yuweij';
      font-weight: 400;
      color:rgba(254,254,254,1);
      line-height: 100px;
    }
  }
  .nav {
    width: 100%;
    height: 60px;
    background: rgb(255, 108, 0);
    .el-menu {
      /*padding-left: 20%;*/ 
    }
  }
}
.bottom {
  width: 100%;
  height: 100px;
  padding-top: 30px; 
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  background:rgba(31,31,31,1);
  ul {
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: center;
    li {
      list-style: none;
      color: #fff;
      font-size: 18px;
      font-family: MicrosoftYaHei;
      font-weight:400;
      // float: left;
    }
  }
  div {
    font-size: 18px;
    font-family: MicrosoftYaHei;
    // font-weight:400;
    color:rgba(255,255,255,1);
  }
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
	box-sizing: border-box!important;
}
#menu{
	display: flex!important;
}
	.routeChild{
		flex:1!important;
	}
	.el-menu-item{
		text-align: center;
		width: 100%!important;
	}
	.bannerImg{
		width: 100%;
		height: 100%;
  }
  .el-tabs--left .el-tabs__active-bar.is-left, .el-tabs--left .el-tabs__nav-wrap.is-left::after {
    left: -50px!important;
  }
</style>
