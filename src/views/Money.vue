<template>
  <div>
    <lay-out content-prefix="layout">
      <number-pad :value.sync="record.amount" @submit="saveRecord" />
      <types :value.sync="record.type" />
      <div class="notes">
        <FromItem
          field-name="备注"
          placeholder="在这里输入备注"
          @update:value="onUpdateNotes"
        />
      </div>
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
import FromItem from "@/components/money/FromItem.vue";
import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";

localStorage.setItem("version", "0.0.1");

const recordList = recordListModel.fetch();
// const tagList = tagListModel.fetch();

@Component({ components: { Tags, Types, NumberPad, FromItem } })
export default class Money extends Vue {
  tags = window.tagList;
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
    recordListModel.create(this.record);
  }
  @Watch("recordList")
  onRecordListChange() {
    recordListModel.save();
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
.notes {
  padding: 12px 0;
}
</style>
