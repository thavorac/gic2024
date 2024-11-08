<template>
  <div class="navbar">
    <span class="link" @click="goToPage('/page1')">Go Page 1</span> |
    <span class="link" @click="goToPage('/page3')">Go Page 3</span>
  </div>
  <div class="container">
    <p>Page 2</p>
  </div>
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
