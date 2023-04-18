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
};

export default mutations;
