import {
    // 태현씨 qna 게시판
    REQUEST_QNA_BOARD_LIST_TO_SPRING,
    REQUEST_QNA_BOARD_TO_SPRING,
    
    // 태현씨 qna 게시판 - 댓글 기능
    REQUEST_QNA_COMMENT_LIST_FROM_SPRING,  
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
};