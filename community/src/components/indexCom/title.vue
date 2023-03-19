<template>
   <div class="Tit">
                        <div class="titH">
                            <h4>
                                <span class="chin"><slot name="chin">大</slot></span>
                                <span class="eng"><slot name="eng">小</slot></span>
                            </h4>
                        </div>
                        <div class="serviceTit">
                            <slot name="serviceTit"></slot>
                        </div>
                        <div class="mess"><a :href="messPath"><img src="../../assets/image/moreInfor.png" alt=""></a></div>
                    </div>
</template>

<script>
export default {
    props:{
        messPath:{
            type:String,
            default:""
        }
    }
}
</script>

<style scoped>
.Tit {
    /* margin-top: 25px; */
    display: flex;
    /* padding: 30px 0 35px 0; */
    justify-content: space-around;
}

.Tit .titH {
    position: relative;
}

.Tit h4 .chin {
    font-size: 22px;
    color: #333;
    font-weight: normal;
}

.Tit h4::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 30px;
    height: 3px;
    background: #0c57b0;

}

.Tit h4 .eng {
    font-size: 14px;
    color: #777;

}
.serviceTit {
    width: 55%;
}
</style>