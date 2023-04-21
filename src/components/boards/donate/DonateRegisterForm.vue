<template>
    <div class="donate-section">
        <div class="title-seciton">
        <h3>책 기부 신청하기</h3>
        <h5>재단 직원이 회원님의 댁으로 방문해 직접 책을 수거합니다</h5>
        </div>
        <v-form @submit.prevent="onSubmit">
            <v-stepper v-model="e1">
            <v-stepper-header class="v-stepper-header">
                <v-stepper-step :complete="e1 > 1" step="1" color="#FFC107">기부자 정보 입력</v-stepper-step>
                <v-stepper-step :complete="e1 > 2" step="2" color="#FFC107">기부 도서 정보 입력</v-stepper-step>
                <v-stepper-step step="3" color="#FFC107">방문 날짜, 시간, 주소 입력</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                <v-card width="auto" height="auto" class="outer-card" elevation="0">
                    <v-card class="inner-card" elevation="0">
                    <v-text-field
                    color="#FFDE59"
                    v-model="formData.name" label="이름" :rules="rules.name"
                    hint="기부자의 이름을 알려주세요 (한글 이름, 2~5자 이내)"
                    persistent-hint prepend-icon="mdi-account"
                    />
                    <v-text-field
                    color="#FFDE59"
                    v-model="formData.email" label="이메일" :rules="rules.email"
                    hint="기부자의 이메일을 알려주세요"
                    persistent-hint prepend-icon="mdi-email"
                    />
                    <v-text-field
                    color="#FFDE59"
                    v-model="formattedPhone" label="휴대전화번호" :rules="rules.phone"
                    hint="기부자의 휴대전화번호를 알려주세요 (하이픈- 생략, 11자리 숫자)"
                    persistent-hint prepend-icon="mdi-cellphone"
                    />
                    </v-card>
                </v-card>
                <div class="btn-section">
                    <v-btn @click="goBack" class="yellow-btn">
                    이전으로
                </v-btn>
                <v-btn @click="goNext" :disabled="!isStep1Valid" class="yellow-btn">
                    다음으로
                </v-btn>
                </div>
                </v-stepper-content>
  
                <v-stepper-content step="2">
                    <v-card width="auto" height="auto" class="outer-card" elevation="0">
                    <v-card class="inner-card" elevation="0">
                    <v-combobox
                    color="#FFDE59"
                    v-model="formData.quantity" :items="quantityItems" label="기부 도서 수량(권)" :rules="rules.quantity"
                    hint="기부할 도서의 전체 수량을 알려주세요. (최소 5권 ~ 최대 100권)" persistent-hint prepend-icon="mdi-book"
                    />
                    <v-radio-group
                    color="#FFDE59"
                    v-model="formData.quality" :rules="rules.quality" label="기부 도서 상태(상/중/하)"
                    hint="기부할 도서의 전체 상태를 알려주세요" persistent-hint prepend-icon="mdi-book" row
                    >
                    <v-radio label="상" value="상" color="#FFDE59"></v-radio>
                    <v-radio label="중" value="중" color="#FFDE59"></v-radio>
                    <v-radio label="하" value="하" color="#FFDE59"></v-radio>
                    </v-radio-group>
                    </v-card>
                </v-card>
              <div class="btn-section">
                  <v-btn @click="goBack" class="yellow-btn">
                      이전으로
                  </v-btn>
                  <v-btn @click="goNext" :disabled="!isStep2Valid" class="yellow-btn">
                      다음으로
                  </v-btn>
              </div>
                </v-stepper-content>
    
                <v-stepper-content step="3">
                    <v-card width="auto" height="auto" class="outer-card" elevation="0">
                    <v-card class="inner-card" elevation="0">
                    <v-col>
                    <v-menu
                    ref="menu1" v-model="menu1" :close-on-content-click="false" :return-value.sync="formData.visitDate"
                    transition="scale-transition" offset-y min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        color="#FFDE59"
                            v-model="formData.visitDate" label="방문 날짜"
                            hint="직원이 방문할 날짜를 알려주세요 (당일 기준 3일 이후 날짜부터 선택 가능. 주말은 선택 불가)"
                            persistent-hint prepend-icon="mdi-calendar" required v-bind="attrs" v-on="on"
                        />
                        </template>
                        <v-date-picker
                        color="#FFDE59"
                            v-model="formData.visitDate" scrollable :rules="rules.visitDate" :allowed-dates="allowedDates"
                        >
                        <v-spacer/>
                        <v-btn text background-color="gray" @click="menu1 = false">
                            Cancel
                        </v-btn>
                        <v-spacer/>
                        <v-btn text background-color="#FFDE59" @click="$refs.menu1.save(formData.visitDate)">
                            OK
                        </v-btn>
                        <v-spacer/>
                        </v-date-picker>
                    </v-menu>
                    </v-col>
        
                    <v-col>
                    <v-menu
                        ref="menu2" v-model="menu2"
                        :close-on-content-click="false" :nudge-right="40" :return-value.sync="formData.visitTime"
                        transition="scale-transition" offset-y max-width="290px" min-width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        color="#FFDE59"
                            v-model="formData.visitTime" label="방문 시간"
                            hint="직원이 방문할 시간을 알려주세요 (오전 9시~오후8시 사이, 30분 단위로 선택 가능)"
                            persistent-hint prepend-icon="mdi-clock-time-four-outline"
                            required v-bind="attrs" v-on="on"
                        />
                        </template>
                        <v-time-picker
                        v-if="menu2"
                        color="#FFDE59"
                        v-model="formData.visitTime" full-width :rules="rules.visitTime"
                        :allowed-hours="allowedHours" :allowed-minutes="allowedMinutes"
                        @click:minute="$refs.menu2.save(formData.visitTime)"
                        />
                    </v-menu>
                    </v-col>
        
                    <v-row>
                        <v-col align-self="center">
                            <v-btn @click="callDaumAddressApi" class="yellow-btn">
                            <v-icon left>mdi-map-marker</v-icon>
                            방문 주소 (필수)
                            </v-btn>
                        </v-col>
                        <v-col>
                        <v-text-field
                        v-model="formData.zipcode" label="우편번호" readonly required
                        />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                            v-model="formData.city" label="도시" readonly required
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                            v-model="formData.street" label="기본 주소" readonly required
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                            v-model="formData.addressDetail" label="상세 주소 및 기타 메모사항(공동현관 비밀번호 등)" required color="#FFDE59"
                            />
                        </v-col>
                    </v-row>
                </v-card>
                </v-card>
                <div class="btn-section">
                <v-btn @click="goBack" class="yellow-btn">
                    이전으로
                </v-btn>
                <v-btn @click="onSubmit" :disabled="!isStep3Valid" class="yellow-btn">
                    제출하기
                </v-btn>
                </div>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-form>
  </div>
</template>
  
<script>

export default {
    name: "DonateRegisterForm",
    data() {
        return {
        e1: 1,
        formData: {
            memberId: JSON.parse(localStorage.getItem('userInfo')).id,
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
            addressDetail: ""
        },
        quantityItems: Array.from({ length: 96 }, (_, i) => i + 5),
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        time: null,
        menu1: false,
        menu2: false,
        }
    },
    computed: {
        rules() {
            return {
                name: [
                    v => !!v || "이름은 필수 입력 정보입니다",
                    v => /^[가-힣]{2,5}$/.test(v) || "2~5자 이내의 한글 이름만 입력할 수 있습니다"
                ],
                email: [
                    v => !!v || "이메일은 필수 입력 정보입니다",
                    v => {
                    const replaceV = v.replace(/(\s*)/g, '');
                    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
                    return pattern.test(replaceV) || '이메일을 형식에 맞게 입력하세요.';
                    }
                ],
                phone: [
                    v => !!v || "휴대전화번호는 필수 입력 정보입니다",
                    v => /^\d{3}-\d{4}-\d{4}$/.test(v) || "휴대전화번호 11자리를 모두 입력하세요"
                ],
                quantity: [
                    v => !!v || "기부 도서 수량은 필수 입력 정보입니다",
                    v => v >= 5 || "최소 기부 수량은 5권입니다"
                ],
                quality: [
                    v => !!v || "기부 도서 상태는 필수 입력 정보입니다"
                ],
                visitDate: [
                    v => !!v || "방문 날짜는 필수 입력 정보입니다"
                ],
                visitTime: [
                    v => !!v || "방문 시간은 필수 입력 정보입니다"
                ]
                }
            },
        isStep1Valid() {
            return (
            this.formData.name &&
            this.formData.email &&
            this.formData.phone
        );
        },
        isStep2Valid() {
        return (
            this.formData.quantity &&
            this.formData.quality
        );
        },
        isStep3Valid() {
        return (
            this.formData.visitDate &&
            this.formData.visitTime &&
            this.formData.zipcode &&
            this.formData.city &&
            this.formData.street &&
            this.formData.addressDetail
        );
        },
        formattedPhone: {
        get() {
            return this.formData.phone;
        },
        set(value) {
            const formatted = value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
            .replace(/-$/, "");
            this.formData.phone = formatted;
        },
        },
    },
    watch: {
        formattedPhone(newPhone) {
        this.formData.phone = newPhone;
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
    
                this.formData.city = data.sido;
                this.formData.zipcode = data.zonecode;
                this.formData.street = data.sigungu + " " + fullRoadAddr;
            },
            }).open();
        },
        onSubmit() {
        console.log('formData', this.formData)
        this.$emit("submit", { formData: this.formData });
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