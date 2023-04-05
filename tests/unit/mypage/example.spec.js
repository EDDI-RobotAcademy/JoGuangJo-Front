import { shallowMount } from "@vue/test-utils";
import MyPageForm from "@/components/mypage/MyPageForm.vue";

describe("MyPageForm.vue", () => {
  it("renders props.myinfo when passed", () => {
    const myPage = {
      email: "d980104@naver.com",
      city: "서울",
      street: "강남",
      zipcode: 6421,
    };

    const wrapper = shallowMount(MyPageForm, {
      propsData: { myinfo: myPage },
    });
    expect(wrapper.props().myinfo).toEqual(myPage);
  });
});
