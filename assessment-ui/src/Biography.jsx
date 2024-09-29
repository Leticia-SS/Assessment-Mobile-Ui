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
            <p className="bio-text-p">Olá, sou Lara, uma spitz de 5 anos e candidata a prefeita, com uma visão clara para transformar nossa cidade em um lugar mais justo e eficiente. Uma das minhas principais propostas é investir R$ 1,8 bilhões na reforma e reorganização dos Centros Integrados de Educação Pública (CIEPs), garantindo acesso a educação de qualidade, além de promover esportes e lazer para todos.</p>
            <p className="bio-text-p">Para melhorar o sistema de saúde, proponho a criação de um aplicativo que permitirá o acesso direto ao Sistema Nacional de Regulação, facilitando o acompanhamento das filas. Também estou comprometida com políticas de habitação social, realocando moradores que vivem em áreas de risco de deslizamentos, como mostram os estudos do município.</p>
            <p className="bio-text-p">Na área de mobilidade, minha meta é substituir gradualmente o BRT por VLT ou metrô de superfície, em parceria com o governo do Estado, além de iniciar as obras da Linha 6 do metrô, conectando a Barra da Tijuca ao Galeão. Acredito que juntos podemos construir uma cidade mais segura e com melhores serviços para todos!</p>
           </div>
           </section>
    )
}

export default Biography