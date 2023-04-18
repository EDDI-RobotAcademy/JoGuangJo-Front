<template>
  <div>
    <ChangeAddressForm :myinfo="myPageData" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ChangeAddressForm from '@/components/mypage/ChangeAddressForm.vue';

export default {
  name: 'ChangeAddressView',
  components: {
    ChangeAddressForm
  },
  computed: {
    ...mapGetters('mypage', ['myPageData'])
  },
  methods: {
    ...mapActions('mypage', ['fetchMyPageData'])
  },
  mounted() {
    this.fetchMyPageData();
  }
};
</script>
