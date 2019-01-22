<template>
  <div class="techDetails">
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
    <div class="techDetails-content clear">
      <div class="productDetails-contentLeft">
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">环保变压吸附技术</template>
            <el-menu-item index="1-1">变压吸附提纯氢气技术</el-menu-item>
            <el-menu-item index="1-1">变压吸附净化浓缩甲烷技术</el-menu-item>
            <el-menu-item index="1-2">变压吸附提纯一氧化碳技术</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">能源煤化工技术</template>
          </el-submenu>
        </el-menu>
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
      <div class="productDetails-contentRight">
        <div class="contentRightContent clear">
          <h3>变压吸附提纯氢气技术</h3>
          <article class="contentRightWrap">
            <h2>工艺原理</h2>
            <div class="theroyExplain" style="margin-top: 20px;">
              含氢（H2）混合气进入变压吸附装置吸附塔后，由于吸附床内吸附剂对气体混合物中各组分的吸附能力随着压力变化而呈现差异，
              加压时吸附原料气中的杂质，不易吸附的组分——氢从吸附床出口端作为产品输出，减压时，吸附的杂质组分脱附解吸，同时吸附剂获得再生。
              采用至少四个吸附床循环操作，以实现产品氢连续输出。
            </div>
            <h2>特点及优势</h2>
            <div class="theroyExplain" style="margin-top: 20px;"> 1. 操作灵活，技术成熟，产品质量可靠，用户信用度高。</div>
            <div class="theroyExplain top"> 2. PSA制氢业绩多，工程经验丰富。</div>
            <div class="theroyExplain top"> 3. 专利技术广泛使用，竞争力强。</div>
            <h2>工艺原理</h2>
            <div class="theroyExplain top" style="margin-top: 20px;">1. 甲醇裂解气、氨裂解气、甲醇尾气、甲醛尾气</div>
            <div class="theroyExplain top">2. 变换气、精炼气、烃类蒸汽转化气，发酵气、多晶硅尾气</div>
            <div class="theroyExplain top">3. 半水煤气、城市煤气、焦炉气</div>
            <div class="theroyExplain top">4. 炼油厂催化裂化干气、炼油厂重整尾气</div>
            <div class="theroyExplain top">5. 其他含H2气源</div>
            <h2>工艺原理</h2>
            <div class="theroyExplain" style="margin-top: 20px;"> 1. 原料气： </div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;适用压力：0.4~4.0MPa（表压） </div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;适用温度：常温</div>
            <div class="theroyExplain top">2. 输出产品：H2 </div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;H2纯度：98~99.999%（V），根据用户不同的用途和要求生产。</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;H2收率：80~98%</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;系统阻力降△P：0.05~0.1MPa</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;输出温度：常温</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;注： H2收率与原料组成、压力及产品以及产品H2纯度有关。</div>
            <h2 >制氮装置部份业绩表</h2>
            <div>
              <img class="performanceChart" src="../../assets/img/gg.png" alt="">
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    "route": function() {
    //	console.log(this.$route.matched)
      return this.$route.matched;
		},
  },
   methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less">
.top {
  margin-top: 10px;
}
.clear:after{
	display: block;
	content: "\20";
	clear: both;
}
.el-dropdown-menu__item--divided:before,
.el-menu, .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, 
.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal>.el-submenu .el-submenu__title:hover,.el-submenu.is-active .el-submenu__title{
  background: #FF6C00!important;
}
.el-menu-item:focus, .el-menu-item:hover,.el-submenu__title:hover {
  background: #FF852C;
}
.el-menu-item.is-active,.el-submenu.is-active .el-submenu__title,.el-menu-item,.el-submenu__title {
  color: #fff!important;
}
  .techDetails {
    height: 1650px;
    .productDetails-contentLeft {
      margin-top: 30px;
      .techDetails-content {
        width: 350px;
      }
    }
    .productDetails-contentRight {
      margin-top: 30px;
      width: 800px;
      height: 1000px;
      float: right;
      .contentRightContent {
        h2, h3, div {
          text-align: left;
        }
        .contentRightWrap {
          margin-top: 10px;
          border-top: 1px solid #333333;
          h2 {
            margin-top: 40px;
            color: #FF6C00;
          }
          .theroyExplain {
            font-weight: 400;
            font-family: MicrosoftYaHei;
            color: #333333;
          }
          .performanceChart {
            width: 800px;
            // height: 430px;
            margin: 40px 0 100px 0;
            // border: 1px solid red;
          }
        }
      }
    }
  }
</style>


