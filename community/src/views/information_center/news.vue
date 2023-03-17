<template>
    <div>
        <div class="box">
            <title-vue :mess-path="morePath">
                <span slot="chin">新闻资讯</span>
                <span slot="eng">News</span>
            </title-vue>
            <div class="carousel">
                <div @click="newDetail()">
                    <div><img src="../../assets/img/information_center/lunbo22.jpg" alt=""></div>
                    <div class="content">
                        <h4>市妇联党组书记、主席刘春香一行莅校开展走访慰问活动</h4>
                        <p>3月16日，赣州市妇联党组书记、主席刘春香，党组成员、副主席肖宏蕾一行到我校，走访慰问我校全国先进工作者、全国三八红旗手、国家脐橙工程技术研究中心主任、生命科学学院教授钟八莲，国家脐橙工程技术研究中心党支部书记米兰芳。校党委书记朱小理，党委副书记胡龙华会见刘春香一行，校工会、生命科学学院（脐橙学院）负责同志参加。
                        </p>
                    </div>
                </div>
            </div>
            <news-item-vue :list="listMess"></news-item-vue>
        </div>
    </div>
</template>

<script>
import newsItemVue from './newsItem.vue';
import titleVue from './title.vue';
export default {
    data() {
        return {
            morePath: "#",
            listMess: [
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
                },
                {
                    message: '陈义旺赴深圳走访校友并访企拓岗',
                    time: '2023/03/14',
                    path: '#'
                },
            ]
        }
    },
    components: {
        titleVue,
        newsItemVue
    },
    methods: {
        newDetail() {

        }
    }
}
</script>

<style scoped>
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



.content h4 {
    font-size: 14px;
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
    font-size: 12px;
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