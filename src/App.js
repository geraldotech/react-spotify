import './Reset.css'
import './App.css'
import Sidebar from './Components/Sidebar'
import Header from './Header/Header.js'
import './Header/Header.css'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

function App() {
  const [sendinput, setSendinput] = useState()

  function shadaDados(e) {
    if (e.target.value === '') {
      setSendinput('')
      return
    }
    setSendinput(e.target.value.toLowerCase())
  }

  return (
    <div>
      <Sidebar />
      <FontAwesomeIcon icon="fa-brands fa-youtube" />
      <main>
        <div className="main-container">
          <Header inputValue={shadaDados} />
          <MainContent searchTerm={sendinput} />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
