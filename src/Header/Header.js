import React, { useState } from 'react'
import './Header.css'
import smallRight from '../assets/icons/small-right.png'
import smallLeft from '../assets/icons/small-left.png'
import search from '../assets/icons/search.png'

const Header = ({ inputValue }) => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="seta esquerda" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="seta right" />
        </button>
        <div className="header__search">
          <img src={search} alt="" />
          <input
            id="search-input"
            type="search"
            maxLength="800"
            defaultValue=""
            placeholder="O que você quer ouvir?"
            onInput={inputValue}
          />
        </div>
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  )
}

export default Header
