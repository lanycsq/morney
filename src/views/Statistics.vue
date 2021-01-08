
<template>
  <lay-out>
    <!-- <types class-prefix="x" :value.sync="yyy" /> -->
    <tabs class-prefix="types" :data-source="array" :value.sync="yyy" />
    <tabs class-prefix="interval" :data-source="array1" :value.sync="hhh" />
  </lay-out>
</template>

<script  lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import LayOut from "@/components/LayOut.vue";
import Types from "@/components/money/Types.vue";
import Tabs from "@/components/Tabs.vue";

@Component({
  components: { LayOut, Types, Tabs },
})
export default class Statistice extends Vue {
  yyy = "-";
  hhh = "day";
  array = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
  array1 = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
  ];
}
</script>
<style scoped lang="scss">
::v-deep .types-tabs-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
</style>

