<template>
  <div class="home">
    <el-carousel :interval="5000" arrow="always" height="500px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index" class="imgWrap">
        <el-row>
          <el-col :span="24"><img ref="" :src="item.imgUrls" class=""/></el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      imgList: [
        {id: 0, imgUrls: require('../assets/img/banner1.jpg')},
        {id: 0, imgUrls: require('../assets/img/banner2.jpg')},
        {id: 0, imgUrls: require('../assets/img/banner3.jpg')}
      ]
    }
  },
}
</script>

<style lang="less">
  .home {
    width: 100%;
    .imgWrap {
      img {
        width: 100%;
      }
    }
  }
</style>

