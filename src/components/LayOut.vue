<template>
  <div class="wrapper" :class="contentPrefix && `${contentPrefix}-wrapper`">
    <div class="content" :class="contentPrefix && `${contentPrefix}-content`">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>
<script lang="ts">
export default {
  name: "LayOut",
  props: ["contentPrefix"],
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>