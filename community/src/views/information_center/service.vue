<template>
    <div>
        <div class="box">
            <title-vue :mess-path="morePath">
                <span slot="chin">服务目录</span>
                <span slot="eng">service</span>
            </title-vue>
            <div class="detailTit">
                <div v-for="(item, index) in serviceTit" :key="index" class="tab" :class="{ 'active': activeIndex == index }"
                    @click="update(index)">
                    <span>{{ item }}</span>
                </div>
            </div>
            <service-item-vue :icon="serviceTitItem[activeIndex]"></service-item-vue>
        </div>
    </div>
</template>

<script>
import serviceItemVue from './serviceItem.vue';
import titleVue from './title.vue';
export default {
    data() {
        return {
            activeIndex: 0,
            serviceTit: ['教工服务', '学生服务', '部门服务'],
            morePath: "#",
            serviceTitItem: [
                [
                    { title: '上网自助注册', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: '个人网络自助', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: '办公区校园网IP申请', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: 'VPN服务', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: '校园网在线故障报修', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: '校园卡中心服务时间地点', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: '教工卡查询系统', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: '校园卡现金充值点', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: '师大邮箱', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: '软件资产管理', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: '正版软件', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: '正版软件配额增加申请', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: '珞珈云盘', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: '超算服务', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                    { title: '教师个人主页', img: require("../../assets/img/information_center/icon1.png"), path: "#" },
                ],
                [
                    { title: '学生网管名单', img: require("../../assets/img/information_center/icon8.png"), path: "#" },
                    { title: '超算服务', img: require("../../assets/img/information_center/icon8.png"), path: "#" },
                    { title: '可信电子凭证', img: require("../../assets/img/information_center/icon8.png"), path: "#" },
                    { title: '学生上网指南', img: require("../../assets/img/information_center/icon8.png"), path: "#" },
                    { title: 'NPN服务', img: require("../../assets/img/information_center/icon8.png"), path: "#" },
                    { title: '网上缴网费', img: require("../../assets/img/information_center/icon8.png"), path: "#" },
                    { title: '校园网在线故障报修', img: require("../../assets/img/information_center/icon8.png"), path: "#" },
                    { title: '校园卡中心服务时间地点', img: require("../../assets/img/information_center/icon8.png"), path: "#" },
                    { title: '校园卡查询系统', img: require("../../assets/img/information_center/icon8.png"), path: "#" },
                    { title: '校园卡现金充值点', img: require("../../assets/img/information_center/icon8.png"), path: "#" },
                    { title: '师大邮箱', img: require("../../assets/img/information_center/icon8.png"), path: "#" },
                    { title: '珞珈在线', img: require("../../assets/img/information_center/icon8.png"), path: "#" },
                ],
                [
                    { title: '虚拟空间', img: require("../../assets/img/information_center/icon9.png"), path: "#" },
                    { title: '数据交换服务', img: require("../../assets/img/information_center/icon9.png"), path: "#" },
                    { title: '软件资产管理', img: require("../../assets/img/information_center/icon9.png"), path: "#" },
                    { title: 'ZOOM视频会议', img: require("../../assets/img/information_center/icon9.png"), path: "#" },
                    { title: '堡垒机', img: require("../../assets/img/information_center/icon9.png"), path: "#" },
                    { title: '单位网络自助', img: require("../../assets/img/information_center/icon9.png"), path: "#" },
                    { title: '校内网站域名申请', img: require("../../assets/img/information_center/icon9.png"), path: "#" },
                    { title: '办公校园网IP申请', img: require("../../assets/img/information_center/icon9.png"), path: "#" },
                    { title: '校内网站域名申请', img: require("../../assets/img/information_center/icon9.png"), path: "#" },
                    { title: '办公区校园网IP申请', img: require("../../assets/img/information_center/icon9.png"), path: "#" },
                    { title: '单位邮箱申请', img: require("../../assets/img/information_center/icon9.png"), path: "#" },
                    { title: '师大网站群', img: require("../../assets/img/information_center/icon9.png"), path: "#" },
                ],
                // ['','','','','NPN服务','网上缴网费','校园网在线故障报修','校园卡中心服务时间地点','校园卡查询系统','校园卡现金充值点','师大邮箱','珞珈在线'],
                // ['虚拟空间','数据交换服务','软件资产管理','ZOOM视频会议','堡垒机','单位网络自助','校内网站域名申请','办公校园网IP申请','校内网站域名申请','办公区校园网IP申请','单位邮箱申请','师大网站群']
            ],
        }
    },
    methods: {
        update(index) {
            this.activeIndex = index;
        }
    },
    components: {
        serviceItemVue,
        titleVue
    }
}
</script>

<style scoped>
.clearfix {
    content: "";
    clear: both;
    display: table;
}

.detailTit {
    display: flex;
    justify-content: space-around;
    padding: 15px 30px 15px 30px;
}

.tab {
    /* display: inline-block; */
    font-size: 12px;
    width: 23%;
    line-height: 24px;
    background-color: #e6e6e6;
    border-radius: 5px;
    text-align: center;
}

.active {
    background-color: #00a185;
    color: #fff;
}</style>