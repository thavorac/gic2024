<template>
  <div class="navbar">
    <span class="link" @click="goToPage('/page2')">Go Page 2</span> |
    <span class="link" @click="goToPage('/page3')">Go Page 3</span>
  </div>
  <div class="container">Page 1</div>
  <router-view />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  methods: {
    goToPage(url) {
      this.$router.push(url);
    },
  },
};
</script>
<style scoped>
.container {
  margin: 0 auto;
  padding: 10px 20px;
  text-align: center;
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
