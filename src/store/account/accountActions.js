// accountActions.js
import axios from "axios";
import cookies from "vue-cookies";

export default {
  login({ commit }, payload) {
    const { email, password } = payload;
    return axios
      .post("http://localhost:7777/member/sign-in", { email, password })
      .then((res) => {
        if (res.data) {
          commit("setAuthenticated", true);
          return res.data;
        } else {
          alert("아이디 혹은 비밀번호가 존재하지 않거나 틀렸습니다.");
          return null;
        }
      });
  },
    logout({ commit }) {
        let token = localStorage.getItem("userInfo");
        axios.post("http://localhost:7777/member/logout", token).then(() => {
        commit("setAuthenticated", false);
        localStorage.removeItem("userInfo");
        alert("로그아웃 완료");
        });
    },
    resign({ commit }) {
        let token = localStorage.getItem("userInfo");
        let userToken = token.split(",")[0].split(":")[1];
        axios.post("http://localhost:7777/member/resign", userToken).then(() => {
        commit("setAuthenticated", false);
        localStorage.removeItem("userInfo");
        alert("회원탈퇴 완료");
        });
    },
};
