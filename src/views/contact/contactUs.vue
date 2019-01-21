<template>
	<div class="boxWrap">
	<paper>
	<comTitle>
		<div class="contactPeople" style="margin-top: 50px;">
			<div>
				联 &nbsp;系 &nbsp;人 : <span>丁振兴</span>
			</div>
				<div>
				联系电话 :&nbsp;<span>13606536877</span>
			</div>
				<div>
				邮 &nbsp; &nbsp; &nbsp; 箱 : &nbsp;<span>888888888@qq.com</span>
			</div>
				<div>
				联系电话 ：<span>浙江省 杭州市 富阳市 新登镇五里桥工业区虎山脚</span>
			</div>
		</div>
	<!-- <p id="allmap" style="height: 500px;width: 100%;margin-top: 50px;margin-bottom: 50px;"></p> -->
		<div>
			<img src="../../assets/切图/-s-ditu.png" alt="">
		</div>
	</comTitle>
	</paper>
	</div>
</template>

<script>
//	require("http://api.map.baidu.com/api?v=2.0&ak=KCzp8claYra8uYAvahElV9oKUT6j7Gx1")
	export default {
		name:"intoJw",
		data(){
			return {
			}
		},
		mounted(){
			// this.$nextTick(()=>{
			// 	   var map = new BMap.Map("allmap");
			// 	    //创建坐标点
			// 	    var point = new BMap.Point(119.725914,29.956067);
			// 	    map.centerAndZoom(point,15);
			// 	    map.enableScrollWheelZoom(true);
			// })			
		},
		created(){
		}
	}
</script>

<style lang="less">
	.contactPeople{
		margin-top: 10px;
		div{
			color:rgba(0,0,0,1);
			line-height: 25px;
			font-size: 14px;
			span{
				display: inline-block;
				padding-left: 5px;
			}
		}
	}
	.contactPeople{
		margin-top: 10px;
		div{
			color:rgba(0,0,0,1);
			line-height: 25px;
			font-size: 14px;
			span{
				display: inline-block;
				padding-left: 5px;
			}
		}
	}
</style>