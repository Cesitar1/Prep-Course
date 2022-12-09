// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola tu';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 28;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
    return x + y;  
}

suma (10, 20); //30

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
    return x - y;  
}

resta (5, 4); //1

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
    return x * y;
}

multiplica (10, 15); //150

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código
    return x / y;
}

divide (100, 4); //25

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
    if (x === y){
      return true;
    } else {
  return false;
  }
}

sonIguales(10, 5); //false

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
    return (str1.length === str2.lenght)   
}

tienenMismaLongitud("nueve", "nueve"); //true

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
    if (num < 90){
      return true;
    } else {
  return false;
  }
}

menosQueNoventa(70); //true

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
    return (num > 50)   
}

mayorQueCincuenta(48); //false

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
    return x % y;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
    if (num%2===0){
      return true;
    } else {
  return false;
  }
}

esPar(2); //true

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
    if (num%2===1){
      return true;
  } else {
return false;
}
}

esImpar(4); //false

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
   return Math.pow(num,2);  
}

elevarAlCuadrado(num);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
    return num*num*num
  
}

elevarAlCubo(num);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
    return Math.pow(num,exponent);  
}

elevar(num, 5);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
    Math.round(num);
}

redondearNumero(3.5); //4

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
    Math.ceil(num);
}

redondearHaciaArriba(8.2); //9

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
    Math.floor(Math.random()* 2);
  
}
numeroRandom();

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
    if (numero > 0){
      return "Es positivo";
    } else "Es Negativo";
    }
    if (numero === 0){
      return false;
    }
    esPositivo();

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
    let signo = "!";
      console.log(str + signo);
}

agregarSimboloExclamacion("Hello World");

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
    var nombre = "Cesar";
    var apellido = "Parra";
    var junto = nombre + ' ' + apellido;
  return junto;  
}

  combinarNombres();

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
    console.log("Hola, " + nombre + "!");
}

obtenerSaludo("Cesar");

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
    var alto = 5, ancho = 15;
      return alto * ancho;  
}

console.log(obtenerAreaRectangulo);


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
    var lado;
      return lado * 4;
}

console.log(retornarPerimetro);

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
    var area = (base*altura)/2;
      console.log(area);
}

areaDelTriangulo();

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
    var moneda = euro * 1.2;
      console.log(moneda);
}

deEuroAdolar();

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
    if (letra=a, letra=e, letra=i, letra=o, letra=u){
      console.log("Es una vocal")
    } else ("Dato incorrecto")
        if (letra.length > 1){
          console.log("Dato incorrecto")
        }
    }
    



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
