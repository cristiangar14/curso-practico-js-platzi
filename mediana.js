
function calculaMediaAritmetica(arreglo) {
  
  const sumaLista = arreglo.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  })

  return sumaLista / arreglo.length
}
const arreglo1 = [
  100,
  200,
  70000000,
  300,
  300,
  400,
  500,
]
function calcularMediana(arregloinicial) {
  const arreglo = arregloinicial.sort();
  console.log(arreglo);
  const mitadLista1 = parseInt(arreglo.length / 2);
  let mediana;

function esPar(numero) {
 if (numero % 2 === 0) {
   return true;
 } else {
   return false;
 }
}

if (esPar(arreglo.length)) {
  const elemento1 = arreglo[mitadLista1 - 1];
  const elemento2 = arreglo[mitadLista1] ;
  mediana = calculaMediaAritmetica([elemento1,elemento2])

}else{
  mediana = arreglo[mitadLista1];

}
return mediana
}

console.log(calcularMediana(arreglo1));



