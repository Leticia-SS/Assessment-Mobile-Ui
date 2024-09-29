import './components.css'

const CardEvent = (props) => {
    return(
            <li className='event-container'>
                <div className='event-main-container'>
                <div>
                    <h3 className='event-title'>{props.title}</h3>
                    <p className='event-location'>{props.location}</p>
                </div>
                <div className='event-info'>
                    <p>{props.date}</p>
                    <p>{props.time}</p>
                </div>
                </div>
                <p className='event-description'>{props.description}</p>
            </li>
    )
}

export default CardEvent