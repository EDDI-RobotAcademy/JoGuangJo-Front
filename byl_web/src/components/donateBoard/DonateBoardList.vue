<template>
    <div>
      <h4>전체 게시물 목록</h4>
      <table>
        <tr>
          <th align="center" width="100">번호</th>
          <th align="center" width="600">제목</th>
          <th align="center" width="300">작성자</th>
          <th align="center" width="200">등록일자</th>
        </tr>
        <tr v-if="!boards || (Array.isArray(boards) && boards.length === 0)">
          <td align="center" colspan="4">
              현재 등록된 게시물이 아무것도 없습니다.
          </td>
        </tr>
        <tr v-else v-for="board in boards" :key="board.boardId">
          <td align="center">
            {{ board.boardId }}
          </td>
          <td align="left">
            <router-link :to="{ name: 'DonateBoardReadPage',
                              params: { boardId: board.boardId.toString() }}">
              {{ board.title }}
            </router-link>
          </td>
          <td align="right">
            {{ board.writer }}
          </td>
          <td align="center">
            {{ board.regDate }}
          </td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  
  export default {
      name: "DonateBoardList",
      props: {
          boards: {
              type: Array
          }
      }
  }
  
  </script>
  
  <style>
  
  </style>