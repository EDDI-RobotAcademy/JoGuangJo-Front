import {

    //태현씨 공지게시판 -> 지영
    REQUEST_NOTICE_BOARD_LIST_TO_SPRING,
    REQUEST_NOTICE_BOARD_READ_TO_SPRING

} from './mutation-types'

import axiosInst from '@/utility/axiosObject'

export default {

    //태현씨 공지게시판 -> 지영

    requestNoticeBoardRegisterToSpring({}, payload) {
        axiosInst.post(`/notice/register`, payload)
        .then((res) => {
            alert('게시물 등록 성공!' + res)
        })
        .catch((res) => {
            alert('게시물 등록하는 중에 문제가 발생했습니다!' + res)
        }) 
    },

    requestNoticeBoardListToSpring({commit}) {
        return axiosInst.get(`/notice/list`)
        .then((res) => {
            commit(REQUEST_NOTICE_BOARD_LIST_TO_SPRING, res.data)
            console.log('게시물 목록조회 성공!' + res.data)
        })
        .catch((res) => {
            console.log('게시물 목록조회하는 중에 문제가 발생했습니다!' + res.data)
        }) 
    },

    requestNoticeBoardReadToSpring ({ commit }, noticeBoardId) {
        return axiosInst.get(`/notice/${noticeBoardId}`)
        .then((res) => {
            commit(REQUEST_NOTICE_BOARD_READ_TO_SPRING, res.data)
            console.log('게시물 상세조회 성공!' + res.data)
        })
        .catch((res) => {
            console.log('게시물 상세조회하는 중에 문제가 발생했습니다!' + res.data)
        }) 
    },

    requestNoticeBoardModifyToSpring ({}, { noticeBoardId, payload }) {
        return axiosInst.put(`/notice/${noticeBoardId}`, payload)
          .then((res) => {
            alert("게시글 수정 성공!" + res.data)
          })
          .catch((error) => {
            console.error(error)
            alert("게시글을 수정하는 중에 문제가 발생했습니다!")
        })
      },

    requestNoticeBoardDeleteToSpring ({}, noticeBoardId) {
        console.log("삭제 요청 테스트 완료")
        return axiosInst.delete(`/notice/${noticeBoardId}`)
            .then((res) => {
                alert("게시글 삭제 성공!" + res.data)
            })
            .catch((error) => {
                console.error(error)
                alert("게시글을 삭제하는 중에 문제가 발생했습니다!")
            })
    },
    
}