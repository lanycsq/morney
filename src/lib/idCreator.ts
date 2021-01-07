let id: number = parseInt(window.localStorage.getItem('_idMaX') || '0') || 0;

function createId() {
    id++;
    return id;
}
export default createId;