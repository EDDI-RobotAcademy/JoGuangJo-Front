import {
<<<<<<< Updated upstream
    REQUEST_QUESTION_BOARD_LIST_TO_SPRING,
    REQUEST_QUESTION_BOARD_TO_SPRING
=======
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
    REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING,
    REQUEST_ALL_PRODUCT_TO_SPRING,
>>>>>>> Stashed changes
} from './mutation-types'

import axios from 'axios'

export default {
<<<<<<< Updated upstream
    requestCreateQuestionBoardToSpring({}, payload){
        const { title, writer, content } = payload
        return axios.post('http://localhost:7777/questionBoard/register',
        { title, writer, content })
        .then((res) =>{
            alert('게시물 등록 성공!')
            return res
        })
        .catch(() => {
            alert('문제 발생')
        })
    },
    requestQuestionBoardListToSpring({commit}) {
        console.log("list 요청 테스트 완료.");
        return axios.get('http://localhost:7777/questionBoard/list')
        .then((res) => {
            commit(REQUEST_QUESTION_BOARD_LIST_TO_SPRING, res.data)
        })
    },
    requestQuestionBoardToSpring ({ commit }, questionBoardId) {
        console.log("read 요청 테스트 완료")
        return axios.get(`http://localhost:7777/questionBoard/${questionBoardId}`)
        .then((res) => {
            commit(REQUEST_QUESTION_BOARD_TO_SPRING, res.data)
        })
=======
    requestCreateProductToSpring ({}, payload) {

        console.log('payload: ' + payload)
        const { productName, content, writer, price } = payload
        return axios.post('http://localhost:7777/product/register',
            payload)
            //{ productName, content, writer, price })
            .then(() => {
                alert('상품 등록 성공!')
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    requestProductListToSpring ({ commit }) {
        return axios.get('http://localhost:7777/product/list')
            .then((res) => {
                commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data)
            })
    },
    requestProductToSpring ({ commit }, productId) {
        return axios.get(`http://localhost:7777/product/${productId}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_TO_SPRING, res.data)
            })
    },
    requestDeleteProductToSpring ({}, productId) {
        return axios.delete(`http://localhost:7777/product/${productId}`)
            .then(() => {
                alert("삭제 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },
    requestProductModifyToSpring ({}, payload) {
        const { productName, content, productId, writer, price } = payload

        return axios.put(`http://localhost:7777/product/${productId}`,
            { productName, content, writer, price })
            .then(() => {
                alert("수정 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },

    requestProductImageToSpring ({ commit }, productId) {
        return axios.get(`http://localhost:7777/product/imageList/${productId}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING, res.data)
            })
    },
    requestAllOfProductToSpring ({ commit }) {
        return axios.get('http://localhost:7777/product/all')
            .then((res) => {
                commit(REQUEST_ALL_PRODUCT_TO_SPRING, res.data)
                console.log("allProduct: " + res.data)
            })
>>>>>>> Stashed changes
    },
}