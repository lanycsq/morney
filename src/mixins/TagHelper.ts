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
@Component
export class TagHelper extends Vue {
    createTag() {
        const name = window.prompt("请输入标签名称");
        if (!name) {
            return window.prompt("标签名称不能为空");
        }
        this.$store.commit("createTag", name);
    }
}
export default TagHelper;