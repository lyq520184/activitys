// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import axios from "axios";
import Vuex from "Vuex";

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
	 questions: null,
	 datalist:null
  },
  mutations: {
    set_ques: function (state, data) {
      state.questions = data;
    },
    get_data(state, id) {
		let arr = [],
			dataAll=[];
      if (id == 0) {
        var temp = [];
        Object.values(state.questions).forEach((val, ind) => {
          if (val.type != 1) {
            temp.push(val)
          }
        })
      } else if (id == 1) {
        var temp = [];
        Object.values(state.questions).forEach((val, ind) => {
          if (val.type == 1 || val.type == 2) {
            temp.push(val)
          }
        })
      }
      // console.log(temp)

		while(arr.length<4){
			let em = random(temp.length)
			if(arr.indexOf(em) == -1){
				arr.push(em)
			}
		}

		arr.forEach((val,ind) => {
		
			dataAll.push(temp[val])

		})

		state.datalist = dataAll;

		function random(max,min){
			return Math.floor(Math.random()*max)
		}
		
    }
  },
  actions: {
    get_ques({ commit },data) {
      commit("set_ques", data)
    },
    get_data({ commit },id) {
      commit("get_data", id)
    }
  },
  getters: {
    get_data(state) {
      return state.questions;
    }
  }
})



Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  beforeCreate() {
    this.$http.get("./api/data")
      .then((res) => {
        this.$store.dispatch("get_ques", res.data)
      })
  },
  store,
  template: '<App/>',
  components: {
    App
  }
})
