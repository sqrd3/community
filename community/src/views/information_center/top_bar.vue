<template>
    <div class="all">
        <div class="box">
            <div class="img">
                <img src="../../assets/img/information_center/logo2.png" alt="">
            </div>
            <div class="title">
                <p class="Chinese">信息中心</p>
                <p class="English">INFORMATION CENTER</p>
            </div>
            <div class="more"><a href="#"><img src="../../assets/img/information_center/more.png" alt=""></a></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>


.box {
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 60px;
    background-color: #00a185;
}

.box>div {
    text-align: center;
    margin-top:15px;
}
.img img {
    height: 40px;
}

.title {
    color: #eaf7f5;
}
.title .Chinese{
    font-size:16px;
    /* font-weight: bold; */
}
.title .English{
    font-size:10px;
}
.more img {
    width: 30px;
   margin-right:10px;
}
</style>