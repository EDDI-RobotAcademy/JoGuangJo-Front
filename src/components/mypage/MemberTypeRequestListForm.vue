<template>
    <div>
        <v-data-table :headers="headers" :items="memberTypeRequests">
            <template v-slot:item.createdAt="{ item }">
                {{ formatDate(item.createdAt) }}
            </template>
        </v-data-table>
    </div>
</template>

<script>
import axios from "axios";

export default {
name: "MemberTypeRequestListForm",
data() {
    return {
    headers: [
        { text: "Nickname", value: "nickname" },
        { text: "Member Type", value: "memberType" },
        { text: "Message", value: "message" },
        { text: "Registration Date", value: "regDate" },
    ],
    memberTypeRequests: [],
    };
},
async created() {
    try {
    const response = await axios.get("/api/memberTypeRequests");
    this.memberTypeRequests = response.data;
    } catch (error) {
    console.error("Error fetching member type requests:", error);
    }
},
methods: {
    formatDate(date) {
    const d = new Date(date);
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    },
},
};
</script>
