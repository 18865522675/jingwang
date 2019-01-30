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
            <el-menu-item @click="techDetail(1)" index="1-1">变压吸附提纯氢气技术</el-menu-item>
            <el-menu-item @click="techDetail(2)" index="1-1">变压吸附净化浓缩甲烷技术</el-menu-item>
            <el-menu-item @click="techDetail(3)" index="1-2">变压吸附提纯一氧化碳技术</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">能源煤化工技术</template>
            <el-menu-item @click="techDetail(4)" index="2-1">变压吸附提纯氢气技术</el-menu-item>
            <!-- <el-menu-item @click="techDetail(1)" index="2-1">变压吸附提纯氢气技术</el-menu-item>
            <el-menu-item @click="techDetail(1)" index="2-1">变压吸附提纯氢气技术</el-menu-item> -->
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
      <div class="productDetails-contentRight" v-if="techDetail1">
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
            <h2>原料气</h2>
            <div class="theroyExplain top" style="margin-top: 20px;">1. 甲醇裂解气、氨裂解气、甲醇尾气、甲醛尾气</div>
            <div class="theroyExplain top">2. 变换气、精炼气、烃类蒸汽转化气，发酵气、多晶硅尾气</div>
            <div class="theroyExplain top">3. 半水煤气、城市煤气、焦炉气</div>
            <div class="theroyExplain top">4. 炼油厂催化裂化干气、炼油厂重整尾气</div>
            <div class="theroyExplain top">5. 其他含H2气源</div>
            <h2>技术指标</h2>
            <div class="theroyExplain" style="margin-top: 20px;"> 1. 原料气： </div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;适用压力：0.4~4.0MPa（表压） </div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;适用温度：常温</div>
            <div class="theroyExplain top">2. 输出产品：H2 </div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;H2纯度：98~99.999%（V），根据用户不同的用途和要求生产。</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;H2收率：80~98%</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;系统阻力降△P：0.05~0.1MPa</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;输出温度：常温</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;注： H2收率与原料组成、压力及产品以及产品H2纯度有关。</div>
          </article>
        </div>
      </div>
      <div class="productDetails-contentRight" v-if="techDetail2">
        <div class="contentRightContent clear">
          <h3>变压吸附净化浓缩甲烷技术</h3>
          <article class="contentRightWrap">
            <h2>工艺原理</h2>
            <div class="theroyExplain" style="margin-top: 20px;">
               富含甲烷的混合气进入变压吸附装置吸附塔后，由于吸附床内吸附剂对气体混合物中各组分的吸附能力随着压力变化而呈现差异，加压时吸附原料气中的杂质，
               不易吸附的组分——CH4从吸附床出口端作为产品输出，得到高浓度CH4；减压时，吸附的CO2等杂质组分脱附解吸，同时吸附剂获得再生。采用至少四个吸附床循环操作，以实现产品CH4连续输出。
            </div>
            <h2>特点及优势</h2>
            <div class="theroyExplain" style="margin-top: 20px;"> 1. 实现了多塔任意组合和任意切换的专家控制及自适应优化控制，既提高了装置操作灵活性，又确保了PSA装置的长期、稳定、安全运行。</div>
            <div class="theroyExplain top"> 2. 多项专利技术，竞争力强。</div>
            <div class="theroyExplain top"> 3. PSA工程化业绩多，工程经验丰富。</div>
            <h2>原料气</h2>
            <div class="theroyExplain top" style="margin-top: 20px;">1. 垃圾填埋气、垃圾消化气、沼气</div>
            <div class="theroyExplain top">2. 焦炉煤气</div>
            <div class="theroyExplain top">3. 其他含CH4气源</div>
            <!-- <div class="theroyExplain top">4. 炼油厂催化裂化干气、炼油厂重整尾气</div>
            <div class="theroyExplain top">5. 其他含H2气源</div> -->
            <h2>技术指标</h2>
            <div class="theroyExplain" style="margin-top: 20px;"> 1. 原料气： </div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;适用压力：0.4~4.0MPa（表压）</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;适用温度：常温</div>
            <div class="theroyExplain top">2. 输出产品：CH4产品 </div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;CH4纯度：80~99%（V），根据用户不同的用途和要求生产。</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;CH4收率：70~95%</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;系统阻力降△P：0.05~0.1MPa</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;输出温度：常温</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;注：CH4收率与原料组成、压力及产品以及产品H2纯度有关。</div>
          </article>
        </div>
      </div>
      <div class="productDetails-contentRight" v-if="techDetail3">
        <div class="contentRightContent clear">
          <h3>变压吸附提纯一氧化碳技术</h3>
          <article class="contentRightWrap">
            <h2>工艺原理</h2>
            <div class="theroyExplain" style="margin-top: 20px;">
               采用变压吸附工艺从含一氧化碳、氢气、氮气、甲烷、二氧化碳等组分的混合气中提纯一氧化碳。原料气进入一段PSA装置，吸附除去二氧化碳、水分及微量硫；
               脱碳后的净化气进入二段PSA装置，脱除氢气、氮气及甲烷等杂质，吸附的一氧化碳经减压真空解吸作为产品输出。
            </div>
            <h2>特点及优势</h2>
            <div class="theroyExplain" style="margin-top: 20px;"> 1. 实现了多塔任意组合和任意切换的专家控制及自适应优化控制，既提高了装置操作灵活性，又确保了PSA装置的长期、稳定、安全运行。</div>
            <div class="theroyExplain top"> 2. 根据原料气的组分、产品气要求，常规吸附剂和专用吸附剂灵活搭配使用，无需升降温实现CO提纯。</div>
            <!-- <div class="theroyExplain top"> 3. PSA工程化业绩多，工程经验丰富。</div> -->
            <h2>原料气</h2>
            <div class="theroyExplain top" style="margin-top: 20px;">1. 水煤气、半水煤气、铜洗再生气、德士古炉气</div>
            <div class="theroyExplain top">2. 高炉气、转炉气、黄磷尾气，炭黑尾气</div>
            <div class="theroyExplain top">3. 其他含气源</div>
            <!-- <div class="theroyExplain top">4. 炼油厂催化裂化干气、炼油厂重整尾气</div>
            <div class="theroyExplain top">5. 其他含H2气源</div> -->
            <h2>技术指标</h2>
            <div class="theroyExplain" style="margin-top: 20px;"> 1. 原料气： </div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;适用压力：0.1~4.0MPa（表压）</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;适用温度：常温</div>
            <div class="theroyExplain top">2. 输出产品：CO </div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;CO纯度：≥96~99.9%（V），根据用户不同的用途和要求生产。</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;CO收率：60~90%</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;主要杂质：N2</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;输出压力：常压</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;输出温度：常温</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;注：CO收率与原料组成、压力及产品以及产品CO纯度有关。</div>
          </article>
        </div>
      </div>
      <div class="productDetails-contentRight" v-if="techDetail4">
        <div class="contentRightContent clear">
          <h3>天然气制氢技术</h3>
          <article class="contentRightWrap">
            <h2>工艺原理</h2>
            <div class="theroyExplain" style="margin-top: 20px;">
                以天然气为原料，经压缩、脱硫后与水蒸气进行转化、变换反应，制得氢含量大于70%（v/v%）以上的富氢转化气。富氢转化气经变压吸附(PSA)单元分离提纯即得到纯度99.9%（v/v%）以上的产品氢气。
            </div>
            <h2>特点及优势</h2>
            <div class="theroyExplain" style="margin-top: 20px;"> 1. 设计化工甲级资质，拥有PRO/II、HYSYS、CAESARII、ANSYS等一系列专业设计软件，特别是三维设计软件PDMS可减少业主的采购成本，节省投资。</div>
            <div class="theroyExplain top"> 2. 根据业主需求，采取多种灵活方式进行工程合作。如工程总承包（EPC）、工程设计+提供关键设备（如转化炉）、
              工程设计+提供部分硬件（脱硫剂、催化剂、吸附剂和程控阀等）、单独工程设计。
            </div>
            <div class="theroyExplain top">3. 在核心设备转化炉的设计上拥有丰富的设计能力，成熟的设计经验。在转化炉设备各个方面的选材上保证质量，设计上采用高空速，低水碳比，
              减少了催化剂的装填，减少了转化炉管的根数，直接减少了转化炉辐射室的外形尺寸，降低了工程投资。
            </div>
            <div class="theroyExplain top">4. 采用我公司自行研究开发批量生产的转化催化剂，具有高比表面、高活性、高强度、高碳空速和低水碳比操作的特性，在国内气态烃蒸汽转化制氢装置、
              甲醇合成气及制氨合成气装置中市场占有率达到85%以上，使用寿命长等优点。
            </div>
            <div class="theroyExplain top">回收变压吸附解吸气作为转化炉的燃料，可降低燃料气消耗。采用独特的双通道（天然气、解吸气）低压燃烧器，解吸气回收做转化炉燃料不需设置解吸气压缩机或鼓风机，并已有多套同类装置业绩。</div>
            <div class="theroyExplain top"> 6. 制氢装置中采用的天然气脱硫剂、吸附剂均为我公司自行研究开发批量生产。</div>
            <div class="theroyExplain top"> 7. 提供优质的催化剂升温还原及装置开车技术指导服务。</div>
            <h2>装置规模</h2>
            <div class="theroyExplain top" style="margin-top: 20px;">400~200000 Nm3/h</div>
            <!-- <div class="theroyExplain top">2. 高炉气、转炉气、黄磷尾气，炭黑尾气</div>
            <div class="theroyExplain top">3. 其他含气源</div>
            <h2>技术指标</h2>
            <div class="theroyExplain" style="margin-top: 20px;"> 1. 原料气： </div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;适用压力：0.1~4.0MPa（表压）</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;适用温度：常温</div>
            <div class="theroyExplain top">2. 输出产品：CO </div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;CO纯度：≥96~99.9%（V），根据用户不同的用途和要求生产。</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;CO收率：60~90%</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;主要杂质：N2</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;输出压力：常压</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;输出温度：常温</div>
            <div class="theroyExplain top">&nbsp;&nbsp;&nbsp;&nbsp;注：CO收率与原料组成、压力及产品以及产品CO纯度有关。</div> -->
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
      techDetail1: false,
      techDetail2: false,
      techDetail3: false,
      techDetail4: false
    }
  },
  mounted () {
    var self = this
    var query = self.$route.query
    if (query.tech === 1) {
      self.techDetail1 = true
    } else if (query.tech === 2) {
      self.techDetail2 = true
    } else if (query.tech === 3) {
      self.techDetail3 = true
    } else if (query.tech === 4) {
      self.techDetail4 = true
    } else if (query.tech === 5) {
      self.techDetail5 = true
    }
  },
  computed: {
    "route": function() {
    //	console.log(this.$route.matched)
      return this.$route.matched;
		},
  },
   methods: {
    techDetail (math) {
      var self = this
      if (math === 1) {
        self.techDetail1 = true
        self.techDetail2 = false
        self.techDetail3 = false
        self.techDetail4 = false
      } else if (math === 2) {
        self.techDetail2 = true
        self.techDetail1 = false
        self.techDetail3 = false
        self.techDetail4 = false
      } else if (math === 3) {
        self.techDetail3 = true
        self.techDetail2 = false
        self.techDetail4 = false
        self.techDetail1 = false
      } else if (math === 4) {
        self.techDetail3 = false
        self.techDetail2 = false
        self.techDetail1 = false
        self.techDetail4 = true
      }
    },
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
    // height: 1650px;
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


