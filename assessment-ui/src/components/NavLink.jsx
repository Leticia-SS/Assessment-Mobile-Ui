import { Link } from 'react-scroll/modules';

const NavLink = (props) => {
    return(
        <>
        <Link 
        activeClass="active"
        to={props.id}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        >{props.title}</Link>
        </>
    )
}

export default NavLink