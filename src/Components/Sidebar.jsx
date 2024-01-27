import React from 'react'
import './Sidebar.css'
import { FaHome, FaSearch, FaBook, FaPlus, FaGlobe } from 'react-icons/fa'
import logospotify from '../assets/icons/logo-spotify.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="#">
            <img src={logospotify} alt="logo spotify" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">
              <span className="fa">
                <FaHome />
              </span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa">
                <FaSearch />
              </span>

              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="library">
        <div className="library__content">
          <button className="library__button">
            <span className="fa">
              <FaBook />
            </span>
            <span>Sua biblioteca</span>
          </button>
          <span className="fa">
            <FaPlus />
          </span>
        </div>
        <section className="section-playlist">
          <div className="section-playlist__content">
            <span className="text title">Crie sua primeira PlayList</span>
            <span className="text subtitle">é fácil vamos te ajudar.</span>
            <button className="section-playlist__button">
              <span>Criar Playlist</span>
            </button>
          </div>
        </section>

        <div className="cookies">
          <a href="#">Cookies</a>
        </div>

        <div className="languages">
          <button className="languages__button">
            <FaGlobe className="fa" />
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
