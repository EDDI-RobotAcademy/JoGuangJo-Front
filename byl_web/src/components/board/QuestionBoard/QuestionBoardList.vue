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
        <tr v-if="!questionboards || (Array.isArray(questionboards) && questionboards.length === 0)">
        <td colspan="4">
            현재 등록된 게시물이 없습니다!
        </td>
        </tr>
        <tr v-else v-for="questionboard in questionboards" :key="questionboard.boardId">
        <td align="center">
            {{ questionboard.boardId }}
        </td>
    <td align="left">
            <router-link :to="{ name: 'QuestionBoardReadPage',
                            params: { boardId: questionboard.boardId.toString() }}">
            {{ questionboard.title }}
            </router-link>
        </td>
        <td align="right">
            {{ questionboard.writer }}
        </td>
        <td align="center">
            {{ questionboard.regDate }}
        </td>
        </tr>
    </table>
    </div>
</template>

<script>
export default {
    name: "QuestionBoardList",
    props: {
        questionboards: {
            type: Array
        }
    }
}
</script>

<style>
</style>