<template>
  <div>
    <lay-out content-prefix="layout">
      <number-pad :value.sync="record.amount" @submit="saveRecord" />
      <tabs
        class-prefix="types"
        :data-source="recordTypeList"
        :value.sync="record.type"
      />
      <div class="notes">
        <FromItem
          type="date"
          field-name="日期"
          :value.sync="record.createAt"
          placeholder="在这里输入日期"
        />
        <FromItem
          field-name="备注"
          :value.sync="record.notes"
          placeholder="在这里输入备注"
        />
      </div>
      <tags @update:value="record.tags = $event" />
    </lay-out>
  </div>
</template>

<script  lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tags from "@/components/money/Tags.vue";
import Tabs from "@/components/Tabs.vue";
import NumberPad from "@/components/money/NumberPad.vue";
import FromItem from "@/components/money/FromItem.vue";
import recordTypeList from "@/constants/recordTypeList";

localStorage.setItem("version", "0.0.1");

@Component({
  components: { Tags, NumberPad, Tabs, FromItem },
  computed: {
    recordList() {
      return this.$store.state.recordList;
    },
  },
})
export default class Money extends Vue {
  recordTypeList = recordTypeList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
    createAt: new Date().toISOString(),
  };
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }
  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert("请至少选择一个标签");
    }
    if (this.record.amount === 0) {
      return;
    }
    this.$store.commit("createRecord", this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert("已保存");
      this.record.notes = "";
    }
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
