<template>
  <div class="wrapper">
    <div class="header">
        <!-- <img class="img" src=""> -->
        <div class="language">
            <span>English</span>
        </div>
    </div>
    <div class="content">
        <!-- <div class="login-left"></div> -->
        <div class="auth-left">
            <img src="" alt="" class="image">
            <div class="remark">
                <h3 class="justify">统一身份认证</h3>
                <ul class="mention">
                    <li>◆ 首次完成身份认证后，务必在个人中心修改初始密码，绑定邮箱和手机号</li>
                    <li>◆ 除账号密码登录外，还可通过动态码或微信登录</li>
                    <li>◆ 若忘记密码，请点击登录下面的忘记密码自助修改</li>
                    <li>◆ 在办理完统一身份认证相关业务后，请点击右上角的安全退出按钮</li>
                </ul>
                <p class="aqts">安全提示：为了您的安全，请不定期修改密码</p>
            </div>
        </div>
        <div class="login-right">
            <div class="logodz">
                <!-- <img src="" alt=""> -->
            </div>
            <div class="auth-tab">
                <div class="tab-link">
                    <ul>
                        <li>账号登录</li>
                        <li>动态码登录</li>
                        <li>微信登录</li>
                    </ul>
                </div>
                <div class="clearfloat"></div>
                <div class="tab-content"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tab-link li{
    min-width: 25%;
    margin: 0 2%;
    height: 34px;
    line-height: 34px;
    font-size: 16px;
    float: left;
    text-align: center;
    cursor: pointer;
}
.tab-link li.selected{
    border-bottom: 2px solid #00A185;
}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.header{
    height: 60px;
    /* background: url(../images/topbg.png); */
    background-size: 100% 100%;
    overflow: hidden;
    position: relative;
}
.header .img{
    height: 45px;
    margin: 7px 0 0 11%;
}
.language{
    position: absolute;
    right: 100px;
    top: 15px;
    width: 100px;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    color: #fff;
    cursor: pointer;
}
.language img{
    width: 16px;
    margin-right: 5px;
}
.content{
    width: 100%;
    height: calc(100% - 60px);
}
/* .content .login-left{
    width: 50%;
    height: 287px;
    float: left;
    position: relative;
    display: none;
} */
.auth_left{
    width: calc(100% - 440px);
    height: 100%;
    float: left;
    position: relative;
}
.content .login-right{
    width: 440px;
    height: 100%;
    background: #fff;
    float: right;
    box-shadow: -4px 0 8px 4px rgb(0 0 0 / 20%);
}
.image{
    height: 100%;
    width: auto;
    position: absolute;
    left: 0;
    top: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
}
.remark{
    width: 100%;
    padding-top: 170px;
    padding-left: 100px;
    box-sizing: border-box;
    font-size: 14px;
    color: #fff;
    position: relative;
}
.justify{
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 600;
    padding-left: 10px;
    border-left: 4px solid #00A185;
    margin: 0 0 40px;
}
.mention{
    list-style: none;
    padding: 0;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.aqts{
    margin: 0 0 20px;
}
.logodz{
    text-align: center;
    margin-top: 30px;
}
.logodz img{
    width: 72px;
}
.auth-tab{
        width: 100%;
    padding: 0 39px;
    box-sizing: border-box;
}
.tab-link{
    margin-top: 40px;
}
.clearfloat{
    clear: both;
}
</style>