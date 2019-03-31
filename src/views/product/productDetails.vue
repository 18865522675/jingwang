<template>
  <article class="productDetails" style="padding-bottom: 300px;">
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
    <div class="productDetails-content clear">
      <div class="productDetails-contentLeft">
        <div v-if="techName1" class="contentLeft-btn">变压吸附制氮装置</div>
        <div v-if="techName2" class="contentLeft-btn">变压吸附制氧装置</div>
        <div v-if="techName3" class="contentLeft-btn">天然转化制氢装置</div>
        <div v-if="techName4" class="contentLeft-btn">甲醇裂解制氢装置</div>
        <div v-if="techName5" class="contentLeft-btn">压缩空气净化装置</div>
        <div v-if="techName6" class="contentLeft-btn">氮气纯化装置</div>
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
							<span>丁振兴先生</span>
						</div>
						<div class="paperBottom-bottom-intro-item">
							<span>电&nbsp;&nbsp;话 ：</span>
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
							<span>浙江省 杭州市 富阳市 新登镇双江路12号</span>
						</div>
					</div>
				</div>
      </div>
      <div class="productDetails-contentright">
        <h3 v-if="code1">变压吸附制氮装置</h3>
        <h3 v-if="code2">可移动制氮装置</h3>
        <h3 v-if="code3">撬装式制氮装置</h3>
        <h3 v-if="code4">制氮装置</h3>
        <h3 v-if="code5">制氧装置</h3>
        <h3 v-if="code6">制氢装置</h3>
        <h3 v-if="code7">制氢装置</h3>
        <h3 v-if="code8">制氢装置</h3>
        <h3 v-if="code9">制氢装置</h3>
        <h3 v-if="code10">制氢装置</h3>
        <h3 v-if="code11">压缩空气净化装置</h3>
        <h3 v-if="code12">压缩空气净化装置</h3>
        <h3 v-if="code13">压缩空气净化装置</h3>
        <h3 v-if="code14">氮气纯化装置</h3>
        <article>
          <div class="contentright-img">
            <img v-if="code1" src="../../assets/切图/-s-JWN.png" alt="">
            <img v-if="code2" src="../../assets/轮播图/变压吸附制氮装置/keyidon.png" alt="">
            <img v-if="code3" src="../../assets/轮播图/变压吸附制氮装置/qiaozhuangshi.png" alt="">
            <img v-if="code4" src="../../assets/轮播图/变压吸附制氮装置/zhidan.png" alt="">
            <img v-if="code5" src="../../assets/轮播图/变压吸附制氧装/zhiyan.png" alt="">
            <img v-if="code6" src="../../assets/轮播图/天然转化制氢装置/tianrnaqi-a.png" alt="">
            <img v-if="code7" src="../../assets/轮播图/天然转化制氢装置/tianrnaqi-b.png" alt="">
            <img v-if="code8" src="../../assets/轮播图/甲醇裂解制氢装置/jiachun-a.png" alt="">
            <img v-if="code9" src="../../assets/轮播图/甲醇裂解制氢装置/jiachun-b.png" alt="">
            <img v-if="code10" src="../../assets/轮播图/甲醇裂解制氢装置/jiachun-c.png" alt="">
            <img v-if="code11" src="../../assets/轮播图/压缩空气净化设备/yasuokongq-a-zuhe.png" alt="">
            <img v-if="code12" src="../../assets/轮播图/压缩空气净化设备/yasuokongq-b-weiren.png" alt="">
            <img v-if="code13" src="../../assets/轮播图/压缩空气净化设备/yasuokongq-c-ludian.png" alt="">
            <img v-if="code14" src="../../assets/轮播图/氮气纯化装置/danqichunhau.png" alt="">
            <div class="contentright-intro">
              <h2 v-if="code1" style="text-align: left;">变压吸附制氮装置</h2>
              <h2 v-if="code2" style="text-align: left;">可移动制氮装置</h2>
              <h2 v-if="code3" style="text-align: left;">撬装式制氮装置</h2>
              <h2 v-if="code4" style="text-align: left;">制氮装置</h2>
              <h2 v-if="code5" style="text-align: left;">制氧装置</h2>
              <h2 v-if="code6" style="text-align: left;">制氢装置</h2>
              <h2 v-if="code7" style="text-align: left;">制氢装置</h2>
              <h2 v-if="code8" style="text-align: left;">制氢装置</h2>
              <h2 v-if="code9" style="text-align: left;">制氢装置</h2>
              <h2 v-if="code10" style="text-align: left;">制氢装置</h2>
              <h2 v-if="code11" style="text-align: left;">压缩空气净化装置</h2>
              <h2 v-if="code12" style="text-align: left;">微热再生吸干机</h2>
              <h2 v-if="code13" style="text-align: left;">低露点压缩空气干燥机</h2>
              <h2 v-if="code14" style="text-align: left;">氮气纯化装置</h2>
              <div style="margin-top: 45px; color:rgba(254,0,0,1);">请联系我们</div>
              <div style="font-size: 30px; font-family: MicrosoftYaHei;">13606536877</div>
              <div>产地：浙江省/杭州市</div>
              <div v-if="code1">技术指标</div>
              <div v-if="code1">
                <div class="contentright-intro-zhibiao">氮气产量：5~3000Nm²/h</div>
                <div class="contentright-intro-zhibiao">氮气纯度：95~99.9998%</div>
                <div class="contentright-intro-zhibiao">氮气压力：0~0.8MPa(可提供0.1~0.8MPa)</div>
                <div class="contentright-intro-zhibiao">露点：≤-45℃（常压）</div>
              </div>
              <!-- <div v-if="code2" class="margin20">&nbsp;&nbsp;&nbsp;&nbsp;暂无数据</div>
              <div v-if="code3" class="margin20">&nbsp;&nbsp;&nbsp;&nbsp;暂无数据</div>
              <div v-if="code4" class="margin20">&nbsp;&nbsp;&nbsp;&nbsp;暂无数据</div>
              <div v-if="code5" class="margin20">&nbsp;&nbsp;&nbsp;&nbsp;暂无数据</div>
              <div v-if="code6" class="margin20">&nbsp;&nbsp;&nbsp;&nbsp;暂无数据</div>
              <div v-if="code7" class="margin20">&nbsp;&nbsp;&nbsp;&nbsp;暂无数据</div>
              <div v-if="code8" class="margin20">&nbsp;&nbsp;&nbsp;&nbsp;暂无数据</div>
              <div v-if="code9" class="margin20">&nbsp;&nbsp;&nbsp;&nbsp;暂无数据</div>
              <div v-if="code10" class="margin20">&nbsp;&nbsp;&nbsp;&nbsp;暂无数据</div>
              <div v-if="code11" class="margin20">&nbsp;&nbsp;&nbsp;&nbsp;暂无数据</div>
              <div v-if="code12" class="margin20">&nbsp;&nbsp;&nbsp;&nbsp;暂无数据</div>
              <div v-if="code13" class="margin20">&nbsp;&nbsp;&nbsp;&nbsp;暂无数据</div>
              <div v-if="code14" class="margin20">&nbsp;&nbsp;&nbsp;&nbsp;暂无数据</div> -->
            </div>
          </div>
        </article>
        <div v-if="code1">
          <div class="contentright-explain">“JWN 变压吸附制氮装置”工作原理</div>
          <div class="contentright-dd">
            根据变压吸附原理，采用高品质碳分子筛作为吸附剂，在一定压力下由于动力学效应，氧在碳分子筛微孔中的扩散率远大于氮，在吸附未达到平衡时，
            氧被碳分子筛大量吸附，氧分子在气相中被富集，达到氧氮分离。由于碳分子筛对氧的吸附容量随压力的不同两者有明显的差异，降低压力，即可解吸碳分子筛再生，
            得以重复循环使用。采用两个吸附塔流程，一塔吸附产氮，一塔解吸再生，通过PLC智能程序控制气动角座阀的启闭，使两塔循环交替，连续产出高品质氮气。
          </div>
          <div class="contentright-explain clear">“JWN 变压吸附制氮装置”技术特点</div>
          <div class="contentright-dd">
            进口气动角座阀，寿命达100万次以上。进口PLC智能程序控制器，操作简便，运行稳定。合理的内部构件，气流分布均匀，减轻气流高速冲击。
            特有的分子筛保护措施，延长碳分子筛的使用寿命。自动联锁氮气排空装置，保证产品氮气质量。
          </div>
          <div class="contentright-explain">“JWN 变压吸附制氮装置”主要参数表</div>
          <div class="contentright-explainImg">
            <img class="" src="../../assets/轮播图/变压吸附制氮装置/cs-bianyaxifu-zhidan.png" alt="">
          </div>
        </div>
        <div v-if="code2" class="margin50">
          <!-- <img src="../../assets/轮播图/queshi.png" alt=""> -->
        </div>
        <div v-if="code3" class="margin50">
          <!-- <img src="../../assets/轮播图/queshi.png" alt=""> -->
        </div>
        <div v-if="code4" class="margin50">
          <!-- <img src="../../assets/轮播图/queshi.png" alt=""> -->
        </div>
        <div v-if="code5" class="contentright-explain">“J制氧装置”主要参数表</div>
        <div v-if="code5" class="margin50">
          <img src="../../assets/轮播图/变压吸附制氧装/bianyaxifu-zhiyang.png" alt="">
        </div>
        <div v-if="code6" class="margin50">
          <!-- <img src="../../assets/轮播图/queshi.png" alt=""> -->
        </div>
        <div v-if="code7" class="margin50">
          <!-- <img src="../../assets/轮播图/queshi.png" alt=""> -->
        </div>
        <div v-if="code8" class="margin50">
          <!-- <img src="../../assets/轮播图/queshi.png" alt=""> -->
        </div>
        <div v-if="code9" class="margin50">
          <!-- <img src="../../assets/轮播图/queshi.png" alt=""> -->
        </div>
        <div v-if="code10" class="margin50">
          <!-- <img src="../../assets/轮播图/queshi.png" alt=""> -->
        </div>
        <div v-if="code11" class="margin50">
          <!-- <img src="../../assets/轮播图/queshi.png" alt=""> -->
        </div>
        <div v-if="code12" class="contentright-explain">“微热再生吸干机”主要参数表</div>
        <div v-if="code12" class="margin50" style="margin-top: 50px">
          <img src="../../assets/轮播图/压缩空气净化设备/yasuoji-weire.png" alt="">
        </div>
        <div v-if="code13" class="contentright-explain">“低露点压缩空气干燥机”主要参数表</div>
        <div v-if="code13" class="margin50">
          <img src="../../assets/轮播图/压缩空气净化设备/yasuoji-diludian-b.png" alt="">
        </div>
        <div v-if="code14" class="margin50">
          <!-- <img src="../../assets/轮播图/queshi.png" alt=""> -->
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      code1: false,
      code2: false,
      code3: false,
      code4: false,
      code5: false,
      code6: false,
      code7: false,
      code8: false,
      code9: false,
      code10: false,
      code11: false,
      code12: false,
      code13: false,
      code14: false,
      techName1: false,
      techName2: false,
      techName3: false,
      techName4: false,
      techName5: false,
      techName6: false
    }
  },
  computed: {
    "route": function() {
    //	console.log(this.$route.matched)
      return this.$route.matched;
		},
  },
  mounted () {
    var query = this.$route.query
    if (query.code === 1) {
      this.code1 = true
      this.techName1 = true
    } else if (query.code === 2) {
      this.code2 = true
      this.techName1 = true
    } else if (query.code === 3) {
      this.code3 = true
      this.techName1 = true
    } else if (query.code === 4) {
      this.code4 = true
      this.techName1 = true
    } else if (query.code === 5) {
      this.code5 = true
      this.techName2 = true
    } else if (query.code === 6) {
      this.code6 = true
      this.techName3 = true
    } else if (query.code === 7) {
      this.code7 = true
      this.techName3 = true
    } else if (query.code === 8) {
      this.code8 = true
      this.techName4 = true
    } else if (query.code === 9) {
      this.code9 = true
      this.techName4 = true
    } else if (query.code === 10) {
      this.code10 = true
      this.techName4 = true
    } else if (query.code === 11) {
      this.code11 = true
      this.techName5 = true
    } else if (query.code === 12) {
      this.code12 = true
      this.techName5 = true
    } else if (query.code === 13) {
      this.code13 = true
      this.techName5 = true
    } else if (query.code === 14) {
      this.code14 = true
      this.techName6 = true
    }
  }
}
</script>

<style lang="less">
.left {
  float: left;
}
.margin20 {
  padding-top: 40px;
}
.margin50 {
  margin-top: 50px;
}
.width100 {
  width: 100%;
}
.clear:after{
	display: block;
	content: "\20";
	clear: both;
}
  .productDetails {
    width: 100%;
    height: 100%;
    .productDetails-content {
      width: 100%;
      height: 100%;
      margin-top: 30px;
      .productDetails-contentLeft {
        width: 350px;
        // height: 1000px;
        margin-right: 45px;
        /*.left;*/
        .contentLeft-btn {
          .width100;
          height: 65px;
          color: white;
          font-size: 19px;
          font-weight: bold;
          line-height: 60px;
          box-shadow:0px 3px 3px 0px rgba(221,94,1,0.08);
          background: linear-gradient(-90deg,rgba(255,108,0,1),rgba(255,133,44,1));
        }
      }
      .productDetails-contentright{
        width: 800px;
        // height: 1000px;
        padding-top: 5px;
        // border: 1px solid red;
        /*.left;*/
        h3 {
          text-align: left;
        }
        article {
          margin-top: 10px;
          padding-top: 20px;
          border-top: 1px solid #FF6600;
          .contentright-img {
            display: inline-block;
            /*.left;*/
              .contentright-intro {
                padding-left: 70px;
                float: right;
              div {
                margin-top: 20px;
                text-align: left;
                font-size: 20px;
                font-weight: normal;
                font-family: Adobe Heiti Std R;
              }
              .contentright-intro-zhibiao {
                font-size: 14px;
                font-weight: 400;
                color:rgba(51,51,51,1);
              }
            }
          }
        }
        .contentright-explain {
          .width100;
          height: 45px;
          line-height: 45px;
          /*.left;*/
          margin-top: 50px;
          text-align: left;
          font-size: 26px;
          background: #FF6C00;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255,254,254,1);
        }
        .contentright-explainImg {
          /*.left;*/
          .width100;
          // height: 300px;
          margin-top: 30px;
        }
        .contentright-dd {
          /*.left;*/
          .width100;
          margin: 30px 0 0 0;
          text-align: left;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(51,51,51,1);
        }
      }
    }
  }
</style>
