import {

    // 태현씨 공지게시판 -> 지영씨
    REQUEST_NOTICE_BOARD_LIST_TO_SPRING,
    REQUEST_NOTICE_BOARD_READ_TO_SPRING
    
} from './mutation-types'


export default {

    // 태현씨 공지게시판 -> 지영씨
    [REQUEST_NOTICE_BOARD_LIST_TO_SPRING] (state, passingData) {
        state.noticeBoards = passingData
    },
    [REQUEST_NOTICE_BOARD_READ_TO_SPRING] (state, passingData) {
        state.noticeBoard = passingData
    }
    
}