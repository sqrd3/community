<template>
    <div>
        <div class="box">
            <div class="icons" v-for="(item, index) in icon" :key="index" @click="$event => change(item.path)">
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
    name: "serviceItem",
    data(){
        return{
           
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
        }
    }
}
</script>

<style>
.box {
    width: 96%;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
    margin: 0 auto;
}

.icons {
    width: 25%;
    display: inline-block;
    text-align: center;
    vertical-align: bottom;
}
.icon img{
    width:40%;
    
}
.icon {

    /* width: 50%; */
    /* height:50%; */
    width:40px;
    height:40px;
    line-height: 40px;
    background-color: #d4ece8;
    border-radius: 50%;
    margin: 0 auto;
}

.title {
    font-size: 12px;
    margin-top: 5px; 
    height:37px;
    display: inline-block;
    /* word-wrap:break-word; */
    white-space: normal;
    width:100%;
}
</style>