import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const greetingArray = ['H', 'i,']
    const imArray = ['I', '\'m']
    const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 4000)
    }, [setLetterClass])

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>                    
                    <AnimatedLetters letterClass={letterClass}
                        strArray={greetingArray}
                        idx={11}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={imArray}
                        idx={13}
                    />
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>Full-stack Developer / JavaScript Fan / PHP Expert</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home