<template>
  <div>
   <div class="box">
        <div class="title">
                   <div class="titH">
                        <h4>
                            <span class="notice" :class="{'active':activeIndex==0}" @click="activeIndex=0">通知公告</span>
                            <span class="safety" :class="{'active':activeIndex==1}" @click="activeIndex=1"> 安全预警</span>
                        </h4>
                   </div>
                    <div class="mess"> <a :href="this.messPath"><img src="../../assets/img/information_center/moreInfor.png" alt=""></a></div>
        </div>
        <notice-item-vue :list="list[activeIndex]"></notice-item-vue>
   </div >
  </div>
</template>

<script>
import noticeItemVue from './noticeItem.vue'
export default {
    name:"indexNotice",
    props:{
        list:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{
            activeIndex:0,
            messPath:"",
           
        }
    },
    components:{
        noticeItemVue
    }
}
</script>

<style>
.title{
    margin-top: 13px;
    vertical-align: middle;
    height:40px;
    line-height: 40px;
    position: relative;
}
.title .titH{
    position: relative;
    display: inline-block;
}
.title h4{
    display: inline-block;
    font-size: 20px;
    color:#777;
    font-weight: normal;
    cursor: pointer;
    /* padding-left: 10px; */
    /* vertical-align: middle; */
}
.title .safety{
    margin-left:28px
}
.active{
    color:#333333;
    font-size: 24px;
}
.title h4::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 3px;
    background: #0c57b0;

}

.title .mess{
float:right;
margin-right: 85px;
}
.title .mess img{
    width:20px;
}
</style>