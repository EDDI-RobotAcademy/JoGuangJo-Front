// mypageActions.js
import axiosInst from '@/utility/axiosObject';
import router from '@/router'
import * as mypageMutationTypes from './mypageMutation-Types';

const actions = {

  async fetchMyPageData({ commit }) {
    let userInfo = localStorage.getItem('userInfo');
    let token = userInfo.split(',')[0].split(':')[1];
    let realtoken = token.substr(1, token.length - 2);
    try {
      const response = await axiosInst.post('/mypage/list', realtoken);
      commit(mypageMutationTypes.SET_MY_PAGE_DATA, response.data);
    } catch (error) {
      console.error('Error fetching myPageData:', error);
    }
  },

  saveAddress({ commit }, addressData) {
    axiosInst.post("/mypage/saveAddress", addressData)
      .then((res) => {
        console.log('Response data:', res.data);
        alert("주소저장을 완료하였습니다.");
        router.push({ name: 'MyPage' });
        commit(mypageMutationTypes.UPDATE_MY_PAGE_DATA, res.data);
      })
  },

  async checkCurrentPassword({ commit }, payload) {
    console.log("mapActions 함수 실행")
    console.log("payload" + payload)
    try {
      const response = await axiosInst.post("/mypage/passwordCheck", payload);
      console.log("response.data : " + response.data)
      commit('SET_IS_CURRENT_PASSWORD_CORRECT', response.data);
    } catch (error) {
      console.error('Error while checking the current password:', error);
    }
  },

  async registerModifiedPassword({ commit }, payload) {
    try {
      const response = await axiosInst.post("/mypage/registerModifiedPassword", payload);
      commit('SET_PASSWORD_UPDATE_STATUS', response.data);
    } catch (error) {
      console.error('Error while updating the password:', error);
    }
  },

  async submitRequest({ commit },{ selectedMemberType, requestMessage }) {
    if (!selectedMemberType || !requestMessage) {
      console.log("getters.selectedMemberType : " + selectedMemberType )
      console.log("getters.requestMessage : " + requestMessage )
      alert("정보들을 입력하세요.");
      return;
    } 

    const memberTypeRequestData = {
      memberId: JSON.parse(localStorage.getItem("userInfo")).id,
      memberType: selectedMemberType,
      message: requestMessage,
    };

    console.log(memberTypeRequestData.memberId)
    console.log(memberTypeRequestData.memberType)
    console.log(memberTypeRequestData.message)
    try {
      const response = await axiosInst.post("/mypage/memberTypeRequest", 
      memberTypeRequestData
      );
      if (response.data) {
        alert("잘 됨.");
      } else {
        alert("잘 안됨.");
      }
    } catch (error) {
      console.error("에러:", error);
    }
  },

  async fetchMemberTypeRequests({ commit }) {
    try {
      const response = await axiosInst.get("/mypage/memberTypeRequestList");
      commit(mypageMutationTypes.SET_MEMBER_TYPE_REQUESTS, response.data);
    } catch (error) {
      console.error("Error fetching member type requests:", error);
    }
  },

  async fetchMemberTypeRequest({ commit }, id) {
    console.log("I'll find you")
    try {
      const response = await axiosInst.get(`/mypage/memberTypeRequest/${id}`);
      console.log("fetchMemberTypeRequest");
      console.log(response.data);
      commit(mypageMutationTypes.SET_MEMBER_TYPE_REQUEST, response.data);
      console.log("Found it")
    } catch (error) {
      console.error("Error fetching member type request details:", error);
    }
  },
  
  async acceptRequest(_, requestData) {
    try {
      await axiosInst.post('/mypage/rollrequestaccept', requestData);
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  },
  
  async rejectRequest(_, requestData) {
    try {
      await axiosInst.post('/mypage/rollrequestreject', requestData);
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  },
  
  async findmypost() {
    let memberId = JSON.parse(localStorage.getItem('userInfo')).id;
    console.log("작동됨됨 : " + memberId)
    try {
      await axios.post('http://localhost:7777/mypage/findmypost', memberId);
      console.log("작동됨");
    } catch (error) {
      console.log("findmypost에서 에러 발생 : ", error);
    }
  },

};

export default actions;