


let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let resultado =  document.getElementById("resultado");

resultado.value = 0;

const sumar = document.getElementById("suma");
const promedio = document.getElementById("promedio");
const mayor = document.getElementById("mayor");

sumar.addEventListener("click", () => {
    let suma;
    suma = parseInt(c1.value) + parseInt(c2.value) + parseInt(c3.value);
    resultado.value = suma;
})

promedio.addEventListener("click", () => {
    let promedio;
    promedio = parseFloat( ( parseInt(c1.value) + parseInt(c2.value) + parseInt(c3.value)) / 3);
    resultado.value = promedio;
})

mayor.addEventListener("click", () => {
    let mayor=0, cont=0;

    mayor = mayor <=  parseInt(c1.value) ? parseInt(c1.value) : mayor;
    mayor = mayor <=  parseInt(c2.value) ? parseInt(c2.value) : mayor;
    mayor = mayor <=  parseInt(c3.value) ? parseInt(c3.value) : mayor;
    
    resultado.value = mayor;
})




