<template>
   <div class="title">
                <h4><slot name="chin">大</slot>
                    <span class="eng">/<slot name="eng">小</slot></span>
                </h4>
                <div class="mess"> <a :href="this.messPath"><img src="../../assets/img/information_center/moreInfor.png" alt=""></a></div>
            </div>
</template>

<script>
export default {
    props:{
        messPath:{
            type:String,
            default:"#"
        },
    }
}
</script>

<style scoped>
.title{
    margin-top: 13px;
    vertical-align: middle;
    height:40px;
    line-height: 40px;
    position: relative;
}
.title h4{
    display: inline-block;
    font-size: 16px;
    color:#777;
    font-weight: normal;
    /* padding-left: 10px; */
    /* vertical-align: middle; */
}
.title h4::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 3px;
    background: #00a185;

}
.title h4 .eng{
    font-size: 12px;
}
.title .mess{
float:right;
margin-right: 5px;
}
.title .mess img{
    width:14px;
}
</style>