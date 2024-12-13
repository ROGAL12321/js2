console.log('hi!');

// Asynchronicznosc w JavaScript

// Single-Threaded Programming Language

// Event Queue

console.log('Hurra1')
console.log('Hurra2')

// setTimeout - wykonanie jakies funkcji po X czasu (w tym przypadku po 1000 milisekundach, czyli 1 sekundzie)

// setTimeout(() => {
//   console.log('Jestem w setTimeout')
// }, 1000)

// const interval1 = setInterval(() => {
//   console.log('hej!')
// }, 100)

// clearInterval(interval1)


console.log('Hurra3')


// Promise

// fetch() - funkcja wbudowana w przegladarke i sluzy do odpytywania serwerów o dane przy uzyciu HTTP

const getData = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([{id: 1, name: 'Damian'}])
  }, 1000)
})

// Promise w JavaScripcie posiada 3 stany
// pending - czekamy na wynik
// fulfilled - promise wykonal sie poprawnie i mamy zwrocone wyniki 
// rejected - promise nie wykonal sie poprawnie i zostal zwrocony error

// https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok
getData()
  .then((data) => console.log(data)) // fulfilled
  .catch(error => console.log(error)) // rejected

// jesli mamy jakis error (nawet moze byc syntax error wewnatrz funkcji then, to Promise wejdzie nam do catch)

// ES7 async/await
const loadData = async () => {
  try {
    const data = await getData();
    console.log(data);
  } catch(error) {
    console.log(errror)
  }
}

loadData()
