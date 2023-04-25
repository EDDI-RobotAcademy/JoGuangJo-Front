<template>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">이전</button>
      <span>{{ currentPage }} / {{ pageCount }}</span>
      <button @click="nextPage" :disabled="currentPage === pageCount">다음</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "PaginationForm",
    props: {
      currentPage: {
        type: Number,
        default: 1
      },
      pageCount: {
        type: Number,
        default: 1
      }
    },
    methods: {
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
          this.$emit('update:current-page', this.currentPage);
        }
      },
      nextPage() {
        if (this.currentPage < this.pageCount) {
          this.currentPage++;
          this.$emit('update:current-page', this.currentPage);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .pagination button {
    background-color: #fee789;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .pagination button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .pagination span {
    margin: 0 10px;
    font-size: 16px;
  }
  </style>
  