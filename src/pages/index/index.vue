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
  </div>
</template>
<script>
export default {
  data() {
    return {
      urlImg: [],
      menusdata:[]
    };
  },
  mounted() {
    let page = this;
    wx.request({
      url: "https://itjustfun.cn/api/public/v1/home/swiperdata",
      success(res) {
        page.urlImg =res.data.data
      }
    });
    wx.request({
      url:"https://itjustfun.cn/api/public/v1/home/catitems",
      success:res=>{
        console.log(res)
        this.menusdata = res.data.data
      }
    })
  }
};
</script>
<style lang="scss" scoped>
.index {
  .search {
    background: #ff7700;
    padding: 20rpx 16rpx;
    .search-input {
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
}
</style>


