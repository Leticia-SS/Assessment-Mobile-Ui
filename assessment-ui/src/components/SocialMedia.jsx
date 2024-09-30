import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './components.css'
const SocialMedia = () => {
    return (
        <div className='socialMedia-container'>
            <a href="https://www.facebook.com" target="_blank" className='socialMedia-links'>
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com" target="_blank" className='socialMedia-links'>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.twitter.com" target="_blank"  className='socialMedia-links'>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" className='socialMedia-links'>
                <FontAwesomeIcon icon={faTiktok} />
            </a>
        </div>
    );
}

export default SocialMedia