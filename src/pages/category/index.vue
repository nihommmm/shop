<template>
    <div class="category">
        <search></search>
        <div class="main">
            <scroll-view scroll-y class="left">
                <block v-for="(item, index) in fenleiList" :key="index">
                    <div class="leftlist" :class= "{active : index == tabindex}" @tap="handleLeftClick(index)" @click ="handleRightClick(index)">{{item.cat_name}}</div>
                </block>
            </scroll-view>
            <scroll-view scroll-y class="right">
                <block v-for ="(listitem,listindex) in mainList" :key="listindex">
                    <div class="rightlist">
                            <div class="listhead">{{listitem.cat_name}}</div>
                            <div class="listmain">
                                <block v-for="(mainitem, mainindex) in listitem.children" :key="mainindex">
                                    <div class="mainpro" @tap ="gotoGoodlist(mainitem.cat_name)">
                                        <image :src="mainitem.cat_icon"></image>
                                        <div>{{mainitem.cat_name}}</div>
                                    </div>
                                </block>
                            </div>
                    </div>
                </block>
            </scroll-view>
        </div>
    </div>
</template>
<style lang="scss">
.category{
    .main{
        // background: yellow;
        position: fixed;
        left: 0;
        right: 0;
        top: 98rpx;
        bottom:0;
        display: flex;
        .left{
            width: 200rpx;
            background: #f5f5f5;
            overflow: scroll;
            .leftlist{
                height: 100rpx;
                line-height: 100rpx;
                font-size:28rpx;
                text-align: center;
                position: relative;
                &.active{
                    color:red;
                    background: #fff;
                    // border-left: 4px solid red;
                    &::before{
                    content: "";
                    background: red;
                    position: absolute;
                    left: 0;
                    width: 7rpx;
                    top: 15rpx;
                    bottom: 15rpx;
                }
                }
                
            }
        }
        .right{
            flex: 1;
            // background: red;
            .listhead{
                text-align: center;
                font-size:28rpx;
                padding:20rpx 0;
                &::before,&::after{
                    content:" / ";
                    color:peachpuff;
                }
            }
            .listmain{
                display: flex;
                flex-wrap: wrap;
                .mainpro{
                    width: 33.33%;
                    text-align: center;
                    padding: 20rpx 0;
                    image{
                        width: 120rpx;
                        height: 90rpx;
                    }
                    div{
                        
                        font-size: 24rpx;
                    }
                }
            }
        }
    }
}
</style>

<script>
import request from "@/utils/request"
import search from "@/components/search"
import { setTimeout } from 'timers';
export default {
    data () {
        return {
            fenleiList:[],
            mainList:[],
            tabindex:''
        }
    },
    created () {
        this.initlist()
    },
    components: {
        search
    },
    methods: {
        handleLeftClick(index){
            this.tabindex = index
        },
        handleRightClick(index){
            // 优化数据返回顶部功能
            this.mainList = [];
            setTimeout(()=>{
                this.mainList = this.fenleiList[index].children
            },0);
            
        },
        gotoGoodlist(name){
            wx.navigateTo({
                url: '/pages/good_list/main?keyword='+name
            })
        },
        initlist(){
           request("https://www.zhengzhicheng.cn/api/public/v1/categories") 
                .then(res => {
                    console.log(res)
                    this.fenleiList = res.data.message
                    console.log(this.fenleiList);
                    this.mainList = this.fenleiList[0].children
                })
        }
    }
}
</script>

