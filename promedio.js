const lista1 = [
  100,
  200,
  300,
  400,
  500,
];


function calculaMediaAritmetica(arreglo) {
  /*let sumalista = 0;
  
  for (let i = 0; i < arreglo.length; i++) {
    sumalista = sumalista + arreglo[i];
  }*/
  const sumaLista = arreglo.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  })

  return sumaLista / arreglo.length
}

console.log(calculaMediaAritmetica(lista1));
