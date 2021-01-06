<template>
  <div>
    <label class="notes">
      {{ value }}
      <span class="name">{{ this.fieldName }}</span>
      <input v-model="value" type="text" :placeholder="this.placeholder" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  value = "";

  @Prop({ default: { required: true } }) fieldName!: string;
  @Prop() placeholder?: string;

  @Watch("value")
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>ue

<style scoped lang="scss">
.notes {
  font-size: 14px;
  background: #f5f5f5;
  display: block;
  padding: 0 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>
