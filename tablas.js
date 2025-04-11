function VF(valor) {
  return valor ? "V" : "F";
}

// 1. Negación (A)
let tablaNegacion = [
  { A: "V", "¬A": VF(!true) },
  { A: "F", "¬A": VF(!false) }
];
console.log("1. Negación (¬A)");
console.table(tablaNegacion);




// 2 Conjunción (A ∧ B)

let tablaConjuncion = [
  { A: "V", B: "V", "A ∧ B": VF(true && true) },
  { A: "V", B: "F", "A ∧ B": VF(true && false) },
  { A: "F", B: "V", "A ∧ B": VF(false && true) },
  { A: "F", B: "F", "A ∧ B": VF(false && false) }
];
console.log("2. Conjunción (A ∧ B)");
console.table(tablaConjuncion);





// 3 Disyunción (A ∨ B)

let tablaDisyuncion = [
  { A: "V", B: "V", "A ∨ B": VF(true || true) },
  { A: "V", B: "F", "A ∨ B": VF(true || false) },
  { A: "F", B: "V", "A ∨ B": VF(false || true) },
  { A: "F", B: "F", "A ∨ B": VF(false || false) }
];
console.log("3. Disyunción (A ∨ B)");
console.table(tablaDisyuncion);




// 4 Condicional (A ⇒ B)

let tablaCondicional = [
  { A: "V", B: "V", "A ⇒ B": VF(!true || true) },
  { A: "V", B: "F", "A ⇒ B": VF(!true || false) },
  { A: "F", B: "V", "A ⇒ B": VF(!false || true) },
  { A: "F", B: "F", "A ⇒ B": VF(!false || false) }
];
console.log("4. Condicional (A ⇒ B)");
console.table(tablaCondicional);



// 5 Bicondicional (A ⇔ B)

let tablaBicondicional = [
  { A: "V", B: "V", "A ⇔ B": VF(true === true) },
  { A: "V", B: "F", "A ⇔ B": VF(true === false) },
  { A: "F", B: "V", "A ⇔ B": VF(false === true) },
  { A: "F", B: "F", "A ⇔ B": VF(false === false) }
];
console.log("5. Bicondicional (A ⇔ B)");
console.table(tablaBicondicional);


