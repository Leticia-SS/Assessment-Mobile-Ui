import { Link } from 'react-scroll/modules';

const NavLink = (props) => {
    return(
        <>
        <Link 
        activeClass="active"
        to={props.id}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={props.onClick}
        >{props.title}</Link>
        </>
    )
}

export default NavLink