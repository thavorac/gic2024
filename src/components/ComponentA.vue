<template>
  <div class="container">
    {{ store.count }}
    <br /><br /><br />
    <button @click="increaseCount">Increase</button>
  </div>
</template>
<script>
import { useCounterStore } from "@/stores/counter";
export default {
  setup() {
    const store = useCounterStore();
    return {
      store,
    };
  },
  data() {
    return {
      // count: this.store.count,
    };
  },
  methods: {
    increaseCount() {
      this.store.count++;
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
