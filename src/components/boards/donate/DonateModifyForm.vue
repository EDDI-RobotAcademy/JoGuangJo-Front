<template>
  <div>
    <h3>나의 기부 내역 수정하기</h3>
    <h5> nickName 회원님이 regDate 에 신청하신 기부글을 수정합니다</h5>
    <h6>주의! : 기부 상태가 예약확정으로 넘어간 이후로는 기부를 수정하실 수 없습니다 (취소만 가능)</h6>

    <v-stepper v-model="e1">
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
              v-model="name"
              label="이름"
              :rules="nameRules"
              hint="기부자의 이름을 알려주세요 (한글 이름, 2~5자 이내)"
              persistent-hint
              prepend-icon="mdi-account"
            />
            <v-text-field
              v-model="email"
              label="이메일"
              :rules="emailRules"
              hint="기부자의 이메일을 알려주세요"
              persistent-hint
              prepend-icon="mdi-email"
            />
            <v-text-field
              v-model="formattedPhone"
              label="휴대전화번호"
              :rules="phoneRules"
              hint="기부자의 휴대전화번호를 알려주세요 (하이픈- 생략, 11자리 숫자)"
              persistent-hint
              prepend-icon="mdi-cellphone"
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
            <v-combobox
              v-model="quantity"
              :items="quantityItems"
              label="기부 도서 수량(권)"
              :rules="quantityRules"
              hint="기부할 도서의 전체 수량을 알려주세요. (최소 5권 ~ 최대 100권)"
              persistent-hint
              prepend-icon="mdi-book"
            ></v-combobox>
            <v-radio-group
              v-model="quality"
              :rules="qualityRules"
              label="기부 도서 상태(상/중/하)"
              hint="기부할 도서의 전체 상태를 알려주세요"
              persistent-hint
              prepend-icon="mdi-book"
              row
            >
              <v-radio label="상" value="상"></v-radio>
              <v-radio label="중" value="중"></v-radio>
              <v-radio label="하" value="하"></v-radio>
            </v-radio-group>
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
            <v-col>
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                :return-value.sync="visitDate"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="visitDate"
                    label="방문 날짜"
                    hint="직원이 방문할 날짜를 알려주세요 (당일 기준 3일 이후 날짜부터 선택 가능. 주말은 선택 불가)"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    required
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                  <v-date-picker
                    v-model="visitDate"
                    scrollable
                    :rules="visitDateRules"
                    :allowed-dates="allowedDates"
                  >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="menu1 = false"
                  >
                    Cancel
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu1.save(visitDate)"
                  >
                    OK
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col>
              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="visitTime"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="visitTime"
                    label="방문 시간"
                    hint="직원이 방문할 시간을 알려주세요 (오전 9시~오후8시 사이, 30분 단위로 선택 가능)"
                    persistent-hint
                    prepend-icon="mdi-clock-time-four-outline"
                    required
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="menu2"
                  v-model="visitTime"
                  full-width
                  :rules="visitTimeRules"
                  :allowed-hours="allowedHours"
                  :allowed-minutes="allowedMinutes"
                  @click:minute="$refs.menu2.save(visitTime)"
                ></v-time-picker>
              </v-menu>
            </v-col>

              <v-row>
                <v-col>
                <v-btn @click="callDaumAddressApi"
                >
                <v-icon left>mdi-map-marker</v-icon>
                방문 주소 (필수)
                </v-btn>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="zipcode"
                  label="우편번호"
                  readonly
                  required
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="city"
                  label="도시"
                  readonly
                  required
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="street"
                  label="기본 주소"
                  readonly
                  required
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="addressDetail"
                  label="상세 주소 및 기타 메모사항(공동현관 비밀번호 등)"
                  required
                />
              </v-col>
            </v-row>
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
      </v-stepper-items>
    </v-stepper>
    <div>
          <v-btn @click="onSubmit" :disabled="!isAllValid">수정 완료</v-btn>
          <v-btn>
            <router-link
            :to="{ name: 'DonateReadView', params: { donateId: donate.donateId.toString() }}">
            취소
          </router-link>
          </v-btn>
    </div>
  </div>
</template>

<script>
export default {
    name: "DonateModifyForm",
    data () {
        return {
          e1: 1,

          name: "",
          email: "",
          phone: "",
          quantity: "",
          quality: "",
          visitDate: "",
          visitTime: "",
          zipcode: "",
          city: "",
          street: "",
          addressDetail: "",

          quantityItems: Array.from({ length: 96 }, (_, i) => i + 5),
          date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
          time: null,
          menu1: false,
          menu2: false,
          nameRules: [
            v => !!v || "이름은 필수 입력 정보입니다",
            v => /^[가-힣]{2,5}$/.test(v) || "2~5자 이내의 한글 이름만 입력할 수 있습니다"
          ],
          emailRules: [
            v => !!v || "이메일은 필수 입력 정보입니다",
            v => {
              const replaceV = v.replace(/(\s*)/g, '')
              const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
              return pattern.test(replaceV) || '이메일을 형식에 맞게 입력하세요.'
            }
          ],
          phoneRules: [
            v => !!v || "휴대전화번호는 필수 입력 정보입니다",
            (v) => /^\d{3}-\d{4}-\d{4}$/.test(v) || "휴대전화번호 11자리를 모두 입력하세요"
          ],
          quantityRules: [
            v => !!v || "기부 도서 수량은 필수 입력 정보입니다",
            v => v >= 5 || "최소 기부 수량은 5권입니다"
          ],
          qualityRules: [
            v => !!v || "기부 도서 상태는 필수 입력 정보입니다"
          ],
          visitDateRules: [
            v => !!v || "방문 날짜는 필수 입력 정보입니다"
          ],
          visitTimeRules: [
            v => !!v || "방문 시간은 필수 입력 정보입니다"
          ]
        };
  },
  props: {
      donate: {
          type: Object,
          required: true,
      },
      donateId: {
          type: String,
          required: true,
      },
  },
  created () {
    console.log('donateId-child', this.donateId),
        this.name = this.donate.name,
        this.email = this.donate.email,
        this.phone = this.donate.phone,
        this.quantity = this.donate.quantity,
        this.quality = this.donate.quality,
        this.visitDate = this.donate.visitDate,
        this.visitTime = this.donate.visitTime,
        this.zipcode = this.donate.zipcode,
        this.city = this.donate.city,
        this.street = this.donate.street,
        this.addressDetail = this.donate.addressDetail
  },
  computed: {
    formattedPhone: {
      get() {
        return this.phone;
      },
      set(value) {
        const formatted = value
          .replace(/\D/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
          .replace(/-$/, "");
        this.phone = formatted;
      },
    },
  },
  watch: {
    formattedPhone(newPhone) {
    this.phone = newPhone;
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
  },
  allowedDates(val) {
    const today = new Date();
    const minDate = new Date(today.setDate(today.getDate() + 3));
    const targetDate = new Date(val);
    return targetDate >= minDate && targetDate.getDay() !== 0 && targetDate.getDay() !== 6;
  },
  allowedHours: (hour) => hour >= 9 && hour < 20,
  allowedMinutes: (minute) => minute % 30 === 0,
  callDaumAddressApi() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          let fullRoadAddr = data.roadAddress;
          let extraRoadAddr = "";

          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraRoadAddr += data.bname;
          }

          if (data.buildingName !== "" && data.apartment === "Y") {
            extraRoadAddr += extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
          }

          if (extraRoadAddr !== "") {
            extraRoadAddr = " (" + extraRoadAddr + ")";
          }

          if (fullRoadAddr !== "") {
            fullRoadAddr += extraRoadAddr;
          }

          this.city = data.sido;
          this.zipcode = data.zonecode;
          this.street = data.sigungu + " " + fullRoadAddr;
        },
      }).open();
    },
    isAllValid() {
        if ( this.name && this.email && this.phone &&
        this.quantity && this.quality && this.visitDate && this.visitTime &&
        this.zipcode && this.city && this.street && this.addressDetail ) {
            return true;
          } else {
            return false;
          }
        },

      onSubmit () {
          const { name, email, phone, quantity, quality, visitDate, visitTime, zipcode, city, street, addressDetail } = this
          this.$emit('submit', { name, email, phone, quantity, quality, visitDate, visitTime, zipcode, city, street, addressDetail})
    }
  }
}
</script>