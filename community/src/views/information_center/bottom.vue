<template>
    <div>
        <div class="box">
            <div class="good">
                <div class="show">
                    <span class="toleft" @click="toleft()"><img src="../../assets/img/information_center/向左箭头.png" alt=""></span>
                    <span class="toright" @click="toright()"><img src="../../assets/img/information_center/向右箭头.png" alt=""></span>
                    <div class="item" v-for="(item, index) in good " :key="index">
                        <p><img :src="item.pic" alt=""></p>
                        <p class="num">{{ item.num }}</p>
                        <p class="kind">{{ item.kind }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer clearfix">
            <div class="copyright">
                <div class="img"><img src="../../assets/img/information_center/logo.png" alt=""></div>
                <p>版权所有：赣南师范大学信息中心</p>
            </div>
            <div class="qrcode">
                <div class="ma">
                    <img src="../../assets/img/information_center/赣南师范大学.png" alt="">
                    <p>赣南师范大学</p>
                </div>
                <div class="ma">
                    <img src="../../assets/img/information_center/赣师学工.png" alt="">
                    <p>赣师学工</p>
                </div>
                <div class="ma">
                    <img src="../../assets/img/information_center/青春赣师.png" alt="">
                    <p>青春赣师</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showIndex:0,
            good: [
                {
                    pic: require("../../assets/img/information_center/banner-icon2.png"),
                    num: "18600颗",
                    kind: "无线网络AP数量"
                },
                {
                    pic: require("../../assets/img/information_center/banner-icon2.png"),
                    num: "4800万亿次/秒",
                    kind: "超算计算能力峰值"
                },
                {
                    pic: require("../../assets/img/information_center/banner-icon2.png"),
                    num: "770台",
                    kind: "超算服务器数量"
                },
                {
                    pic: require("../../assets/img/information_center/banner-icon2.png"),
                    num: "43Gbps",
                    kind: "校园网出口带宽"
                },
            ],
        }
    },
    methods:{
        toleft(){

        },
        toright(){

        },
        changePosition(){
            var allItem=document.getElementsByClassName("item");
            for(let i=0;i<allItem.length;i++){
                // console.log(this.showIndex);
                // console.log()
                // setInterval(
                //     function(){

                //     }
                //     ,1000)
            }
        }
    },
    mounted(){
        this.changePosition();
    }
}
</script>

<style scoped>
.clearfix::before,
.clearfix::after {
    clear: both;
    content: "";
    display: table;
}

.box {
    margin-top: 20px;
}

.box .good {
    padding:20px 0 20px 0;
    background-color: #0aa58a;
    border-radius: 5px;
    width:100%;
    position: relative;
}
.box .good .show{
    /* display: flex; */
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
    width:100%;
    color:#fff;
    font-size: 12px;
    text-align: center;
  
}
.box .good .show .toleft,.box .good .show .toright{
    top:50%;
    transform: translateY(-50%);
   position: absolute;
}
.box .good .show .toleft{
    left: 0;
}
.box .good .show .toright{
    right:0;
}

.box .good .show .toleft img,.box .good .show .toright img{
   width:20px;
}
.box .good .show .item{
    width: 50%;
    display: inline-block;
    /* background-color: #3e3e3e; */
}
.box .good .show .item img{
    width:40px;
}
.box .good .show .item .num{
    font-weight: bold;
}



.footer {
    width: 100%;
    height: 186px;
    margin-top: 10px;
    background-color: #3e3e3e;
    color: #fff;
    font-size: 12px;
    text-align: center;
}

.copyright {
    display: flex;
    margin: 20px auto;
    justify-content: center;
}

.copyright .img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
}

.copyright .img img {
    width: 100%
}

.copyright p {
    height: 40px;
    line-height: 40px;
    margin-left: 16px;
}

.footer .qrcode {
    display: flex;
    justify-content: space-around;
}

.qrcode .ma {
    width: 16%;
}

.qrcode .ma img {
    width: 100%;
}

.qrcode .ma p {
    margin-top: 8px;
}
</style>