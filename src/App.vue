<template>
  <div id="app">
    <div id="nav">
      <el-row>
        <el-col class="top">
          <div class="flex-r">
          	<div class="flex-r" style="justify-content:center;">
          	<div class="flex-r">
          		<div  style="margin-top: 10px;">
          		<img src="./assets/img/logo.png" alt="" />
          		</div>
             <div>
            	<div class="topTitle">杭&nbsp;州&nbsp;京&nbsp;&nbsp;旺&nbsp;科&nbsp;技&nbsp;有&nbsp;限&nbsp;公&nbsp;&nbsp;司</div>
            <div class="topTitle1">HANG&nbsp;&nbsp;ZHOU&nbsp;&nbsp;JING&nbsp;&nbsp;WANG&nbsp;&nbsp;KE&nbsp;&nbsp;JI&nbsp;&nbsp;YOU&nbsp;&nbsp;XIAN&nbsp;&nbsp;GONG&nbsp;&nbsp;SI</div>	
            </div>
          	</div>
            
          </div>
          <div class="topTitle2">以诚信和质量为宗旨</div>
          </div>
        </el-col>
        <el-col class="nav" :span="24" style="width: 100%;">
        <div style="width: 1200px; margin: 0 auto;">
          <el-menu :default-active="$route.path" id="menu" ref="menu" mode="horizontal" @select="handleselect" unique-opened router background-color="#FF6C00" text-color="#fff" active-text-color="#fff">
            <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
              <el-menu-item v-if="!item.children" :index="item.path" class="routeChild" :key="item.path">{{item.name}}</el-menu-item>
              <el-submenu :index="index + ''" v-else style="width: 200px" class="routeChild">
                <template slot="title">{{item.name}}</template>
                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
              </el-submenu>
            </template>
          </el-menu>
        </div>
        </el-col>
      </el-row>
    </div>
    <el-carousel :interval="5000" arrow="always" height="500px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <el-row class="imgWrap" style="height: 500px!important;">
          <el-col :span="24"  style="height: 500px!important;">
          	<!--<div class="imgBgDiv" :style="{'backgroundImage':'url('+item.imgUrls+')'+}">
          		
          	</div>-->
          	     <img ref="" class="bannerImg" :src="item.imgUrls" style="height: 500px!important;"/>
          </el-col>
          <!--<img ref="" class="bannerImg" :src="item.imgUrls" style="height: 500px!important;"/>-->
        </el-row>
      </el-carousel-item>
    </el-carousel>
    <router-view style="margin: 50px auto;width: 1200px; padding-bottom: 150px;margin-bottom: 0px!important;"/>
      <div class="bottom">
        <ul>
          <li @click="$router.push('/company')">
            <span>关于我们 丨</span>
          </li>
          <li>
            <span>联系我们 丨</span>
          </li>
          <li>
            <span>客服中心 丨</span>
          </li>
          <li>
            <span>隐私策略 丨</span>
          </li>
          <li>
            <span>会员协议 丨</span>
          </li>
          <li>
            <span>法律声明 丨</span>
          </li>
          <li>
            <span>繁体站 丨</span>
          </li>
          <li>
            <span>友情链接 </span>
          </li>
        </ul>
      <!--<div>Copyright © 2018 焦点科技  版权所有</div>-->
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
.productDetails-contentLeft {
  width: 350px;
  // height: 1000px;
  margin-right: 45px;
  float: left;
}
.productDetails-contentright{
  width: 800px;
  height: 1000px;
  padding-top: 5px;
  float: left;
}
// 联系我们
.paperBottom-bottom{
		margin-top: 40px;
		.paperBottom-bottom-title{
			font-size:19px;
			font-family:MicrosoftYaHei;
			font-weight:bold;
			color:rgba(51,51,51,1);
		}
		.paperBottom-bottom-small{
			color:gray;
			font-size: 13px;
		}
		.paperBottom-bottom-intro{
			box-sizing: border-box;
			padding: 10px 20px;
			background: rgba(0,0,0,0.05),
		}
		.paperBottom-bottom-intro-item{
			text-align: left;
			color:#BEBEBE;
			padding: 6px 0px;
			font-size: 14px;
			&>span{
				display:inline-block;
			}
			&>span:last-child{
				color:black;
				width: 200px;
			}
			&>span:first-child{
				width: 70px;
				padding-left: 20px;
			}
			&:noT(:first-child){
				border-top: 1px solid #050001;
			}
		}
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
      margin-left: 30px;
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
  bottom: 0px;
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
  .el-menu--popup-bottom-start{
  	margin-top:0!important
  }
  .imgBgDiv{
  	height:100%;
  	background-size: 100% 100%;
  	background-position: center center;
  	/*background: red;*/
  }
  .el-icon-arrow-down{
  	color:white!important;
  	font-size: 14px!important;
  	font-weight: bold!important;
  }
  .el-menu-item{
  	text-align: center!important;
  	  }
  	  .el-menu--popup{
  	  	.el-menu-item{
  	  		width: 233px!important;
  	  	}
  	  }
</style>
