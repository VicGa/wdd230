const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");

addBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const text = input.value;

    if (text !=="") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = "";
    }
});

function addDeleteBtn() {

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) =>{
        const item = e.target.parentElement;
        ul.removeChild(item);

        
    });
    return deleteBtn;
}