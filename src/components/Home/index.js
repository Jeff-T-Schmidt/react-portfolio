import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['c', 'h', 'm', 'i', 'd', 't']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    async function waiting() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }
    waiting();
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _11`}>i</span>
            <span className={`${letterClass} _12`}>,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'</span>
            <span className={`${letterClass} _15`}>m</span>
            <br />
            <span className={`${letterClass} _16`}>J</span>
            <span className={`${letterClass} _17`}>e</span>
            <span className={`${letterClass} _18`}>f</span>
            <span className={`${letterClass} _19`}>f</span>
            <br />
            <img src={LogoTitle}
            alt="developer"
            />
                   
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
        </div>
        <Logo />
      </div>
    </>
  )
}


export default Home