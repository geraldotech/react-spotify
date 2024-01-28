import './Reset.css'
import './App.css'
import './Header/Header.css'
import Sidebar from './Components/Sidebar'
import Header from './Header/Header.js'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
import { useState } from 'react'

function App() {
  const [sendinput, setSendinput] = useState()
  /* envia os dados da input do Header para o Component Main */
  function shareDados(e) {
    if (e.target.value === '') {
      setSendinput('')
      return
    }
    setSendinput(e.target.value.toLowerCase())
  }

  return (
    <div>
      <Sidebar />
      <main>
        <div className="main-container">
          <Header inputValue={shareDados} />
          <MainContent searchTerm={sendinput} />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
