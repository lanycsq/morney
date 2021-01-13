<template>
  <div class="wrapper" ref="wrapper"></div>
</template>

<script lang="ts" >
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { EChartsOption } from "echarts";
const eCharts = require("echarts");
console.log("eCharts");

console.log(eCharts);

@Component
export default class Chart extends Vue {
  @Prop() options?: EChartsOption;
  mounted() {
    if (this.options === undefined) {
      return console.log("options is undefined");
    }
    const chart = eCharts.init(this.$refs.wrapper as HTMLDivElement);
    chart.setOption(this.options);
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 400px;
}
</style>
