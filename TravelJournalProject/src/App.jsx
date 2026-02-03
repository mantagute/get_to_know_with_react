import Header from './components/Header';
import Entry from './components/Entry';
import data from './data.js';
import './App.css'

function App() {

  const EntryElements= data.map((travel) => {
      return (
        <Entry
          key={travel.id}
          object={travel}
        />
      )
  })

  return (
    <>
      <Header/>
      <main className='container'>
        {EntryElements}
      </main>
    </>
  )
}

export default App
