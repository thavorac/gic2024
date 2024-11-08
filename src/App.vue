<template>
  <button @click="goBack()">Back</button>
  <router-view />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
