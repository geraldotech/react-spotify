import React from 'react'
import './ResultArtist.css'
import { FaPlay } from 'react-icons/fa'

const ResultArtist = ({ nome, urlImg, hiddenorNot }) => {
  /* alimentar esse component com o obj da busca do json */

  return (
    <>
      {hiddenorNot && (
        <div className="artist-card">
          <div className="card-img">
            <img src={urlImg} alt="" id="artist-img" className="artist-img" />
            <div className="play">
              <span className="fa">
                <FaPlay />
              </span>
            </div>
          </div>
          <div className="cart-text">
            <a title="Foo Fighters" className="vst"></a>
            <span className="artist-name" id="artist-name">
              {nome}
            </span>
            <span className="artist-categorie">Artista</span>
          </div>
        </div>
      )}
    </>
  )
}

export default ResultArtist
