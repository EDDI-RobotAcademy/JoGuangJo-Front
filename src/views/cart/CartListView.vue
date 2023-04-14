
<template>
  <div>
    <cart-list-form/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CartListForm from '@/components/cart/CartListForm.vue'

export default {
    name: "CartListView",
    components: { CartListForm },
    computed: {
        ...mapState(['isAuthenticated']),
    },
    methods:{
        ...mapActions([
            'requestCartListFromSpring'
        ]),
    },
    async created () {
            let memberId = JSON.parse(localStorage.getItem("userInfo")).id
            console.log("CartListView memberId : " + memberId);
            
            await this.requestCartListFromSpring(memberId);
    },
}
</script>

<style scoped>
</style>