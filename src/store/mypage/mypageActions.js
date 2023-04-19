// mypageActions.js
import axios from 'axios';
import * as mypageMutationTypes from './mypageMutation-Types';

const actions = {
  async fetchMyPageData({ commit }) {
    let userInfo = localStorage.getItem('userInfo');
    let token = userInfo.split(',')[0].split(':')[1];
    let realtoken = token.substr(1, token.length - 2);

    try {
      const response = await axios.post('http://localhost:7777/mypage/list', realtoken);
      commit(mypageMutationTypes.SET_MY_PAGE_DATA, response.data);
    } catch (error) {
      console.error('Error fetching myPageData:', error);
    }
  },

  saveAddress({ commit }, addressData) {
    axios.post("http://localhost:7777/mypage/saveAddress", addressData)
      .then((res) => {
        console.log('Response data:', res.data);
        commit(mypageMutationTypes.UPDATE_MY_PAGE_DATA, res.data);
      })
  },

  async checkCurrentPassword({ commit }, payload) {
    console.log("mapActions 함수 실행")
    console.log("payload" + payload)
    try {
      const response = await axios.post("http://localhost:7777/mypage/passwordCheck", payload);
      console.log("response.data : " + response.data)
      commit('SET_IS_CURRENT_PASSWORD_CORRECT', response.data);
    } catch (error) {
      console.error('Error while checking the current password:', error);
    }
  },

  async registerModifiedPassword({ commit }, payload) {
    try {
      const response = await axios.post("http://localhost:7777/mypage/registerModifiedPassword", payload);
      commit('SET_PASSWORD_UPDATE_STATUS', response.data);
    } catch (error) {
      console.error('Error while updating the password:', error);
    }
  },
};

export default actions;