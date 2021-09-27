// Helpers
function esPar(numero) {
  return (numero % 2 === 0);
}

function calculaMediaAritmetica(arreglo) {
  
  const sumaLista = arreglo.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  })

  return sumaLista / arreglo.length
}

// calculador a de mediana 


function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personaMitadA = lista[mitad - 1];
    const personaMitadB = lista[mitad];
    
    const mediana = calculaMediaAritmetica([personaMitadA , personaMitadB]);
    return mediana;
    
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

//mediana general
const salariosCol = colombia.map(function (persona) {
  return persona.salary;
});

const salariosColSorted = salariosCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});


const medianaGeneral = medianaSalarios(salariosColSorted);

//mediana del top 10%



const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salariosTop10);

console.log(
  medianaGeneral,
  medianaTop10,
);