<template>
    <form @submit.prevent="onSubmit">
        <div align="center">
            <table>
            <tr>
            <td>제목</td>
            <td>
                <input type="text" v-model="title"/>
            </td>
            </tr>
            <tr>
            <td>작성자</td>
            <td>
                <input type="text" v-model="writer"/>
            </td>
            </tr>
            <tr>
            <td>본문</td>
            <td>
                <textarea cols="40" rows="10" v-model="content"/>
            </td>
            </tr>
            </table>
        </div>
  
        <div align="center">
        <button type="submit" align="center">등록</button>
        <router-link to="{ name: 'DonateBoardListPage' }">취소</router-link>
      </div>
    </form>
  </template>
  
  <script>
  
  export default {
      name: "DonateBoardRegisterForm",
      data () {
          return {
              title: '제목을 입력하세요.',
              writer: '작성자를 입력하세요.',
              content: '내용을 입력하세요.'
          }
      },
      methods: {
          onSubmit () {
              const { title, writer, content } = this
              this.$emit('submit', { title, writer, content })
          }
      }
  }
  
  </script>
  
  <style>
  
  </style>