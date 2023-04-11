<template>
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
</style>