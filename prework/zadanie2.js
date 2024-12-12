const form = document.querySelector('#form')
const inputName = document.querySelector('#name')
const searchForm = document.querySelector('#searchForm')
const list = document.querySelector('ul')

// Popularne formaty danych:
// XML - format juz raczej niewykorzystywany, wyglada podobnie jak skladnia HTML
// JSON

// Dobra praktyka do trzymania struktury danych jest tablica obiektów
// const tasks = ['Damian', 'Pawel', 'Dominik']; - zamiast tego

// const tasks = [
//   {
//     id: 1,
//     name: "Damian"
//   },
//   {
//     id: 2,
//     name: "Paweł"
//   },
//   {
//     id: 3,
//     name: "Dominik"
//   }
// ]

// Nullish coalescing operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
let tasks = JSON.parse(localStorage.getItem('tasks')) ?? []

const renderElements = (filterText = "") => {
  list.innerHTML = "";

  // Istnieje opcja na polaczenie funkcji z programowania funkcyjnego
  tasks
    .filter(task => task.name.includes(filterText))
    .forEach(task => renderItem(task))

  // const filteredResults = tasks.filter(task => task.name.includes(filterText))

  // filteredResults.forEach(task => {
  //   const listItem = document.createElement('li')
  //   listItem.textContent = task.name
  //   list.appendChild(listItem)
  // })
}

const renderItem = (task) => {
  const listItem = document.createElement('li')
  listItem.textContent = task.name
  
  const removeItemButton = document.createElement('button')
  removeItemButton.textContent = 'X'
  // Potrzebuje przypisac do elementu id odpowiadajacy task.id, po to, zeby pozniej moc klikajac w element dostac sie do id elementu kliknietego
  removeItemButton.id = task.id

  removeItemButton.addEventListener('click', removeItem)

  listItem.appendChild(removeItemButton)
  list.appendChild(listItem)
}

const removeItem = (event) => {
  event.preventDefault();

  // usuwanie elementu
  // odczytywanie wartosci id z elementu ktory jest aktualnie klikniety
  // console.log(event.target.id);
  const removeItemId = event.target.id

  // w JS najlepszy sposob zeby usunac element z listy, jest uzycie metody filter i przekazanie id elementu ktory chcemy usunac
  tasks = tasks.filter(task => task.id !== removeItemId)

  renderElements();
}

const submitForm = (event) => {
  event.preventDefault()

  // tasks.push({
  //   id: generateId(),
  //   name: event.target.name.value
  // })

  // // metoda localStorage.setItem sluzy do tego zeby zapisywac do pamieci przegladarki
  // // localStorage nie dziala w srodowisku node.js
  // localStorage.setItem('tasks', JSON.stringify(tasks))

  
  // spread operator uzywa sie do dodawania elementow do tablicy (raczej nie uzywa sie metody push)
  localStorage.setItem(
    'tasks', 
    JSON.stringify([...tasks, {
      id: generateId(),
      name: event.target.name.value
    }])
  )

  renderElements();
  inputName.value = ''
}

const handleSearch = (event) => {
  event.preventDefault()
  const searchValue = event.target.search.value

  renderElements(searchValue);
}

// W obecnym kodzie, mamy problem ze elementy listy ktore dodajemy nie maja ID. Stworz funkcje generateId(), ktora wygeneruje jakis randomowy hash zawierajacy 10 znakow

const generateId = () => {
  return Math.random().toString().substring(2, 12)
}

form.addEventListener('submit', submitForm)
searchForm.addEventListener('submit', handleSearch)

renderElements()



// Przy kazdym elemencie listy, dodaj ikonke X, ktora po kliknieciu spowoduje ze usuniemy ten element
