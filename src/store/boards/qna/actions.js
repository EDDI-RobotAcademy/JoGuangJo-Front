import {
    REQUEST_QNA_BOARD_LIST_TO_SPRING,
    REQUEST_QNA_BOARD_READ_TO_SPRING,

    REQUEST_QNA_COMMENT_LIST_FROM_SPRING,
} from './mutation-types'

import axiosInst from '@/utility/axiosObject';

export default {
    requestQnaBoardRegisterToSpring({}, payload) {
        axiosInst.post(`/qnaBoard/register`, payload)
            .then(() => {
                alert('게시물 등록 성공!')
            })
            .catch(() => {
                alert('문제 발생')
            }) 
    },

    requestQnaBoardListToSpring({commit}) {
        console.log("list 요청 테스트 완료.");
            return axiosInst.get('/qnaBoard/list')
            .then((res) => {
                commit(REQUEST_QNA_BOARD_LIST_TO_SPRING, res.data)
            })
    },

    requestQnaBoardReadToSpring ({ commit }, qnaBoardId) {
        console.log("read 요청 테스트 완료")
            return axiosInst.get(`/qnaBoard/${qnaBoardId}`)
            .then((res) => {
                commit(REQUEST_QNA_BOARD_READ_TO_SPRING, res.data)
            })
    },

    requestQnaBoardModifyToSpring ({}, {qnaBoardId, payload}) {
        console.log("수정 요청 테스트 완료")
        return axiosInst.put(`/qnaBoard/${qnaBoardId}`, payload)
                .then(() => {
                    alert("질문 게시글 수정 성공")
                })
                .catch(() => {
                    alert("질문 게시글 문제 발생!")
                })
    },

    requestQnaBoardDeleteToSpring ({}, qnaBoardId) {
        console.log("삭제 요청 테스트 완료")
            return axiosInst.delete(`/qnaBoard/${qnaBoardId}`)
                .then(() => {
                    alert("질문 게시글 삭제 성공")
                })
                .catch(() => {
                    alert("질문 게시글 문제 발생!")
                })
    },

    requestQnaCommentListToSpring({commit}, qnaBoardId ){
        return axiosInst.get(`/qnaBoard/qnaComment/${qnaBoardId}`)
        .then((res) => {
            commit(REQUEST_QNA_COMMENT_LIST_FROM_SPRING, res.data)
        })
    },

    requestQnaCommentRegisterToSpring({}, payload) {
        const { writer, comment, qnaBoardId} = payload
            return axiosInst.post(`/qnaBoard/qnaComment/register`, { writer, comment, qnaBoardId })
            .then(() => {
                alert('댓글 등록을 완료하였습니다.')
            })
            .catch(() =>{
                alert('댓글 등록 실패.')
            })
    },

    requestQnaCommentDeleteToSpring({}, payload) {
        const { qnaCommentId } = payload;
            return axiosInst.delete(`/qnaBoard/qnaComment/${qnaCommentId}`)
            .then (() => {
                alert("댓글 삭제 성공")
            })
            .catch(() => {
                alert('댓글 삭제 실패')
            })
    },
};