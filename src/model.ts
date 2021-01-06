const localStorageName = 'recordList';
const model = {
    clone(data: RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data))
    },
    fetch() {
        return JSON.parse(localStorage.getItem(localStorageName) || "[]") as RecordItem[];
    },
    save(data: RecordItem[]) {
        localStorage.setItem(localStorageName, JSON.stringify(data))
    }
}
export { model }