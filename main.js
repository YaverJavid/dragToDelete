const del = document.getElementById("del");
const items = document.getElementById("items");

let deleteIndex = null;

del.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", "delete");
});

items.addEventListener("dragover", e => {
    if (e.target.parentElement === items) {
        e.preventDefault();
    }
});

items.addEventListener("drop", e => {
    if (e.target.parentElement !== items) return;
    
    e.preventDefault();
    
    const list = [...items.children];
    deleteIndex = list.indexOf(e.target);
    
    e.target.remove();
});

del.addEventListener("click", () => {
    if (deleteIndex == null) return;
    
    const list = [...items.children];
    
    if (deleteIndex < list.length) {
        list[deleteIndex].remove();
    }
});

const add = document.getElementById("imp");

let count = items.children.length;

add.addEventListener("click", () => {
    count++;
    
    const item = document.createElement("div");
    item.textContent = `Item ${count}`;
    
    items.appendChild(item);
});