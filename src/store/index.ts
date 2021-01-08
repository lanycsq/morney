import clone from '@/lib/clone';
import createId from '@/lib/idCreator';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //把store绑到vue原型上vue.prototype $store=store

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(localStorage.getItem('recordList') || "[]") as RecordItem[];
      return state.recordList;
    },
    saveRecords(state) {
      localStorage.setItem('recordList', JSON.stringify(state.recordList))
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = clone(record);
      record2.createAt = new Date();
      state.recordList?.push(record2);
      store.commit('saveRecords')
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || "[]")
      return state.tagList;
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name)
      if (names.indexOf(name) >= 0) {
        alert("标签名重复了")
        return 'duplicated'
      }
      const id = createId().toString();
      state.tagList.push({ id, name });
      store.commit('saveTags')
      window.alert("添加成功");
      return "success";
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
    },
  }

})

export default store;