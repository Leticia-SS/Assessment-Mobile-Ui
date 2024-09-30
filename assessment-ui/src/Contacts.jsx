import './Contacts.css'
import title from './assets/Contatos.svg'
import SocialMedia from './components/SocialMedia'
import vote12 from './assets/vote12.png'

const Contacts = () => {
    return(
        <section id='Contato'>
            <div className='area1'>
                <div className='contact-title'>
                <img src={vote12} alt="vote12" className='contact-title-image1' />
                    <img src={title} alt="Contatos" className='contact-title-image2' />
                </div>
                <div className='contact-container'>
                    <div className='contact-content'>
                        <h4>Email:</h4>
                        <p>leticia.ssilva@al.infnet.edu.br</p>
                        <h4>Telefone:</h4>
                        <p>(21) 99717-0209</p>
                        <h4>Endereço:</h4>
                        <p>Rua São José, 90 – 20010-020</p>
                    </div>
                    <SocialMedia />
                    </div>
            </div>
            <p className='final-sentence'>Entre em contato e faça parte da transformação que queremos ver em nossa cidade!</p>

        </section>
    )
}

export default Contacts