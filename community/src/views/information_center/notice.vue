<template>
  <div>
   <div class="box">
        <div class="title">
                    <h4>
                        <span class="notice" :class="{'active':activeIndex==0}" @click="activeIndex=0">通知公告</span>
                        <span class="safety" :class="{'active':activeIndex==1}" @click="activeIndex=1"> 安全预警</span>
                    </h4>
                    <div class="mess"> <a :href="this.messPath"><img src="../../assets/img/information_center/moreInfor.png" alt=""></a></div>
        </div>
        <notice-item-vue :list="list[activeIndex]"></notice-item-vue>
   </div >
  </div>
</template>

<script>
import noticeItemVue from './noticeItem.vue'
export default {
    
    data(){
        return{
            activeIndex:0,
            messPath:"",
            list:[
               [
                {
                message:"学生宿舍无线控制器版本升级断网的通知",
                time:"2023-03",
                day:"09",
                path:"#"
               },
                {
                message:"关于“珞珈e卡”使用中相关问题及解决办法的通知",
                time:"2022-09",
                day:"01",
                path:"#"
               },
                {
                message:"关于网站群服务升级的通知",
                time:"2023-02",
                day:"24",
                path:"#"
               },
                {
                message:"关于校园网光缆路由通道重新建的通知",
                time:"2023-02",
                day:"24",
                path:"#"
               },
            ],
               [
               {
                message:"关于Apache log4j远程代码执行漏洞的预警通知",
                time:"2021-12",
                day:"22",
                path:"#"
               },
               ]
            ]
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
.title h4{
    display: inline-block;
    font-size: 18px;
    color:#777;
    font-weight: normal;
    /* padding-left: 10px; */
    /* vertical-align: middle; */
}
.title .safety{
    margin-left:28px
}
.active{
    color:#333333;
}
.title h4::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 3px;
    background: #00a185;

}

.title .mess{
float:right;
margin-right: 5px;
}
.title .mess img{
    width:20px;
}
</style>