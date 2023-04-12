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
  </header>
</template>

<script>
export default {
    name: "HeaderForm"
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
  height: 100px;
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