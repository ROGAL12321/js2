// jezeli uzywamy slowa export, to musimy zaimportowac z klamrami {} i uzyc dokladnie takiej samej nazwy
export const sum = (a, b) => {
  return a + b;
}

export const diff = (a, b) => {
  return a - b;
}
// export default moze byc tylko jeden
// mozemy to zaimportowac pod dowolna nazwa
export default function helloWorld() {
  console.log('hello world')
}

// const sayHi = (name) => {
//   return `Hi ${name}`
// }

// Przy funkcji strzalkowej ES6 mozemy skrocic kilka rzeczy
// 1. Jezeli funkcja przyjmuje tylko 1 parametr, mozemy usunac () przy parametrze
// 2. Jezeli funkcja zwraca jakas rzecz i nie wykonuje zadnej dodatkowej logiki, to mozemy pominac slowo return i {} otaczajace funkcje.
// const sayHi = name => `Hi ${name}`
