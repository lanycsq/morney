<template>
  <lay-out> </lay-out>
</template>

<script lang="ts" >
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class EditLabel extends Vue {
  created() {
    console.log(this.$route.params);
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.push("/404");
    }
  }
}
</script>

<style scoped lang="scss">
</style>
