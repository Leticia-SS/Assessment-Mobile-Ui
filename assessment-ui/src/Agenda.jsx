import './Agenda.css'
import CardEvent from './components/CardEvent'
import title from './assets/Agenda.svg'

const Agenda = () => {
    return(
        <section id='Agenda'>
            <div className='agenda-title'>
                <img className='agenda-title-image' src={title} alt="" />
            </div>
            <ul className='agenda-events-container'>
                <CardEvent 
                title='Encontro Comunitário - Zona Oeste'
                date='02/10'
                time='10h à 12h'
                location=' Associação de Moradores de Realengo'
                description='Reunião com lideranças comunitárias para discutir as propostas de educação e segurança pública. '
            />
            <CardEvent 
                title='Caminhada no Centro e Mercado Popular'
                date='04/10'
                time='14h às 17h'
                location='Rua Uruguaiana, Centro do Rio de Janeiro'
                description='Caminhada pelo centro da cidade e visita ao Mercado Popular. A equipe de campanha estará dialogando com comerciantes e trabalhadores locais.'
            />
            <CardEvent 
                title='Debate sobre Habitação e Infraestrutura'
                date='06/10'
                time='18h às 20h'
                location='Câmara Municipal do Rio de Janeiro'
                description='Debate com especialistas e lideranças da área de habitação sobre as políticas propostas para remoção de moradores de áreas de risco.'
            />
              <CardEvent 
                title='Grande Comício na Zona Norte'
                date='08/10'
                time='16h às 19h'
                location='Praça Agripino Grieco, Méier'
                description='Comício de grande porte para reunir apoiadores e moradores da Zona Norte.'
            />
                </ul>
        </section>
    )
}

export default Agenda