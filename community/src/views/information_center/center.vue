<template>
  <div>
      <top-bar></top-bar>
      <div class="toplunbo"><img src="../../assets/img/information_center/lunbo2.jpg" alt=""></div>
      <hlink></hlink>
      <service-vue></service-vue>
      <news-vue></news-vue>
     <notice-vue></notice-vue>
     <bottom-vue></bottom-vue>
  </div>
</template>

<script>
import topBar from "./top_bar.vue";
import hlink from "./hlink.vue"
import serviceVue from "./service.vue";
import newsVue from "./news.vue";
import noticeVue from "./notice.vue";
import bottomVue from "./bottom.vue";
export default {
    components:{
        topBar,
        hlink,
        serviceVue,
        newsVue,
        noticeVue,
        bottomVue
    }
}
</script>

<style scoped>
.toplunbo{
    margin-top: 60px;
    width:100%;
}
.toplunbo img{
    width:100%
}
</style>