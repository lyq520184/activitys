<template>
	<div class="science">
		<p class="head">化学题 第一题/共四题</p>
		<p class="center">{{getDate[count].title}}</p>
		<p class="bottom">
			<span class="an1" an @click="change_bg(0)" :class="{'anwser':bg[0]}">
				<b class="A"></b>{{an1}}</span>
			<span class="an2" @click="change_bg(1)" :class="{'anwser':bg[1]}">
				<b class="B"></b>{{an2}}</span>
			<span class="an3" @click="change_bg(2)" :class="{'anwser':bg[2]}">
				<b class="C"></b>{{an3}}</span>
		</p>
	</div>
</template>

<script>
export default {
	name: 'science',
	data: function() {
		return {
			bg: [false, false,false],
			ques_name: "",
			getDate: null,
			count:0,
			an1: "",
			an2: "",
			an3: "",
			type: this.$route.params.id,
		}
	},
	watch:{
		count(){
			this.bg = [!1, !1, !1];
		}
	},
	methods: {
		change_bg(ind) {
			this.bg = [!1, !1, !1];
			this.bg[ind] = !0;
			if(this.count < this.getDate.length-1){
				setTimeout(()=> {
					this.count += 1;
					this.an1=this.getDate[this.count].answers[0];
					this.an2=this.getDate[this.count].answers[1];
					this.an3=this.getDate[this.count].answers[2];
				}, 300);

			}else{
				setTimeout(()=> {
        			this.$router.replace("/admit")
				}, 1000);
			}
			
		},
	},
	created: function() {
		this.$store.commit("get_data", this.type);
		this.getDate = this.$store.state.datalist ;
		this.an1=this.getDate[this.count].answers[0];
		this.an2=this.getDate[this.count].answers[1];
		this.an3=this.getDate[this.count].answers[2];
	}
}
</script>

<style scoped>
.science {
	width: 90%;
	height: 90%;
	margin: 25px auto;
}

.head {
	width: 100%;
	height: 45px;
	text-align: center;
	background: url("../imgs/bg-qustion-top.png") no-repeat center top;
	background-size: cover;
	font-size: 14px;
	line-height: 2;
	font-weight: bold;
	color: green;
}

.center {
	width: 100%;
	min-height: 55px;
	text-align: center;
	background: url("../imgs/bg-question-center.png") no-repeat center top;
	background-size: 100% 100%;
	font-size: 14px;
	line-height: 25px;
	text-align: left;
	padding: 0 20px;
	box-sizing: border-box
}

.bottom {
	width: 100%;
	height: 75%;
	background: url("../imgs/bg-question-bottom.png") no-repeat center top;
	background-size: cover;
	font-size: 14px;
	padding: 0 14px;
	padding-top: 8px;
	box-sizing: border-box;
}

.bottom span {
	position: relative;
	display: flex;
	align-items: center;
	margin-top: 10px;
	padding: 2px 45px;
	font-size: 16px;
	font-weight: bold;
	box-sizing: border-box;
	color: #fff;
}

.an1,
.an2,
.an3 {
	display: inline-block;
	width: 100%;
	height: 46px;
	background: url("../imgs/btn-bg-select.png") no-repeat center top;
	background-size: 100% 150px;
}

.anwser {
	background-position: 0 -80px;
}

.bottom span b {
	display: inline-block;
}

.A {
	width: 30px;
	height: 28px;
	background: url("../imgs/a.png") no-repeat center top;
	background-size: cover;
	position: absolute;
	left: 8px;
	top: 7px;
}

.B {
	width: 22px;
	height: 32px;
	background: url("../imgs/B.png") no-repeat center top;
	background-size: cover;
	position: absolute;
	left: 12px;
	top: 7px;
}

.C {
	width: 25px;
	height: 32px;
	background: url("../imgs/C.png") no-repeat center top;
	background-size: cover;
	position: absolute;
	left: 10px;
	top: 7px;
}
</style>
