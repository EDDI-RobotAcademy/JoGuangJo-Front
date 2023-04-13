<template>
    <div>
        <h3>나의 기부 내역</h3>
        <h4>{{ nickName }} 회원님, 환영합니다.</h4>
        <v-spacer></v-spacer>
        <table>
            <tr>
                <th align="center" width="100">번호</th>
                <th align="center" width="400">제목</th>
                <th align="center" width="200">등록일자</th>
                <th align="center" width="200">수정일자</th>
                <th align="center" width="200">상태</th>
            </tr>
            <tr v-if="!donateVisits || (Array.isArray(donateVisits) && donateVisits.length === 0)">
                <td colspan="6">
                현재 회원님의 기부 내역이 존재하지 않습니다.
                </td>
            </tr>
            <tr v-else v-for="donateVisit in donateVisits" :key="donateVisit.donateVisitId">
                <td align="center">
                    {{ donateVisit.donateVisitId }}
                </td>
                <td align="center">
                    <router-link :to=" { name: 'MyDonateVisitReadView', 
                        params: { donateVisitId: donateVisit.donateVisitId.toString() }}">
                        {{ donateVisit.regDate }} 에 회원님이 신청하신 기부글입니다
                        </router-link>
                </td>
                <td align="center">
                    {{ donateVisit.regDate }}
                </td>
                <td align="center">
                    {{ donateVisit.updDate }}
                </td>
                <td align="center">
                    <!-- 원래는 여기 status 를 넣어야 하는데, 아직 어떻게 구현해야 할지 모르겠어서 일단 가라로 아무거나 넣었습니다 -->
                    {{ donateVisit.donateVisitId }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: "MyDonateListForm",
    data() {
        return {
            nickName: JSON.parse(localStorage.getItem('userInfo')).nickName
        }
    },
    props: {
        donateVisits: {
            type: Array
        }
    }
}
</script>

<style>
</style>