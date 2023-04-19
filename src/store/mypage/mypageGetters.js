// mypageGetters.js
const getters = {
myPageData: (state) => {
    return state.myPageData;
},
selectedMemberType: (state) => {
    return state.selectedMemberType;
},
requestMessage: (state) => {
    return state.requestMessage;
},
memberTypeRequests: (state) => {
    return state.memberTypeRequests;
}
};

export default getters;
