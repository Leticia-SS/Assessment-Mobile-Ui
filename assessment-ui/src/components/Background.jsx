import { useEffect, useState } from "react"
import Logotipo from '../assets/Logotipo-Lara-Transp-Azul.svg'
import Slogan from '../assets/slogan.svg'
import './components.css'

const CarouselContainer = () => {
    
    const images = ['img1', 'img2', 'img3']
    const [image, setImage] = useState(0)

    const switchImg = () => {
        setImage((prev)=> (prev + 1) % images.length)
    }

    useEffect(() => {
        const interval = setInterval(switchImg, 30000)
        return () => clearInterval(interval)
    },[])

    return(
        <div className={`carousel-container ${images[image]}`}>
            <img className="carousel-Logo" src={Logotipo} alt="Logotipo"/>
            <img src={Slogan} alt="Slogan" className="slogan" />
        </div>
    )
}

export default CarouselContainer