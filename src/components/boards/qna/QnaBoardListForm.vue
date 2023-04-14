<template>
    <div class="qna-board-list">
      <div class="header-form">
        <!-- 헤더 로고,메뉴-->
        <header-form/>
      </div>
    <!--  <div class="-form">
        <img src="@/assets/carousel/test_1.jpg" alt="logo" width="1500" height="250" class="logo-img1">
      </div> -->
      <div class="Board-list">
        <div class="h2">
         <h2>Q&A 문의하기</h2>
        </div> 
        <div class="search">
           <select v-mod  l="searchBy" class="search-select">
           <option value="title">제목</option>
           <option value="writer">작성자</option>
         </select>
            <v-list-item>
                  <div class="search-bar">
                    <v-text-field
                        v-model="search"
                        class="nav-search"
                        placeholder="  검색어를 입력하세요."
                        prepend-icon="mdi-magnify"
                        color="#FFDE59"
                        clearable
                        style="width:200px;"
                        @keydown.enter="searchPage()"
                    >
                    </v-text-field>
                  </div>
                       <div class="search-btn">
                        <v-btn
                        small
                        color="#fee789"
                        rounded
                        @click="searchPage()"
                        >
                        검색
                        </v-btn>
                       </div>
                    </v-list-item>
           <!-- <input type="text" v-model="searchQuery" placeholder="검색어를 입력해주세요" @keyup.enter="searchQnaBoards" />
           <button @click="searchQnaBoards">검색</button> -->
      </div>
      <table>
        <tr>
          <th class="no-column">No</th>
          <th :style="{ 'padding-left': '50px' }" class="title-column">제목</th>
          <th :style="{ 'padding-left': '300px' }" class="writer-column">작성자</th>
          <th :style="{ 'padding-left': '350px' }" class="date-column">등록일자</th>
        </tr>
        <tr v-if="!displayedQnaBoards || (Array.isArray(displayedQnaBoards) && displayedQnaBoards.length === 0)">
          <td colspan="4">현재 등록된 게시물이 없습니다!</td>
        </tr>
        <tr v-else v-for="qnaBoard in paginatedQnaBoards" :key="qnaBoard.qnaBoardId">
          <td>{{ qnaBoard.qnaBoardId }}</td>
          <td :style="{ 'padding-left': '50px' }">
            <router-link :to="{ name: 'QnaBoardReadView', params: { qnaBoardId: qnaBoard.qnaBoardId.toString() }}">
              {{ qnaBoard.title }}
            </router-link>
          </td>
          <td :style="{ 'padding-left': '300px' }">{{ qnaBoard.writer }}</td>
          <td :style="{ 'padding-left': '350px' }">{{ formattedDate(qnaBoard.regDate) }}</td>
        </tr>
      </table><br>
      <v-pagination v-model="currentPage" :length="pageCount" class="my-5"></v-pagination>
    </div>
    </div>
  </template>

  <script>
import PaginationForm from "@/components/layout/PaginationForm.vue";
import HeaderForm from "@/components/layout/HeaderForm.vue";
import BannerCarouselForm from "@/components/layout/BannerCarouselForm.vue";

export default {
    name: "QnaBoardListForm",
    data() {
        return {
        currentPage: 1, 
        pageSize: 5, // 수정 가능
        searchQuery: '', // 검색어를 입력하는 input 요소의 v-model
        displayedQnaBoards: [],
        searchBy: 'title'
    };
    },
    components: {
        PaginationForm,
        HeaderForm,
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
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
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

.board-list {
    margin-top : 0px;
}
.qna-board-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}   
.header-form {
  width: 100%;
  margin-top: -18px;
  margin-bottom: 30px;
  margin-left: -620px;
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
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;
  margin-left: 850px;
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

  .v-pagination__item--active {
    background-color: #FFDE59 !important;
    color: #ffffff !important;
  }

</style>



<!-- <template>
    <div>
    <h3>게시물 목록</h3>
    <div class="search">
    <select v-model="searchBy">
        <option value="title">제목</option>
        <option value="writer">작성자</option>
    </select>
        <input type="text" v-model="searchQuery" placeholder="검색어를 입력해주세요" @keyup.enter="searchQnaBoards">
        <button @click="searchQnaBoards">검색</button>   
    </div>
        <table>
            <tr>
                <th align="center" width="100">No</th>
                <th align="center" width="640">제목</th>
                <th align="center" width="150">작성자</th>
                <th align="center" width="300">등록일자</th>
            </tr>
            <tr v-if="!displayedQnaBoards || (Array.isArray(displayedQnaBoards) && displayedQnaBoards.length === 0)">
                <td colspan="4">
                현재 등록된 게시물이 없습니다!
                </td>
            </tr>
            <tr v-else v-for="qnaBoard in paginatedQnaBoards" :key="qnaBoard.qnaBoardId">
                <td align="center">
                    {{ qnaBoard.qnaBoardId }}
                </td>
                <td align="left">
                    <router-link :to=" { name: 'QnaBoardReadView', 
                        params: { qnaBoardId: qnaBoard.qnaBoardId.toString() }}">
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
        <v-pagination v-model="currentPage" :length="pageCount" class="my-5"></v-pagination>
    </div>
</template>

<script>
import PaginationForm from "@/components/layout/PaginationForm.vue";

export default {
    name: "QnaBoardListForm",
    data() {
        return {
        currentPage: 1, 
        pageSize: 5, // 수정 가능
        searchQuery: '', // 검색어를 입력하는 input 요소의 v-model
        displayedQnaBoards: [],
        searchBy: 'title'
    };
    },
    components: {
        PaginationForm,
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

<style>
</style> -->