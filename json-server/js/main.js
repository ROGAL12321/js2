const API_HOST = 'http://localhost:4000/books'

// Jako zadanie domowe
// Przejrzyjcie materiały z dnia 1-6
// Zrobcie obsluge zadania z ksiazkami, dodajac mu warstwe json-server
// * Zrobic dodawanie ksiazek za pomoca json-server

const handleSubmit = (event) => {
  event.preventDefault();

  const newBook = {
    title: "X",
    author: "Y"
  }

  // fetch(API_HOST, {
  //   method: 'POST',
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(newBook)
  // })
}


const loadData = () => {
  // obsluga funkcji fetch
  // fetch sluzy do zapytan asynchronicznych (dane z bazy danych, odczyt plikow itp.)
  fetch(API_HOST)
    .then(response => {
      // Jesli odpowiedz ma status 200 (czyli ze sie udalo pobrac, to zapisz mi dane w formacie json)
      if(response.ok) return response.json()
    })
  .then(data => {
    console.log(data)
    // renderBooks(data)
  })
}

loadData();
