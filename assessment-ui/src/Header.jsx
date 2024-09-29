import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import logo from './assets/Logo-Vote-12.svg'
import NavLink from './components/NavLink'
import './Header.css'

const Header = () => {
    return(
        <>
            <header className="header-container">
                <img className='header-logoSvg' src={logo} alt="Lara Saraiva" />
                <button className='header-iconBtn'><FontAwesomeIcon icon={faBars} /></button>
            </header>
            <nav className='header-menu'>
                <button className='menu-closeBtn'><FontAwesomeIcon icon={faX} /></button>
                <ul className='menu-ul'>
                    <FontAwesomeIcon/>
                    <li><NavLink title='Biografia' id='#Biografia'/></li>
                    <li><NavLink title='Propostas' id='#Propostas'/></li>
                    <li><NavLink title='Agenda' id='#Agenda'/></li>
                    <li><NavLink title='Contato' id='#Contato'/></li>
                    <li><img className='menu-logoSvg' src={logo} alt="Lara Saraiva" /></li>
                </ul>
            </nav>
        </>
    )
}

export default Header