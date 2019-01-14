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
        <el-col class="nav" :span="24">
          <el-menu :default-active="$route.path" mode="horizontal" @select="handleselect" unique-opened router background-color="#FF6C00" text-color="#fff" active-text-color="#fff">
            <template v-for="(item, index) in $router.options.routes">
              <el-submenu :index="index + ''" style="width: 200px">
                <template slot="title">{{item.name}}</template>
                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{child.name}}</el-menu-item>
                <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
              </el-submenu>
            </template>
          </el-menu>
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
    width: 1920px;
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
    height: 55px;
    .el-menu {
      padding-left: 20%; 
    }
  }
}
</style>
