<template>
  <div class="home">
    <el-carousel :interval="5000" arrow="always" height="300px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <el-row class="imgWrap">
          <el-col :span="24"><img ref="" :src="item.imgUrls" class=""/></el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
    <article class="content">
      <div class="productDisplay">
        <div class="displayNav">
          <div class="navTitle">—&nbsp;&nbsp;产品展示&nbsp;&nbsp;—</div>
          <el-tabs tab-position="left">
            <el-tab-pane label="制氮">
              <div class="nitBg nitBg1"></div>
              <div class="nitBg nitBg2"></div>
              <div class="nitBg nitBg3"></div>
            </el-tab-pane>
            <el-tab-pane label="制氧">产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示</el-tab-pane>
            <el-tab-pane label="制氢">产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示</el-tab-pane>
            <el-tab-pane label="过滤器系列">产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示</el-tab-pane>
            <el-tab-pane label="干燥剂系列">产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示</el-tab-pane>
            <el-tab-pane label="滤芯系列">产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示产品展示</el-tab-pane>
          </el-tabs>
        </div>
        <div class="displayBottom displayBottom1"></div>
        <div class="displayBottom displayBottom2"></div>
      </div>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      imgList: [
        {id: 0, imgUrls: require('../assets/img/banner1.jpg')},
        {id: 0, imgUrls: require('../assets/img/banner2.jpg')},
        {id: 0, imgUrls: require('../assets/img/banner3.jpg')}
      ]
    }
  },
}
</script>

<style lang="less">
.el-tabs__nav-wrap:after {
  // background: none!important;
}
.el-tabs__active-bar {
  // opacity: 0;
}
  .home {
    width: 100%;
    .el-carousel {
      .imgWrap {
        width: 100%;
        height: 300px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .content {
      width: 100%;
      height: 500px;
      margin-top: 50px;
      border: dashed 1px red;
      .productDisplay {
        .displayNav {
          width:200px;
          height:383px;
          padding-top: 15px;
          position: static;
          z-index: 9999;
          margin-left: 169px;
          background:rgba(255,108,0,1);
          box-shadow:0px 4px 7px 0px rgba(70,30,0,0.15), 0px 11px 16px 0px rgba(210,90,2,0.39);
          .navTitle {
            height: 60px;
            line-height: 60px;
            color: #fff;
          }
          .el-tabs,.el-tabs__header {
            width: 100%;
          }
          .el-tabs__content {
            // width: 600px;
            height: 300px;
            margin-top: -40px;
            padding-top: 50px;
            left: 35%;
            position: absolute;
            overflow: visible!important;
            .nitBg {
              width: 200px;
              height: 200px;
              float: left;
              border: 1px dashed #000;
            }
            .nitBg1 {
              background-image: url('../assets/img/JWN@2x.png');
              background-size: 100% 100%; 
            }
          }
          .el-tabs__item {
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #fff;
          }
          .el-tabs__item:hover {
            background: linear-gradient(-90deg,rgba(255,108,0,1),rgba(255,133,44,1));
          }
        }
        .displayBottom {
          position: relative;
          background:rgba(31,31,31,1);
        }
        .displayBottom1 {
          width: 25px;
          height: 89px;
          top: -100px;
          left: 144px;
        }
        .displayBottom2 {
          width: 51%;
          height: 30px;
          top: -130px;
          left: 369px;
        }
      }
    }
  }
</style>

