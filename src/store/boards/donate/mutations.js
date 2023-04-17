import {

    // 지영씨 마이페이지-기부내역
    REQUEST_DONATE_LIST_TO_SPRING,
    REQUEST_DONATE_READ_TO_SPRING

    
} from './mutation-types'


export default {

    // 지영씨 마이페이지-기부내역
    [REQUEST_DONATE_LIST_TO_SPRING] (state, passingData) {
        state.donates = passingData
    },
    [REQUEST_DONATE_READ_TO_SPRING] (state, passingData) {
        state.donate = passingData
    }

}