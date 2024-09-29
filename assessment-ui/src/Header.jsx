import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from './assets/Logo-Vote-12.svg'
import NavLink from './components/NavLink'

const Header = () => {
    return(
        <header className="header-container">
            <img className='header-logoSvg' src={logo} alt="Lara Saraiva" />
            <button><FontAwesomeIcon icon={faBars} /></button>

            <nav className='header-menu'>
                <ul>
                    <li><NavLink title='Biografia' id='#Biografia'/></li>
                    <li><NavLink title='Propostas' id='#Propostas'/></li>
                    <li><NavLink title='Agenda' id='#Agenda'/></li>
                    <li><NavLink title='Contato' id='#Contato'/></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header