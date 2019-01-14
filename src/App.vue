<template>
  <div id="app">
    <div id="nav">
      <el-row>
        <el-col class="top">
          <div class="">
            <div class="topTitle">浙江温州润发皮革厂</div>
            <div class="topTitle1">WEN&nbsp;&nbsp;ZHOU&nbsp;&nbsp;RUN&nbsp;&nbsp;FA&nbsp;&nbsp;KE&nbsp;&nbsp;JI&nbsp;&nbsp;YOU&nbsp;&nbsp;XIAN&nbsp;&nbsp;GONG&nbsp;&nbsp;SI</div>
          </div>
          <div class="topTitle2">老板没有跑路</div>
          <!-- <div class="topSearch">
            <el-input type="number" style="width: 220px; margin-right: 20px;" v-model="numbers" @mousewheel.native.prevent></el-input>
            <el-button type="text" style="color: #fff">搜索</el-button>
          </div> -->
        </el-col>
        <el-col class="nav" :span="24" style="width: 100%;">
         	<div style="width: 1200px;margin: 0 auto;">
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
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      numbers: ''
    }
  },
  mounted(){
  	this.$nextTick(()=>{
  		console.log(this.$refs.menu.querySelectorAll);
  	})
//	this.$refs.menu.
  },
  methods: {
    handleselect () {
    }
  }
}
</script>

<style lang="less">
.el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  background: #FF852C!important;
}
.el-menu--horizontal>.el-submenu:hover .el-submenu__title{
  color: #fff!important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  // padding: 30px;
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
      font-family: yuweij;
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
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
	box-sizing: border-box!important;
}
#menu{
	display: flex!important;
}
	.routeChild{
		flex:1!important
	}
html,body,#app{
	height:100%;
	width:100%;
	padding:0;
	margin: 0;
}
</style>
