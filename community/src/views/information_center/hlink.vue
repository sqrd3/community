<template>
  <div>
    <div class="box">
        <a href="#">
           <div class="img"> <img src="../../assets/img/information_center/h-link1.png" alt=""></div>
            <span>校园卡</span>
         </a>
        <a href="#">
            <div class="img"> <img src="../../assets/img/information_center/h-link2.png" alt=""></div>
            <span>校园网</span>
         </a>
        <a href="#">
            <div class="img"> <img src="../../assets/img/information_center/h-link3.png" alt=""></div>
            <span>办事大厅</span>
         </a>
        <a href="#">
            <div class="img"> <img src="../../assets/img/information_center/h-link4.png" alt=""></div>
            <span>正版软件</span>
         </a>
        <a href="#">
            <div class="img"> <img src="../../assets/img/information_center/h-link5.png" alt=""></div>
            <span>珞珈在线</span>
         </a>
        <a href="#">
            <div class="img"> <img src="../../assets/img/information_center/h-link6.png" alt=""></div>
            <span>超算中心</span>
         </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.box a{
    display: block;
    width:31%;
    background-color: #67ceb8;
    height:42px;
    line-height: 42px;
    margin-top:10px;
    text-align:center;
    text-decoration-line: none;
    border-radius: 5px;
    color:#ffff;
    font-size: 13px;
    overflow: hidden;
}
.box a .img{
    /* display: inline-block; */
    /* vertical-align: middle; */
    /* border: 1px solid #ddd; */
	    /*转换表格属性*/
	   	/* display: table-cell; */
	   	/*垂直方向居中*/
	   	/* vertical-align: middle; */
	   	 /*水平方向居中*/

    /* margin-right:10px; */
    position: relative;
    /* width:30%;
    height:42px; */
    /* background-color: rgb(46, 139, 220); */
  
}
.box a img{
    width: 20px;
    height: 20px;
 position:absolute;
 left:10px;
 right: 0;
 top: 10px;
 bottom: 0;
}
.box a span{
    display: inline-block;
    margin-left: 20px;
    /* background-color: black; */
}

</style>