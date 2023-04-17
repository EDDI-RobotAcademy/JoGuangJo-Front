import {

    // 지영씨 마이페이지-기부내역
    REQUEST_DONATE_LIST_TO_SPRING,
    REQUEST_DONATE_READ_TO_SPRING,

} from './mutation-types'

import axiosInst from '@/utility/axiosObject'

export default {

    // 지영씨 기부 페이지, 마이페이지-기부내역
    requestDonateRegisterToSpring ({}, payload) {
        const { formData } = payload
        console.log('formData-action' , formData)
        console.log('payload-action' , payload)

        axiosInst.post(`/donate/register`, formData)
            .then((res) => {
                alert("책 기부 신청 완료" + res)
                console.log(JSON.stringify(formData) + " :을 백엔드로 전송하였습니다 (DB저장까지 됐는지는 아직 모름)")
            })
            .catch((res) => {
                alert("책 기부 신청 실패" + res)
                console.log(JSON.stringify(formData) + ": 을 백엔드로 전송하지 못했습니다")
        })
    },

    requestDonateListToSpring({ commit }) {
        const memberId = JSON.parse(localStorage.getItem('userInfo')).id;
        return axiosInst.get(`/donate/list/`, { params: { memberId } })
        .then((res) => {
            commit(REQUEST_DONATE_LIST_TO_SPRING, res.data)
            console.log("백에서 보낸 데이터 : ", res.data)
            console.log("프론트가 memberId 로 요청했고, 백이 해당 회원의 donate 내역 응답했음");
            })
        .catch(error => {
            console.error(error);
        });
    },

    requestDonateReadToSpring ({ commit }, donateId) {
        return axiosInst.get(`/donate/read/${donateId}`)
        .then((res) => {
            commit(REQUEST_DONATE_READ_TO_SPRING, res.data)
            console.log("백에서 보낸 데이터 : ", res.data)
            console.log("프론트가 donateId 로 요청했고, 백이 해당 donate 데이터 응답했음");
        })
        .catch(error => {
            console.error(error);
        });
    },

    requestDonateModifyToSpring ({}, { donateId, payload }) {
        const { name, email, phone, quantity, quality, visitDate, visitTime, zipcode, city, street, addressDetail } = payload
        return axiosInst.put(`/donate/modify/${donateId}`,
        { donateId, name, email, phone, quantity, quality, visitDate, visitTime, zipcode, city, street, addressDetail })
        .then((res) => {
            console.log("백에서 보낸 데이터 : ", res.data)
            alert("해당 기부글을 수정했습니다!")
        })
        .catch((error) => {
            console.error(error)
            alert("해당 기부글을 수정하는 중에 문제가 발생했습니다!")
        })
    },

    requestDonateDeleteToSpring ({}, donateId) {
        axiosInst.delete(`/donate/delete/${donateId}`)
            .then(() => {
                alert("해당 기부글을 삭제했습니다!")
            })
            .catch(() => {
                alert("해당 기부글을 삭제하는 중에 문제가 발생했습니다!")
            })
    },
}