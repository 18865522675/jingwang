<template>
	<div class="boxWrap">
	    <paper>
	    	<comTitle>
				<div class="flex-r" style="flex-wrap: wrap;justify-content: space-between;">
					<div class="listItem">
						<div class="imgWrap">
							<img src="../../assets/img/zizizhuanli.png" alt="" />
						</div>
						<div class="name">
							专利IS09001
						</div>
					</div>
					<div class="listItem">
						<div class="imgWrap">
							<img src="../../assets/img/zizizhuanli2.png" alt="" />
						</div>
						<div class="name">
							专利IS09001
						</div>
					</div>
				</div>
	    	</comTitle>
	    </paper>
	</div>
</template>

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
.listItem{
	width: 324px;
	margin-top: 40px;
	.imgWrap{
		width: 100%;
		box-sizing: border-box;
		padding: 5px 3px;
		background: rgba(204,204,204,1);
		text-align: center;
		img{
			width: 298px;
			height: 388px;
		}
	}
	.name{
		font-size: 18px;
		line-height: 60px;
		text-align: center;
		font-weight: bold;
		
	}
}
</style>