import React from 'react'
import sublinks from './data'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="section about-section">
      <Link to='/'><button className='btn about-btn'>Strona główna</button>
      </Link> 
       {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article className='about-links' key={index}>
                <h2>{page}</h2>
                <div >
                  {links.map((link, index) => {
                    const { name, price, url } = link;
                    return (
                      <div className="about-div" key={index}>
                         <img className='about-img' src={url}  alt='  '/>
                        <h3>{name}  {price} {` zł`}</h3>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
    </section>
  )
}

export default About
