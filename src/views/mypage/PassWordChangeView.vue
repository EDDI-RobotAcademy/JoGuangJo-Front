<template>
    <div>
        <pass-word-change-form></pass-word-change-form>
    </div>
</template>

<script>
import PassWordChangeForm from '@/components/mypage/PassWordChangeForm.vue';

export default {
name: 'PassWordChangeView',
components: {
    PassWordChangeForm
},
mounted() {
    console.log("비밀번호 변경")
}
}
</script>