import recordStore from "./recordStore";
import tagStore from "./tagStore";

const store = {
    ...recordStore, //record store
    ...tagStore   //tag store
}

export default store;
