

let floor = Number(prompt("Combien d'étages souhaites-tu pour ta pyramide ?"));

let space = " ";
let diez = "#";

for(let i = 1; i <= floor ; i++){
console.log(space.repeat(floor - i) + diez.repeat(i))
}