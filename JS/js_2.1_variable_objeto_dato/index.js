

const bCrear     = document.getElementById("bCrear");
const bMostar = document.getElementById("bMostrar");
const bOcultar = document.getElementById("bOcultar");

const lista = [] ;
let tabla = document.createElement("table");

bCrear.addEventListener("click", () => {
    const nom   = document.getElementById("nombre");
    const ape    = document.getElementById("apellido");
    const fec     = document.getElementById("fecha");
    
    if( nom.value == "" || ape.value =="" || fec.value == ""){
        return alert("LOS CAMPOS NO PUEDEN ESTAR VACIOS");
    } 

    let thead, tbody, fila, celda;
    
    let persona = { nombre: nom, apellido: ape, fecha: fec };
    lista.push( persona );    
    

    tabla.className = "tablaPersonas";
    if( lista.length == 1){
        fila = document.createElement("tr");
        Object.keys(persona).forEach(e => {
            celda = document.createElement("th");
            celda.innerHTML = e;
            fila.appendChild(celda);
        })
        thead = document.createElement("thead").appendChild(fila);
        tabla.appendChild(thead);
    }

    for( let i = 0; i<lista.length; i ++ ){
        fila   = document.createElement("tr");
        
        Object.values(lista[i]).forEach( e => {
            celda = document.createElement("td");
            celda.innerHTML = e.value;
            fila.appendChild( celda );
        })
        
        tbody = document.createElement("tbody").appendChild( fila );
        
    }
    tabla.appendChild( tbody);
    control.appendChild(tabla);
    document.getElementById("longitudTabla").innerHTML = `longitud de tabla : ${lista.length}`;
    
})


bMostar.addEventListener("click", ()=>{
    control.style.display = "block";
})

bOcultar.addEventListener("click", ()=>{
    control.style.display = "none";
})
