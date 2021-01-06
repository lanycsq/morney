<template>
  <div>
    <lay-out content-prefix="layout">
      <number-pad :value.sync="record.amount" @submit="saveRecord" />
      <types :value.sync="record.type" />
      <notes @update:value="onUpdateNotes" />
      <tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </lay-out>
  </div>
</template>

<script  lang="ts">
import Vue from "vue";
import { Component, Model, Prop, Watch } from "vue-property-decorator";
import LayOut from "@/components/LayOut.vue";
import Tags from "@/components/money/Tags.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";
import Notes from "@/components/money/Notes.vue";
import { model } from "@/model";

localStorage.setItem("version", "0.0.1");

const recordList = model.fetch();

@Component({ components: { LayOut, Tags, Types, NumberPad, Notes } })
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行", "彩票"];
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  recordList: RecordItem[] = recordList;
  onUpdateTags(tags: string[]) {
    this.record.tags = tags;
  }
  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }
  saveRecord() {
    const record2: RecordItem = model.clone(this.record);
    record2.createAt = new Date();
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChange() {
    model.save(this.recordList);
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
