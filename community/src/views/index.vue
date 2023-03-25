<template>
    <div class="all">
        <div class="top clearfix">
            <div class="tab">
                <ul>
                    <li v-for="(item, index) in tabList" :key="index" @click="tabClick(index)">{{ item }}</li>
                </ul>
                <div class="search"><img src="../assets/image/search.png" alt=""></div>
            </div>
            <div class="top_w clearfix">
                <div class="topw_s">
                    <div class="logo"><img src="../assets/image/bluelogo.png" alt=""></div>
                    <div class="nav">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <a href="#">中心概况</a>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="(item, index) in centerBri" :key="index"><a :href="item.path">{{
                                    item.name }}</a></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <a href="#">党建工作</a>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="(item, index) in partyWork" :key="index"><a :href="item.path">{{
                                    item.name }}</a></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <a href="#">作风建设</a>
                            </span>
                        </el-dropdown>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <a href="#"> 网络安全</a>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="(item, index) in networkSafe" :key="index"><a :href="item.path">{{
                                    item.name }}</a></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <a href="#">信息化</a>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="(item, index) in informatization" :key="index"><a
                                        :href="item.path">{{
                                            item.name }}</a></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <a href="#">服务支持</a>
                            </span>
                        </el-dropdown>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <a href="#">智慧珞珈</a>
                            </span>
                        </el-dropdown>
                        <el-dropdown>
                            <span class="el-dropdown-link graduate">
                                <a href="#">毕业专题</a>
                            </span>
                        </el-dropdown>
                    </div>
                </div>
                <div class="carousel">

                    <el-carousel indicator-position="none" height="350px">
                        <el-carousel-item v-for="item in topImg" :key="item">
                            <img :src="item" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="hlink">
                    <ul>
                        <li v-for="(item, index) in hlink" :key=index>
                            <a :href="item.path">
                                <div class="iconLink"><img :src="item.img" alt=""></div>
                                <span>{{ item.name }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="middle">
            <div class="service">
                <div style="padding:30px 0 35px 0;">
                    <title-vue :messPath="newsMessPath">
                        <span slot="chin">服务目录</span>
                        <span slot="eng">/Service</span>
                        <div slot="serviceTit">
                            <div v-for="(item, index) in serviceTit" :key="index" class="serTab"
                                :class="{ 'active': serActiveIndex == index }" @click="serActiveIndex = index">
                                <span>{{ item }}</span>
                            </div>
                        </div>
                    </title-vue>
                </div>
                <div class="serDetail">
                    <service-item-vue :icon="serviceTitItem[serActiveIndex]"></service-item-vue>
                </div>
            </div>
            <div class="middleMessage">
               <div class="wordMessage">
                    <div class="leftNews">
                        <title-vue :messPath="newsMessPath">
                            <span slot="chin">新闻资讯</span>
                            <span slot="eng">/News</span>
                        </title-vue>
                        <div class="newsDetail">
                            <div class="picNews">
                                <news-carousel-vue></news-carousel-vue>
                            </div>
                            <div class="titNews">
                                <news-item-vue :list="newsListMess"></news-item-vue>
                            </div>
                        </div>
                    </div>
                    <div class="rightNotice">
                        <notice-vue :list="list"></notice-vue>
                    </div>
               </div>
               <div class="good">
                    <div class="show" v-for="(item,index) in good" :key="index">
                        <div class="goodImg"><img :src="item.pic" alt=""></div>
                        <div class="describe">
                            <h4>{{ item.num }}</h4>
                            <p>{{ item.kind }}</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        <div class="bottom">
                <div class="bottom_left">
                    <div class="cirlogo">
                        <img src="../assets/image/cirlogo.png" alt="">
                    </div>
                    <p>版权所有：赣南师范大学信息中心</p>
                </div>
                <div class="bottom_right">
                    <div v-for="(item,index) in bottomMa" :key=index>
                        <div><img :src="item.img" alt=""></div>
                        <p>{{ item.name }}</p>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import titleVue from '../components/indexCom/title.vue'
import serviceItemVue from '../components/indexCom/serviceItem.vue';
import noticeVue from '../components/indexCom/notice.vue';
import newsCarouselVue from "../components/indexCom/newsCarousel.vue";
import newsItemVue from "../components/indexCom/newsItem.vue"
export default {
    components: {
        serviceItemVue,
        noticeVue,
        titleVue,
        newsCarouselVue,
        newsItemVue
    },
    data() {
        return {
            serMessPath: "#",
            tabList: ['学习二十大', '赣南师范大学', '信息门户', '办事大厅'],
            centerBri: [
                {
                    name: '中心简介',
                    path: "#"
                },
                {
                    name: '历史沿革',
                    path: "#"
                },
                {
                    name: '部门领导',
                    path: "#"
                },
                {
                    name: '组织机构',
                    path: "#"
                },
                {
                    name: '服务岗位',
                    path: "#"
                },
                {
                    name: '联系我们',
                    path: "#"
                }],
            partyWork: [
                {
                    name: '党建活动',
                    path: "#"
                },
                {
                    name: '我为群众办实事',
                    path: "#"
                },
                {
                    name: '专栏',
                    path: "#"
                }],
            networkSafe: [
                {
                    name: '法律法规',
                    path: "#"
                },
                {
                    name: '规章制度',
                    path: "#"
                },
                {
                    name: '专题内容',
                    path: "#"
                }],
            informatization: [
                {
                    name: '发展规划',
                    path: "#"
                },
                {
                    name: '建设指南',
                    path: "#"
                },
                {
                    name: '规章制度',
                    path: "#"
                },
                {
                    name: '信息系统目录',
                    path: "#"
                },
                {
                    name: '软件资产管理',
                    path: "#"
                },],
            topImg: [
                require("../assets/image/view2.png"),
                require("../assets/image/view1.png"),
                require("../assets/image/view3.png"),
            ],
            hlink: [
                {
                    name: "校园卡",
                    img: require("../assets/image/hlink1.png"),
                    path: "#"
                },
                {
                    name: "校园网",
                    img: require("../assets/image/hlink2.png"),
                    path: "#"

                },
                {
                    name: "办事大厅",
                    img: require("../assets/image/hlink3.png"),
                    path: "#"
                },
                {
                    name: "正版软件",
                    img: require("../assets/image/hlink4.png"),
                    path: "#"
                },
                {
                    name: "珞珈在线",
                    img: require("../assets/image/hlink5.png"),
                    path: "#"
                },
                {
                    name: "超算中心",
                    img: require("../assets/image/hlink6.png"),
                    path: "#"
                }
            ],
            activeIndex: '1',
            activeIndex2: '1',
            serviceTit: ['教工服务', '学生服务', '部门服务'],
            serActiveIndex: 0,
            serviceTitItem: [
                [
                    { title: '上网自助注册', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: '个人网络自助', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: '办公区校园网IP申请', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: 'VPN服务', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: '校园网在线故障报修', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: '校园卡中心服务时间地点', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: '教工卡查询系统', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: '校园卡现金充值点', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: '师大邮箱', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: '软件资产管理', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: '正版软件', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: '正版软件配额增加申请', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: '珞珈云盘', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: '超算服务', img: require("../assets/image/serIcon11.png"), path: "#" },
                    { title: '教师个人主页', img: require("../assets/image/serIcon11.png"), path: "#" },
                ],
                [
                    { title: '学生网管名单', img: require("../assets/image/serIcon21.png"), path: "#" },
                    { title: '超算服务', img: require("../assets/image/serIcon21.png"), path: "#" },
                    { title: '可信电子凭证', img: require("../assets/image/serIcon21.png"), path: "#" },
                    { title: '学生上网指南', img: require("../assets/image/serIcon21.png"), path: "#" },
                    { title: 'NPN服务', img: require("../assets/image/serIcon21.png"), path: "#" },
                    { title: '网上缴网费', img: require("../assets/image/serIcon21.png"), path: "#" },
                    { title: '校园网在线故障报修', img: require("../assets/image/serIcon21.png"), path: "#" },
                    { title: '校园卡中心服务时间地点', img: require("../assets/image/serIcon21.png"), path: "#" },
                    { title: '校园卡查询系统', img: require("../assets/image/serIcon21.png"), path: "#" },
                    { title: '校园卡现金充值点', img: require("../assets/image/serIcon21.png"), path: "#" },
                    { title: '师大邮箱', img: require("../assets/image/serIcon21.png"), path: "#" },
                    { title: '珞珈在线', img: require("../assets/image/serIcon21.png"), path: "#" },
                ],
                [
                    { title: '虚拟空间', img: require("../assets/image/serIcon31.png"), path: "#" },
                    { title: '数据交换服务', img: require("../assets/image/serIcon31.png"), path: "#" },
                    { title: '软件资产管理', img: require("../assets/image/serIcon31.png"), path: "#" },
                    { title: 'ZOOM视频会议', img: require("../assets/image/serIcon31.png"), path: "#" },
                    { title: '堡垒机', img: require("../assets/image/serIcon31.png"), path: "#" },
                    { title: '单位网络自助', img: require("../assets/image/serIcon31.png"), path: "#" },
                    { title: '校内网站域名申请', img: require("../assets/image/serIcon31.png"), path: "#" },
                    { title: '办公校园网IP申请', img: require("../assets/image/serIcon31.png"), path: "#" },
                    { title: '校内网站域名申请', img: require("../assets/image/serIcon31.png"), path: "#" },
                    { title: '办公区校园网IP申请', img: require("../assets/image/serIcon31.png"), path: "#" },
                    { title: '单位邮箱申请', img: require("../assets/image/serIcon31.png"), path: "#" },
                    { title: '师大网站群', img: require("../assets/image/serIcon31.png"), path: "#" },
                ],
                // ['','','','','NPN服务','网上缴网费','校园网在线故障报修','校园卡中心服务时间地点','校园卡查询系统','校园卡现金充值点','师大邮箱','珞珈在线'],
                // ['虚拟空间','数据交换服务','软件资产管理','ZOOM视频会议','堡垒机','单位网络自助','校内网站域名申请','办公校园网IP申请','校内网站域名申请','办公区校园网IP申请','单位邮箱申请','师大网站群']
            ],
            list: [
                [
                    {
                        message: "学生宿舍无线控制器版本升级断网的通知",
                        time: "2023-03",
                        day: "09",
                        path: "#"
                    },
                    {
                        message: "关于“珞珈e卡”使用中相关问题及解决办法的通知",
                        time: "2022-09",
                        day: "01",
                        path: "#"
                    },
                    {
                        message: "关于网站群服务升级的通知",
                        time: "2023-02",
                        day: "24",
                        path: "#"
                    },
                    {
                        message: "关于校园网光缆路由通道重新建的通知",
                        time: "2023-02",
                        day: "24",
                        path: "#"
                    },
                ],
                [
                    {
                        message: "关于Apache log4j远程代码执行漏洞的预警通知",
                        time: "2021-12",
                        day: "22",
                        path: "#"
                    },
                ]
            ],
            newsMessPath: "#",
            newsListMess: [
                {
                    message: "学校召开党委会会议传达学习全国两会精神和全省领导干部会议精神",
                    time: '2020/03/16',
                    path: "#"
                }, {
                    message: '市妇联党组书记、主席刘春香一行莅校开展走访慰问活动',
                    time: '2023/03/16',
                    path: '#'
                },
                {
                    message: '校领导到附中调研指导工作',
                    time: '2023/03/15',
                    path: '#'
                },
                {
                    message: '我校国学研究院院长做客央视科教频道《地理·中国》栏目',
                    time: '2023/03/15',
                    path: '#'
                },
                {
                    message: '陈义旺赴深圳走访校友并访企拓岗',
                    time: '2023/03/14',
                    path: '#'
                },
                {
                    message: "学校召开党委会会议传达学习全国两会精神和全省领导干部会议精神",
                    time: '2020/03/16',
                    path: "#"
                },
                {
                    message: '市妇联党组书记、主席刘春香一行莅校开展走访慰问活动',
                    time: '2023/03/16',
                    path: '#'
                }
            ],
            good: [
                {
                    pic: require("../assets/image/good.png"),
                    num: "18600颗",
                    kind: "无线网络AP数量"
                },
                {
                    pic: require("../assets/image/good.png"),
                    num: "4800万亿次/秒",
                    kind: "超算计算能力峰值"
                },
                {
                    pic: require("../assets/image/good.png"),
                    num: "770台",
                    kind: "超算服务器数量"
                },
                {
                    pic: require("../assets/image/good.png"),
                    num: "43Gbps",
                    kind: "校园网出口带宽"
                },
            ],
            bottomMa:[
                {
                    name:"赣南师范大学",
                    img:require("../assets/image/赣南师范大学.png")
                },
                {
                    name:"赣师学工",
                    img:require("../assets/image/赣师学工.png")
                },
                {
                    name:"青春赣师",
                    img:require("../assets/image/青春赣师.png")
                },
            ]

        }
    },
    methods: {
        tabClick(index) {

        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }

}
</script>

<style scoped>
.all {
    min-width: 1280px;
}

.clearfix::before,
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

.tab {
    display: inline-block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: rgb(44, 90, 177);
    text-align: right;
    color: #fff;
    font-size: 12px;
    /* padding-left: 10px; */
}

.tab ul,
.tab .search {
    display: inline-block;
}

.tab ul li {
    float: left;
    list-style: none;
    width: 94px;
    font-size: 14px;
    line-height: 12px;
    text-align: center;
    border-right: 1px solid #fff;
    cursor: pointer;
}

.tab .search {
    width: 40px;
    text-align: center;
    margin-right: 30px;
}

.top_w {
    width: 100%;
    height: 350px;
    /* padding: 20px 10px 20px 10px; */
    position: relative;
    background-color: bisque;
}

.topw_s {
    padding: 15px 5% 15px 5%;
    position: relative;
    z-index: 99;
}

.logo {
    float: left;
    width: 40%
}

.logo img {
    height: 60px;
}

.nav {
    float: right;
    width: 55%;
    padding: 20px 0 10px 0;
}
.nav a {
    font-size: 16px;
}
.el-dropdown {
    width: calc(100%/8);
    text-align: center;
}

.el-dropdown-link {
    /* cursor: pointer; */
    /* color: #fff; */


    /* padding:0,100%,0,100%; */
    /* width:100%; */
}

.el-dropdown-link a {
    color: #fff;
    text-decoration: none;
    /* width: 50%; */
    display: inline-block;
    /* padding */
}

.graduate a {
    background-color: #8fbbd75f;
    padding: 3px 15px;
    border-radius: 12px;
}

.el-icon-arrow-down {
    font-size: 14px;
}

/* .navtit>>>.el-dropdown-menu{
    background-color:#0c57b0 ;
  } */
.el-dropdown-menu,
.popper__arrow {
    background-color: #0c57b0;
    color: #fff;
}

.el-dropdown-menu a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;

}

.el-dropdown-menu a:hover {
    color: #0c57b0;
}

.el-carousel__item img {
    width: 100%;
}

.el-carousel {
    width: 100%
}

.el-carousel__item {
    width: 100%;
}

.carousel {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}

.hlink {
    position: absolute;
    bottom: 0;
    text-align: center;
    left: 0;
    right: 0;
    padding-bottom: 13px;
    /* transform: translateX(-14%); */
    z-index: 999;
    width: 100%;
    /* background-color: #3d454b1b; */

    background-image: linear-gradient(#a1a5a808, rgba(15, 15, 14, 0.57));
    /* margin:0 atuo; */
    /* box-shadow: 0 10px 10px #161718aa; */
}

/* .hlink ul{
    box-shadow: 0 5px 30px #161718aa;
} */
.hlink ul li {
    display: inline-block;
    border-right: #909192 solid 1px;
    width: 12%;
    text-align: center;
    box-sizing: border-box;
    line-height: 57px;
}

.hlink ul li:last-child {
    border: none;
}

.hlink ul li .iconLink {
    width: 57px;
    transform: translateY(16%);
    display: inline-block;
    text-align: center;
}
.hlink ul li .iconLink  img{
    transition: 0.3s;
}
.hlink ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    vertical-align: middle;
}

.hlink ul li a:hover {
    font-weight: bold;
}
.hlink ul li a:hover .iconLink img{
    transform: scale(1.2);
            /* 指定变形原点 */
            transform-origin: 0 0;
}
/* ------------------------- */
.middle {
    width: 88%;
    margin: 0 auto;
    /* background-color: #86c2f5; */
    padding-bottom: 65px;
}

.serTab {
    display: inline-block;
    font-size: 16px;
    width: 90px;
    /* margin:0 20px 0 0; */
    margin-right: 40px;
    line-height: 33px;
    background-color: #e6e6e6;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
}

.mess {
    /* display: inline-block; */
}

.active {
    background-color: #0c57b0;
    color: #fff;
}

.serDetail {
    width: 85%;
    margin: 0 auto;
}

.wordMessage {
    display: flex;
}
.middleMessage{
    margin-top: 20px;
    margin-left: 30px;
}

.leftNews {
    width: 65%;
    padding-top: 20px;
}

.newsDetail {
    display: flex;
    justify-content: space-between;
   margin-left:30px;
}

.picNews {
    width: 50%;
}

.titNews {
    width: 49%;
}

.rightNotice {
    width: 35%;
}
.good{
    height:66px;
    background-color: #0c57b0;
    border-radius: 10px;  
    margin-top: 30px;
    width: 90%;
    /* margin: 0 auto; */
    margin-left: 28px;
    padding:13px 0px 10px 0px;
}
.good .show{
    display: inline-block;
    color:#fff;
    width:25%;
    text-align: center;
}
.good .show .goodImg{
    background-color: #fff;
    width:66px;
    height:66px;
    /* line-height: 66px; */
    overflow: hidden;
    border-radius: 50%;
    position: relative;
}
.good .show .goodImg img{
    width:40px;
    margin: 50% auto;
    transform: translateY(-50%);
}
.good .show .describe{
    padding-left:5px;
    line-height: 23px;
}
.good .show>div{
    display: inline-block;
}
.good .show h4{
    font-size: 22px;
    font-weight: bold;
}
.good .show p{
    font-size:16px;
}
/* --------------------- */
.bottom{
    height:109px;
    /* line-height:109px; */
    /* width:80%; */
    margin: 0 auto;
    /* margin-top: 65px; */
    /* text-align: center; */
    display:flex;
    justify-content: space-between;
    padding:31px 10% 10px 10%;
    color:#fff;
    box-shadow: 0 -13px 1px #86c2f5;
    background: url("../assets/image/bottom.jpg") 100% 100%;
    /* padding:31px 110px 10px 110px; */
}
.bottom .bottom_left{
    font-size: 14px;
}
.bottom .cirlogo{
    width:66px;
    height:66px;
    border-radius: 50%;
    overflow:hidden;
    display: inline-block;
    transform: translateY(50%);
}
.bottom .bottom_left p{
    display: inline-block;
    padding-left:13px;
}
/* .bottom .bo */
.bottom .cirlogo img{
    width:100%;
    
}
.bottom .bottom_right>div{
    display:inline-block;
    width:152px;
    margin:0 auto;
    font-size: 12px;
    text-align: center;
    height:76px;
}
.bottom .bottom_right>div img{
    /* width:100%; */
    width:76px;
}
/* .hlink ul li span{
    vertical-align: middle;
    display: inline-block;
} */
/* .nav>>>.el-dropdown-menu__item{
    background-color: #0c57b0;
  } */</style>