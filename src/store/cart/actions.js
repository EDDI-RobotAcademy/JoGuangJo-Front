import {
    REQUEST_CART_LIST_FROM_SPRING,
} from './mutation-types'

import axiosInst from '@/utility/axiosObject';

export default {
    requestRegisterCartToSpring({}, payload) {
        const {memberId, productId, count} = payload
        console.log("actions.js \n memberId = " + memberId + "\nproductId = " + productId + "\ncount = " + count)
            return axiosInst.post(`/cart/register`, {memberId, productId, count})
            .then(() => {
            })
    },

    requestCartListFromSpring({commit}, memberId) {
        console.log("list 요청 테스트 완료.");
        console.log("actions.js\n cart memberId " + memberId);
            return axiosInst.get(`/cart/list/${memberId}`)
            .then((res) => {
                commit(REQUEST_CART_LIST_FROM_SPRING, res.data)
            })
    },

    requestDeleteCartItemToSpring({ }, cartItemIds) {
        console.log("actions.js \n delete request = " + cartItemIds);
            return axiosInst.delete(`/cart/delete?cartItemIds=${cartItemIds}`)
            .then(() => {
                alert("삭제 성공");
            })
            .catch(() => {
                alert("삭제 실패");
            })
    },
}