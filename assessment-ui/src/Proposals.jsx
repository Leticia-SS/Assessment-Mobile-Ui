import Card from "./components/Card";
import title from './assets/Propostas.svg'
import './Proposals.css'

const Proposals = () => {
    return(
        <section>
            <div className='proposal-title'><img src={title} alt="title" /></div>
            <div className='proposal-cards-container'>
                <Card title='' content='' />
                <Card title='' content='' />
                <Card title='' content='' />
                <Card title='' content='' />
            </div>
        </section>
    )
}

export default Proposals