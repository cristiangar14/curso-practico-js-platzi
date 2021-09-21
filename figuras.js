// codigo del cuadrado
console.group('cuadrado');

function perimetroCuadrado(lado){  
  return lado*4;
}

function areaCuadrado(lado){
  return lado*lado
} 

console.groupEnd()

// codigo del cuadrado
console.group('Triangulos')


function perimetroTriangulo(lado1, lado2, base){
  return lado1+lado2+base;
}

function areaTriangulo(base, altura){
  return (base* altura)/2;
} 

console.groupEnd()


// codigo del Circulos
console.group('Circulos')

// radio
//const radioCirculo = 4;

//diametro
function diametroCirculo(radio) {
  return radio * 2;
}
//PI
const PI = Math.PI;

//Circunferencias

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);

  return diametro * PI;
}

//Area
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd()

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
  const input = Number(document.getElementById('inputCuadrado').value);
  const perimetro = perimetroCuadrado(input);
  alert(perimetro)
}

function calcularAreaCuadrado(){
  const input = Number(document.getElementById('inputCuadrado').value);
  const area = areaCuadrado(input);
  alert(area);
}

function calcularPerimetroTriangulo(){
  const lado1 = Number(document.getElementById('inputLado1').value);
  const lado2 = Number(document.getElementById('inputLado2').value);
  const base = Number(document.getElementById('inputLadoBase').value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro)
}

function calcularAreaTriangulo(){
  const base = Number(document.getElementById('inputLadoBase').value);
  const altura = Number(document.getElementById('inputAltura').value);

  const area = areaTriangulo(base, altura);
  alert(area);
}

function calcularAreaCirculo(){
  const radio = Number(document.getElementById('inputRadio').value);
  
  const area = areaCirculo(radio)
  alert(area);
}

function calcularPerimetroCirculo(){
  const radio = Number(document.getElementById('inputRadio').value);
  
  const perimetro = perimetroCirculo(radio)
  alert(perimetro);
}

function calcularDiametroCirculo(){
  const radio = Number(document.getElementById('inputRadio').value);
  
  const diametro = diametroCirculo(radio);
  alert(diametro);
}


function alturaTrianguloIsosceles(lado1, lado2, base) {
  if (lado1 === lado2) {
    
    const trianguloPequenoLadoB = lado2 / 2;
    const trianguloPequenobase = base / 2;

    const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB ** 2;
    const trianguloPequenoBaseBCuadrado = trianguloPequenobase ** 2;

    const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBCuadrado - trianguloPequenoBaseBCuadrado);

    const trianguloGrandeAltura = trianguloPequenoLadoA;

    return trianguloGrandeAltura;
  } else {
    alert('Tu triangulo no es un triangulo isósceles, por que sus lados no son iguales.');
  }
}

function calcularAlturaTrianguloi(){
  const lado1 = Number(document.getElementById('inputLado1i').value);
  const lado2 = Number(document.getElementById('inputLado2i').value);
  const base = Number(document.getElementById('inputLadoBasei').value);

  const altura = alturaTrianguloIsosceles(lado1, lado2, base);

 

  if (altura) {
    alert(altura)
  }
  
}