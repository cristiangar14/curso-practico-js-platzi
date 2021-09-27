const arreglo1 = [
  100,
  200,
  300,
  300,
  100,
  200,
  400,
  500,
  100,
  600,
  600,
  700,
  700,
  700,
  700,
  700,
  700,
  100,
  1000,
  1000,
  200,
  300,
]

function calcularModa (arreglo) {
  
  
  const lista1Count = {};
  
  arreglo.map(
    function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else {
        lista1Count[elemento] = 1;
      }
    }
  )
  
  const lista1Arry = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
      return valorAcumulado[1] - nuevoValor[1]
    }
  )
  
  const moda = lista1Arry[lista1Arry.length - 1];

  return moda[0]
}


console.log(calcularModa(arreglo1));