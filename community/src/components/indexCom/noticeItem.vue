<template>
  <div>
    <div class="box">
        <div>
            <ul class="allList">
                <li v-for="(item,index) in list" :key="index" @click="go(item.path)" :title="item.message">
                    <div class="left">
                        <p class="day">{{ item.day }}</p>
                        <p class="yearMon">{{ item.time }}</p>
                    </div>
                    <div class="right">
                       <p>{{ item.message }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"indexNoticeItem",
props:{
    list:{
        type:Array,
        default:[]
    }
},
methods:{
    go(path){
        this.$router.push(path);
    }
}
}
</script>

<style scoped>
.allList li{
    display: flex;
    height:58px;
    margin-top:22px;
    justify-content: space-between;
    cursor: pointer;
}
.left{
    width:60px;
    height:42.4px;
    background-color: #86c2f5;
    padding:8px 0;
    text-align: center;
    border-radius: 5px;
}
.left .day{
    color:#0c57b0;
    font-size: 26px;
    line-height:26px;
}
.left .yearMon{
    font-size: 12px;
    color:#333;
}
.left:hover{
    background-color: #0c57b0;
}
.left:hover .day,.left:hover .yearMon{
    color:#fff
}
.right{
    width:84%;
}
.right p{
    font-size:16px;
    height:48px;
    line-height: 24px;
    padding-right:20%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;


}
</style>