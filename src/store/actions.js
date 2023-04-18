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
    REQUEST_ALL_PRODUCT_TO_SPRING,

    // 태현씨 장바구니
    REQUEST_CART_LIST_FROM_SPRING,


    //지영씨 마이페이지-기부내역
    REQUEST_MY_DONATE_VISIT_LIST_TO_SPRING,
    REQUEST_MY_DONATE_VISIT_READ_TO_SPRING,

    //태현씨 공지게시판 -> 지영
    REQUEST_NOTICE_BOARD_LIST_TO_SPRING,
    REQUEST_NOTICE_BOARD_TO_SPRING

} from './mutation-types'

import axios from 'axios'

export default {
    // 태현씨 qna 게시판
    requestCreateQnaBoardToSpring({}, payload) {
        axios.post(`http://localhost:7777/qnaBoard/register`, payload)
        .then(() => {
            alert('게시물 등록 성공!')
        })
        .catch(() => {
            alert('문제 발생')
        }) 
    },

    requestQnaBoardListToSpring({commit}) {
        console.log("list 요청 테스트 완료.");
        return axios.get('http://localhost:7777/qnaBoard/list')
        .then((res) => {
            commit(REQUEST_QNA_BOARD_LIST_TO_SPRING, res.data)
        })
    },

    requestQnaBoardToSpring ({ commit }, qnaBoardId) {
        console.log("read 요청 테스트 완료")
        return axios.get(`http://localhost:7777/qnaBoard/${qnaBoardId}`)
        .then((res) => {
            commit(REQUEST_QNA_BOARD_TO_SPRING, res.data)
        })
    },

    requestQnaBoardModifyToSpring ({}, { qnaBoardId, payload }) {
        return axios.put(`http://localhost:7777/qnaBoard/${qnaBoardId}`, payload)
          .then(() => {
            alert("질문 게시글 수정 성공")
          })
          .catch(() => {
            alert("질문 게시글 문제 발생!")
          })
      },

    requestDeleteQnaBoardToSpring ({}, qnaBoardId) {
        console.log("삭제 요청 테스트 완료")
        return axios.delete(`http://localhost:7777/qnaBoard/${qnaBoardId}`)
            .then(() => {
                alert("질문 게시글 삭제 성공")
            })
            .catch(() => {
                alert("질문 게시글 문제 발생!")
            })
    },


    // 태현씨 qna 게시판 - 댓글 기능
    requestQnaCommentRegisterToSpring({}, payload) {
        const { writer, comment, qnaBoardId, qnaCommentId} = payload
        return axios.post(`http://localhost:7777/qnaBoard/qnaComment/register`, { writer, comment, qnaBoardId, qnaCommentId })
        .then(() => {
            alert('댓글 등록을 완료하였습니다.')
        })
        .catch(() =>{
            alert('댓글 등록 실패')
        })
    },

    requestQnaCommentListFromSpring({commit}, qnaBoardId ){
        return axios.get(`http://localhost:7777/qnaBoard/qnaComment/${qnaBoardId}`)
        .then((res) => {
            commit(REQUEST_QNA_COMMENT_LIST_FROM_SPRING, res.data)
        })
    },
    
    requestQnaCommentListFromSpring({commit}, qnaBoardId ){
        return axios.get(`http://localhost:7777/qnaBoard/qnaComment/${qnaBoardId}`)
        .then((res) => {
            commit(REQUEST_QNA_COMMENT_LIST_FROM_SPRING, res.data)
        })
    },
    requestQnaCommentDeleteToSpring({}, payload) {
        const { qnaCommentId } = payload;
        return axios.delete(`http://localhost:7777/qnaBoard/qnaComment/${qnaCommentId}`)
        .then (() => {
            alert("댓글 삭제 성공")
        })
        .catch(() => {
            alert('댓글 삭제 실패')
        })
    },


    // 진우씨 상품 게시판
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
    },



    // 태현씨 장바구니

    requestRegisterCartToSpring({}, payload) {
        const {memberId, productId, count} = payload
        console.log("actions.js \n memberId = " + memberId + "\nproductId = " + productId + "\ncount = " + count)
        return axios.post(`http://localhost:7777/cart/register`,
            {memberId, productId, count})
            .then(() => {
            })
        },

        requestCartListFromSpring({commit}, memberId) {
            console.log("list 요청 테스트 완료.");
            console.log("actions.js\n cart memberId " + memberId);
            return axios.get(`http://localhost:7777/cart/list/${memberId}`)
            .then((res) => {
                commit(REQUEST_CART_LIST_FROM_SPRING, res.data)
            })
        },
        requestDeleteCartItemToSpring({ }, cartItemIds) {
            console.log("actions.js \n delete request = " + cartItemIds);
            return axios.delete(`http://localhost:7777/cart/delete?cartItemIds=${cartItemIds}`)
            .then(() => {
                alert("삭제 성공");
            })
            .catch(() => {
                alert("삭제 실패");
            })
        }
    // 지영씨 기부 페이지, 마이페이지-기부내역
    requestDonateVisitRegisterToSpring ({}, payload) {
        const { formData } = payload
        axios.post(`http://localhost:7777/donate/visit/register`, formData)
            .then((res) => {
                alert("방문 수거 신청 완료" + res)
                console.log(JSON.stringify(formData) + " :을 백엔드로 전송하였습니다 (DB저장까지 됐는지는 아직 모름)")
            })
            .catch((res) => {
                alert(res.response.data.message)
                console.log(JSON.stringify(formData) + ": 을 백엔드로 전송하지 못했습니다")
        })
    },

    requestMyDonateVisitListToSpring({ commit }) {
        console.log("list 요청 테스트 완료.")
        const memberId = JSON.parse(localStorage.getItem('userInfo')).id;
        return axios.get(`http://localhost:7777/donate/myDonateList`, { params: { memberId } })
        .then((res) => {
            commit(REQUEST_MY_DONATE_VISIT_LIST_TO_SPRING, res.data)
            console.log("백에서 보낸 데이터 : ", res.data)
            console.log("프론트가 memberId 로 요청했고, 백이 해당 회원의 donate 내역 응답했음");
            })
        .catch(error => {
            console.error(error);
        });
    },

    requestMyDonateVisitReadToSpring ({ commit }, donateVisitId) {
        console.log("read 요청 테스트 완료")
        return axios.get(`http://localhost:7777/donate/myDonateRead/${donateVisitId}`)
        .then((res) => {
            commit(REQUEST_MY_DONATE_VISIT_READ_TO_SPRING, res.data)
            console.log("백에서 보낸 데이터 : ", res.data)
            console.log("프론트가 donateVisitId 로 요청했고, 백이 해당 donate 데이터 응답했음");
        })
        .catch(error => {
            console.error(error);
        });
    },

    requestMyDonateVisitModifyToSpring ({}, { donateVisitId, payload }) {
        return axios.put(`http://localhost:7777/donate/myDonateModify/${donateVisitId}`, payload)
          .then(() => {
            alert("해당 기부글을 수정했습니다!")
          })
          .catch(() => {
            alert("해당 기부글을 수정하는 중에 문제가 발생했습니다!")
          })
      },

    requestMyDonateVisitDeleteSpring ({}, donateVisitId) {
        console.log("삭제 요청 테스트 완료")
        return axios.delete(`http://localhost:7777/donate/myDonateDelete/${donateVisitId}`)
            .then(() => {
                alert("해당 기부글을 삭제했습니다!")
            })
            .catch(() => {
                alert("해당 기부글을 삭제하는 중에 문제가 발생했습니다!")
            })
    },

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