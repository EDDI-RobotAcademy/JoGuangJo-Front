//mypageMutations.js
import * as mypageMutationTypes from './mypageMutation-Types';
// 해당 코드는 mypageMutation-Types에 정의한 모든 코드들을 다 가져옴 따로 import할 필요 없음 
const mutations = {
  [mypageMutationTypes.SET_MY_PAGE_DATA]: (state, data) => {
    state.myPageData = data;
  },
  [mypageMutationTypes.UPDATE_MY_PAGE_DATA]: (state, data) => {
    state.myPageData = data;
  },
  [mypageMutationTypes.SET_IS_CURRENT_PASSWORD_CORRECT](state, isCorrect) {
    state.isCurrentPasswordCorrect = isCorrect;
  },
  [mypageMutationTypes.SET_PASSWORD_UPDATE_STATUS](state, isUpdated) {
    state.isPasswordUpdated = isUpdated;
  },
  [mypageMutationTypes.SET_SELECTED_MEMBER_TYPE](state, selectedMemberType) {
    state.selectedMemberType = selectedMemberType;
  },
  [mypageMutationTypes.SET_SELECTED_REQUEST_MESSAGE](state, requestMessage) {
    state.requestMessage = requestMessage;
  },
  [mypageMutationTypes.SET_MEMBER_TYPE_REQUESTS](state, memberTypeRequests) {
    state.memberTypeRequests = memberTypeRequests;
  },
};

export default mutations;