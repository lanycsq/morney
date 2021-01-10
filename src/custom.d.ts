type RecordItem = {
    tags: Tag[];
    notes: string;
    type: string;
    amount: number;
    createAt?: string;
};

type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';//success 表示成功，duplicated表示重复
    save: () => void;
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;
}
type RootStore = {
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag?: Tag;
}
// interface Window {
//     // store: {
//     //     recordList: RecordItem[];
//     //     createRecord: (record: RecordItem) => void;
//     //     tagList: Tag[];
//     //     findTag: (id: string) => Tag | undefined;
//     //     createTag: (name: string) => void;
//     //     removeTag: (id: string) => boolean;
//     //     updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
//     //     //或者  updateTag:TagListModel['update']
//     // }
// }