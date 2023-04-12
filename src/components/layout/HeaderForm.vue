<template>
  <header class="header">
    <div class="header-content">
     <div class="logo-header">
      <img src='@/assets/logo/logo.png' alt="logo" width="250" height="100%" class="logo-img1">
 <!--       <ul class="menu">
            <li class="menu-item" a href="#">메뉴</li>
            <li class="menu-item" a href="#">메뉴2</li>
            <li class="menu-item" a href="#">메뉴3</li>
            <li class="menu-item" a href="#">메뉴4</li>
        </ul> -->
      </div>
    </div>
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

<style scoped>

.header {
  display: flex;
}

.header-content {
  justify-content: center;
  align-content: center;
  text-align: center;
  height: auto;
  padding: 15px;
}

.logo-header {
  margin-right: 1200px;
  margin-top: -10px;
}

.menu-container {
  display: flex;
  justify-content: flex-end;
}

.menu {
  display: flex;
  list-style: none;
  margin-left: 80px;
  margin-top: -100px;
}

.menu-item {
  margin-left: 10px;
}

.menu-item a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

</style>