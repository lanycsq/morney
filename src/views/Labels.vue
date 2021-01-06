<template>
  <div>
    <lay-out>
      <div class="tags">
        <router-link
          class="item"
          v-for="tag in tags.data"
          :key="tag"
          :to="`/labels/edit/${tag.id}`"
        >
          <span>{{ tag.name }}</span>
          <Icon name="right" />
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button @click="createTag">新建标签</Button>
      </div>
    </lay-out>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Model, Prop, Watch } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
import Button from "@/components/money/Button.vue";

tagListModel.fetch();

@Component({ components: { Button } })
export default class Labels extends Vue {
  tags = tagListModel;
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      const message = tagListModel.create(name);
      if (message === "duplicated") {
        alert("标签名重复");
      } else if (message === "success") {
        alert("添加成功");
      }
    }
  }
}
</script>
<style scoped lang="scss">
.tags {
  background-color: #ffffff;
  font-size: 16px;
  padding-left: 16px;
  > .item {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    ::v-deep svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag {
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 8px;
  }
}
</style>
