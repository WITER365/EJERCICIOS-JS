// 1️ Negación (A)
// Lógica: La negación invierte el valor de una proposición. 
// Si A es verdadero, A es falso, y viceversa.

// Tabla:
// A     A
// V     F
// F     V

console.log(" Negación (A)");
let valores = [true, false]; // Definimos los dos valores posibles

valores.forEach(a => {
  // Recorremos cada valor y aplicamos el operador NOT (!)
  console.log(`A: ${a}, A: ${!a}`);
});


// 2️ Conjunción (A ∧ B)
// Lógica: Solo es verdadera si ambos son verdaderos.

// Tabla:
// A     B     A ∧ B
// V     V     V
// V     F     F
// F     V     F
// F     F     F

console.log("\n Conjunción (A ∧ B)");
let bools = [true, false]; // Arreglo con los valores booleanos

bools.forEach(a => {
  bools.forEach(b => {
    // Operador AND: solo devuelve true si ambos son true
    console.log(`A: ${a}, B: ${b}, A ∧ B: ${a && b}`);
  });
});


// 3️ Disyunción (A ∨ B)
// Lógica: Es verdadera si al menos uno es verdadero.

// Tabla:
// A     B     A ∨ B
// V     V     V
// V     F     V
// F     V     V
// F     F     F

console.log("\n Disyunción (A ∨ B)");

bools.forEach(a => {
  bools.forEach(b => {
    // Operador OR: devuelve true si alguno de los dos es true
    console.log(`A: ${a}, B: ${b}, A ∨ B: ${a || b}`);  
  });
});


// 4️ Condicional (A ⇒ B)
// Lógica: Es falsa solo si A es verdadero y B es falso.

// Tabla:
// A     B     A ⇒ B
// V     V     V
// V     F     F
// F     V     V
// F     F     V

console.log("\n Condicional (A ⇒ B)");

// La implicación se puede expresar como !A || B
function implicacion(a, b) {
  return !a || b;
}

bools.forEach(a => {
  bools.forEach(b => {
    console.log(`A: ${a}, B: ${b}, A ⇒ B: ${implicacion(a, b)}`);
  });
});


// 5️ Bicondicional (A ⇔ B)
// Lógica: Es verdadera si A y B son iguales (ambos verdaderos o ambos falsos).

// Tabla:
// A     B     A ⇔ B
// V     V     V
// V     F     F
// F     V     F
// F     F     V

console.log("\n Bicondicional (A ⇔ B)");

// Devuelve true si A y B son exactamente iguales
function bicondicional(a, b) {
  return a === b;
}

bools.forEach(a => {
  bools.forEach(b => {
    console.log(`A: ${a}, B: ${b}, A ⇔ B: ${bicondicional(a, b)}`);
  });
});
