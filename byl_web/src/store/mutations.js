import {
    // 태현씨 qna 게시판
    REQUEST_QNA_BOARD_LIST_TO_SPRING,
    REQUEST_QNA_BOARD_TO_SPRING,
    
    // 태현씨 qna 게시판 - 댓글 기능
    REQUEST_QNA_COMMENT_LIST_FROM_SPRING,

    // 진우씨 상품 게시판
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
    REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING,
    REQUEST_ALL_PRODUCT_TO_SPRING
    
} from './mutation-types'


export default {

    // 태현씨 qna 게시판
    [REQUEST_QNA_BOARD_LIST_TO_SPRING] (state, passingData) {
        state.qnaBoards = passingData
    },
    [REQUEST_QNA_BOARD_TO_SPRING] (state, passingData) {
        state.qnaBoard = passingData
    },

    // 태현씨 qna 게시판 - 댓글 기능
    [REQUEST_QNA_COMMENT_LIST_FROM_SPRING] (state, passingData) {
        state.qnaComments = passingData
    },

    // 진우씨 상품 게시판
    [REQUEST_PRODUCT_LIST_TO_SPRING] (state, passingData) {
        state.products = passingData
    },
    [REQUEST_PRODUCT_TO_SPRING] (state, passingData) {
        state.product = passingData
    },
    [REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING] (state, passingData) {
        state.productImages = passingData
    },
    [REQUEST_ALL_PRODUCT_TO_SPRING] (state, passingData) {
        state.allOfProducts = passingData
    }
}