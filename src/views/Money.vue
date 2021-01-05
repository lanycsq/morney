<template>
  <div>
    <lay-out content-prefix="layout">
      <number-pad @update:value="onUpdateAmount" />
      <types @update:value="onUpdateType" />
      <notes @update:value="onUpdateNotes" />
      <tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </lay-out>
  </div>
</template>

<script  lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import LayOut from "@/components/LayOut.vue";
import Tags from "@/components/money/Tags.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";
import Notes from "@/components/money/Notes.vue";
@Component({ components: { LayOut, Tags, Types, NumberPad, Notes } })
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行", "彩票"];
  onUpdateTags(tags: string[]) {
    console.log(tags);
  }
  onUpdateNotes(notes: string) {
    console.log(notes);
  }
  onUpdateType(type: string) {
    console.log(type);
  }
  onUpdateAmount(value: string) {
    console.log(value);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style scoped lang="scss">
</style>
