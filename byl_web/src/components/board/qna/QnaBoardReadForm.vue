<template>
    <div>
    <table>
        <tr>
            <td>게시물 번호</td>
            <td>
                <input type="text" :value="qnaBoard.qnaBoardId" readonly/>
            </td>
        </tr>
        <tr>
            <td>제목</td>
            <td>
                <input type="text" :value="qnaBoard.title" readonly/>
            </td>
        </tr>
        <tr>
            <td>작성자</td>
            <td>
                <input type="text" :value="qnaBoard.writer" readonly/>
            </td>
        </tr>
        <tr>
            <td>등록일자</td>
            <td>
                <input type="text" :value="qnaBoard.regDate" readonly/>
            </td>
        </tr>
        <tr>
            <td>본문</td>
            <td>
                <textarea cols="50" rows="20" :value="qnaBoard.content" readonly/>
            </td>
        </tr>
    </table>
    </div>
</template>

<script>
export default {
    name: "qnaBoardReadForm",
    props: {
        qnaBoard: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style>
</style>