import React, { useState } from 'react'
import './MainContent.css'
import ResultArtist from './ResultArtist'
import { useEffect } from 'react'

const MainContent = ({ searchTerm }) => {
  // trazer os dados da input que esta no header
  const [resul, setResul] = useState('')
  const [hiddencard, setHiddencard] = useState(false)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DATABASE_URL}?name_like=${searchTerm}`)
      .then((res) => res.json())
      .then((result) => showDados(result))
  }, [searchTerm])

  // make function state and hidden card
  function showDados(res) {
    setResul(res)
    searchTerm === '' ? setHiddencard(false) : setHiddencard(true)
    //  res.length == 0 ? setHiddencard(true) : setHiddencard(true)
  }

  return (
    <div className="playlist-container">
      {process.env.REACT_APP_DATABASE_URL}
      {searchTerm === '' && (
        <div id="result-playlists">
          <div className="playlist">
            <div id="greeting">Boa noite</div>
            <h2 className="session">Navegar por todas as seções</h2>
          </div>

          <div className="offer__scroll-container">
            <div className="offer__list">
              <section className="offer__list-item">
                <a href="" className="cards">
                  <div className="cards card1">
                    <img src="assets/playlist/1.jpeg" alt="" />
                    <span>Boas festas</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card2">
                    <img src="assets/playlist/2.png" alt="" />

                    <span>Feitos para você</span>
                  </div>
                </a>
                <a href="" className="cards">
                  <div className="cards card3">
                    <img src="assets/playlist/3.jpeg" alt="" />
                    <span>Lançamentos</span>
                  </div>
                </a>
                <a href="" className="cards">
                  <div className="cards card4">
                    <img src="assets/playlist/4.jpeg" alt="" />
                    <span>Creators</span>
                  </div>
                </a>
                <a href="" className="cards">
                  <div className="cards card5">
                    <img src="assets/playlist/5.jpeg" alt="" />
                    <span>Para treinar</span>
                  </div>
                </a>
                <a href="" className="cards">
                  <div className="cards card6">
                    <img src="assets/playlist/6.jpeg" alt="" />
                    <span>Podcasts</span>
                  </div>
                </a>
                <a href="" className="cards">
                  <div className="cards card7">
                    <img src="assets/playlist/7.jpeg" alt="" />
                    <span>Sertanejo</span>
                  </div>
                </a>
                <a href="" className="cards">
                  <div className="cards card8">
                    <img src="assets/playlist/8.jpeg" alt="" />
                    <span>Samba e pagode</span>
                  </div>
                </a>
                <a href="" className="cards">
                  <div className="cards card9">
                    <img src="assets/playlist/9.jpeg" alt="" />
                    <span>Funk</span>
                  </div>
                </a>
                <a href="" className="cards">
                  <div className="cards card10">
                    <img src="assets/playlist/11.jpeg" alt="" />
                    <span>Rock</span>
                  </div>
                </a>
                <a href="" className="cards">
                  <div className="cards card11">
                    <img src="assets/playlist/12.jpeg" alt="" />
                    <span>Hip Hop</span>
                  </div>
                </a>
                <a href="" className="cards">
                  <div className="cards card12">
                    <img src="assets/playlist/13.jpeg" alt="" />
                    <span>Indie</span>
                  </div>
                </a>
                <a href="" className="cards">
                  <div className="cards card13">
                    <img src="assets/playlist/14.jpeg" alt="" />
                    <span>Relax</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card14">
                    <img src="assets/playlist/15.jpeg" alt="" />
                    <span>Música Latina</span>
                  </div>
                </a>
                <a href="" className="cards">
                  <div className="cards card15">
                    <img src="assets/playlist/10.jpeg" alt="" />
                    <span>MPB</span>
                  </div>
                </a>
              </section>
            </div>
          </div>
        </div>
      )}
      <div id="result-artist">
        <div className="grid-container">
          {resul.length > 0 ? (
            resul.map((valu, ind) => (
              <ResultArtist
                nome={valu.name}
                urlImg={valu.urlImg}
                hiddenorNot={hiddencard}
              />
            ))
          ) : (
            <p>nao tem nada</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default MainContent
