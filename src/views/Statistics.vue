
<template>
  <lay-out>
    <!-- <types class-prefix="x" :value.sync="yyy" /> -->
    <tabs
      class-prefix="types"
      :data-source="recordTypeList"
      :value.sync="recordType"
    />
    <tabs
      class-prefix="interval"
      :data-source="intervalList"
      :value.sync="interval"
    />
  </lay-out>
</template>

<script  lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import LayOut from "@/components/LayOut.vue";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";
import intervalList from "@/constants/intervalList";

@Component({
  components: { LayOut, Tabs },
})
export default class Statistice extends Vue {
  recordType = "-";
  interval = "day";
  recordTypeList = recordTypeList;
  intervalList = intervalList;
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

