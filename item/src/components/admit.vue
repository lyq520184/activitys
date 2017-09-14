<template>
    <div class="admit">
        <h1 class="lan">{{name}}</h1>
        <div class="scoll-init">
            <span>
                <b>主修课程 : </b>{{majors}}</span>
            <span>
                <b>课程特色 : </b>{{character}}</span>
        </div>
        <p class="p"></p>
        <div class="but">
            <span class="strategy"></span>
            <span class="run" @click="zhe"></span>
        </div>
        <div class="zhe">
            <p>分享给你的小伙伴,ke</p>
        </div>
    </div>
</template>


<script>
window.onload = window.onresize = function() {
    var rem = document.getElementsByTagName('body')[0].clientWidth * 100 / 320;
    document.documentElement.style.fontSize = rem + 'px';
};
export default {
    data() {
        return {
            name: "",
            majors: "",
            character: "",
            dataAll: null
        }
    },
    methods:{
        zhe(){
           
        }   
    },
    created() {
        this.$http.get("./api/list")
            .then((res) => {
                this.dataAll = res.data;
                var num = Math.floor(Math.random() * Object.keys(this.dataAll).length) + 1;
                if (num < 10) { num = '0' + num } else { num += '' };
                let { name, majors, character } = this.dataAll['school' + num];
                this.name = name;
                this.majors = majors;
                this.character = character;
            })
    }
}
</script>

<style>
.admit {
    width: 323px;
    height: 80%;
    margin: 0 auto;
    background: url("../imgs/bg-matriculate.png") no-repeat center top;
    background-size: 100% 100%;
    margin-top: 12%;
    position: relative;
    transition: all 1s linear;

    animation: Rotate .5s linear .5s;
}

.scoll-init {
    width: 100%;
    padding: 0 30px;
    position: absolute;
    font-size: 14px;
    top: 155px;
    box-sizing: border-box;
}

.scoll-init span {
    display: block;
    margin-top: 6px;
}

.lan {
    width: 100%;
    font-size: 26px;
    font-weight: normal;
    position: absolute;
    top: 125px;
    text-align: center
}

.p {
    width: 130px;
    height: 130px;
    background: url("../imgs/seal.png") no-repeat center top;
    background-size: contain;
    position: absolute;
    right: -10px;
    animation: Scale .2s linear;
}

@keyframes Rotate {
    0% {
        transform: rotate(0);
    }
    20% {
        transform: rotate(3deg);
    }
    40% {
        transform: rotate(-3deg);
    }
    50% {
        transform: rotate(0deg);
    }
    60% {
        transform: rotate(2deg);
    }
    70% {
        transform: rotate(-1.5deg);
    }
    80% {
        transform: rotate(1.1deg);
    }
    90% {
        transform: rotate(-.6deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes Scale {
    0% {
        transform: scale(3);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.but {
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 50px;
    display: flex;
    justify-content: space-around;
}

.but .strategy {
    display: inline-block;
    width: 40%;
    height: 100%;
    background: url("../imgs/btn-intr.png") no-repeat center top;
    background-size: 100% 100%;
}

.but .run {
    display: inline-block;
    width: 40%;
    height: 100%;
    background: url("../imgs/btn-share.png") no-repeat center top;
    background-size: 100% 100%;
}
</style>
