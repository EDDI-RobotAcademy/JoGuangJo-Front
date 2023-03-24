<template>
    <div>
    <h3>게시물 목록</h3>
        <table>
            <tr>
                <th align="center" width="100">No</th>
                <th align="center" width="640">제목</th>
                <th align="center" width="150">작성자</th>
                <th align="center" width="300">등록일자</th>
            </tr>
            <tr v-if="!questionBoards || (Array.isArray(questionBoards) && questionBoards.length === 0)">
                <td colspan="4">
                현재 등록된 게시물이 없습니다!
                </td>
            </tr>
            <tr v-else v-for="questionBoard in questionBoards" :key="questionBoard.questionBoardId">
                <td align="center">
                    {{ questionBoard.questionBoardId }}
                </td>
                <td align="left">
                    <router-link :to=" { name: 'QuestionBoardReadPage', 
                        params: { questionboardId: questionBoard.questionBoardId.toString() }}">
                            {{ questionBoard.title }}
                        </router-link>
                </td>
                <td align="right">
                    {{ questionBoard.writer }}
                </td>
                <td align="center">
                    {{ questionBoard.regDate }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "QuestionBoardList",
    props: {
        questionBoards: {
            type: Array
        }
    }
}
</script>

<style>
</style>