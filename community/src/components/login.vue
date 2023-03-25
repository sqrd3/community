<template>
  <div class="wrapper">
    <div class="header">
        <img class="img" src="../assets/image/gnnutop2.jpg">
        <div class="language" @click="language">
            <img src="../assets/image/change.png" alt="">
            <span v-show="isEnglish==0">English</span>
            <span v-show="isEnglish==1">中文</span>
        </div>
    </div>
    <div class="content">
        <div class="login-left"></div>
        <div class="auth-left">
          
            <img src="../assets/image/timg2.jpg" alt="" class="image">
            <!-- <div class="remark">
                <h3 class="justify">统一身份认证</h3>
                <ul class="mention">
                    <li>◆ 首次完成身份认证后，务必在个人中心修改初始密码，绑定邮箱和手机号</li>
                    <li>◆ 除账号密码登录外，还可通过动态码或微信登录</li>
                    <li>◆ 若忘记密码，请点击登录下面的忘记密码自助修改</li>
                    <li>◆ 在办理完统一身份认证相关业务后，请点击右上角的安全退出按钮</li>
                </ul>
                <p class="aqts">　　　安全提示：为了您的安全，请不定期修改密码</p>
            </div> -->
        </div>
        <div class="login-right">
               <h3 class="justify">统一身份认证</h3>
            <div class="logodz">
                <img src="../assets/image/logo.png" alt="">
            </div>
            <div class="auth-tab">
                <div class="tab-link">
                    <ul v-show="isEnglish==0">
                         <li v-for="(item,index) in cn" :key="index" @click="select(index)" :class="{selected:index==selected}">{{item}}</li>
                    </ul>
                     <ul v-show="isEnglish==1">
                        <li v-for="(item,index) in eg" :key="index"  @click="select(index)" :class="{selected:index==selected}">{{item}}</li>
                    </ul>
                </div>
                <div class="clearfloat"></div>
                <div class="tab-content">
                    <div class="content-item" v-show="selected==0">
                        <div class="item">
                            <p class="lable-c" v-show="isEnglish==0">账号</p>
                            <p class="lable-r" v-show="isEnglish==1">Account</p>
                            <input type="text" class="inputdz" placeholder="学号" v-show="isEnglish==0"> 
                            <input type="text" class="inputdz" placeholder="ID" v-show="isEnglish==1"> 
                        </div>
                        <div class="item">
                            <p class="lable-c" v-show="isEnglish==0">密码</p>
                            <p class="lable-r" v-show="isEnglish==1">Password</p>
                            <!-- <input type="password" class="inputdz" placeholder="密码" v-show="isEnglish==0"> -->
                            <el-input  prefix-icon="el-icon-lock" v-show="isEnglish==0" placeholder="请输入密码" v-model="userInfo.password"
              show-password></el-input>
                             <el-input  prefix-icon="el-icon-lock" v-show="isEnglish==1" placeholder="password" v-model="userInfo.password"
              show-password></el-input>
              <hr>
                        </div>
                    </div>
                    <div class="content-item" v-show="selected==1">
                          <div class="item">
                            <p class="lable-c" v-show="isEnglish==0">手机号</p>
                            <p class="lable-r" v-show="isEnglish==1">Phone number</p>
                            <input type="text" class="inputdz" placeholder="手机号" v-show="isEnglish==0">
                            <input type="text" class="inputdz" placeholder="Phone number" v-show="isEnglish==1"> 
                        </div>
                        <div class="item">
                            <p class="lable-c" v-show="isEnglish==0">动态码</p>
                            <p class="lable-r" v-show="isEnglish==1">Dynamic code</p>
                            <input type="text" class="inputdz" placeholder="动态码"  v-show="isEnglish==0">
                            <input type="text" class="inputdz" placeholder="Dynamic code"  v-show="isEnglish==1">
                        </div>
                    </div>
                    <div class="content-item" v-show="selected==2"></div>
                </div>
            </div>
            <div class="question">
               <input type="checkbox" name="" class="ck">近期免登录
               <a href="">忘记密码？</a>
            </div>
            <div class="btn"><button class="enter">登录</button></div >
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
           isEnglish:0,
           cn:["账号登录","动态码登录","微信登录"],
           eg:["Account login","Code login","Wechat login"],
           selected:0,
           userInfo:{
            password:"",
            account:""
           }
        }
    },
    methods:{
        language(){
            this.isEnglish==0?this.isEnglish=1:this.isEnglish=0
        },
        select(index){
            this.selected=index

        }
    }
}
</script>

<style scoped>
.item >>>.el-input__inner {
    border: 0;
    border-bottom: 1px;
  }
.btn{
    width: 80%;
    text-align: center;
    display: block;
    margin: auto;
    margin-top: 20px;
}
.enter{
    display: block;
    background: rgb(44,90,177);
    color: #fff;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border-radius: 3px;
    text-decoration: none;
    border: 1px solid transparent;
    width: 100%;
}
.question a{
    float: right;
    margin-right: 20px;
}
a{
    text-decoration: none;
}
.ck{
    margin-left: 40px;
}
.item span{
    position: absolute;
    left: 80px;
    font-size: 13px;
    color: red;
}
.item input{
    width: 100%;
    padding-left: 15px;
    box-sizing: border-box;
    height: 30px;
    border: none;
    outline: none;
    border-bottom: 1px solid #cdcdcd;
}
.item p{
    font-size: 16px;
    color: #000000;
    line-height: 22px;
    margin: 0;
}
.item{
    position: relative;
    margin-top: 0;
    margin-bottom: 17px;
}
.wrapper{
    width: 100%;
    height: 100vh;
}
.auth-left{
    width: calc(100% - 440px);
    height: 100%;
    float: left;
    position: relative;
}
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
    border-bottom: 2px solid rgb(44,90,177);
}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.header{
    height: 60px;
    /* background: url(../images/topbg.png); */
    background: rgb(44,90,177);
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
.content .login-left{
    width: 50%;
    height: 287px;
    float: left;
    position: relative;
    display: none;
}
.login-right{
    width: 440px;
    height: 100%;
    background: #fff;
    float: right;
    box-shadow: -4px 0 8px 4px rgba(0,0,0,0.20);
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
    color:#000000;
    letter-spacing: 0;
    font-weight: 600;
    padding-left: 10px;
    border-left: 4px solid #00A185;
    /* margin: 0 0 40px; */
    margin-left: 20px;
    margin-top: 20px;
}
.mention{
    list-style: none;
    padding: 0;
    display: block;
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
.content-item{
    position: relative;
    padding-top: 20px;
    max-width: 362px;
    max-height: 300px;
    overflow: hidden;
}
</style>