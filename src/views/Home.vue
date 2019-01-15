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
              <div class="nitBg nitBg1">
                <img src="../assets/img/JWN@2x.png" alt="">
              </div>
              <div class="nitBg nitBg2">
                <img src="../assets/img/JWN-A.png" alt="">
              </div>
              <div class="nitBg nitBg3">
                <img src="../assets/img/JWN-B.png" alt="">
              </div>
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
      <div class="craft">
        <div class="craftContent">
          <div style="text-align: left">
            <span class="craftContent-title">新工艺新技术</span>
            <span></span>
          </div>
          <div class="craftContent-img">
            <div class="craftContent-wrap">
              <div class="craftContent-imgSize"></div>
              <h3>环保变压吸附技术</h3>
              <p class="craftContent-intro">含氢(H2)混合气进入变压吸附装置吸附塔后，由于吸附床内吸附剂对气体混合物中各组分的吸附能力随着压力变化而呈现差异，加压时吸附原料...</p>
              <el-button>查看更多</el-button>
              <!-- <div> -->
              <!-- </div> -->
            </div>
            <div class="craftContent-wrap">
              <div class="craftContent-imgSize"></div>
              <h3>CAD新技术广泛应用</h3>
              <p class="craftContent-intro">水泵的模具、叶片和重要零件开始用数控机床加工，从而可以提高泵的制造质量。水泵水力设计与绘型软件逐渐代替人工计算和绘图有人问用...</p>
              <el-button>查看更多</el-button>
            </div>
            <div class="craftContent-wrap">
              <div class="craftContent-imgSize"></div>
              <h3>无堵塞泵和低比转速泵...</h3>
              <p class="craftContent-intro">我国自行总结出的无堵塞泵设计方法，基本达到实用程度，国内广泛使用。设计方法主要包括：沿流道中线断面变化规律设计双流道叶轮;方格网...</p>
              <el-button>查看更多</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="aboutUs">
        <div class="aboutUsContent">
          <div class="aboutUsContent-Title">关于我们</div>
          <div class="aboutUsContent-intro">
            <div class="aboutUsContent-introImg">
              <img src="../assets/img/heliu.png" alt="">
            </div>
            <div class="aboutUsContent-introWords">
              杭州京旺科技有限公司坐落在美丽的富春江畔，位于杭州富阳新登五里桥开发区，处于杭州西湖与**名胜风景区——千岛湖之间，经济发达、交通便利。 
              杭州京旺科技有限公司是一家以气体净化、分离、纯化、混合为专业的**高新技术企业。注册资本2000万元，拥有“市级研发中心”，已通过ISO-9001质量体...
            </div>
          </div>
        </div>
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
      height: 1000px;
      margin-top: 50px;
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
            left: 33%;
            position: absolute;
            overflow: visible!important;
            .nitBg {
              height: 230px;
              float: left;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .nitBg {
              width: 230px;
            }
            .nitBg2 {
              width: 250px;
            }
            .nitBg3 {
              width: 290px;
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
      .craft {
        width: 100%;
        .craftContent {
          width: 65%;
          height: 500px;
          margin: 0 0 0 10%;
          .craftContent-title {
            font-size:25px;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
          .craftContent-img {
            width: 100%;
            margin-top: 20px;
            .craftContent-wrap {
              width: 280px;
              float: left;
              margin-left: 20px;
              .craftContent-imgSize {
                width: 280px;
                height: 180px;
                background: red;
              }
              .craftContent-intro {
                font-family: MicrosoftYaHei;
                font-weight: 400;
                color: rgba(155,155,155,1);
                line-height: 23px;
              }
              .el-button {
                width: 260px;
                height: 32px;
                margin-top: 30px;
                line-height: 2px;
                color: #fff;
                background :rgba(255,108,0,1);
                border: 1px solid rgba(245, 171, 53, 1);
              }
            }
          }
        }
      }
      .aboutUs {
        width: 100%;
        margin-top: 50px;
        .aboutUsContent {
          width: 65%;
          height: 500px;
          margin: 0 0 0 10%;
          border: 1px solid red;
          .aboutUsContent-Title {
            text-align: left;
            font-size: 25px;
            font-family: MicrosoftYaHei;
            color: rgba(0,0,0,1);
          }
          .aboutUsContent-intro {
            width: 100%;
            margin-top: 25px;
            .aboutUsContent-introImg {
              width: 420px;
              height: 260px;
              margin-right: 30px;
              float: left;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .aboutUsContent-introWords {
              width: 400px;
              height: 260px;
              font-size: 18px;
              font-family: MicrosoftYaHei;
              color: rgba(0,0,0,1);
              line-height: 38px;
              float: left;
            }
          }
        }
      }
    }
  }
</style>

