<template>
  <nav class="nav">
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      <span>记账</span>
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label" />
      <span>标签</span>
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />
      <span>统计</span>
    </router-link>
  </nav>
</template>

 <script lang="ts">
// import x from "@/assets/icons/label.svg";
// console.log(x);

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
@import "~@/assets/style/global.scss";
nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  > .item {
    padding: 6px 0 4px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ::v-deep .icon {
      width: 18px;
      height: 18px;
    }
    > span {
      font-size: 12px;
    }
  }
  /**路由激活*/
  > .item.selected {
    color: red;
  }
}
</style>
