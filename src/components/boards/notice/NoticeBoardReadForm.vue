<template>
  <div>
    <div class="notice-section">
      <v-card v-if="noticeBoard" max-width="1500">
        <div class="title-section">
          <v-card-title>{{ noticeBoard.title }}</v-card-title>
          <v-card-subtitle>
            <div class="d-flex justify-content-between sutbtitleForSpan">
              <span>작성자: {{ noticeBoard.writer }}</span>
              <span>등록일: {{ formattedDate(noticeBoard.regDate) }} </span>
            </div>
          </v-card-subtitle>
        </div>
        <div>
          <textarea rows="10" class="notice-textarea"         
          :value="noticeBoard.content" readonly
          style="width:100%; margin-top:-50px;"
          />
        </div>
      </v-card>
      </div>
  </div>
</template>

<script>
export default {
    name: "NoticeBoardReadForm",
    props: {
        noticeBoard: {
            type: Object,
            required: true,
        }
    },
    methods: {
      // 등록일자 YYYY-MM-DD 형식 출력
      formattedDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
  
        return `${year}.${month}.${day}`;
      },
    },
}
</script>

<style scoped>

.notice-section {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  width: 60vw;
  height: 60vh;
  margin-bottom: 15px;
}

.title-section {
    background-color: #fee789;
  }

.sutbtitleForSpan {
  padding-top: 40px;
}

.notice-textarea {
  resize: none; /* 드래그로 크기 조절 막기 */
  padding: 20px;
  min-height: 350px;
}


</style>