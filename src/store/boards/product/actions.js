import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
    REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING,
    REQUEST_ALL_PRODUCT_TO_SPRING,
} from './mutation-types'

import axiosInst from '@/utility/axiosObject'

export default {
    requestProductListToSpring ({ commit }) {
        return axiosInst.get('http://localhost:7777/product/list')
            .then((res) => {
                commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data)
            })
    },
    requestProductToSpring ({ commit }, productId) {
        return axiosInst.get(`http://localhost:7777/product/${productId}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_TO_SPRING, res.data)
            })
    },
    requestDeleteProductToSpring ({}, productId) {
        return axiosInst.delete(`http://localhost:7777/product/${productId}`)
            .then(() => {
                alert("삭제 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },
    requestProductModifyToSpring ({}, payload) {
        const { productName, content, productId, writer, price } = payload

        return axiosInst.put(`http://localhost:7777/product/${productId}`,
            { productName, content, writer, price })
            .then(() => {
                alert("수정 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },
    requestProductImageToSpring ({ commit }, productId) {
        return axiosInst.get(`http://localhost:7777/product/imageList/${productId}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING, res.data)
            })
    },
    requestAllOfProductToSpring ({ commit }) {
        return axiosInst.get('http://localhost:7777/product/all')
            .then((res) => {
                commit(REQUEST_ALL_PRODUCT_TO_SPRING, res.data)
                console.log("allProduct: " + res.data)
            })
    }
}