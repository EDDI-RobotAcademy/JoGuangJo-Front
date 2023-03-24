import Vue from 'vue'
import Vuex from 'vuex'

import state from "@/store/states"
import actions from "@/store/actions"
import mutations from "@/store/mutations"
<<<<<<< Updated upstream
// import getters from "@/store/getters"
=======
import getters from "@/store/getters"
>>>>>>> Stashed changes

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
<<<<<<< Updated upstream
  // getters,
})
=======
  getters,
})
>>>>>>> Stashed changes
