<template>
	<div class="boxWrap">
	<paper>
	<comTitle>
				<div class="flex-r" style="flex-wrap: wrap;justify-content: space-between;">
					<div class="list-item">
						<img src="../../assets/切图/chanping.png" style="display: block;" alt="" />
						<div class="title">
							制氮机应用范围
						</div>
						<div class="intro">
制氮机适用于：<br />
1、石油、天然气。大陆石油、天然气开采、沿海及深海是有及天然气开采中的氮气保护、输送、覆盖、管网置换、抢险、维修、注氮...	</div>
<el-button class="seeBtn"  @click="$router.push('/engineerPage/1')">查看详情</el-button>

					</div>
					<div class="list-item">
						<img src="../../assets/切图/zhiyan.png" style="display: block;" alt="" />
						<div class="title">
							制氧机应用范围
						</div>
						<div class="intro">
							制氧机适用于：<br />
制氧机：PSA制氧机因为其显著的优点而被广大用户所青睐，它广泛地应用于冶金助燃，化工、环保、建材、轻工、水产养殖、生物技术...
						</div>
						<el-button class="seeBtn" @click="$router.push('/engineerPage/2')">查看详情</el-button>
					</div>
					<div class="list-item">
						<img src="../../assets/切图/jiachun-a.png" style="display: block;" alt="" />
						<div class="title">
							甲醇裂解制氢装置应用范围
						</div>
						<div class="intro">
							制氮机适用于：<br />
甲醇裂解制氢主要用于化工、冶金、电子等行业。
						</div>
						<el-button class="seeBtn"  @click="$router.push('/engineerPage/3')">查看详情</el-button>
					</div>
					<div class="list-item">
						<img src="../../assets/切图/yasuokongqi.png" style="display: block;" alt="" />
						<div class="title">
							压缩空气净化设备应用范围
						</div>
						<div class="intro">
							制氮机适用于：<br />
主要用于其应用范围遍及石油、化工、冶金、电力、机械、轻工、纺织、汽车制造、电子、食品、医药、生化、国防、科研等行业和...
						</div>
						<el-button class="seeBtn"  @click="$router.push('/engineerPage/4')">查看详情</el-button>
					</div>
				</div>
	</comTitle>
	</paper>
	</div>
</template>
<!--<el-button style="width:120px; height:40px; background:rgba(255,108,0,1);color: #fff">查看详情</el-button>-->
<script>
	export default {
		name:"intoJw",
		data(){
			return {
				
			}
		},
		mounted(){
			
		},
		created(){
			
		}
	}
</script>

<style lang="less">
.list-item{
	width: 48%;
	margin-top: 30px;
	/*border: 1px solid black;*/
	img{
		width: 100%;
		height: 409px;
		/*height: 278px;*/
	}
	.title{
		font-size: 18px;
		line-height: 50px;
		font-weight: bold;
		text-align: center;
	}
	.intro{
		font-size: 14px;
		line-height: 25px;
		margin-top: 10px;
		height: 100px;
	}
	.seeBtn{
		margin-top: 20px;
		width:100%; height:40px; background:rgba(255,108,0,1);color: #fff
	}
}
</style>