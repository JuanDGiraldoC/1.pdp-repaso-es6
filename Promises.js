//Callback = es una funcion que se le pasa como parametro otra funcion

function respuesta(res){
    console.log(res);
}

function calcular(op1, op2, funcionCallback){
    let resp = op1 + op2;
    funcionCallback(resp);
}

calcular(10, 20, respuesta);

//Promises: es un objeto, por naturaleza son asincronas-----------------------------------------------------------------
/*
let promesa = new Promise((resolve, reject) => {
    let estado = true;
    if(estado){
        resolve("Resolvio la promesa");
    }else{
        reject("Se rechazo la promesa");
    }
});

//Opcion 1 de ejecucion-------------------------------------------------------------------------------------------------

    promesa.then(
        (valor) => console.log(valor),
        (error) => console.log(error),
    )

//Opcion 2 de ejecucion-------------------------------------------------------------------------------------------------

promesa
.then((valor) => console.log(valor))
.catch((error) => console.log(error));

//Promesa con setTimeout para evidenciar asincronia-----------------------------------------------------------------------

let promesa2 = new Promise((res) => {
    console.log("Inicio promesa2");
    setTimeout(() => res("Promesa resulta en 3 seg"), 3000);
    console.log("Fin Promesa2");
});
promesa2.then((valor) => console.log(valor));
*/
//async: indicar que una funcion regresa una promesa - Convertir procesos de asincronos a sincronos------------------------
//await: esperar el resultado de una promesa

async function funcionConAsync(){
    return "Ejemplo con async";
}
funcionConAsync().then((valor) => console.log(valor));