<template>
  <div class="index">
    <div class="search">
      <div class="search-input">
        <icon class="search-icon" type="search" size="16"/>搜索
      </div>
    </div>
    <div class="index-banner">
      <swiper class="banner" indicator-dots autoplay circular>
        <block v-for="(item, idex) in urlImg" :key="idex">
          <swiper-item>
            <image :src="item.image_src" class="slide-image" mode="widthFix"></image>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="index-menu">
      <div class="menus" v-for="(item, idex) in menusdata" :key="idex">
        <img :src="item.image_src" alt="">
      </div>
    </div>
    <div class="floor" >
      <div class="flooritem" v-for="(item, idex) in floordata" :key="idex">
        <div class="head">
          <image :src="item.floor_title.image_src" mode="scaleToFill"></image>
        </div>
        <div class="body">
          <div class="body-left">
            <image :src="item.product_list[0].image_src"></image>
          </div>
          <div class="body-right">
            <block v-for="(product_list, listidex) in item.product_list" :key="listidex">
              <image  v-if= "listidex != 0" :src="product_list.image_src"></image>
            </block>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from "./../../utils/request.js"
export default {
  data() {
    return {
      urlImg: [],
      menusdata:[],
      floordata:[]
    };
  },
  mounted() {
    // wx.request({
    //   url: "https://itjustfun.cn/api/public/v1/home/swiperdata",
    //   success(res) {
    //     page.urlImg =res.data.data
    //   }
    // });
    request("https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata")
      .then(res =>{
        this.urlImg =res.data.message
      })
    request("https://www.zhengzhicheng.cn/api/public/v1/home/catitems")
      .then(res => {
        this.menusdata = res.data.message
      })
    // wx.request({
    //   url:"https://itjustfun.cn/api/public/v1/home/catitems",
    //   success:res=>{
    //     console.log(res)
    //     this.menusdata = res.data.data
    //   }
    // })
    request("https://www.zhengzhicheng.cn/api/public/v1/home/floordata")
      .then(res =>{
        this.floordata =res.data.message
      })
  }
};
</script>
<style lang="scss">
page{
  background-color: white;
}
.index {
  .search {
    background: #ff7700;
    padding: 20rpx 16rpx;
    &-input {
      height: 60rpx;
      background: #fff;
      border-radius: 10rpx;
      font-size: 24rpx;
      color: #bbb;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .search-icon {
      margin-right: 5rpx;
    }
  }
  .index-banner{
    .banner {
      height: 340rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
  }
  .index-menu{
    display: flex;
    justify-content: space-around;
    padding: 24rpx;
    img{
      width: 128rpx;
      height: 128rpx;
    }
  }
  .floor{
    .flooritem{
      .head{
        padding-top:30rpx;
        background-color: #f4f4f4;
        height: 88rpx;
        image{
          width: 100%;
          height: 100%;
      }
    }
    .body{
      display: flex;
      margin: 20rpx 16rpx 0 16rpx;
      &-left{
        image{
          width: 232rpx;
          height: 386rpx;
        }
      }
      &-right{
        display: flex;
        flex-wrap: wrap;
        image{
          margin-left:10rpx;
          width: 232rpx;
          height: 188rpx;
        }
      }
    }
    }
    
  }
}
</style>


