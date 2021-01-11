// export default {
//     createTag() {
//         const name = window.prompt("请输入标签名称");
//         if (!name) {
//             return window.prompt("标签名称不能为空");
//         }
//         this.$store.commit("createTag", name);
//     }
// }

import Vue from "vue";
import { Component } from "vue-property-decorator";

const map: { [key: string]: string } = {
    'tag name duplicated': '标签名重复了'
}
@Component
export class TagHelper extends Vue {
    createTag() {
        const name = window.prompt("请输入标签名称");
        if (!name) {
            return window.prompt("标签名称不能为空");
        }
        this.$store.commit("createTag", name);
        if (this.$store.state.createTagError) {
            if (this.$store.state.createTagError.message === "tag name duplicated") {
                window.alert(map[this.$store.state.createTagError.message] || "未知错误")
            }

        }
    }
}
export default TagHelper;