const localStorageName = 'tagList';
type TagListModel = {
    data: string[];
    fetch: () => string[];
    create: (name: string) => 'success' | 'duplicated';//success 表示成功，duplicated表示重复
    save: () => void;
}

const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageName) || "[]");
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageName, JSON.stringify(this.data))
    },
    create(name: string) {
        if (this.data.indexOf(name) >= 0) {
            return 'duplicated'
        }
        this.data.push(name);
        this.save();
        return "success";
    }
}
export default tagListModel;