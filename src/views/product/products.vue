
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
        <el-tab-pane label="变压吸附制氮装置">
          <div class="left-content">
            <h3>变压吸附制氮装置</h3>
            <article>
              <div class="left-contentDetails" style="margin-right: 126px;">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/变压吸附制氮装置/bianyaxifu.png">
                </div>
                <h3>变压吸附制氮装置</h3>
                <h5>应用领域: <span style="font-size:14px;font-weight: normal;">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button @click="$router.push({path: '/productDetails', query: {code: 1}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/变压吸附制氮装置/keyidon.png">
                </div>
                <h3>可移动制氮装置</h3>
                <h5>应用领域: <span style="font-size:14px;font-weight: normal;">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <!-- <router-link to="/productDetails"> -->
                    <el-button @click="$router.push({path: '/productDetails', query: {code: 2}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                  <!-- </router-link> -->
                </div>
              </div>
              <div class="left-contentDetails" style="margin-right: 126px;">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/变压吸附制氮装置/qiaozhuangshi.png">
                </div>
                <h3>撬装式制氮装置</h3>
                <h5>应用领域: <span style="font-size:14px;font-weight: normal;">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button @click="$router.push({path: '/productDetails', query: {code: 3}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/变压吸附制氮装置/zhidan.png">
                </div>
                <h3>制氮装置</h3>
                <h5>应用领域: <span style="font-size:14px;font-weight: normal;">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button @click="$router.push({path: '/productDetails', query: {code: 4}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="变压吸附制氧装置">
          <div class="left-content">
            <h3>制氧</h3>
            <article>
              <div class="left-contentDetails" style="margin-right: 110px;">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/变压吸附制氧装/zhiyan.png" alt="">
                </div>
                <h3>制氧设备</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button @click="$router.push({path: '/productDetails', query: {code: 5}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/zwct.png" alt="">
                </div>
                <h3>暂无设备</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails" style="margin-right: 110px;">
                <div class="left-contentDetails-img">
                  <img src="../../assets/zwct.png" alt="">
                </div>
                <h3>暂无设备</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/zwct.png" alt="">
                </div>
                <h3>暂无设备</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="天然转化制氢装置">
          <div class="left-content">
            <h3>天然转化制氢装置</h3>
            <article>
              <div class="left-contentDetails" style="margin-right: 126px;">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/天然转化制氢装置/tianrnaqi-a.png">
                </div>
                <h3>制氢装置</h3>
                <h5>应用领域: <span style="font-size:14px;font-weight: normal;">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button @click="$router.push({path: '/productDetails', query: {code: 6}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/天然转化制氢装置/tianrnaqi-b.png">
                </div>
                <h3>制氢装置</h3>
                <h5>应用领域: <span style="font-size:14px;font-weight: normal;">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <!-- <router-link to="/productDetails"> -->
                    <el-button @click="$router.push({path: '/productDetails', query: {code: 7}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                  <!-- </router-link> -->
                </div>
              </div>
              <div class="left-contentDetails" style="margin-right: 126px;">
                <div class="left-contentDetails-img">
                  <img src="../../assets/zwct.png" alt="">
                </div>
                <h3>暂无设备</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/zwct.png" alt="">
                </div>
                <h3>暂无设备</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="甲醇裂解制氢装置">
          <div class="left-content">
            <h3>制氢</h3>
            <article>
              <div class="left-contentDetails" style="margin-right: 126px;">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/甲醇裂解制氢装置/jiachun-a.png" alt="">
                </div>
                <h3>制氢装置</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button @click="$router.push({path: '/productDetails', query: {code: 8}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/甲醇裂解制氢装置/jiachun-b.png" alt="">
                </div>
                <h3>制氢装置</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button @click="$router.push({path: '/productDetails', query: {code: 9}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails" style="margin-right: 126px;">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/甲醇裂解制氢装置/jiachun-c.png" alt="">
                </div>
                <h3>制氢装置</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button @click="$router.push({path: '/productDetails', query: {code: 10}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/zwct.png" alt="">
                </div>
                <h3>暂无设备</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="压缩空气净化装置">
          <div class="left-content">
            <h3>净化</h3>
            <article>
              <div class="left-contentDetails" style="margin-right: 126px;">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/压缩空气净化设备/yasuokongq-a-zuhe.png" alt="">
                </div>
                <h3>组合式干燥机</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button  @click="$router.push({path: '/productDetails', query: {code: 11}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/压缩空气净化设备/yasuokongq-b-weiren.png" alt="">
                </div>
                <h3>微热再生吸干机</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button  @click="$router.push({path: '/productDetails', query: {code: 12}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails" style="margin-right: 126px;">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/压缩空气净化设备/yasuokongq-c-ludian.png" alt="">
                </div>
                <h3>低露点压缩空气干燥机</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button @click="$router.push({path: '/productDetails', query: {code: 13}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/zwct.png" alt="">
                </div>
                <h3>暂无设备</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="氮气纯化装置">
          <div class="left-content">
            <h3>制氮</h3>
            <article>
              <div class="left-contentDetails" style="margin-right: 126px;">
                <div class="left-contentDetails-img">
                  <img src="../../assets/轮播图/氮气纯化装置/danqichunhau.png" alt="">
                </div>
                <h3>氮气纯化装置</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button @click="$router.push({path: '/productDetails', query: {code: 14}})" style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/zwct.png" alt="">
                </div>
                <h3>暂无设备</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails" style="margin-right: 110px;">
                <div class="left-contentDetails-img">
                  <img src="../../assets/zwct.png" alt="">
                </div>
                <h3>暂无设备</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
              <div class="left-contentDetails">
                <div class="left-contentDetails-img">
                  <img src="../../assets/zwct.png" alt="">
                </div>
                <h3>暂无设备</h3>
                <h5>应用领域: <span style="font-size:10px">适用于石油、化工、SMT、食品加工、医药及器械、粉末冶金、铜加工、天然气、金属热处理等等</span></h5>
                <div style="text-align: left; margin-top: 10px;">
                  <el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>
                </div>
              </div>
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="天然气转化制氢技术">
          <div class="left-content">
            <h3>天然气制氢技术</h3>
            <article>
              <div class="left-content-techIntro" style="margin-top: 30px">该技术是利用天然气加压脱硫后与水蒸汽在装填有催化剂的特殊转化炉内发生化学反应，生成含氢气、二氧化碳和一氧化碳的转化气，
                经废锅回收部分热量后，再通过变换将转化气中CO转变为CO2、变换气再通过变压吸附（PSA）提纯得到合格的产品氢气。
              </div>
              <div class="left-content-techIntro">我公司技术特点:</div>
              <div class="left-content-techIntro">（1）、根据用户气量、压力等要求，开发特殊的工艺流程，热能利用率高，天然气消耗低。</div>
              <div class="left-content-techIntro">（2）、我公司自已研制开发的转化催化剂及中变催化剂，转化率高、不易结炭、强度好，使用寿命长，不易粉化的特点；</div>
              <div class="left-content-techIntro">（3）、我公司自已研制开发的程控阀门，具有快开慢关的特点，阀门使用寿命长达十年以上。</div>
              <div class="left-content-techIntro">反应原理：</div>
              <div class="left-content-techIntro">CH4+H2O→3H2+CO-Q</div>
              <div class="left-content-techIntro">CO+H2O→H2+CO2+Q</div>
              <div class="left-content-techIntro">项目&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要性能指标 </div>
              <div class="left-content-techIntro">装置规模&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 400~20000NM3/H</div>
              <div class="left-content-techIntro">纯度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;99%~99.999%</div>
              <div class="left-content-techIntro">压力&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.5~2.5MPA</div>
              <div class="left-content-techIntro">温度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;常温</div>
              <!-- <div class="technology-details">
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
              </div> -->
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="甲醇裂解制氢技术" style="overflow: hidden">
          <div class="left-content">
            <h3>甲醇裂解制氢技术</h3>
            <article>
              <div class="left-content-techIntro" style="margin-top: 30px">甲醇裂解-变压吸附制氢技术是一种以甲醇、水为原料，
                在一定的温度和压力下经催化剂转化成混合气体， 然后通过变压吸附提纯氢气的一种技术。
              </div>
              <div class="left-content-techIntro">我公司技术特点:</div>
              <div class="left-content-techIntro">（1）我公司自已研制开发催化剂，转化率高、强度好，使用寿命长，不易粉化的特点；</div>
              <div class="left-content-techIntro">（2）我公司自主研发的生产工艺，具有消耗低，节能的特点；</div>
              <div class="left-content-techIntro">（3）我公司自已研制开发的程控阀门，具有快开慢关的特点，阀门使用寿命长达十年以上。</div>
              <div class="left-content-techIntro">（4）我公司配套的电磁阀及接近开关均为进口的ASCO及P+F品牌，使用寿命长。</div>
              <div class="left-content-techIntro">（5）小型装置采用整体撬装，占地少、设备布置紧凑，安装速度快的特点。</div>
              <div class="left-content-techIntro">反应原理：</div>
              <div class="left-content-techIntro">CH3OH→CO+2H2-Q</div>
              <div class="left-content-techIntro">CO+H2O→CO2+H2+Q</div>
              <div class="left-content-techIntro">项目&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要性能指标 </div>
              <div class="left-content-techIntro">装置规模&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50~20000NM3/H</div>
              <div class="left-content-techIntro">纯度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;99%~99.999%</div>
              <div class="left-content-techIntro">压力&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.8~2.5MPA</div>
              <div class="left-content-techIntro">温度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;常温</div>
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="变压吸附制氮技术">
          <div class="left-content">
            <h3>变压吸附制氮技术</h3>
            <article>
              <div class="left-content-techIntro" style="margin-top: 30px">
                它是以空气为原材料，利用一种高效能、高选择的固体吸附剂对氮和氧的选择性吸附的性能把空气中的氮和氧分离出来。碳分子筛对氮和氧的分离作用
                主要是基于这两种气体在碳分子筛表面的扩散速率不同，较小直径的气体（氧气）扩散较快，较多进入分子筛固相。这样气相中就可以得到氮的富集成分。
                一段时间后，分子筛对氧的吸附达到平衡，根据碳分子筛在不同压力下对吸附气体的吸附量不同的特性，降低压力使碳分子筛解除对氧的吸附，这一过程称为再生。
                变压吸附法通常使用两塔并联，交替进行加压吸附和解压再生，从而获得连续的氮气流。
              </div>
              <div class="left-content-techIntro">
                制氮机简介变压吸附制氮机(简称PSA制氮机)是按变压吸附技术设计、制造的氮气发生设备。通常使用两吸附塔并联，
                由全自动控制系统按特定可编程序严格控制时序，交替进行加压吸附和解压再生，完成氮氧分离，获得所需高纯度的氮气 [1]  。
              </div>
              <div class="left-content-techIntro">我公司技术特点:</div>
              <div class="left-content-techIntro">（1）机电一体化设计实现自动化运行： 进口PLC控制全自动运行，氮气流量压力纯度可调并连续显示，可实现无人值守。</div>
              <div class="left-content-techIntro">（2）运用范围广： 金属热处理过程的保护气，化学工业生产用气及各类储罐、管道的充氮净化，
                橡胶、塑料制品的生产用气，食品行业排氧保鲜包装，饮料行业净化和覆盖气，医药行业充氮包装及容器的充氮排氧，
                电子行业电子元件及半导体生产过程的保护气等。纯度、流量、压力稳定可调，满足不同客户的需要。
              </div>
              <div class="left-content-techIntro">（3）我公司自已研制开发的程控阀门，具有快开慢关的特点，阀门使用寿命长达十年以上。</div>
              <div class="left-content-techIntro">（4）我公司配套的电磁阀及接近开关均为进口的ASCO及P+F品牌，使用寿命长。</div>
              <div class="left-content-techIntro">（5）小型装置采用整体撬装，占地少、设备布置紧凑，安装速度快的特点。</div>
              <div class="left-content-techIntro">技术指标：</div>
              <div class="left-content-techIntro">流量：5-1000Nm/h</div>
              <div class="left-content-techIntro">纯度：95%-99.9995%</div>
              <div class="left-content-techIntro">露点：≤-40℃</div>
              <div class="left-content-techIntro">压力：≤0.8Mpa可调</div>
            </article>
          </div>
        </el-tab-pane>
        <el-tab-pane label="变压吸附制氧技术">
          <div class="left-content">
            <h3>变压吸附制氮技术</h3>
            <article>
              <div class="left-content-techIntro">变压吸附制氧设备（也称PSA制氧设备），在常温常压的条件下，利用PSA专用分子筛选择性吸附空气中的氮气、
              二氧化碳和水等杂质，从而取得纯度较高的氧气(93%±2)。变压吸附制氧设备自进入工业化以来，技术发展迅速，
              由于其价格性能比在中低产量范围及纯度要求不太高的场合具有较强的竞争力，因此被广泛地应用于炼钢助熔、高炉富氧、纸浆漂白、玻璃炉窑、
              废水处理等领域。国内对这项技术的研究起步较早，然而在较长的一段时间内发展相对较缓。自进入九十年代以来，变压吸附制氧设备的优越性逐渐被国人认可，
              近几年各种流程的设备相继投产
              </div>
              <div class="left-content-techIntro">制氧系统主要由空气压缩机、空气冷却器，空气缓冲罐、切换阀、吸附器和氧气平衡罐组成。
                原料空气经吸入口过滤器除掉灰尘颗粒后,被空气压缩机增压至3~4barg而进入其中一只吸附器内。吸附器内装填吸附剂,
                其中水分、二氧化碳、及少量其它气体组分在吸附器入口处被装填于底部的活性氧化铝所吸附,随后氮气被装填于活性氧化铝上部的沸石分子筛所吸附。
                而氧气(包括氩气)为非吸附组分从吸附器顶部出口处作为产品气排至氧气平衡罐。当该吸附器吸附到一定程度,其中的吸附剂将达到饱和状态,
                此时通过切换阀放空，已吸附的水分、二氧化碳、氮气及少量其它气体组分排至大气,吸附剂得到再生。
              </div>
              <div class="left-content-techIntro">PSA的每个吸附器都交替执行以下步骤:</div>
              <div class="left-content-techIntro">---吸附---解吸---冲压</div>
              <div class="left-content-techIntro">上述三个基本的工艺步骤由PLC和切换阀系统来实现自动控制。</div>
              <div class="left-content-techIntro">冶金业电弧炉炼钢，高炉炼铁富氧，竖炉富氧助燃有色冶炼业铅冶炼，铜冶炼，锌冶炼，铝冶炼，各种炉窑富氧环保业饮用水处理，
                废水处理，纸浆漂白，污物生化处理化工业各种氧化反应，臭氧生产，煤气化其它产业发酵，切割，玻璃炉窑，空调，垃圾焚烧、医疗业吸氧吧，
                氧疗，体育保健、水产业海、淡水养殖。
              </div>
              <div class="left-content-techIntro">PSA型制氧机1、机组简单，动设备仅为空气压缩机、冷却器。2、 对分子筛要求比较低，同样产氧量设备，分子筛用量少。
                3、 设备体积小，故其成本比较低。4、 对整台设备的自动化程度要求比较低，空气压缩机、冷冻干燥机/冷凝器可与制氧机分开单独启停控制，也可联动控制。
              </div>
            </article>
            
          </div>
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
							<span>丁振兴先生</span>
						</div>
						<div class="paperBottom-bottom-intro-item">
							<span>电 &nbsp;&nbsp;话 ：</span>
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
  methods: {
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
          height: 915px;
          .left-content {
            overflow: hidden;
            h3 {
              text-align: left;
            }
            article {
              width: 100%;
              margin-top: 5px;
              overflow: hidden;
              border-top: 1px solid #FF6600;
              .left-content-techIntro {
                line-height: 25px;
                font-size: 14px;
                text-align: left;
              }
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
