<template>
  <div>
    <div class="box">
        <div>
            <ul class="allList">
                <li v-for="(item,index) in list" :key="index" @click="go(item.path)">
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
    height:54px;
    margin-top:15px;
    justify-content: space-between;
}
.left{
    width:60px;
    height:37px;
    background-color: #d4ece8;
    padding:8px 0 8px 0;
    text-align: center;
    border-radius: 5px;
}
.left .day{
    color:#37a185;
    font-size: 20px;
}
.left .yearMon{
    font-size: 12px;
}
.right{
    width:76%;
}
.right p{
    font-size:13px;
    height:48px;
    line-height: 24px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;

}
</style>