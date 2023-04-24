// mypageActions.js
import axiosInst from '@/utility/axiosObject';
import router from '@/router'
import store from "@/store";
import * as mypageMutationTypes from './mypageMutation-Types';

const actions = {

  async requestAccountInformation({ commit }) {
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

  requestRegisterAddress({ commit }, addressData) {
    axiosInst.post("/mypage/saveAddress", addressData)
      .then((res) => {
        console.log('Response data:', res.data);
        alert("주소저장을 완료하였습니다.");
        router.push({ name: 'MyPageView' });
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
      if(response.data) {
        alert("비밀번호가 일치합니다!!!");
        return true;
      } else {
        alert("비밀번호가 불일치합니다!!!");
        return false;
      }
    } catch (error) {
      console.error('Error while checking the current password:', error);
      alert("알 수 없는 오류가 생성되었습니다./n고객지원센터 02)123-4567");
    }
  },

  async registerModifiedPassword({ commit }, payload) {
    try {
      const response = await axiosInst.post("/mypage/registerModifiedPassword", payload);
      commit('SET_PASSWORD_UPDATE_STATUS', response.data);
      if(response.data) {
        await store.dispatch("account/logout");
        alert("비밀번호가 변경되었습니다.");
        router.push({ name: 'home' });
      } else {
        alert("해당하는 회원 정보가 존재하지 않습니다.")
      }
    } catch (error) {
      console.error('Error while updating the password:', error);
      alert("알 수 없는 오류가 생성되었습니다." <br> "고객지원센터 02)123-4567");
    }
  },

  async requestRegisterMemberRoleRequset({ commit },{ selectedMemberType, requestMessage }) {
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
        alert("등급요청이 등록되었습니다.");
      } else {
        alert("등급요청에 오류가 있습니다.\n멤버아이디가 없거나 이미 요청을 등록하셨습니다.");
      }
      router.push({name:'MyPageView'});
    } catch (error) {
      console.error("에러:", error);
    }
  },

  async requestMemberRoleList({ commit }) { 
    try {
      const response = await axiosInst.get("/mypage/memberTypeRequestList");
      commit(mypageMutationTypes.SET_MEMBER_TYPE_REQUESTS, response.data);
    } catch (error) {
      console.error("Error fetching member type requests:", error);
    }
  },

  async requestReadMemberRoleRequest({ commit }, id) {
    console.log("I'll find you")
    try {
      const response = await axiosInst.get(`/mypage/memberTypeRequest/${id}`);
      console.log("requestReadMemberRoleRequest");
      console.log(response.data);
      commit(mypageMutationTypes.SET_MEMBER_TYPE_REQUEST, response.data);
      console.log("Found it")
    } catch (error) {
      console.error("멤버 등급 요청 페이지 읽기 중 오류남:", error);
    }
  },
  
  async requestMemberRoleAccept(_, requestData) {
    try {
      await axiosInst.post('/mypage/rollrequestaccept', requestData);
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  },
  
  async requestMemberRoleReject(_, requestData) {
    try {
      await axiosInst.post('/mypage/rollrequestreject', requestData);
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  },
  
  goMypage() {
    router.push({ name: 'MyPageView' });
  },

  async findMyPost({commit}) { 
    const findmypostrequest = {
      memberId : JSON.parse(localStorage.getItem('userInfo')).id
    }
    // 이유모를 오류로 객체로 보내기
    // let memberId = JSON.parse(localStorage.getItem('userInfo')).id;
    // let은 함수안에만 선언될수있는 함수 memberId = 가지고 오는 값의 이름
    // JSON.parse(매개변수) = 매개변수의 값을 JSON으로 바꿔준다, String같은거 
    // (localStorage.getItem('userInfo')).id = 많은 값에서 id만 가져온다
    console.log("작동됨됨 : " + findmypostrequest)
    // findmypostrequest객체
    console.log("작동됨됨 : " + findmypostrequest.memberId)
    // findmypostrequest객체의 memberId라는 속성
    // 확인 멤버아이디

    try {
      const response = await axiosInst.post('/mypage/findmypost', findmypostrequest);
      // 백엔드 컨트롤러랑 연결시켜주는거
      console.log("작동됨");
      commit(mypageMutationTypes.REQUEST_QNA_BOARD_LIST_TO_SPRING, response.data);
    } catch (error) {
      console.log("findmypost에서 에러 발생 : ", error);
    }
  }, // 얘는 특정
     // async > 받아오는동안 작업가능 > 비동기 > try,catch사용가능
     // 동기 > 모든정보받아오는동안 작업불가능
};   // commit > 변경사항을 적용시킨다 

export default actions;