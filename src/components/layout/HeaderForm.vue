<template>
  <header class="header">
    <div class="header-content">
     <div class="logo-header">
      <router-link to="/">
      <img src='@/assets/logo/logo.png' alt="logo" width="250" height="100%" class="logo-img1">
      </router-link>
    </div>
    </div>
    </div>
  </header>
</template>

<script>
export default {
    name: "HeaderForm",
    data: () => ({
    }),
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

</style>