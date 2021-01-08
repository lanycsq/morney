<template>
  <ul class="tabs" :class="{ [classPrefix + 'tabs']: classPrefix }">
    <li
      v-for="item in dataSource"
      :key="item.value"
      class="tabs-item"
      :class="{
        selected: item.value === value,
        [classPrefix + '-tabs-item']: classPrefix,
      }"
      @click="select(item)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

type DataSourceItem = { text: string; value: string };

@Component
export default class Tabs extends Vue {
  @Prop({ required: true })
  dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) readonly classPrefix?: string;
  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
}
</script>

<style scoped lang="scss">
.tabs {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  &-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: " ";
      position: absolute;
      bottom: 0px;
      left: 0px;
      height: 4px;
      width: 100%;
      background: #333;
    }
  }
}
</style>
