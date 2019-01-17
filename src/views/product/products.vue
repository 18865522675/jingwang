<template>
  <div class="boxWrap">
    <div class="paperTop flex-r">
      <div class="headerTitle">{{route[0].name}}</div>
      <div class="bread">
        <el-breadcrumb separator=" / ">
          <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,index) in route" :key="index" :to="{ path:item.path }">{{item.name}}</el-breadcrumb-item>
          <!--<el-breadcrumb-item></el-breadcrumb-item>-->
        </el-breadcrumb>
      </div>
    </div>
    <div class="content">
      <el-tabs tab-position="left">
        <el-tab-pane label="制氮">
          <div class="left-content">
            <h3>制氮</h3>
            <article>
              <div class="left-contentDetails" style="margin-right: 126px;">
                <div class="left-contentDetails-img">
                  <img src="" alt="">
                </div>
                <h3>制氮JWN标准型</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="" alt="">
                </div>
                <h3>制氮JWN标准型</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails" style="margin-right: 126px;">
                <div class="left-contentDetails-img">
                  <img src="" alt="">
                </div>
                <h3>制氮JWN标准型</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="" alt="">
                </div>
                <h3>制氮JWN标准型</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="制氧">制氧</el-tab-pane>
        <el-tab-pane label="制氢">制氢</el-tab-pane>
        <el-tab-pane label="空气净化设备">空气净化设备</el-tab-pane>
        <el-tab-pane label="二氧化碳提纯"></el-tab-pane>
        <el-tab-pane label="原件"></el-tab-pane>
      </el-tabs>
      
      <el-tabs tab-position="left" >
        <el-tab-pane label="环保变压吸附技术">
          <div class="left-content">
            <h3>环保变压吸附技术</h3>
            <article>
              <div class="technology-details">
                <div>
                  <img src="../../assets/img/byxf.png" alt="">
                </div>
                <div class="technology-details-intro" style="">
                  <h3 style="">变压吸附提纯氢气技术</h3>
                  <div style="margin-top: 10px; font-size:18px; text-align: left;">含氢(H2)混合气进入变压吸附装置吸附塔后，由于吸附床内吸附剂对气体混合物中各组分的吸附能力随着压力变化而呈现差异，加压时吸附原料气中的杂质...</div>
                  <div style="text-align: left; margin-top: 17px;">
                    <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看更多</el-button>
                  </div>
                </div>
              </div>
              <div class="technology-details">
                <div>
                  <img src="../../assets/img/byxf.png" alt="">
                </div>
                <div class="technology-details-intro" style="">
                  <h3 style="">变压吸附提纯氢气技术</h3>
                  <div style="margin-top: 10px; font-size:18px; text-align: left;">含氢(H2)混合气进入变压吸附装置吸附塔后，由于吸附床内吸附剂对气体混合物中各组分的吸附能力随着压力变化而呈现差异，加压时吸附原料气中的杂质...</div>
                  <div style="text-align: left; margin-top: 17px;">
                    <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看更多</el-button>
                  </div>
                </div>
              </div>
              <div class="technology-details">
                <div>
                  <img src="../../assets/img/byxf.png" alt="">
                </div>
                <div class="technology-details-intro" style="">
                  <h3 style="">变压吸附提纯氢气技术</h3>
                  <div style="margin-top: 10px; font-size:18px; text-align: left;">含氢(H2)混合气进入变压吸附装置吸附塔后，由于吸附床内吸附剂对气体混合物中各组分的吸附能力随着压力变化而呈现差异，加压时吸附原料气中的杂质...</div>
                  <div style="text-align: left; margin-top: 17px;">
                    <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看更多</el-button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="能源煤化工技术"></el-tab-pane>
      </el-tabs>
      <!-- <div class="contactUs">
        <div class="paperBottom-bottom">
          <div class="paperBottom-bottom-title">
            联系我们
          </div>
          <div class="paperBottom-bottom-small" style="margin-top: 5px;">
            如果有任何问题请及时联系
          </div>
          <div class="paperBottom-bottom-intro" style="margin-top: 20px;">
            <div class="paperBottom-bottom-intro-item">
              <span>联系人 ：</span>
              <span>丁振兴</span>
            </div>
            <div class="paperBottom-bottom-intro-item">
              <span>手 &nbsp;&nbsp;机 ：</span>
              <span>13606536877</span>
            </div>
            <div class="paperBottom-bottom-intro-item">
              <span>传&nbsp;&nbsp; 真 ：</span>
              <span>0571-63266701</span>
            </div>
            <div class="paperBottom-bottom-intro-item">
              <span>邮 &nbsp;&nbsp;箱 ：</span>
              <span>888888888@qq.com</span>
            </div>
            <div class="paperBottom-bottom-intro-item">
              <span>网&nbsp;&nbsp; 址 ：</span>
              <span>XXXXXXXXXXXXXXXXXX</span>
            </div>
            <div class="paperBottom-bottom-intro-item">
              <span style="transform: translateY(-50%);">地 &nbsp;&nbsp;址 ：</span>
              <span>浙江省 杭州市 富阳市 新登镇五里桥工业区虎山脚</span>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "boxWrap",
  data() {
    return {
    }
  },
  computed: {
    "route": function() {
    //	console.log(this.$route.matched)
      return this.$route.matched;
		},
  },
  mounted() {
  },
  created() {
  }
}
</script>

<style lang="less">
@w350:350px;
.boxWrap {
  width: 1200px;
  .paperTop{
    width: 1200px;
    box-sizing: border-box;
    border-bottom: 10px solid #FF6C00;
    position: relative;
    justify-content: space-between;
    align-items: flex-end;
    .headerTitle{
      width: @w350;
      height: 60px;
      color:white;
      font-size: 19px;
      font-weight: bold;
      line-height: 60px;
      /*bottom:0;*/
      /*position: absolute;*/
      background: #FF6C00;
    }
    .bread{
      padding-bottom: 3px;
    }
  }
  .el-tabs {
    margin-top: 22px;
    .el-tabs__header {
      margin-right: 100px;
      .el-tabs__nav-wrap {
        width: 350px;
        background: #FF6C00;
        .el-tabs__item {
          height: 56px;
          line-height: 50px;
          color: #fff;
          text-align: center;
        }
      }
    }
    .el-tabs__content {
      .el-tab-pane {
        width: 100%;
        .left-content {
          h3 {
            margin-top: 10px;
            text-align: left;
          }
          article {
            width: 100%;
            margin-top: 5px;
            border-top: 1px solid rgba(51,51,51,1);
            .left-contentDetails {
              width: 310px;
              margin: 20px 0;
              float: left;
              // border: 1px solid rgba(51,51,51,1);
              .left-contentDetails-img {
                width: 240px;
                height: 260px;
                // margin: 5px auto 0;
                border: 1px solid red;
              }
              h5 {
                width: 240px;
                margin-top: 10px;
                text-align: left;
              }
            }
            .technology-details {
              width: 99%;
              height: 270px;
              padding-top: 20px;
              div {
                float: left;
              }
              .technology-details-intro {
                width: 300px;
                margin: 6px 0 0 60px;
              }
            }
          }
        }
      }
    }
  }
  .contactUs {
      width: 350px;
      position: relative;
      // top: -1400px;
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
    }
}

</style>