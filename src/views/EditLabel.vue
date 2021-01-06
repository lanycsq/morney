<template>
  <lay-out>
    <div class="navBar">
      <Icon class="leftIcon" name="left" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FromItem field-name="标签名" placeholder="请输入标签名" />
    </div>
    <div class="button-wrapper">
      <Button>删除标签</Button>
    </div>
  </lay-out>
</template>

<script lang="ts" >
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import FromItem from "@/components/money/FromItem.vue";
import Button from "@/components/money/Button.vue";
@Component({ components: { FromItem, Button } })
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
.navBar {
  text-align: center;
  font-style: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .title {
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 6px;
}
.button-wrapper {
  text-align: center;
  margin-top: 28px;
}
</style>
