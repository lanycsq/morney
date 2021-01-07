import clone from "@/lib/clone";


const localStorageName = 'recordList';
let data: RecordItem[] | undefined = undefined;


const recordStore = {
    recordList: data,
    fetchRecords() {
        data = JSON.parse(localStorage.getItem(localStorageName) || "[]") as RecordItem[];
        return data;
    },
    saveRecords() {
        localStorage.setItem(localStorageName, JSON.stringify(data))
    },
    createRecord(record: RecordItem) {
        const record2: RecordItem = clone(record);
        record2.createAt = new Date();
        data?.push(record2);
        recordStore.saveRecords()
    },
}
export default recordStore;