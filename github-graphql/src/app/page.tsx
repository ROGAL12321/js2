export default function Home() {
  // const { navigate } = useNavigate()


  // function submitForm() => {
  //   // walidacja

  //   // navigate('/dashboard/${input}')
  // }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hello Home

      {/* Stwórz aplikację, która działa w następujący sposób 
      
      - Na stronie głównej, uzytkownik moze wpisac slowo kluczowe
      - Potrzebujemy pobrac to slowo kluczowe, nastepnie przejsc na strone dashboard, przekazujac to slowo kluczowe w parametrze lub jako queryparams
      - Na postronie dashboard, potrzebujemy odebrac to slowo z parametru/queryparams i uzyc go do zapytania GraphQL
      - Wyniki wyswietlic na ekranie
        
      */}

      <form>
        <input className=""></input>
        <button>Search</button>
      </form>
      
    </div>
  );
}
