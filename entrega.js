
// primer intento 


//  function peso_dolar( monto , dolar){
//      if( dolar == 400){
//          let peso = dolar / ;
//          return peso
//      }
//  }

//  console.log("Bienvenido a cambio al isntante");
//  let monto = prompt("Ingresa cuanto dinero quieres convertir: ");
// monto = parseInt( monto );

// let total = monto + peso_dolar( monto , dolar );

// console.log("Pediste: ", monto);
// console.log("Transaccion: ", dolar);
// console.log("Total de la conversion: ", total);

let dolar = 400;
function peso_dolar( monto){
    let peso = monto / dolar;
    return peso;
}

console.log("Bienvenido a cambio al instante");
let monto = parseInt(prompt("Ingresa cuanto dinero quieres convertir: "));

let total = peso_dolar(monto);

console.log("Pediste: " + monto);
console.log("Transacción en dólares: " + total);
console.log("Total de la conversión: " + total * dolar);
