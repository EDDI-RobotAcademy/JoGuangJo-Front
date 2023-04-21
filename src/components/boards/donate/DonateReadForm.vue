<template>
    <div class="donate-section">
      <div class="title-seciton">
       <h3 class="mb-10">나의 방문수거 내역 확인</h3>
      </div>
    <v-stepper v-model="e1">
      <v-stepper-header class="v-stepper-header">
        <v-stepper-step :complete="e1 > 1" step="1" color="#FFC107">기부자 정보 입력</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2" color="#FFC107">기부 도서 정보 입력</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" color="#FFC107">방문 날짜, 시간, 주소 입력</v-stepper-step>
      </v-stepper-header>
  
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card width="auto" height="auto" class="outer-card" elevation="0">
            <v-card class="inner-card" elevation="0">
            <v-text-field
              color="#FFC107"
              label="이름"
              prepend-icon="mdi-account"
              :value="donate.name"
              readonly
            />
            <v-text-field
              color="#FFC107"
              label="이메일"
              prepend-icon="mdi-email"
              :value="donate.email"
              readonly
            />
            <v-text-field
              color="#FFC107"
              label="휴대전화번호"
              prepend-icon="mdi-cellphone"
              :value="donate.phone"
              readonly
            />
          </v-card>
          </v-card>
            <div class="btn-section">
              <v-btn @click="goBack" class="gray-btn mr-3">
                이전으로
              </v-btn>
              <v-btn @click="goNext" class="yellow-btn">
                다음으로
              </v-btn>
            </div>
        </v-stepper-content>
  
        <v-stepper-content step="2">
          <v-card width="auto" height="auto" class="outer-card" elevation="0">
            <v-card class="inner-card" elevation="0">
            <v-text-field
              color="#FFC107"
              label="기부 도서 수량(권)"
              prepend-icon="mdi-book"
              :value="donate.quantity"
              readonly
            />
            <v-text-field
              color="#FFC107"
              label="기부 도서 상태(상/중/하)"
              prepend-icon="mdi-book"
              :value="donate.quality"
              readonly
            />
          </v-card>
          </v-card>
            <div class="btn-section">
              <v-btn @click="goBack" class="yellow-btn mr-3">
                이전으로
              </v-btn>
              <v-btn @click="goNext" class="yellow-btn">
                다음으로
              </v-btn>
            </div>
        </v-stepper-content>
  
        <v-stepper-content step="3">
          <v-card width="auto" height="auto" class="outer-card" elevation="0">
            <v-card class="inner-card" elevation="0">
            <v-text-field
              color="#FFC107"
              label="방문 날짜"
              prepend-icon="mdi-calendar"
              :value="donate.visitDate"
              readonly
            />
            <v-text-field
              color="#FFC107"
              label="방문 시간"
              prepend-icon="mdi-clock-time-four-outline"
              :value="donate.visitTime"
              readonly
            />
            <v-row>
                <v-col>
                <v-btn disabled class="yellow-btn">
                <v-icon left>mdi-map-marker</v-icon>
                방문 주소 (필수)
                </v-btn>
                </v-col>
                <v-col>
                <v-text-field
                  color="#FFC107"
                  label="우편번호"
                  :value="donate.zipcode"
                  readonly
                />
                </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  color="#FFC107"
                  label="도시"
                  :value="donate.city"
                  readonly
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  color="#FFC107"
                  label="기본 주소"
                  :value="donate.street"
                  readonly
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  color="#FFC107"
                  label="상세 주소 및 기타 메모사항(공동현관 비밀번호 등)"
                  :value="donate.addressDetail"
                  readonly
                />
              </v-col>
            </v-row>
        </v-card>
      </v-card>
          <div class="btn-section">
          <v-btn @click="goBack" class="yellow-btn mr-3">
            이전으로
          </v-btn>
          <v-btn disabled class="yellow-btn">
            제출하기
          </v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    </div>
  </template>
  
  <script>
  export default {
    name: "DonateReadForm",
    data() {
      return {
        e1: 1,
      };
    },
    props: {
      donate: {
            type: Object,
            required: true
        },
    },
    methods: {
      goBack() {
        if (this.e1 > 1) {
          this.e1--;
        }
      },
      goNext() {
        if (this.e1 < 3) {
          this.e1++;
        }
      }
    }
  }
  </script>
  
<style scoped>
@import '@/css/donateStyle.css';

/* 이상하게 css가 안 먹혀서 따로 직접 넣어준 부분 */

.outer-card {
    margin: 30px 40px 30px 40px;
    padding: 12px 12px 12px 12px;
    background-color: #fee789;
}

.inner-card {
    padding: 40px 50px 40px 50px;
    align-items: center;
    justify-items: center;
}

</style>
