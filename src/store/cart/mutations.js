import {
    REQUEST_CART_LIST_FROM_SPRING,
} from './mutation-types'

export default {
    [REQUEST_CART_LIST_FROM_SPRING](state, passingData) {
        state.cartItems = passingData
    },
}