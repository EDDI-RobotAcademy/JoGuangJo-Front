<template>
    <v-container>
        <table v-if="!qnaComments || (Array.isArray(qnaComments) && qnaComments.length === 0)">
            <div>
                <p>현재 등록된 댓글이 없습니다.</p>
            </div>
        </table>
        <table v-else v-for="qnaComment in qnaComments" :key="qnaComment.qnaCommentId">
            <tbody>
                <tr>
                    <div>
                        <v-row>
                            <pre>
                                {{ qnaComment.comment }}
                            </pre>
                        </v-row>
                    </div>
                </tr>
            </tbody>
        </table>
    </v-container>
</template>

<script>

export default {
    name: "QnaCommentListForm",
    props: {
        qnaComments: {
            type: Array
        },
        qnaComment: {
            type: Object
        }
    },
}
</script>
