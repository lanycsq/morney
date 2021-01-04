<template>
  <nav class="nav">
    <router-link to="/money" class="item">
      <Icon name="money" />
      <span>记账</span>
    </router-link>
    <router-link to="/labels" class="item">
      <Icon name="label" />
      <span>标签</span>
    </router-link>
    <router-link to="/statistics" class="item">
      <Icon name="statistics" />
      <span>统计</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
// import label from "@/assets/icons/label.svg";
// console.log(label);
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss"  scoped>
.nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 1);
  flex-direction: row;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
