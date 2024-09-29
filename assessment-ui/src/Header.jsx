import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import logo from './assets/Logo-Vote-12.svg'
import NavLink from './components/NavLink'
import './Header.css'

const Header = () => {

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    return(
        <>
            <header className="header-container">
                <img className='header-logoSvg' src={logo} alt="Lara Saraiva" />
                <button className='header-iconBtn'><FontAwesomeIcon icon={faBars} onClick={toggleMenu}/></button>
            </header>
            <div className={`div-close-menu ${open ? 'div-open' : ''}`} onClick={toggleMenu}></div>
            <nav className={`header-menu ${open ? 'open' : ''}`} >
                <button className='menu-closeBtn'><FontAwesomeIcon icon={faX} onClick={toggleMenu} /></button>
                <ul className='menu-ul'>
                    <li><NavLink title='Biografia' id='#Biografia' onClick={toggleMenu}/></li>
                    <li><NavLink title='Propostas' id='#Propostas' onClick={toggleMenu}/></li>
                    <li><NavLink title='Agenda' id='#Agenda' onClick={toggleMenu}/></li>
                    <li><NavLink title='Contato' id='#Contato' onClick={toggleMenu}/></li>
                    <li><img className='menu-logoSvg ' src={logo} alt="Lara Saraiva" /></li>
                </ul>
            </nav>
        </>
    )
}

export default Header