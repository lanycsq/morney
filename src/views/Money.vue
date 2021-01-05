<template>
  <div>
    <lay-out content-prefix="layout">
      {{record}}
      <number-pad :value.sync="record.amount"  />
      <types :value.sync="record.type"  />
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

type Record={
  tags: string[];
  notes: string;
  type: string;
  amount: number;
}
@Component({ components: { LayOut, Tags, Types, NumberPad, Notes } })
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行", "彩票"];
  record: Record={
    tags:[],notes:'',type:'-',amount:0
  }

  onUpdateTags(tags: string[]) {
    this.record.tags=tags;

  }
  onUpdateNotes(notes: string) {
    this.record.notes=notes;
  }

  onUpdateAmount(value: string) {
    this.record.amount=parseFloat(value);
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
