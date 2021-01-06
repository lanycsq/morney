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
import Tags from "@/components/money/Tags.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";
import Notes from "@/components/money/Notes.vue";
import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";

localStorage.setItem("version", "0.0.1");

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({ components: { Tags, Types, NumberPad, Notes } })
export default class Money extends Vue {
  tags = tagList;
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
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createAt = new Date();
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChange() {
    recordListModel.save(this.recordList);
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
