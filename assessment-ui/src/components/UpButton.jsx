import './components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

const UpButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        const windowHeight = window.innerHeight;
        if (window.scrollY > (windowHeight-110)) { 
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return(
        <button onClick={scrollToTop}
        style={{
            display: visible ? 'block' : 'none', 
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: 'var(--vinho)',
            color: 'white',
            border: 'none',
            borderRadius: '100%',
            padding: '10px',
            cursor: 'pointer',
            fontSize: '25px',
            zIndex: 5,
        }}>
            <FontAwesomeIcon icon={faHouse}className='upBtn'/>
        </button>
    )
}

export default UpButton