<template>
  <header class="header-content">
    <div>
      <v-row>
            <v-col>
              <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item v-bind="attrs" v-on="on">상위메뉴1</v-list-item>
                  </template>
                    <v-list>
                      <v-list-item
                        v-for="(item, index) in items1"
                        :key="index"
                      >
                      <v-list-item-title @click="goTo(item.to)">{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                </v-menu>
              </v-col>
              <v-col>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item v-bind="attrs" v-on="on">상위메뉴1</v-list-item>
                  </template>
                    <v-list>
                      <v-list-item
                        v-for="(item, index) in items2"
                        :key="index"
                      >
                      <v-list-item-title @click="goTo(item.to)">{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                </v-menu>
              </v-col>
              <v-col>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item v-bind="attrs" v-on="on">마이페이지</v-list-item>
                  </template>
                    <v-list>
                      <v-list-item
                        v-for="(item, index) in items3"
                        :key="index"
                      >
                      <v-list-item-title @click="goTo(item.to)">{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                </v-menu>
              </v-col>
        </v-row>
    </div>
  </header>
</template>

<script>
import router from '@/router'

export default {
    name: "HeaderForm",
    data: () => ({
      items1: [
      { title: '하위메뉴1', to: 'Home' },
      { title: '하위메뉴2', to: 'Home' },
      { title: '하위메뉴3', to: 'Home' },
      ],
      items2: [
      { title: '하위메뉴1', to: 'Home' },
      { title: '하위메뉴2', to: 'Home' },
      { title: '하위메뉴3', to: 'Home' },
      ],
      items3: [
      { title: '나의 정보 수정', to: 'MyPage' },
      { title: '나의 기부 내역', to: 'MyDonateVisitListView' },
      { title: '나의 게시글 및 댓글 내역', to: 'Home' },
      { title: '나의 결제 및 주문 내역', to: 'Home' },
      ]
    }),
    methods: {
      sendMemberId() {
        this.$emit("click", { memberId: this.memberId });
      },
      goTo(routeName) {
      router.push({ name: routeName });
      }
    },
}
</script>

<style>

.header-content {
  justify-content: center;
  align-content: center;
  text-align: center;
  height: auto;
  padding: 15px;
}

</style>