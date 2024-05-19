

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const contenedor = document.getElementById("ctr");
const ctrList = document.getElementById("contenedorList");
const lista = document.getElementById("listUl");

b1.addEventListener("click", ()=>{
    const ol = document.createElement("ol");
    for (let i = 0; i < lista.children.length; i++) {
        const li =  document.createElement("li");
        li.textContent = lista.children[i].textContent;
        ol.appendChild(li);
    }
    ol.setAttribute( "type", "I" );
    ctrList.replaceChildren(ol);
    contenedor.className = "contenedor1";
})


b2.addEventListener("click", ()=>{
    const ol = document.createElement("ol");
    for (let i = 0; i < lista.children.length; i++) {
        const li =  document.createElement("li");
        li.textContent = lista.children[i].textContent;
        ol.appendChild(li);
    }
    ol.setAttribute( "type", "A" );
    ctrList.replaceChildren(ol);
    contenedor.className = "contenedor2"
})

b3.addEventListener("click", ()=>{
    const ol = document.createElement("ol");
    for (let i = 0; i < lista.children.length; i++) {
        const li =  document.createElement("li");
        li.textContent = lista.children[i].textContent;
        ol.appendChild(li);
    }
    ol.setAttribute( "type", "a" );
    ctrList.replaceChildren(ol);
    contenedor.className = "contenedor3"
})

b4.addEventListener("click", ()=>{
    const ul = document.createElement("ul");
    for (let i = 0; i < lista.children.length; i++) {
        const li =  document.createElement("li");
        li.textContent = lista.children[i].textContent;
        ul.appendChild(li);
    }
    ctrList.replaceChildren(ul);
    contenedor.className = "contenedor";
})
