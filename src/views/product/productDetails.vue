<template>
  <article class="productDetails">
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
    <div class="productDetails-content">
      <div class="productDetails-contentLeft">
        <div class="contentLeft-btn">制氮</div>
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
      <div class="productDetails-contentright">
        <h3>制氮</h3>
        <article>
          <div class="contentright-img">
            <img src="../../assets/切图/-s-JWN.png" alt="">
            <div class="contentright-intro">
              <h2 style="text-align: left;">制氮JWN标准型</h2>
              <div style="margin-top: 45px; color:rgba(254,0,0,1);">请联系我们</div>
              <div style="font-size: 30px; font-family: MicrosoftYaHei;">13606536877</div>
              <div style="">供货总量：999件</div>
              <div>产地：浙江省/杭州市</div>
              <div>发货期：自买家付款之日起60天内发货</div>
            </div>
          </div>
        </article>
        <div class="contentright-explain">“制氮JWN标准型”参数说明</div>
        <div>
          <img class="contentright-explainImg" src="../../assets/img/cssm.png" alt="">
        </div>
        <div class="contentright-explain">“制氮JWN标准型”详细介绍</div>
        <div class="contentright-dd"> 根据变压吸附原理，采用高品质碳分子筛作为吸附剂，在一定压力下由于动力学效应，氧在碳分子筛微孔中的扩散率远大于氮，在吸附未达到平衡时，
          氧被碳分子筛大量吸附，氧分子在气相中被富集，达到氧氮分离。由于碳分子筛对氧的吸附容量随压力的不同两者有明显的差异，降低压力，即可解吸碳分子筛再生，
          得以重复循环使用。采用两个吸附塔流程，一塔吸附产氮，一塔解吸再生，通过PLC智能程序控制气动角座阀的启闭，使两塔循环交替，连续产出高品质氮气。 
          <!-- 氮气产量：5-3000Nm³/h 氮气纯度：95-99.998% 氮气压力：0-0.8Mpa（可提供0.1-0.8Mpa） 露点：≤-45°（常压） -->
                        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    "route": function() {
    //	console.log(this.$route.matched)
      return this.$route.matched;
		},
  },
}
</script>

<style lang="less">
.left {
  float: left;
}
.width100 {
  width: 100%;
}
  .productDetails {
    .productDetails-content {
      margin-top: 30px;
      .productDetails-contentLeft {
        width: 350px;
        // height: 1000px;
        margin-right: 45px;
        .left;
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
        height: 1000px;
        padding-top: 5px;
        // border: 1px solid red;
        .left;
        h3 {
          text-align: left;
        }
        article {
          margin-top: 10px;
          padding-top: 20px;
          border-top: 1px solid #333333;
          .contentright-img {
            display: inline-block;
            .left;
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
            }
          }
        }
        .contentright-explain {
          .width100;
          height: 45px;
          line-height: 45px;
          .left;
          margin-top: 50px;
          text-align: left;
          font-size: 26px;
          background: #FF6C00;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255,254,254,1);
        }
        .contentright-explainImg {
          .left;
          .width100;
          // height: 300px;
          margin-top: 30px;
        }
        .contentright-dd {
          .left;
          .width100;
          margin: 30px 0 100px 0;
          text-align: left;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(51,51,51,1);
        }
      }
    }
  }
</style>
