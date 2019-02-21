
function script_7() {
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log(books)

//1) Est-ce que tous les livres ont été au moins empruntés une fois ?

let answer = "Yes"
books.forEach( (book) => { if( book.rented == 0 ) { answer = "No" } } )
console.log(`Have all books been rented at least once? => ${answer}`)

//2&3) Quel est livre le plus/moins emprunté ?
let mostrented = []
books.forEach( (book) => mostrented.push(book.rented))

console.log("Ci-dessous le livre le plus emprunté")
console.log(books[books.findIndex(book => book.rented === Math.max(...mostrented))])

console.log("Ci-dessous le livre le moins emprunté")  
console.log(books[books.findIndex(book => book.rented === Math.min(...mostrented))])


//4) Trouve le livre avec l'ID: 873495 
console.log("Ci-dessous le livre avec l'ID 873495 ")  
console.log(books[books.findIndex(book => book.id === 873495)])

//5) Supprime le livre avec l'ID: 133712 

let booksbis = books.slice()
booksbis.splice(books.findIndex(book => book.id === 133712),1)
console.log("Ci-dessous la nouvelle liste")
console.log(booksbis)

//6) Trie les livres par ordre alphabétique
console.log("Ci-dessous la liste par ordre alphabétique")  
console.log(books.sort((a, b) => a.title.localeCompare(b.title)));
}