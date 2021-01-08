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
          field-name="备注"
          placeholder="在这里输入备注"
          @update:value="onUpdateNotes"
        />
      </div>
      <tags />
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
  };
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
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
