import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        <p>TESTAR O PREMIUM DE GRAÇA</p>
        <p>
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </p>
      </div>
      <div className="footer__button">
        <button>
          <span>Inscreva-se</span>
          <span>grátis</span>
        </button>
      </div>
    </footer>
  )
}

export default Footer
