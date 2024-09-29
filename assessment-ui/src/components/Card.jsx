import './components.css'

const Card = (props) => {
    return(
        <div className='card-container'>
            <img className='card-image' src={props.img} alt="Card Background" />
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-content'>{props.content}</p>
        </div>
    )
}

export default Card