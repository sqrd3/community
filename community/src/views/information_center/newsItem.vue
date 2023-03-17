<template>
  <div>
    <div class="box">
        <ul class="all">
            <li v-for="(item,index) in list" :key="index" @click="go(item.path)">
                <span class="tit">{{ item.message }}</span>
                <span class="time">{{ item.time }}</span>
            </li>
        </ul>
    </div >
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
.all{
    font-size: 13px;
    color:#333333;
    padding-top:10px;
}
.all li{
    width:92%;
    margin:0 auto;
    height:42px;
    line-height:42px;
    display: flex;
    position: relative;
    padding: 0 5px 0 15px;
}
.all li::before{
    width:5px;
    height:5px;
    /* display: inline-block; */
    position: absolute;
    /* z-index: 999; */
    left: 0;
    top:50%;
    content:"";
    background-color: #00a185;
    border-radius: 50%;
    transform: translateY(-50%);
}
.tit{
    width:80%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}
</style>