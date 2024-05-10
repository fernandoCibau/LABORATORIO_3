

const b1 =document.getElementById("b1");
const b2 =document.getElementById("b2");
const b3 =document.getElementById("b3");
const b4 =document.getElementById("b4");
const b5 =document.getElementById("b5");
const b6 =document.getElementById("b6");
const b7 =document.getElementById("b7");
const b8 =document.getElementById("b8");
const b9 =document.getElementById("b9");
const b0 =document.getElementById("b0");

const borrar =document.getElementById("borrar");
const multi =document.getElementById("multi");
const dividir =document.getElementById("dividir");
const resta =document.getElementById("resta");
const suma =document.getElementById("suma");
const igual =document.getElementById("igual");

const visor =document.getElementById("visor");
const visorOp =document.getElementById("visorOp");


b1.addEventListener("click", ()=>{ visor.value += b1.value; })
b2.addEventListener("click", ()=>{ visor.value += b2.value; })
b3.addEventListener("click", ()=>{ visor.value += b3.value; })
b4.addEventListener("click", ()=>{ visor.value += b4.value; })
b5.addEventListener("click", ()=>{ visor.value += b5.value; })
b6.addEventListener("click", ()=>{ visor.value += b6.value; })
b7.addEventListener("click", ()=>{ visor.value += b7.value; })
b8.addEventListener("click", ()=>{ visor.value += b8.value; })
b9.addEventListener("click", ()=>{ visor.value += b9.value; })
b0.addEventListener("click", ()=>{ visor.value += b0.value; })

const  listaDeNumeros = [];
let total=0, num1=0, num2=0;

borrar.addEventListener("click", ()=>{ visor.value = ""; visorOp.value = "" });

suma.addEventListener("click", ()=>{ 
    // operacion(parseInt(visor.value), "+" );
    total += parseInt(visor.value);
    visor.value = " ";
    visorOp.value = "+";
})

resta.addEventListener("click", ()=>{ 
    restar( visorOp.value, visor.value);
})

multi.addEventListener("click", ()=>{ 
    multiplicar( visorOp.value, visor.value);
})

dividir.addEventListener("click", ()=>{ 
    dividirr( visorOp.value, visor.value);
})

igual.addEventListener("click", ()=>{ 
    operacion( parseInt(visor.value), visorOp.value );
    visor.value = total 
    visorOp.value = ""; 
    total = 0;
})


function restar( op , num){
    if( op != "-"){
        visorOp.value = "-";
        total =  num;
        visor.value = " ";
        return;
    }

    total -= num;
    visor.value = "";
    visor.value = total;
}



function multiplicar( op , num){
    if( op != "*"){
        visorOp.value = "*";
        total =  num;
        visor.value = " ";
        return;
    }

    total *= num;
    visor.value = "";
    visor.value = total;
}

function dividirr( op , num){
    if( op != "/"){
        visorOp.value = "/";
        total =  num;
        visor.value = " ";
        return;
    }

    total /= num;
    visor.value = "";
    visor.value = total;
}


function operacion( num , op, visor){

    switch (op) {
        case "+":
            total += num;
            break;
        case "-":
            total =  total - num;
            break;
        case "*":
            total = total * num;
            break;
        case "/":
            total = total / num;
            break;
    }
}