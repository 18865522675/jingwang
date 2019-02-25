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
        <!--<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">环保变压吸附技术</template>
            <el-menu-item @click="techDetail(1)" index="1-1">变压吸附提纯氢气技术</el-menu-item>
            <el-menu-item @click="techDetail(2)" index="1-1">变压吸附净化浓缩甲烷技术</el-menu-item>
            <el-menu-item @click="techDetail(3)" index="1-2">变压吸附提纯一氧化碳技术</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">能源煤化工技术</template>
            <el-menu-item @click="techDetail(4)" index="2-1">天然气制氢技术</el-menu-item>
            <el-menu-item @click="techDetail(5)" index="2-2">焦炉气制CNG/LNG技术</el-menu-item>
            <el-menu-item @click="techDetail(6)" index="2-3">甲醇裂解制氢技术</el-menu-item>
          </el-submenu>
        </el-menu>-->
         <div class="contentLeft-btn">制氢</div>
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
      <div class="productDetails-contentRight" v-if="techDetail5">
        <div class="contentRightContent clear">
          <h3>焦炉气制CNG/LNG技术</h3>
          <article class="contentRightWrap">
            <h2>工艺原理</h2>
            <div class="theroyExplain" style="margin-top: 20px;">
                 焦炉气是煤焦化过程副产的可燃性气体，主要成分是H2（50%～59%）、CH4（21%～28%）、CO（6%～12%）、CO2（2%～5%）、N2（2%～5%）以及微量氧、苯、萘、氨、焦油、硫化物、氰化物等等。
                 目前焦炉气经过净化处理之后有多种利用方式：工业与民用燃料（加热和发电）、还原剂（直接还原炼铁）、化工原料（主要用于合成氨和生产甲醇）、制氢等。
            </div>
            <div class="theroyExplain">
              以焦炉气为原料制取天然气，为得到合格的产品（SNG/CNG/LNG）,在生产过程中，CO2的含量必须降低到规定值以下，以保证产品质量或装置稳定运行的要求，可以通过甲烷化反应、
              气体分离技术（如PSA）或二者的组合来实现脱除CO2同时浓缩CH4的目的。采用甲烷化的方法，不但可以降低气体中的碳氧化物，还增加了CH4含量，获得更多需要的产品。
            </div>
            <div class="theroyExplain">
               焦炉气通过净化脱除苯、萘、硫化物等杂质后，在催化剂作用下进行甲烷化反应，将CO、CO2与H2转化成主要含CH4、H2、N2的富甲烷气；
               采用气体分离技术将富甲烷气中的H2分离制得浓度CH4含量在85%以上的合成天然气（SNG）；SNG可通过进一步处理、压缩后得到压缩天然气（CNG）；也可将富甲烷气进一步液化得到液化天然气（LNG）。
            </div>
            <h2>特点及优势</h2>
            <div class="theroyExplain" style="margin-top: 20px;"> 1. 焦炉气的净化采用具有专利权的“TSA”净化技术，成熟、可靠。</div>
            <div class="theroyExplain top"> 2. 甲烷化采用具有专利技术的“有循环外移热多段甲烷化”工艺技术，流程简单、设备易于制造、节省投资、操作稳定、节约能量。 </div>
            <div class="theroyExplain top">3. 甲烷化催化剂具有：耐高温（800℃）、活性高、选择性好、耐毒物性能强、氧脱除能力好、质量可靠。 </div>
            <h2>装置规模</h2>
            <div class="theroyExplain top" style="margin-top: 20px;">产品SNG：5000 ~ 100000Nm3/h （焦炉气处理量）</div>
            <div class="theroyExplain top">2. 产品CNG：5000 ~ 100000Nm3/h （焦炉气处理量）</div>
            <div class="theroyExplain top">3. 产品LNG：5000 ~ 100000Nm3/h （焦炉气处理量）</div>
          </article>
        </div>
      </div>
      <div class="productDetails-contentRight" v-if="techDetail6">
        <div class="contentRightContent clear">
          <h3>甲醇裂解制氢技术</h3>
          <article class="contentRightWrap">
            <h2>工艺原理</h2>
            <div class="theroyExplain" style="margin-top: 20px;">
                甲醇、脱盐水混合后经加热汽化、过热后进入转化反应器，甲醇、水蒸汽在催化剂的作用下，在转化反应器中完成甲醇裂解、一氧化碳变换成二氧化碳等两步反应：
            </div>
            <div class="theroyExplain"> 甲醇裂解  CH3OH → CO + 2H2 – 90.7 KJ/mol</div>
            <div class="theroyExplain">变换         CO + H2O → CO2 + H2 + 41.2 KJ/mol</div>
            <div class="theroyExplain"> 总反应      CH3OH + H2O → CO2 + 3H2 – 49.5 KJ/mol</div>
            <div class="theroyExplain">总反应为吸热反应，反应温度为230～290℃。</div>
            <div class="theroyExplain">由于甲醇蒸汽转化反应为增加分子的反应，从理论上说，压力太高不利于反应的进行。但为了满足氢气的使用压力和变压吸附分离对压力的要求，一般采用的操作压力范围是0.8～3.0 MPa。</div>
            <div class="theroyExplain">反应产物经换热、冷却冷凝和水洗分离，即得到氢含量～74.19%、CO2含量～24.46%，CO含量～0.5%的转化气。甲醇的单程转化率90%以上。
              未反应的原料（甲醇、脱盐水）循环使用。水洗后的转化气，送变压吸附工序进行气体分离（氢气提纯）。</div>
            <div class="theroyExplain">装置原料的汽化、过热、反应需要供给热量。原料汽化可选用中压蒸汽或导热油作为热媒，原料过热、反应选用导热油为热媒，而导热油加热热源可选用煤、水煤浆、燃气、蒸汽、电、甲醇等。</div>
            <div class="theroyExplain"> 裂解气经PSA－H2装置分离可制得纯度99~99.999%的氢气。</div>
            <h2>特点及优势</h2>
            <div class="theroyExplain" style="margin-top: 20px;"> 1. 专有技术自主研发，国内首创，国内第一套装置1993年建于广州珠江电化厂。</div>
            <div class="theroyExplain top"> 2. 催化剂活性高，使用量少（装填量2.5～3.0t/1000Nm3，99.99%H2），催化剂单程转化率高达90%以上。 </div>
            <div class="theroyExplain top">3. 化剂选择性好，转化气中一氧化碳含量低（～0.5%以下）；转化气中一氧化碳含量是检测催化剂选择性的关键指标，
              目前国内同类装置转化气中一氧化碳含量高达1.5%，变压吸附解吸气中一氧化碳含量高达4.5%，一氧化碳含量高，将导致氢气产量的下降。
            </div>
            <div class="theroyExplain top">4. 甲醇蒸汽转化催化剂使用寿命3年以上。 </div>
            <div class="theroyExplain top">5. 催化剂的还原采用水-甲醇和氮氢气还原相结合的新技术。</div>
            <div class="theroyExplain top"> 6. 专用催化剂、专用吸附剂、程控阀为我公司自主研发生产，达到世界先进水平。</div>
            <h2>装置规模</h2>
            <div class="theroyExplain top" style="margin-top: 20px;">20~100000 Nm3/h</div>
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
      techDetail4: false,
      techDetail5: false,
      techDetail6: false
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
    } else if (query.tech === 6) {
      self.techDetail6 = true
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
      } else if (math === 5) {
        self.techDetail3 = false
        self.techDetail2 = false
        self.techDetail1 = false
        self.techDetail4 = false
        self.techDetail6 = false
        self.techDetail5 = true
      } else if (math === 6) {
        self.techDetail3 = false
        self.techDetail2 = false
        self.techDetail1 = false
        self.techDetail6 = true
        self.techDetail4 = false
        self.techDetail5 = false
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
            text-indent: 32px;
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
  .contentLeft-btn {
					width:100%;
          height: 65px;
          color: white;
          font-size: 19px;
          font-weight: bold;
          line-height: 60px;
          box-shadow:0px 3px 3px 0px rgba(221,94,1,0.08);
          background: linear-gradient(-90deg,rgba(255,108,0,1),rgba(255,133,44,1));
        }
</style>


