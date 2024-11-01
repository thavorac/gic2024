<template>
  <div>State management with Pinia</div>
  <div style="display: flex; gap: 10px">
    <div>
      Component A: <br />
      <ComponentA />
    </div>
    <div>
      Component B: <br />
      <ComponentB />
    </div>
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
export default {
  components: { ComponentA, ComponentB },
};
</script>

<style scoped></style>
