<template>
  <div class="container">
    {{ count }}
    <br /><br /><br />
    <button @click="increaseCount">Increase</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increaseCount() {
      this.count++;
    },
  },
};
</script>
<style>
.container {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>
