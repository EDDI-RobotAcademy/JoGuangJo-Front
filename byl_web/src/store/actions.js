import {
    REQUEST_QUESTION_BOARD_LIST_TO_SPRING
} from './mutation-types'

import axios from 'axios'

export default {
    requestQuestionBoardListToSpring({commit}) {
        console.log("list 요청 테스트 완료.");
        return axios.get('http://localhost:7777/board/question-list')
        .then((res) => {
            commit(REQUEST_QUESTION_BOARD_LIST_TO_SPRING, res.data)
        })
    }
}