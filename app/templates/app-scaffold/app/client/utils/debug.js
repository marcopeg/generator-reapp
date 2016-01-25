
// Allows to debug and copy a big data object
export function bigLog(data) {
    var json = JSON.stringify(data);
    var tx = document.createElement('textarea');
    tx.style.width = '80%';
    tx.style.height = '80%';
    tx.style.margin = '10% 0 0 10%';
    tx.style.background = '#333';
    tx.style.color = 'lime';
    tx.value = json;
    document.body.innerHTML = '';
    document.body.appendChild(tx);
}
