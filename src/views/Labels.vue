<template>
  <div>
    <lay-out>
      <div class="tags">
        <router-link
          class="item"
          v-for="tag in tags"
          :key="tag.id"
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
import { Component } from "vue-property-decorator";
import Button from "@/components/money/Button.vue";
import { mixins } from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";

@Component({
  components: { Button },
  computed: {
    tags() {
      return this.$store.state.tagList;
    },
  },
})
export default class Labels extends mixins(TagHelper) {
  created() {
    this.$store.commit("fetchTags");
  }
  // createTag() {
  //   const name = window.prompt("请输入标签名称");
  //   if (!name) {
  //     return window.prompt("标签名称不能为空");
  //   }
  //   this.$store.commit("createTag", name);
  // }
}
</script>
<style scoped lang="scss">
.tags {
  background-color: #ffffff;
  font-size: 14px;
  padding-left: 16px;
  > .item {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    ::v-deep svg {
      width: 14px;
      height: 14px;
      color: #666;
      margin-right: 14px;
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
