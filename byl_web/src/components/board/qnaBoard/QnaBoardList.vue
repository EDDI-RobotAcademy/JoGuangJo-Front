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
        <tr v-if="!qnaBoards || (Array.isArray(qnaBoards) && qnaBoards.length === 0)">
        <td colspan="4">
            현재 등록된 게시물이 없습니다!
        </td>
        </tr>
        <tr v-else v-for="qnaBoard in qnaBoards" :key="qnaBoard.boardId">
        <td align="center">
            {{ qnaBoard.boardId }}
        </td>
    <td align="left">
            <router-link :to="{ name: 'QnaBoardReadPage',
                            params: { boardId: qnaBoard.boardId.toString() }}">
            {{ qnaBoard.title }}
            </router-link>
        </td>
        <td align="right">
            {{ qnaBoard.writer }}
        </td>
        <td align="center">
            {{ qnaBoard.regDate }}
        </td>
        </tr>
    </table>
    </div>
</template>

<script>
export default {
    name: "QnaBoardList",
    props: {
        qnaBoards: {
            type: Array
        }
    }
}
</script>

<style>
</style>