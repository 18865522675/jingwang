<template>
	<div class="paperWrap">
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
		<div class="paperBottom flex-r">
			<div  class="paperBottom-left">
				<div v-for="(item,index) in childRoute" v-if="!item.meta" @click="$router.push(item.path)" :key="index" class="paperBottom-left-item" >
					<span>{{item.name}}</span>
					<i class="el-icon-arrow-right icons"></i>
				</div>
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
			<div  class="paperBottom-right">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"paper",
		data(){
			return {
				
			}
		},
		computed:{
			"route": function() {
//				console.log(this.$route.matched)
				return this.$route.matched;
			},
			"childRoute": function() {
				let arr = this.$router.options.routes;
				let k = []
				arr.map((item) => {
					if(item.path == this.route[0].path) {
					
						k = item.children
					}
				})
				return k
			}
		},
		mounted(){
		
		},
		created(){
			
		}
	}	
</script>

<style lang="less">
@w350:350px;
.paperBottom-left-item:focus, .paperBottom-left-item:hover {
  background: #FF852C!important;
}
.paperWrap {
  margin-top: 50px;
}
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
@width: 350px;
.paperBottom{
	margin-top: 40px;
	.paperBottom-left{
		width: @w350;
	}
	.paperBottom-left-item{
		height: 88px;
		line-height: 88px;
		/*background: linear-gradient(to right, red , blue);*/
		background-color: #FF6C00;
		color:white;
		text-align: center;
		font-size: 18px;
		position: relative;
		box-sizing: border-box;
		&>.icons{
			position: absolute;
			right: 20px;
			top:50%;
			transform: translateY(-50%);
		}
		&:hover{
			  background: linear-gradient(right, #FF6C00, #FF852C)!important; 
		}
	}
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
	.paperBottom-right{
		flex: 1;
		text-align: left;
		box-sizing: border-box;
		padding-left: 40px;
	}
}

</style>