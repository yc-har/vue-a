import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

var store = new vuex.Store({
  state:{
    num:90
  },
  getters:{
      getNum(state){
          return state.num + '元'

      }
  }
})

export default store