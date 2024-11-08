<template>
  <div class="navbar">
    <!-- <span class="link" @click="goToPage('/page2')">Go Page 2</span> | -->
    <!-- <span class="link" @click="goToPage('/page3')">Go Page 3</span> -->
    <router-link to="/page2?msg=from-page-1">Go Page 2</router-link>
    <router-link to="/page3/from-page-1">Go Page 3</router-link>
  </div>
  <div class="container">
    <p>Page 1</p>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
</script>
<style scoped>
.container {
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  font-size: 40px;
}
.navbar {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.link {
  color: blue;
  cursor: pointer;
}
</style>
