<template>
    <div class="donate-list">
        <div class="title">
        <h3>나의 기부 내역</h3><br>
        <h4>{{ nickName }} 회원님, 환영합니다.</h4><br>
        </div>
        <v-spacer></v-spacer>
        <table>
            <tr>
                <th align="center" width="100">번호</th>
                <th align="center" width="400">제목</th>
                <th align="center" width="200">등록일자</th>
                <th align="center" width="200">수정일자</th>
                <th align="center" width="200">상태</th>
            </tr>
            <tr v-if="!donates || (Array.isArray(donates) && donates.length === 0)">
                <td colspan="6">
                현재 회원님의 기부 내역이 존재하지 않습니다.
                </td>
            </tr>
            <tr v-else v-for="donate in donates" :key="donate.donateId">
                <td align="center">
                    {{ donate.donateId }}
                </td>
                <td align="center">
                    <router-link :to=" { name: 'DonateReadView', 
                        params: { donateId: donate.donateId.toString() }}">
                        {{ formattedDate(donate.regDate) }} 에 회원님이 신청하신 기부글입니다
                        </router-link>
                </td>
                <td align="center">
                    {{ formattedDate(donate.regDate) }}
                </td>
                <td align="center">
                    {{ formattedDate(donate.updDate) }}
                </td>
                <td align="center">
                    <!-- 원래는 여기 status 를 넣어야 하는데, 아직 구현하지 못해서 일단 donateId를 넣었습니다 -->
                    {{ donateId }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: "DonateListForm",
    data() {
        return {
            nickName: JSON.parse(localStorage.getItem('userInfo')).nickName
        }
    },
    props: {
        donates: {
            type: Array
        }
    },
    methods: {
        formattedDate(dateString) {
            const date = new Date(dateString);
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${year}.${month}.${day}`;
        }
    }
}
</script>

<style scoped>
.donate-list { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.title {
    align-content: center;
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

</style>