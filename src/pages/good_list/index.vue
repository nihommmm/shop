<template>
  <div class="goodlist">
    <div class="search">
      <div class="search-input">
        <icon class="search-icon" type="search" size="16"/>
        {{keyword}}
      </div>
    </div>
    <div class="tab">
        <block v-for="(item, index) in tabs" :key="index">
            <div class="tab-item" :class="{active : index == tabindex}">
                {{item}}
            </div>
        </block>
    </div>
  </div>
</template>
<style lang="scss">
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
.tab{
    display: flex;
    border-bottom:1px #eee solid;
    .tab-item{
        flex:1;
        text-align: center;
        line-height: 100rpx;
    }
    .active{
        color:red;
    }
}
.goods-list{
    padding-left:20rpx;
    .goods-item{
        padding:20rpx 20rpx 20rpx 0;
        display: flex;
        border-bottom:1px #eee solid;
        img{
            display: block;
            width:200rpx;
            height:200rpx;
            flex-shrink: 0;
            margin-right: 20rpx;
        }
        .goods-title{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
        .goods-right{
            flex:1;
            display: flex;
            flex-direction:column;
            justify-content: space-between;
        }
        .price{
            color:red;
            font-size: 14px;
            span{
                font-size: 22px;
            }
        }
    }
}
.loading{
    line-height: 80rpx;
    text-align: center;
    font-size:14px;
    color:#999;
}
</style>

<script>
export default {
  data() {
    return {
      keyword: "",
      tabs:["综合","销量","价格"],
      tabindex:0
    };
  },
  onLoad(query) {
    console.log(query);
    this.keyword = query.keyword;
  }
};
</script>
<style lang="scss">
</style>

