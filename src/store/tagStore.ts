
import createId from "@/lib/idCreator";
const localStorageName = 'tagList';

const tagStore = {
    tagList:[] as Tag[],
    fetchTags() {
        this.tagList= JSON.parse(window.localStorage.getItem(localStorageName) || "[]")
        return this.tagList;
    },
    findTag(id: string){
        return this.tagList.filter(t=>t.id===id)[0]
    },
    saveTags() {
        window.localStorage.setItem(localStorageName, JSON.stringify(this.tagList))
    },
    createTag(name: string) {
        const names = this.tagList.map(item => item.name)
        if (names.indexOf(name) >= 0) {
            alert("标签名重复了")
            return 'duplicated'
        }
        const id = createId().toString();
        this.tagList.push({ id, name });
        tagStore.saveTags();
        window.alert("添加成功");
        return "success";
    },
    updateTag(id: string, name: string) {
        const idList = this.tagList.map(item => item.id)
        if (idList.indexOf(id) >= 0) {
            const names = this.tagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const tag = this.tagList.filter(item => item.id === id)[0]
                tag.name = name;
                tag.id = id;
                this.saveTags()
                return 'success'
            }
        } else {
            return 'not found'
        }
    },
    removeTag(id: string) {
        let index = -1
        for (let i = 0; i < this.tagList.length; i++) {
            if (this.tagList[i].id === id) {
                index = i;
                break
            }
        }
        this.tagList.splice(index, 1)
        this.saveTags()
        return true;
    }
}
tagStore.fetchTags();
export default tagStore;