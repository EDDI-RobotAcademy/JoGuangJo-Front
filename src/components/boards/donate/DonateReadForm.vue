<template>
    <div>
     <div>
    <v-stepper v-model="e1">
      <h3>나의 방문수거 기부내역 상세조회</h3>
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">1단계 : 기부자 정보 입력</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">2단계 : 기부 도서 정보 입력</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">3단계 : 방문 날짜, 시간, 주소 입력</v-stepper-step>
      </v-stepper-header>
  
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card width="auto" height="auto">
            <v-text-field
              label="이름"
              prepend-icon="mdi-account"
              :value="donate.name"
              readonly
            />
            <v-text-field
              label="이메일"
              prepend-icon="mdi-email"
              :value="donate.email"
              readonly
            />
            <v-text-field
              label="휴대전화번호"
              prepend-icon="mdi-cellphone"
              :value="donate.phone"
              readonly
            />
          </v-card>
          <v-spacer></v-spacer>
          <v-btn @click="goBack">
            이전으로
          </v-btn>
          <v-btn @click="goNext" color="yellow">
            다음으로
          </v-btn>
          <v-spacer></v-spacer>
        </v-stepper-content>
  
        <v-stepper-content step="2">
          <v-card width="auto" height="auto">
            <v-text-field
            label="기부 도서 수량(권)"
              prepend-icon="mdi-book"
              :value="donate.quantity"
              readonly
            />
            <v-text-field
              label="기부 도서 상태(상/중/하)"
              prepend-icon="mdi-book"
              :value="donate.quality"
              readonly
            />
          </v-card>
          <v-spacer></v-spacer>
          <v-btn @click="goBack">
            이전으로
          </v-btn>
          <v-btn @click="goNext" color="yellow">
            다음으로
          </v-btn>
          <v-spacer></v-spacer>
        </v-stepper-content>
  
        <v-stepper-content step="3">
            <v-card width="auto" height="auto">
            <v-text-field
              label="방문 날짜"
                prepend-icon="mdi-calendar"
              :value="donate.visitDate"
              readonly
            />
            <v-card width="auto" height="auto">
            <v-text-field
              label="방문 시간"
              prepend-icon="mdi-clock-time-four-outline"
              :value="donate.visitTime"
              readonly
            />
              <v-row>
                <v-col>
                <v-btn disabled>
                <v-icon left>mdi-map-marker</v-icon>
                방문 주소 (필수)
                </v-btn>
              </v-col>
              <v-col>
                <v-text-field
                  label="우편번호"
                  :value="donate.zipcode"
                  readonly
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="도시"
                  :value="donate.city"
                  readonly
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="기본 주소"
                  :value="donate.street"
                  readonly
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="상세 주소 및 기타 메모사항(공동현관 비밀번호 등)"
                  :value="donate.addressDetail"
                  readonly
                />
              </v-col>
            </v-row>
          </v-card>
          <v-spacer></v-spacer>
          <v-btn @click="goBack">
            이전으로
          </v-btn>
          <v-btn disabled color="yellow">
            제출하기
          </v-btn>
          <v-spacer></v-spacer>
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    </div>
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
  
  <style>
  
  </style>
  