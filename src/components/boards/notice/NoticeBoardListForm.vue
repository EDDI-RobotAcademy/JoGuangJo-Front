<template>
  <div>
    <h3>게시글 목록</h3>
    <table>
      <tr>
        <th align="center" width="100">No</th>
        <th align="center" width="640">제목</th>
        <th align="center" width="150">작성자</th>
        <th align="center" width="300">등록일자</th>
      </tr>
      <tr v-if="!noticeBoards || (Array.isArray(noticeBoards) && noticeBoards.length === 0)">
        <td colspan="4">
            현재 등록된 게시물이 없습니다!
        </td>
      </tr>
      <tr v-else v-for="noticeBoard in noticeBoards" :key="noticeBoard.noticeBoardId">
        <td align="center">
          {{ noticeBoard.noticeBoardId }}
        </td>
        <td align="left">
          <router-link :to="{ name: 'NoticeBoardReadView',
                            params: { noticeBoardId: noticeBoard.noticeBoardId.toString() }}">
            {{ noticeBoard.title }}
          </router-link>
        </td>
        <td align="right">
          {{ noticeBoard.writer }}
        </td>
        <td align="center">
          {{ noticeBoard.regDate }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
    name: "NoticeBoardListForm",
    props: {
        noticeBoards: {
            type: Array
        }
    }
}

</script>

<style>

</style>