
function script_2() {
//1) Déclaration des variables
let inputNumber;

//2) Un prompt s'affiche avec la question suivante

inputNumber = prompt("De quel nombre veux-tu calculer la factorielle?");

//3) Utilisateur rentre un nombre (par ex 4)
function factorial(inputNumber) {
  return (inputNumber != 1) ? inputNumber * factorial(inputNumber - 1) : 1;       
}

//4) Dans la console le résultat suivant est affiché
console.log(`Le résultat est `+ factorial(inputNumber));  
}