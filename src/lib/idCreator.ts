let id: number = parseInt(window.localStorage.getItem('_idMaX') || '0') || 0;

function createId() {
    id++;
    window.localStorage.setItem('_idMaX', id.toString());
    return id;
}
export default createId;