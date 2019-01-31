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
                  <img src="../../assets/切图/chanping.png" alt="">
                </div>
                <h3>制氮JWN标准型</h3>
                <h5>应用领域: <span style="font-size:14px;font-weight: normal;">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button @click="$router.push('/productDetails')" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/切图/-s-JWN-A.png" alt="">
                </div>
                <h3>制氮JWN-A型</h3>
                <h5>应用领域: <span style="font-size:14px;font-weight: normal;">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <!-- <router-link to="/productDetails"> -->
                    <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                  <!-- </router-link> -->
                </div>
              </div>
              <div class="left-contentDetails" style="margin-right: 126px;">
                <div class="left-contentDetails-img">
                  <img src="../../assets/切图/-s-JWN-B.png" alt="">
                </div>
                <h3>制氮JWN-B型</h3>
                <h5>应用领域: <span style="font-size:14px;font-weight: normal;">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/切图/-s-JWN-C.png" alt="">
                </div>
                <h3>制氮JWN-C型</h3>
                <h5>应用领域: <span style="font-size:14px;font-weight: normal;">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="制氧">
          <div class="left-content">
            <h3>制氮</h3>
            <article>
              <div class="left-contentDetails" style="margin-right: 110px;">
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
              <div class="left-contentDetails" style="margin-right: 110px;">
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
        <el-tab-pane label="制氢">
          <div class="left-content">
            <h3>天然气制氢技术</h3>
            <article>
              <div class="technology-details">
                <div>
                  <img src="../../assets/切图/trq.jpg" style="width:307px;">
                </div>
                <div class="technology-details-intro" style="">
                  <h3 style="">变压吸附提纯氢气技术</h3>
                  <div style="margin-top: 10px; font-size:18px; text-align: left;">以天然气为原料，经压缩、脱硫后与水蒸气进行转化、变换反应，制得氢含量大于70%（v/v%）以上的富氢转化气。富氢转化气经变压吸附(PSA)单元分离提纯即得到纯度99.9%（v/v%）以上的产品氢气。</div>
                  <div style="text-align: left; margin-top: 17px;">
                    <el-button @click="$router.push({path: '/techDetails', query: {tech: 4}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看更多</el-button>
                  </div>
                </div>
              </div>
              <div class="technology-details">
                <div>
                  <img src="../../assets/切图/jlqz.jpg" style="width:307px;">
                </div>
                <div class="technology-details-intro" style="">
                  <h3 style="">焦炉气制CNG/LNG技术</h3>
                  <div style="margin-top: 10px; font-size:18px; text-align: left;">以焦炉气为原料制取天然气，为得到合格的产品（SNG/CNG/LNG）,在生产过程中，CO2的含量必须降低到规定值以下，
                    以保证产品质量或装置稳定运行的要求，可以通过甲烷化反应、气体分离技术（如PSA）或二者的组合来实现脱除CO2同时浓缩CH4的目的。采用甲烷化的方法，不但可以降低气体中的碳氧化物，
                    还增加了CH4含量，获得更多需要的产品。
                  </div>
                  <div style="text-align: left; margin-top: 17px;">
                    <el-button @click="$router.push({path: '/techDetails', query: {tech: 5}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看更多</el-button>
                  </div>
                </div>
              </div>
              <div class="technology-details">
                <div>
                  <img src="../../assets/切图/jlqz.jpg" style="width:307px;">
                </div>
                <div class="technology-details-intro" style="">
                  <h3 style="">甲醇裂解制氢技术</h3>
                  <div style="margin-top: 10px; font-size:18px; text-align: left;">甲醇、脱盐水混合后经加热汽化、过热后进入转化反应器，甲醇、水蒸汽在催化剂的作用下，在转化反应器中完成甲醇裂解、一氧化碳变换成二氧化碳等两步反应</div>
                  <div style="text-align: left; margin-top: 17px;">
                    <el-button @click="$router.push({path: '/techDetails', query: {tech: 6}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看更多</el-button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="空气净化设备">
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
        <el-tab-pane label="二氧化碳提纯">
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
        <el-tab-pane label="原件">
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
        <el-tab-pane label="环保变压吸附技术">
          <div class="left-content">
            <h3>环保变压吸附技术</h3>
            <article>
              <div class="technology-details">
                <div>
                  <img src="../../assets/切图/xifutichu.png" alt="">
                </div>
                <div class="technology-details-intro">
                  <h3 style="">变压吸附提纯氢气技术</h3>
                  <div style="margin-top: 10px; font-size:18px; text-align: left;">含氢(H2)混合气进入变压吸附装置吸附塔后，由于吸附床内吸附剂对气体混合物中各组分的吸附能力随着压力变化而呈现差异，加压时吸附原料气中的杂质...</div>
                  <div style="text-align: left; margin-top: 17px;">
                    <el-button @click="$router.push({path: '/techDetails', query: {tech: 1}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看更多</el-button>
                  </div>
                </div>
              </div>
              <div class="technology-details">
                <div>
                  <img src="../../assets/切图/-s-jinghuanongsuo.png" alt="">
                </div>
                <div class="technology-details-intro" style="">
                  <h3 style="">变压吸附净化浓缩甲烷技术</h3>
                  <div style="margin-top: 10px; font-size:18px; text-align: left;">富含甲烷的混合气进入变压吸附装置吸附塔后，由于吸附床内吸附剂对气体混合物中各组分的吸附能力随着压力变化而呈现差异，加压时吸附原料气中的杂质...</div>
                  <div style="text-align: left; margin-top: 17px;">
                    <el-button @click="$router.push({path: '/techDetails', query: {tech: 2}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看更多</el-button>
                  </div>
                </div>
              </div>
              <div class="technology-details">
                <div>
                  <img src="../../assets/切图/-s-xifutichun.png" alt="">
                </div>
                <div class="technology-details-intro" style="">
                  <h3 style="">变压吸附提纯一氧化碳技术</h3>
                  <div style="margin-top: 10px; font-size:18px; text-align: left;">采用变压吸附工艺从含一氧化碳、氢气、氮气、甲烷、二氧化碳等组分的混合气中提纯一氧化碳。原料气进入一段PSA装置，吸附除去二氧化碳、水分及微量...</div>
                  <div style="text-align: left; margin-top: 17px;">
                    <el-button @click="$router.push({path: '/techDetails', query: {tech: 3}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看更多</el-button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="能源煤化工技术" style="overflow: hidden">
        </el-tab-pane>
      </el-tabs>
      <el-tabs tab-position="left" >
      </el-tabs>
      <div class="contactUs">
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
      </div>
    </div>
    <!-- <router-view style="margin: 50px auto;width: 1200px; padding-bottom: 150px;"></router-view> -->
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
  .content {
    // height: 1850px;
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
            overflow: hidden;
            h3 {
              text-align: left;
            }
            article {
              width: 100%;
              margin-top: 5px;
              overflow: hidden;
              border-top: 1px solid rgba(51,51,51,1);
              .left-contentDetails {
                width: 310px;
                margin: 20px 0;
                float: left;
                // border: 1px solid rgba(51,51,51,1);
                .left-contentDetails-img {
                  width: 275px;
                  height: 260px;
                  // margin: 5px auto 0;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                h5 {
                  width: 275px;
                  margin-top: 10px;
                  text-align: left;
                }
              }
              .technology-details {
                width: 99%;
                overflow: hidden;
                margin-bottom: 30px;
                padding-top: 20px;
                div {
                  width: 365px;
                  // height: 240px;
                  text-align: left;
                  float: left;
                  img {
                  }
                }
                .technology-details-intro {
                  width: 365px;
                  margin-left: 10px;
                  // margin: 6px 0 0 0;
                }
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
      top: -380px;
    }
}

</style>