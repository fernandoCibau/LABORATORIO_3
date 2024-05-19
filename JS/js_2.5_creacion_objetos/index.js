

const crear = document.getElementById("crear");
const limpiar = document.getElementById("limpiar");
const info = document.getElementById("info");
const contenedor = document.getElementById("contenedorTxt");
const lista = [];

crear.addEventListener("click", ()=>{
    let pos = lista.length;
    let nom = "Nuevo Elemento";
    const obj = { pos : pos ,  nom : nom};

    lista.push( obj );

    const div = document.createElement("div");
    div.setAttribute("class", "contenedorPp")
    
    lista.forEach( e =>{
        const p = document.createElement("p");
        p.innerHTML = `${e.nom } :  posicion ${e. pos}`;
        p.setAttribute("class", "pp")
        div.appendChild(p);
        
    })
    
    contenedor.replaceChildren(div);

})


limpiar.addEventListener("click" , ()=>{
    lista.length = 0;
    const div = document.createElement("div");
    div.setAttribute("class", "contenedorPp");
    contenedor.replaceChildren(div);
})


info.addEventListener("click", ()=>{
    alert(`Div Children : ${lista.length}`)
})

