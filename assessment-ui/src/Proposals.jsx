import Card from "./components/Card";
import title from './assets/Propostas.svg'
import './Proposals.css'
import img1 from './assets/Escola.jpg'
import img2 from './assets/Aplicativo.jpg'
import img3 from './assets/Habitacao.jpg'
import img4 from './assets/Transporte.jpg'
import CardTitle from "./components/CardTitle";

const Proposals = () => {
    return(
        <section>
            <div className='proposal-title-container'>
                <img className='proposal-title' src={title} alt="title" /></div>
            <div className='proposal-cards-container'>
                <Card img={img1} title='Investimento em CIEPs' content='Propõe-se investir 1,8 bilhões para reformar e reorganizar os Centros Integrados de Educação Pública (CIEPs). O objetivo é garantir maior acesso à educação de qualidade, livre e gratuita para todos, além de proporcionar alimentação, esportes e atividades de lazer.' />
                <Card img={img2} title='Acesso ao Sistema de Regulação' content='A proposta envolve a organização do Sistema Nacional de Regulação em um aplicativo para dispositivos móveis, permitindo acesso direto ao sistema. Como alternativa, a fila também estará disponível por meio de um canal de SMS, facilitando a comunicação e o agendamento.' />
                <Card img={img3} title='Habitação Social' content='Com base em um estudo que indica que 18 mil domicílios no município do Rio de Janeiro estão localizados em áreas suscetíveis a deslizamentos, sugere-se investir na criação de políticas de habitação social para remover a população dessas áreas de risco, garantindo a segurança e o bem-estar de todos.' />
                <Card img={img4} title='Modernização do Transporte' content='A proposta é iniciar a substituição gradual das redes de BRT por VLT ou metrô de superfície, em colaboração com o governo do Estado do Rio de Janeiro. Além disso, será necessário trabalhar em conjunto com o governador para iniciar as obras da Linha 6 do metrô, que ligará a Barra da Tijuca ao Galeão, melhorando a mobilidade urbana e a qualidade de vida dos cidadãos.' />
            </div>
            <div>
            <div className='otherProposal-title-container'>
                <h2 className='proposal-h2'>Outras Propostas</h2>
                </div>
            <div className='proposal-cardsTitle-container'>
                <CardTitle title='Segurança Pública' class='blue' />
                <CardTitle title='Saúde da População' class='pink' />
                <CardTitle title='Saneamento Básico' class='blue' />
                <CardTitle title='Saneamento Básico' class='pink' />
                <CardTitle title='Mobilidade Urbana Sustentável' class='blue' />
                <CardTitle title='Mobilidade Urbana Sustentável' class='pink' />
            </div>
            </div>
        </section>
    )
}

export default Proposals