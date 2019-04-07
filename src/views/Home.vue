
    
<template>
  <div class="home">
    <article class="content">
      <div class="productDisplay">
        <!--<div class="displayNav">-->
          <!--<div class="navTitle">—&nbsp;&nbsp;产品展示&nbsp;&nbsp;—</div>-->
          <!--<el-tabs tab-position="left" style="height: 600px;">
            <el-tab-pane class="red" :class="['']" label="变压吸附制氮装置">
              <div class="nitBg nitBg1">
                <img src="../assets/轮播图/变压吸附制氮装置/sy-bianyaxifu-zhidan.png" alt="">
                <div>变压吸附制氮装置</div>
              </div>
              <div class="nitBg nitBg2">
                <img src="../assets/轮播图/变压吸附制氮装置/sy-keyidon.png" alt="">
                <div>可移动制氮装置</div>
              </div>
              <div class="nitBg nitBg3">
                <img src="../assets/轮播图/变压吸附制氮装置/sy-qiaozhuangshi.png" alt="">
                <div>撬装式制氮装置</div>
              </div>
              <div class="nitBg nitBg3">
                <img src="../assets/轮播图/变压吸附制氮装置/sy-qiaozhuangshi.png" alt="">
                <div>撬装式制氮装置</div>
              </div>
              <div class="nitBg nitBg3">
                <img src="../assets/轮播图/变压吸附制氮装置/sy-qiaozhuangshi.png" alt="">
                <div>撬装式制氮装置</div>
              </div>
              <div class="nitBg nitBg3">
                <img src="../assets/轮播图/变压吸附制氮装置/sy-qiaozhuangshi.png" alt="">
                <div>撬装式制氮装置</div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="变压吸附制氧装置">
              <div class="nitBg nitBg1">
                <img src="../assets/轮播图/变压吸附制氧装/sy-zhiyan.png" alt="">
                <div>制氧装置</div>
              </div>
              <div class="nitBg nitBg2">
                <img src="../assets/zwct.png" alt="">
                <div>暂无设备</div>
              </div>
              <div class="nitBg nitBg3">
                <img src="../assets/zwct.png" alt="">
                <div>暂无设备</div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="天然转化制氢装置">
              <div class="nitBg nitBg1">
                <img src="../assets/轮播图/天然转化制氢装置/sy-tianranqi-a.png" alt="">
                <div>制氢装置</div>
              </div>
              <div class="nitBg nitBg2">
                <img src="../assets/轮播图/天然转化制氢装置/sy-tianranqi-b.png" alt="">
                <div>制氢装置</div>
              </div>
              <div class="nitBg nitBg2">
                <img src="../assets/zwct.png" alt="">
                <div>暂无设备</div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="甲醇裂解制氢装置">
              <div class="nitBg nitBg1">
                <img src="../assets/轮播图/甲醇裂解制氢装置/首页/jiachun-a.png" alt="">
                <div>制氢装置</div>
              </div>
              <div class="nitBg nitBg2">
                <img src="../assets/轮播图/甲醇裂解制氢装置/首页/jiachun-b.png" alt="">
                <div>制氢装置</div>
              </div>
              <div class="nitBg nitBg3">
                <img src="../assets/轮播图/甲醇裂解制氢装置/首页/jiachun-c.png" alt="">
                <div>制氢装置</div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="压缩空气净化设备">
              <div class="nitBg nitBg1">
                <img src="../assets/轮播图/压缩空气净化设备/sy-yasuokongq-a-zuhe.png" alt="">
                <div>组合式干燥机</div>
              </div>
              <div class="nitBg nitBg2">
                <img src="../assets/轮播图/压缩空气净化设备/sy-yasuokongq-b-weiren.png" alt="">
                <div>可移动制氮装置</div>
              </div>
              <div class="nitBg nitBg3">
                <img src="../assets/轮播图/压缩空气净化设备/yasuoji-diludian-ab.png" alt="">
                <div>压缩空气干燥机</div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="氮气纯化装置">
              <div class="nitBg nitBg1">
                <img src="../assets/轮播图/氮气纯化装置/sy-danqichunhau.png" alt="">
                <div>氮气纯化装置</div>
              </div>
              <div class="nitBg nitBg2">
                <img src="../assets/zwct.png" alt="">
                <div>暂无设备</div>
              </div>
              <div class="nitBg nitBg2">
                <img src="../assets/zwct.png" alt="">
                <div>暂无设备</div>
              </div>
            </el-tab-pane>
          </el-tabs>-->
        <!--</div>-->
        
        
          <div class="displayNav">
          	<div class="navTitle">—&nbsp;&nbsp;产品展示&nbsp;&nbsp;—</div>
          	<el-tabs v-model="activeName" type="card" @tab-click="handleClick" tab-position="left">
			    <el-tab-pane label="变压吸附制氮装置" name="first">
			    	<div class="nitBg nitBg1">
		                <img src="../assets/轮播图/变压吸附制氮装置/sy-bianyaxifu-zhidan.png" alt="">
		                <div>变压吸附制氮装置</div>
		              </div>
		              <div class="nitBg nitBg2">
		                <img src="../assets/轮播图/变压吸附制氮装置/sy-keyidon.png" alt="">
		                <div>可移动制氮装置</div>
		              </div>
		              <div class="nitBg nitBg3">
		                <img src="../assets/轮播图/变压吸附制氮装置/sy-qiaozhuangshi.png" alt="">
		                <div>撬装式制氮装置</div>
		              </div>
		              <div>
		              	<div class="nitBg nitBg3">
			                <img src="../assets/轮播图/变压吸附制氮装置/sy-qiaozhuangshi.png" alt="">
			                <div>撬装式制氮装置</div>
			              </div>
			              <div class="nitBg nitBg3">
			                <img src="../assets/轮播图/变压吸附制氮装置/sy-qiaozhuangshi.png" alt="">
			                <div>撬装式制氮装置</div>
			              </div>
			              <div class="nitBg nitBg3">
			                <img src="../assets/轮播图/变压吸附制氮装置/sy-qiaozhuangshi.png" alt="">
			                <div>撬装式制氮装置</div>
			              </div>
		              </div>
			    </el-tab-pane>
			    <el-tab-pane label="变压吸附制氧装置" name="second">配置管理</el-tab-pane>
			    <el-tab-pane label="天然转化制氢装置" name="third">角色管理</el-tab-pane>
			    <el-tab-pane label="甲醇裂解制氢装置" name="fourth">定时任务补偿</el-tab-pane>
			    <el-tab-pane label="压缩空气净化设备" name="fourth">定时任务补偿</el-tab-pane>
			    <el-tab-pane label="氮气纯化装置" name="fourth">定时任务补偿</el-tab-pane>
	        </el-tabs>
          </div>
          
        <div class="displayBottom displayBottom1"></div>
        <div class="displayBottom displayBottom2"></div>
      </div>
      <div class="craft">
        <div class="craftContent">
          <div style="text-align: left;padding-left: 20px;">
            <span class="craftContent-title">新工艺新技术</span>
            <span></span>
          </div>
          <div class="craftContent-img">
            <div class="craftContent-wrap">
              <div class="craftContent-imgSize">
                <img src="../assets/切图/xifutichu.png" alt="">
              </div>
              <h3>天然气转化制氢技术</h3>
              <div class="craftContent-intro">该技术是利用天然气加压脱硫后与水蒸汽在装填有催化剂的特殊转化炉内发生化学反应，生成含氢气、二氧化碳和一氧化碳的转化气，经废锅...</div>
              <el-button @click="$router.push({path: '/productDetails', query: {code: 6}})">查看更多</el-button>
              <!-- <div> -->
              <!-- </div> -->
            </div>
            <div class="craftContent-wrap">
              <div class="craftContent-imgSize">
                <img src="../assets/切图/jlqz.jpg" alt="">
              </div>
              <h3>甲醇裂解制氢技术</h3>
              <p class="craftContent-intro">甲醇裂解-变压吸附制氢技术是一种以甲醇、水为原料，在一定的温度和压力下经催化剂转化成混合气体，然后通过变压吸附提纯氢气的一种技术。</p>
              <el-button @click="$router.push({path: '/productDetails', query: {code: 8}})">查看更多</el-button>
            </div>
            <div class="craftContent-wrap">
              <div class="craftContent-imgSize">
                <img src="../assets/切图/wudusai.png" alt="">
              </div>
              <h3>变压吸附制氮技术</h3>
              <p class="craftContent-intro">它是以空气为原材料，利用一种高效能、高选择的固体吸附剂对氮和氧的选择性吸附的性能把空气中的氮和氧分离出来。碳分子筛对氮和氧的...</p>
              <el-button @click="$router.push({path: '/productDetails', query: {code: 1}})">查看更多</el-button>
            </div>
            <div class="craftContent-wrap">
              <div class="craftContent-imgSize">
                <img src="../assets/切图/-s-xifutichun.png" alt="">
              </div>
              <h3>变压吸附制氧技术</h3>
              <p class="craftContent-intro">变压吸附制氧设备（也称PSA制氧设备），在常温常压的条件下，利用PSA专用分子筛选择性吸附空气中的氮气、二氧化碳和水等杂质，从而取得纯度...</p>
              <el-button @click="$router.push({path: '/productDetails', query: {code: 5}})">查看更多</el-button>
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
          <div class="aboutUsContent-bottom1"></div>
          <div class="aboutUsContent-bottom"></div>
        </div>
      </div>
      <div class="contactUs">
        <div class="paperBottom-bottom">
					<div class="paperBottom-bottom-title">
						联系我们
					</div>
					<div class="paperBottom-bottom-small" style="margin-top: 10px;">
						<!-- <p id="allmap" style=""></p> -->
            <img src="../assets/切图/-s-lianxiwm.png" alt="">
					</div>
					<div class="paperBottom-bottom-intro" style="margin-top: 20px;">
						<div class="paperBottom-bottom-intro-item">
							<span>联系人 ：</span>
							<span>丁振兴先生</span>
						</div>
						<div class="paperBottom-bottom-intro-item">
							<span>电&nbsp;&nbsp; 话 ：</span>
							<span>-</span>
						</div>
						<div class="paperBottom-bottom-intro-item">
							<span>传&nbsp;&nbsp; 真 ：</span>
							<span>86-0571-63266701</span>
						</div>
						<div class="paperBottom-bottom-intro-item">
							<span>手机号：</span>
							<span>13606536877</span>
						</div>
						<div class="paperBottom-bottom-intro-item">
							<span>邮 &nbsp;&nbsp;箱 ：</span>
							<span>hzjingwang2011@163.com</span>
						</div>
						<!-- <div class="paperBottom-bottom-intro-item">
							<span>网&nbsp;&nbsp; 址 ：</span>
							<span>XXXXXXXXXXXXXXXXXX</span>
						</div> -->
						<div class="paperBottom-bottom-intro-item">
							<span style="transform: translateY(-50%);">地 &nbsp;&nbsp;址 ：</span>
							<span>浙江省 杭州市 富阳市 新登镇五里桥工业区虎山脚</span>
						</div>
					</div>
				</div>
        <div class="contactUs-right">
          <div class="right-img"  @click="$router.push('/talents')" style="cursor: pointer;"><img src="../assets/切图/jiaruwomen.png" alt=""></div>
          <div class="right-img" style="margin-top: 10px;cursor: pointer;"   @click="$router.push('/technicalServer')"><img src="../assets/切图/jishufuwu.png" alt=""></div>
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
      ],
      activeName:"first"
    }
  },
  mounted(){
    // this.$nextTick(()=>{
    //       var map = new BMap.Map("allmap");
    //       //创建坐标点
    //       var point = new BMap.Point(119.725914,29.956067);
    //       //初始化实例，传入坐标点并设置地图级别
    //       console.log(BMap)
    //       map.centerAndZoom(point,15);
    //       map.enableScrollWheelZoom(true);
    // })			
  },
}
</script>

<style lang="less">
	.curP{
		cursor: pointer;
	}
.el-tabs__nav-wrap:after {
  // background: none!important;
}
.el-tabs__nav{
	border: none!important;
}
.el-menu--horizontal {
  .el-menu--popup-bottom-start {
    margin: 0!important;
    // width: 200px!important;
    .el-menu-item {
      // width: 200px!important;
    }
  }
}
.el-tabs__item:focus, .el-tabs__item:hover {
  background: #FF852C;
}
.el-tabs__active-bar {
  opacity: 0;
}
.el-tabs__item {
  width: 100%;
  height: 56px;
  line-height: 50px;
  text-align: center;
  color: #fff;
}
.el-tabs__item:hover {
  background: linear-gradient(-90deg,rgba(255,108,0,1),rgba(255,133,44,1));
}
  .el-carousel__item {
    .imgWrap {
      width: 100%;
      height: 300px!important;
      img {
        width: 100%;
        height: 300px!important;
        display: block;
      }
    }
  }
  
.home {
  width: 100%;
  padding-bottom: 100px;
  .content {
    width: 1200px;
    // height: 1000px;
    margin: 50px auto;
    // padding-left: 10%;
    /*border: 1px solid red;*/
    .productDisplay {
      .displayNav {
        width: 350px;
        /*height: 400px;*/
        padding-top: 15px;
        position: static;
        z-index: 9999;
        margin-left: 25px;
        background:rgba(255,108,0,1);
        box-shadow: 0px 4px 7px 0px rgba(70,30,0,0.15), 0px 11px 16px 0px rgba(210,90,2,0.39);
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
          /*height: 300px;*/
          margin-top: -40px;
          padding-top: 25px;
          left: 550px;
          position: absolute;
          overflow: visible!important;
          .nitBg {
            // height: 230px;
            width: 210px;
            margin-right: 42px;
            float: left;
            img {
              width: 100%;
              height: 230px;
            }
            div {
              width: 100%;
              height: 40px;
              margin-top: 20px;
              font-size: 18px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(51,51,51,1);
              border-left: 1px solid rgba(153,153,153,1);
              border-bottom: 1px solid rgba(153,153,153,1);
              border-right: 1px solid rgba(153,153,153,1);
            }
          }
        }
        .el-tabs__item {
          width: 100%;
          height: 56px;
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
      }
      .displayBottom2 {
        width: 751px;
        height: 30px;
        top: -130px;
        left: 375px;
      }
    }
    .craft {
      width: 100%;
      .craftContent {
        width: 100%;
        height: 500px;
        // margin: 0 0 0 10%;
        .craftContent-title {
          font-size:25px;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
        .craftContent-img {
          width: 100%;
          height: 100%;
          margin-top: 20px;
          .craftContent-wrap {
            width: 261px;
            float: left;
            margin-left: 20px;
            .craftContent-imgSize {
              width: 100%;
              height: 189px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            h3 {
              margin-top: 15px;
            }
            .craftContent-intro {
              width: 100%;
              font-size: 15px;
              text-align: left;
              margin-top: 10px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color:#333333;
              /*color: rgba(155,155,155,1);*/
              line-height: 27px;
              
            }
            .el-button {
              width: 100%;
              height: 35px;
              margin-top: 20px;
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
      margin-top: 40px;
      .aboutUsContent {
        width: 100%;
        height: 450px;
        .aboutUsContent-Title {
          padding-left: 20px;
          text-align: left;
          font-size: 25px;
          font-family: MicrosoftYaHei;
          color: rgba(0,0,0,1);
        }
        .aboutUsContent-intro {
          width: 100%;
          height: 300px;
          margin-top: 15px;
          .aboutUsContent-introImg {
            width: 638px;
            height: 300px;
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
            text-align: left;
            font-size: 18px;
            font-family: MicrosoftYaHei;
            color: rgba(0,0,0,1);
            line-height: 38px;
            float: left;
          }
        }
        .aboutUsContent-bottom {
          width: 100%;
          height: 50px;
          clear: both;
          background:rgba(31,31,31,1);
        }
        .aboutUsContent-bottom1 {
          width: 30px;
          height: 60px;
          float: right;
          margin: -48px 0 0 0;
          background:rgba(31,31,31,1);
        }
      }
    }
    .contactUs {
      width: 1200px;
      display: flex;
      // justify-content: center;
      .paperBottom-bottom{
        width: 350px;
        margin-top: 40px;
        // overflow: hidden;
        .paperBottom-bottom-title{
          padding-left: 20px;
          text-align: left;
          font-size: 19px;
          font-family:MicrosoftYaHei;
          font-weight: bold;
          color:rgba(51,51,51,1);
        }
        .paperBottom-bottom-small{
          // p {
          //   width: 310px;
          //   height: 120px;
          //   margin: 0 auto;
          // }
        }
        .paperBottom-bottom-intro{
          box-sizing: border-box;
          padding: 10px 20px;
          // background: rgba(0,0,0,0.05)
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
            // padding-left: 20px;
          }
          &:noT(:first-child){
            border-top: 1px solid #050001;
          }
        }
      }
      .contactUs-right {
        margin: 40px 0 0 20px;
        .right-img {
          width: 819px;
          height: 200px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .displayNav{
  	.el-tabs__item{
  		border:none!important
  	}
  	.el-tabs__header{
  		height:600px!important;
  		border-bottom: none!important;
  	}
  	.el-tabs{
  		border-bottom: none!important;
  	}
  }
}
</style>