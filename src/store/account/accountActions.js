// accountActions.js
import axios from "axios";

export default {
  async signup({ commit }, payload) {
    console.log("Received payload in action:", payload);
    const { email, password, nickName, city, street, addressDetail, zipcode } = payload;
    return axios.post("http://localhost:7777/member/sign-up", {
      email,
      password,
      city,
      nickName,
      street,
      addressDetail,
      zipcode,
    });
  },
  resign({ commit }) {
    return new Promise((resolve) =>  {
      let token = localStorage.getItem("userInfo");
      let userToken = token.split(",")[0].split(":")[1];
      axios.post("http://localhost:7777/member/resign", userToken)
      .then(() => {
        commit("setAuthenticated", false);
        localStorage.removeItem("userInfo");
        resolve(true);
      })
      .catch((error) => {
        console.error("Error during membership withdrawal:" , error);
        resolve(false);
      });
    });
  },
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
  async checkDuplicateEmail({ commit }, email) {
    console.l
      try {
        const res = await axios.post(`http://localhost:7777/member/check-email/${email}`);
        return res.data;
      } catch (error) {
        console.log(error);
        return false;
      }
  },
  async checkDuplicateNickName({ commit }, nickName) {
    try {
      const res = await axios.post(`http://localhost:7777/member/check-nickName/${nickName}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async findAccountEmail({ commit }, email) {
    try {
      const res = await axios.post("http://localhost:7777/member/emailMatch", { email });
      if (res.data) {
        alert("인증이 완료되었습니다.");
        return true;
      } else {
        alert("입력하신 정보로 가입된 정보가 없습니다.");
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  async resetPw({ commit }, payload) {
    const { email, password } = payload;
    try {
      await axios.post("http://localhost:7777/member/applyNewPassword/", {
        email,
        password,
      });
      alert("비밀번호가 변경되었습니다.");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};
