import './components.css'

const CardTitle = (props) => {
    return(
        <div className='cardTitle-container'>
            <h2 className={`cardTitle-title ${props.class}`}>{props.title}</h2>
        </div>
    )
}

export default CardTitle