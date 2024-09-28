import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from './assets/Logotipo-Lara-Transp-Azul.svg'

const Header = () => {
    return(
        <header className="header-container">
            <img className='header-logoSvg' src={logo} alt="Lara Saraiva" />
            <button><FontAwesomeIcon icon={faBars} /></button>

            <nav className='header-menu'>
                <ul>
                    <li>Biografia</li>
                    <li>Propostas</li>
                    <li>Agenda</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header