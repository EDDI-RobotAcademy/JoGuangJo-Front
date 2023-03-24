import {
    REQUEST_QUESTION_BOARD_LIST_TO_SPRING,
    REQUEST_QUESTION_BOARD_TO_SPRING
} from './mutation-types'

import axios from 'axios'

export default {
    requestCreateQuestionBoardToSpring({}, payload){
        const { title, writer, content } = payload
        return axios.post('http://localhost:7777/questionBoard/register',
        { title, writer, content })
        .then((res) =>{
            alert('게시물 등록 성공!')
            return res
        })
        .catch(() => {
            alert('문제 발생')
        })
    },
    requestQuestionBoardListToSpring({commit}) {
        console.log("list 요청 테스트 완료.");
        return axios.get('http://localhost:7777/questionBoard/list')
        .then((res) => {
            commit(REQUEST_QUESTION_BOARD_LIST_TO_SPRING, res.data)
        })
    },
    requestQuestionBoardToSpring ({ commit }, questionBoardId) {
        console.log("read 요청 테스트 완료")
        return axios.get(`http://localhost:7777/questionBoard/${questionBoardId}`)
        .then((res) => {
            commit(REQUEST_QUESTION_BOARD_TO_SPRING, res.data)
        })
    },
}