<template>
    <div>
        <div class="carousel">
            <div class="block" @click="newDetail(list[activeIndex][2])">
                        <el-carousel height="200px"  @change="change">
                            <el-carousel-item v-for="(item,index) in list" :key="index" >
                                <img :src="item[3]" alt="" :title="item[0]">
                            </el-carousel-item>
                        </el-carousel>
                        <div class="time">{{list[activeIndex][4]}}</div>
            </div>
            <div @click="newDetail(list[activeIndex][2])" :title="list[activeIndex][0]">
                <div class="content">
                    <h4>{{ list[activeIndex][0] }}</h4>
                    <p>{{ list[activeIndex][1] }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   data(){
    return{
        activeIndex:0,
        list:[
                // "title","content","path","img","time"
               ["市妇联党组书记、主席刘春香一行莅校开展走访慰问活动","3月16日，赣州市妇联党组书记、主席刘春香，党组成员、副主席肖宏蕾一行到我校，走访慰问我校全国先进工作者、全国三八红旗手、国家脐橙工程技术研究中心主任、生命科学学院教授钟八莲，国家脐橙工程技术研究中心党支部书记米兰芳。校党委书记朱小理，党委副书记胡龙华会见刘春香一行，校工会、生命科学学院（脐橙学院）负责同志参加。","#",require("../../assets/image/lunbo22.png"),"2023/03/16"],
               ["我校开展健康安全教育","","#",require("../../assets/image/lunbo21.png"),"2023/03/15"],
               ["朱小理为学生讲授“开学第一课”","3月17日，校党委书记朱小理以《以青春之我助推中国式现代化》为题，给学生讲授2023年春季学期“开学第一课”。党委副书记胡龙华主持。","#",require("../../assets/image/lunbo3.png"),"2023/03/17"],
            
            ],
    }
   },
    methods:{
        newDetail(path){
            this.$router.push(path)
        },
        change(now,last){
            this.activeIndex=now;
        }
    }
}
</script>

<style scoped>
.block{
    position: relative;
    cursor: pointer;
}
.time{
    position: absolute;
    bottom:0;
    left:0;
    font-size:14px;
    color:#fff;
    background-color: #0c57b0;
    z-index: 9999;
    padding:0 10px;
}
.carousel {
    margin-top: 15px;
}

.carousel img {
    width: 100%;
}

.clearfix::before,
.clearfix::after {
    display: table;
    content: "";
    clear: both;
}


.content{
    cursor: pointer;
}
.content h4 {
    font-size: 16px;
    font-weight: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 12px 0 12px 0;
}

.content p {
    height: 40px;
    width: 95%;
    margin: 0 auto;
    font-size: 14px;
    line-height: 20px;
    color: #999999;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;

}
</style>