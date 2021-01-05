<template>
  <div>
    <lay-out content-prefix="layout">
      <number-pad />
      <types />
      <notes />
      <tags :data-source="tags" />
    </lay-out>
  </div>
</template>

<script  lang="ts">
import LayOut from "@/components/LayOut.vue";
import Tags from "@/components/money/Tags.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";
import Notes from "@/components/money/Notes.vue";
export default {
  components: { LayOut, Tags, Types, NumberPad, Notes },
  data() {
    return {
      tags: ["衣", "食", "住", "行", "hh"],
    };
  },
};
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style scoped lang="scss">
</style>
