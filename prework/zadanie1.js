// Policz sume produktow

const products = [
  {
    name: 'Chleb',
    price: 4.99
  },
  {
    name: 'Pomidory',
    price: 9.99
  }, 
  {
    name: "Olowek",
    price: 1.20
  }
]

let sum = 0;

// Pierwszy sposob - petla for/of

// for (let product of products) {
//   sum += product.price
// }

// Drugi sposob
products.forEach((product) => sum += product.price);

// Trzeci sposob

// const sum2 = products.reduce((currentValue, product) => {
//   const nextValue = currentValue + product.price
//   return nextValue
// }, 0)

// W ES6 jesli mamy w funkcji tylko return, mozemy usunac slowo return i klamerki {} przy funkcji, dzieki temu skracamy funkcje
const sum2 = products.reduce((currentValue, product) => currentValue + product.price, 0)


console.log(sum);
console.log(sum2)


// Nad formularzem dodaj search i przycisk, ktory spowoduje ze po kliknieciu searcha, lista zostanie przefiltrowana i bedzie zwracala tylko te wyniki, ktore pokrywaja sie z searchem. Zwroc uwage na sytuacje, ze jak usuniesz rzeczy z searcha, to powinna pokazac sie cala lista.