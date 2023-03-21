<template>
    <nav>
        <v-app-bar color="dark" class="flex-grow-0" app>
            <v-app-bar-nav-icon @click="navigation_drawer = !navigation_drawer"/>
                <router-link to="/">
                    <v-img class="mx-2" src="@/assets/main/main_logo.png"
                        max-height="80" max-width="130" contain/>
                </router-link>
            <v-toolbar-title class="text-uppercase text--darken-4">
                <span></span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn v-if="isTrue == false" text @click="clickToggle">
                <span>로그인</span>
                <v-icon right>mdi-login</v-icon>
            </v-btn>
            <v-btn v-else text @click="clickToggle">
                <span>로그아웃</span>
                <v-icon right>mdi-logout</v-icon>
            </v-btn>

            <v-btn v-if="isTrue == false" text @click="clickToggle">
                <span>회원가입</span>
                <v-icon right>mdi-account-plus-outline</v-icon>
            </v-btn>
            <v-btn v-else text @click="clickToggle">
                <span>마이페이지</span>
                <v-icon right>mdi-account-cog</v-icon>
            </v-btn>

        </v-app-bar>

        <v-navigation-drawer app v-model="navigation_drawer">
            <v-list-item>
                <v-list-item-content>
                    <v-card-text>
                        <v-btn v-for="icon in icons" :key="icon" class="mx-1" icon>
                            <v-icon size="24px">
                                {{ icon }} 
                            </v-icon>
                        </v-btn>
                    </v-card-text>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list nav dense>
                <v-list-item v-for="link in links" :key="link.name" router :to="link.route">
                    <v-list-item-action>
                        <v-icon left>
                        {{ link.icon }}
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                        {{ link.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    name: "NavigationMenuPage",
    data() {
        return {
            isTrue: false,
            navigation_drawer: false,
            links: [
            { icon: 'mdi-home', text: 'Home', name: 'home', route: '/' },
            ],
            icons: [
            "mdi-instagram",
            "mdi-youtube",
            "mdi-facebook"
            ],
        }
    },
    methods: {
        clickToggle () {
            this.isTrue = !this.isTrue;
        }
    }
}
</script>