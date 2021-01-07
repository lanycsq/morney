import tagListModel from '@/models/tagListModel'
import recordListModel from '@/models/recordListModel'

const store = {
    //record store
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => recordListModel.create(record),

    //tag store
    tagList: tagListModel.fetch(),
    findTag: function (id: string) {
        return this.tagList.filter(t => t.id === id)[0];
    },
    createTag: (name: string) => {
        const message = tagListModel.create(name);
        if (message === "duplicated") {
            alert("标签名重复");
        } else if (message === "success") {
            alert("添加成功");
        }
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id)
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name);
    },
}

export default store;