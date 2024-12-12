const form = document.querySelector('#form')
const inputName = document.querySelector('#name')
const searchForm = document.querySelector('#searchForm')
const list = document.querySelector('ul')

// Popularne formaty danych:
// XML - format juz raczej niewykorzystywany, wyglada podobnie jak skladnia HTML
// JSON

// Dobra praktyka do trzymania struktury danych jest tablica obiektów
// const tasks = ['Damian', 'Pawel', 'Dominik']; - zamiast tego

const tasks = [
  {
    id: 1,
    name: "Damian"
  },
  {
    id: 2,
    name: "Paweł"
  },
  {
    id: 3,
    name: "Dominik"
  }
]

const renderElements = (filterText = "") => {
  list.innerHTML = "";

  // Istnieje opcja na polaczenie funkcji z programowania funkcyjnego
  tasks
    .filter(task => task.name.includes(filterText))
    .forEach(task => {
      const listItem = document.createElement('li')
      listItem.textContent = task.name
      list.appendChild(listItem)
    })

  // const filteredResults = tasks.filter(task => task.name.includes(filterText))

  // filteredResults.forEach(task => {
  //   const listItem = document.createElement('li')
  //   listItem.textContent = task.name
  //   list.appendChild(listItem)
  // })
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  tasks.push({
    name: event.target.name.value
  })

  renderElements();
  inputName.value = ''
})

searchForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const searchValue = event.target.search.value

  renderElements(searchValue);
})

renderElements()

// W obecnym kodzie, mamy problem ze elementy listy ktore dodajemy nie maja ID. Stworz funkcje generateId(), ktora wygeneruje jakis randomowy hash zawierajacy 10 znakow