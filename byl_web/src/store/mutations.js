import {
    REQUEST_QNA_BOARD_LIST_TO_SPRING,
    REQUEST_QNA_BOARD_TO_SPRING,
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
    REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING,
    REQUEST_ALL_PRODUCT_TO_SPRING,
} from './mutation-types'

export default {
    [REQUEST_QNA_BOARD_LIST_TO_SPRING] (state, passingData) {
        state.qnaBoards = passingData
    },
    [REQUEST_QNA_BOARD_TO_SPRING] (state, passingData) {
        state.qnaBoard = passingData
    },
    // states로 구성하면 안됨(예약어)
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