<template>
  <div class="notice-list">
    <div class="search">
      <v-select
          class="search-select"
          v-model="searchBy"
          :items="searchOptions"
          label="검색 기준"
          prepend-icon="mdi-magnify"
      ></v-select>
      <v-list-item>
          <div class="search-bar">
            <v-text-field
              v-model="searchQuery"
              class="nav-search"
              placeholder="  검색어를 입력하세요."
              color="#FFDE59"
              clearable
              style="width:200px;"
              @keydown.enter="searchNoticeBoards()"
            >
            </v-text-field>
          </div>
            <div class="search-btn mb-1">
            <v-btn
            intermediate
            color="#fee789"
            rounded
            @click="searchNoticeBoards()"
            >
            검색
            </v-btn>
            </div>
        </v-list-item>
      </div>
    <table>
        <tr>
          <th :style="{ 'padding-left': '10px' }" class="title-column">번호</th>
          <th :style="{ 'padding-left': '300px' }" class="title-column">제목</th>
          <th style="padding-left: auto; text-align: right;" class="writer-column">작성자</th>
          <th style="padding-left: auto; text-align: right;"  class="date-column">등록일자</th>
        </tr>
        <tr v-if="!displayedNoticeBoards || (Array.isArray(displayedNoticeBoards) && displayedNoticeBoards.length === 0)">
          <td colspan="4">현재 등록된 공지글이 없습니다!</td>
        </tr>
        <tr v-else v-for="noticeBoard in paginatedNoticeBoards" :key="noticeBoard.noticeBoardId">
          <td :style="{ 'padding-left': '15px' }">{{ noticeBoard.noticeBoardId }} </td>
          <td :style="{ 'padding-left': '250px' }">
          <router-link :to="{ name: 'NoticeBoardReadView', params: { noticeBoardId: noticeBoard.noticeBoardId.toString() }}">
            {{ noticeBoard.title }}
          </router-link>
          </td>
          <td style="padding-left: auto; text-align: right;">{{ noticeBoard.writer }}</td>
          <td style="padding-left: auto; text-align: right;">{{ formattedDate(noticeBoard.regDate) }}</td>
        </tr>
      </table><br>
      <v-pagination v-model="currentPage" :length="pageCount" class="my-5"></v-pagination>  
</div>

  
</template>

<script>
import PaginationForm from "@/components/layout/PaginationForm.vue";

export default {
    name: "NoticeBoardListForm",
    components: {
      PaginationForm
    },
    data() {
        return {
        currentPage: 1, 
        pageSize: 5, // 수정 가능
        searchQuery: '', // 검색어를 입력하는 input 요소의 v-model
        displayedNoticeBoards: [],
        searchBy: 'title',
        searchOptions: [
        { text: '제목', value: 'title' },
        { text: '작성자', value: 'writer' },
      ],
    };
    },
    props: {
        noticeBoards: {
            type: Array
        }
    },
    computed: {
        // 페이징 된 게시글 목의 총 페이지 수를 계산하는 메서드
        // -> 페이징 처리에 필요한 정보를 계산한다.
    pageCount() {
        if (this.displayedNoticeBoards) {
        return Math.ceil(this.displayedNoticeBoards.length / this.pageSize);
        }
        return 0;
    },
    // 현재 페이지에 해당하는 게시글 목록만 반환하는 메서드
    // -> 실제로 페이 된 게시글 목록을 반환한다.
    paginatedNoticeBoards() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.displayedNoticeBoards ? this.displayedNoticeBoards.slice(startIndex, endIndex) : [];
    }
    },
    watch: {
      noticeBoards() {
      // 목록이 변경될 때마다searchNoticeBoards() 호출
        if (this.noticeBoards && this.noticeBoards.length > 0) {
      this.searchNoticeBoards();
        }
    }
    },
    created() {
    // 목록이 변경될 때마다 searchNoticeBoards() 호출
    if (this.noticeBoards && this.noticeBoards.length > 0) {
        this.searchNoticeBoards();
    }
    },
    methods: {
    // 등록일자 YYYY-MM-DD 형식 출력
    formattedDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
    },
    // 검색 버튼을 누르면 searchNoticeBoards() 호출
    searchNoticeBoards() {
        const query = this.searchQuery.toLowerCase();
    // 검색어가 빈 값이면 변동 사항 없음.
        if (query === '') {
        this.displayedNoticeBoards = this.noticeBoards;
        } else {
    // 검색어 제목(title), 작성자(writer) 필터링
        if (this.searchBy === 'title') {
            this.displayedNoticeBoards = this.noticeBoards.filter(noticeBoard => noticeBoard.title.toLowerCase().includes(query));
        } else if (this.searchBy === 'writer') {
            this.displayedNoticeBoards = this.noticeBoards.filter(noticeBoard => noticeBoard.writer.toLowerCase().includes(query));
        }
        }
        this.currentPage = 1;
    }
  }
}

</script>

<style scoped>

</style>