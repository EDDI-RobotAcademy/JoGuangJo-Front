import {

    //태현씨 공지게시판 -> 지영
    REQUEST_NOTICE_BOARD_LIST_TO_SPRING,
    REQUEST_NOTICE_BOARD_TO_SPRING

} from './mutation-types'

import axios from 'axios'

export default {

    // 태현씨 공지 게시판 -> 지영씨

    requestCreateNoticeBoardToSpring({}, payload) {
        axios.post(`http://localhost:7777/notice/register`, payload)
        .then(() => {
            alert('게시물 등록 성공!')
        })
        .catch(() => {
            alert('문제 발생')
        }) 
    },

    requestNoticeBoardListToSpring({commit}) {
        return axios.get('http://localhost:7777/notice/list')
        .then((res) => {
            commit(REQUEST_NOTICE_BOARD_LIST_TO_SPRING, res.data)
        })
    },

    requestNoticeBoardToSpring ({ commit }, noticeBoardId) {
        return axios.get(`http://localhost:7777/notice/${noticeBoardId}`)
        .then((res) => {
            commit(REQUEST_NOTICE_BOARD_TO_SPRING, res.data)
        })
    },

    requestNoticeBoardModifyToSpring ({}, { noticeBoardId, payload }) {
        return axios.put(`http://localhost:7777/notice/${noticeBoardId}`, payload)
          .then(() => {
            alert("질문 게시글 수정 성공")
          })
          .catch(() => {
            alert("질문 게시글 문제 발생!")
          })
      },

    requestDeleteNoticeBoardToSpring ({}, noticeBoardId) {
        console.log("삭제 요청 테스트 완료")
        return axios.delete(`http://localhost:7777/notice/${noticeBoardId}`)
            .then(() => {
                alert("질문 게시글 삭제 성공")
            })
            .catch(() => {
                alert("질문 게시글 문제 발생!")
            })
    },
    
}