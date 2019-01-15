<template>
	<div class="comTitle">
		 <div class="comTitleHead flex-r">
		 	<div class="comTitleHead-title">
		 		{{title?title:route.pop().name}}
		 	</div>
		 	<div class="publishTime">
		 		发布时间 2018.12.12
		 	</div>
		 </div>
		 <div>
		 	<slot></slot>
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
		props:["title"],
		computed:{
			"route":function(){
//				console.log(this.$route.matched)
				return this.$route.matched;
			}
		},
		mounted(){
			console.log(this.title)
		},
		created(){
			
		}
	}	
</script>

<style lang="less">
.comTitle{
	.comTitleHead{
		box-sizing: border-box;
		align-items: center;
		justify-content: space-between;
		border-bottom:1px solid rgba(51,51,51,1);
	}
	.comTitleHead-title{
		font-weight: bold;
		border-bottom: 3px solid black;
		/*padding-bottom: 10px;*/
		padding: 0 10px 10px 10px;
		font-size: 18px;
	}
	.publishTime{
		color:#666666;
		font-size: 14px;
	}
}

</style>