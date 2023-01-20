import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="TruthSeeker.AI" />
          </div>
          <h3>TruthSeeker.AI</h3>
          <a href="https://github.com/FranzKhylOng/TruthSeeker.AI" className='btn' target='_blank'>Github</a>
          <a href="https://docs.google.com/presentation/d/e/2PACX-1vSAUqLn2SX62ZoI3-ozGDOZXonZNic1SBkQHcXVV2oMWII9cC6CkpKn7dSiCFPA6g/pub?start=false&loop=false&delayms=5000" className='btn btn-primary' target='_blank'>Pitch Deck</a>

        </article>
      </div>
    </section>
  )
}

export default Portfolio