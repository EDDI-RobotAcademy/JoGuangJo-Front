<template>
    <div class="qna-board-list">
      <div class="Board-list">
        <div class="h2">
         <h2 class="ms-1">Q&A 문의하기</h2>
        </div> 
        <div class="search">
          <v-btn class="btn" :to="{ name: 'QnaBoardRegisterView' }">
            <span class="btn-text">게시물 작성</span>
          </v-btn>
  <v-select
    v-model="searchBy"
    :items="searchOptions"
    label="검색 기준"
    class="search-select"
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
                        @keydown.enter="searchQnaBoards()"
                    >
                    </v-text-field>
                  </div>
                       <div class="search-btn mb-1">
                        <v-btn
                        intermediate
                        color="#fee789"
                        rounded
                        @click="searchQnaBoards()"
                        >
                        검색
                        </v-btn>
                       </div>
                    </v-list-item>
      </div>
        <div>
    <div v-if="!displayedQnaBoards || displayedQnaBoards.length === 0">
      <table>
      <tr>
          <th style="padding-left: 15px">번호</th>
          <th style="padding-left: 250px">제목</th>
          <th style="text-align: right">작성자</th>
          <th style="text-align: right">등록일자</th>
        </tr>
      <p class="no-list">현재 등록된 게시물이 없습니다!</p>
      </table>
    </div>
    <div v-else>
      <table>
        <tr>
          <th style="padding-left: 15px">번호</th>
          <th style="padding-left: 250px">제목</th>
          <th style="text-align: right">작성자</th>
          <th style="text-align: right">등록일자</th>
        </tr>
        <tr v-for="qnaBoard in paginatedQnaBoards" :key="qnaBoard.qnaBoardId">
          <td :style="{ 'padding-left': '15px' }">{{ qnaBoard.qnaBoardId }}</td>
          <td :style="{ 'padding-left': '250px' }">
            <router-link
              :to="{
                name: 'QnaBoardReadView',
                params: { qnaBoardId: qnaBoard.qnaBoardId.toString() },
              }"
              style="text-decoration: none"
            >
              {{ qnaBoard.title }}
            </router-link>
          </td>
          <td style="text-align: right">{{ qnaBoard.writer }}</td>
          <td style="text-align: right">{{ formattedDate(qnaBoard.regDate) }}</td>
        </tr>
      </table>
      <br />
      <v-pagination v-model="currentPage" :length="pageCount" class="my-5"></v-pagination>
    </div>
  </div>
    </div>
    </div>
  </template>

  <script>
import PaginationForm from "@/components/layout/PaginationForm.vue";
import BannerCarouselForm from "@/components/layout/BannerCarouselForm.vue";

export default {
    name: "QnaBoardListForm",
    data() {
        return {
        currentPage: 1, 
        pageSize: 5, // 수정 가능
        searchQuery: '', // 검색어를 입력하는 input 요소의 v-model
        displayedQnaBoards: [],
        searchBy: 'title',
        searchOptions: [
        { text: '제목', value: 'title' },
        { text: '작성자', value: 'writer' },
      ],
    };
    },
    components: {
        PaginationForm,
        BannerCarouselForm,
    },
    props: {
        qnaBoards: {
            type: Array
        },
    },
    computed: {
        // 페이징 된 게시글 목의 총 페이지 수를 계산하는 메서드
        // -> 페이징 처리에 필요한 정보를 계산한다.
    pageCount() {
        if (this.displayedQnaBoards) {
        return Math.ceil(this.displayedQnaBoards.length / this.pageSize);
        }
        return 0;
    },
    // 현재 페이지에 해당하는 게시글 목록만 반환하는 메서드
    // -> 실제로 페이 된 게시글 목록을 반환한다.
    paginatedQnaBoards() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.displayedQnaBoards ? this.displayedQnaBoards.slice(startIndex, endIndex) : [];
    }
    },
    watch: {
    qnaBoards() {
      // 목록이 변경될 때마다searchQnaBoards() 호출
        if (this.qnaBoards && this.qnaBoards.length > 0) {
        this.searchQnaBoards();
        }
    }
    },
    created() {
    // 목록이 변경될 때마다 searchQnaBoards() 호출
    if (this.qnaBoards && this.qnaBoards.length > 0) {
        this.searchQnaBoards();
    }
    },
    methods: {
    // 등록일자 YYYY-MM-DD HH:MM 형식 출력
    formattedDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
    },
    // 검색 버튼을 누르면 searchQnaBoards() 호출
    searchQnaBoards() {
        const query = this.searchQuery.toLowerCase();
      // 검색어가 빈 값이면 변동 사항 없음.
        if (query === '') {
        this.displayedQnaBoards = this.qnaBoards;
        } else {
            // 검색어 제목(title), 작성자(writer) 필터링
        if (this.searchBy === 'title') {
            this.displayedQnaBoards = this.qnaBoards.filter(qnaBoard => qnaBoard.title.toLowerCase().includes(query));
        } else if (this.searchBy === 'writer') {
            this.displayedQnaBoards = this.qnaBoards.filter(qnaBoard => qnaBoard.writer.toLowerCase().includes(query));
        }
        }
        this.currentPage = 1;
    }
    }
}
</script>

<style scoped>

.qna-board-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}   

.qna-board-list {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.search {
  display: flex;
  margin-bottom: 1rem;
  padding-top: 30px;
  margin-bottom: -5px;
}

.search select {
  margin-right: 0.5rem;
}

.search input {
  margin-right: 0.5rem;
}

.search-btn {
  margin-left: 10px;
  margin-bottom: -7px;
  width: 100px;
  height: 40px;
}
.search-bar {
  margin-left: 0px;
}

table {
  width: 1200px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

table th,
table td {
  padding: 0.75rem;
  text-align: left;
}

table th {
  background-color: #fee789;
  font-weight: 600;
}

table td {
  background-color: #ffffff;
  border-radius: 150px;
}

table tr:nth-child(even) {
  background-color: #ffffff; /* 짝수 행 배경색 변경 */
}

table tr:nth-child(odd) {
  background-color: #ffffff; /* 홀수 행 배경색 변경 */
}

.search-select {
  min-width: 115px;
  margin-left: -45px;
}

.btn {
    background-color: #fee789 !important;
    color: black;
    border-radius: 25px;
    margin-right: 710px;
    margin-top: 15px;
    margin-left: 5px;
  }
  .btn-text {
    padding: 5px;
    margin-top: 2.5px;
}
.no-list {
  margin-left: 500px;
  margin-top: 50px;
}
</style>