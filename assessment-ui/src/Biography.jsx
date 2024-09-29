import Lara from './assets/Lara.png'
import './Biography.css'
import title from './assets/Biografia.svg'

const Biography = () => {
    return (
        <section id="Biografia">
            <div className="biography-title">
                <div><img className="bio-title-h1" src={title} alt="Biografia" /></div>
                <div className="bio-title-img"><img className="title-img" src={Lara} alt="Lara Saraiva"/></div>
            </div>
           <div className="biography-content">
            <p className="bio-text-p">Olá, sou a Lara, uma spitz de 5 anos e candidata a prefeita! Meu nome vem da palavra laranja, refletindo meu espírito energético e vibrante. Cresci em um lar amoroso, onde aprendi sobre lealdade, curiosidade e o bem-estar da comunidade. Ao longo da minha trajetória, sempre busquei maneiras de ajudar e unir as pessoas ao meu redor.</p>
            <p className="bio-text-p">Minha trajetória acadêmica é notável: aos dois anos, me formei em Comportamento Canino Avançado pela Universidade de Cãombridge e publiquei um artigo sobre "A Harmonização da Vida Canina no Espaço Urbano". Como prefeita, proponho investir na reforma dos Centros Integrados de Educação Pública, facilitar o acesso à saúde por meio de um aplicativo e criar políticas de habitação social para áreas de risco. Sou reconhecida como uma líder natural, capaz de unir cães e humanos em prol de objetivos comuns.</p>
            <p className="bio-text-p">Agora, estou pronta para liderar nossa cidade! Minha plataforma é baseada em empatia e igualdade. Juntos, podemos construir uma comunidade para se viver em harmonia. Quem melhor para guiar essa transformação do que eu?</p>
           </div>
           </section>
    )
}

export default Biography