<template>
    <div id="serAll">
        <div class="serBox" style="transition:all 0.5s">
            <!-- 一个 -->
            <div class="icons" v-for="(item, index) in icon" :key="index" @click="$event => change(item.path)">
                <div class="icon">
                    <img :src="item.img" alt="">
                </div>
                <span class="title">{{ item.title }}</span>
            </div>
            <!-- 方便过渡的丝滑 -->
            <div class="icons" v-for="(item, index) in icon" :key="index+'a'" @click="$event => change(item.path)">
                <div class="icon">
                    <img :src="item.img" alt="">
                </div>
                <span class="title">{{ item.title }}</span>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            iconsWidth: 0,
            startIndex:0,
            timer:null
            // thi
        }
    },
    props: {
        icon: {
            type: Array,
            default: []
        },
    },
    methods: {
        change(path) {
            this.$router.push(path);
        },
        initWidth(){
            var serBox = document.getElementsByClassName("serBox");
            serBox[0].style.width = 100/8 * this.icon.length+ "%";
            let icons = document.getElementsByClassName("icons");
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.width = 100 / this.icon.length  + "%";
            }
            // serBox[0].style.left=-100/8+"%";//相对父元素的%而言
        },
        moveLeft() {
            var serBox = document.getElementsByClassName("serBox");
            serBox[0].style.transition="all 0s ease 0s";
            serBox[0].style.left=0;//清除之前的偏移
            var index=0;
            var length=this.icon.length;
            // console.log(serBox[0].style.transition)
            this.timer=setInterval(function(){
            index++;
            if(index>=length){
                serBox[0].style.transition="all 0.5s ease 0s";
                serBox[0].style.left=index*-100/8+"%";
                index=0;
                // console.log(index)
                serBox[0].style.transition="all 0s ease 0s";//瞬移
                // console.log(serBox[0].style.transition);
                serBox[0].style.left=0;
            }else{
                serBox[0].style.transition="all 0.5s ease 0s";
                serBox[0].style.left=index*-100/8+"%";
            }
                        // console.log(serBox[0].style.left);
            },3000);
        }
    },
    watch: {
        icon() {
            clearInterval(this.timer);//清除之前其他服务开的定时器
            this.moveLeft();
        }
    },
    mounted() {
        this.initWidth();
        this.moveLeft();
    }
}
</script>

<style>
#serAll {
    width: 100%;
    height: 129px;
    position: relative;
    overflow: hidden;
}

.serBox {
    white-space: nowrap;
    position: absolute;
    left:0;
    bottom: 0;
}

.icons {
    width: calc(100%/8);
    display: inline-block;
    text-align: center;
    vertical-align: bottom;
    cursor: pointer;
}

.icon img {
    margin: 50% auto;
    transform: translateY(-50%);
}

.icon {

    /* width: 50%; */
    /* height:50%; */
    width: 76px;
    height: 76px;
    /* line-height: 76px; */
    /* position: relative; */
    background-color: #86c2f5;
    border-radius: 50%;
    margin: 0 auto;
}

.icons:hover img {
    transition: all 1s;
    transform: rotateY(180deg) translateY(-50%);
}

.title {
    font-size: 15px;
    margin-top: 10px;
    height: 40px;
    line-height: 20px;
    display: inline-block;
    /* word-wrap:break-word; */
    white-space: normal;
    width: 100%;
    color: #333;
}

.icons:hover .title {
    color: #0c57b0;
}</style>