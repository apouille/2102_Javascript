
function script_6() {
const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ]
console.log(entrepreneurs)


//1) Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70

let born70s = [];
entrepreneurs.forEach((entrepreneur) => {
	if (entrepreneur.year < 1980 && entrepreneur.year > 1969) 
		{born70s.push(entrepreneur);
		};
});
console.log("Ci-dessous la liste des entrepreneurs nés dans les années 70")
console.log(born70s)

//2) Sors une array qui contient le prénom et le nom des entrepreneurs

let name = []
 entrepreneurs.forEach((entrepreneur) => {
 	name.push( {first: entrepreneur.first, last:entrepreneur.last})
 })

console.log("Ci-dessous la liste des noms et prénoms des entrepreneurs")
console.log(name)

//3) Quel âge aurait chaque inventeur aujourd'hui ?

let age = []
entrepreneurs.forEach((entrepreneur) => {
	entrepreneur.age = 2019 - entrepreneur.year
	age.push ( {first: entrepreneur.first, last:entrepreneur.last, age: entrepreneur.age})
})
console.log("Ci-dessous les âges des entrepreneurs")
console.log(age)

//4) Trie les inventeurs par ordre alphabétique du nom de famille

console.log("Ci-dessous la liste par ordre alphabétique des entrepreneurs")
console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)));
}