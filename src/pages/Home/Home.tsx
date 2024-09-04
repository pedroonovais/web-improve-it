import { Card } from "../../components/Card/Card";
import { Section } from "../../components/Section/Section";

import bannerImage from "/bannerHome.jpg"
import alinhamentoImage from "/alinhamento.jpg"
import carrosImage from "/carros.jpg"
import { Hero } from "../../components/Hero/Hero";
import { Footer } from "../../components/Footer/Footer";

export default function Home(){
    return(
        <>
            <Hero img={bannerImage} btnAtendimento={true} height="95vh">
                <h2>Bem-vindo ao CAP – Centro de Assistência Porto Seguro 😊. Queremos te oferecer a melhor opção em qualidade e custo para a manutenção de seu veículo.🚗</h2>
            </Hero>
            <Section>
                <Card>
                    <h1>Serviços Disponíveis:</h1>
                    <img src={alinhamentoImage} alt="Alinhamento" />
                    <p>Alinhamento de direção</p>
                </Card>
            </Section>
            <Section>
                <Card>
                <h1>Por que escolher a CAP?</h1>
                    <img src={carrosImage} alt="Alinhamento" />
                    <p>
                        Nos Centros Automotivos Porto você encontra profissionais especializados para realizar serviços de manutenção e revisão do seu carro. 
                        Com orçamentos assertivos e um processo cada vez mais digitalizado, oferecemos uma experiência rápida, segura e de ótima qualidade para segurados e não segurados.
                    </p>
                </Card>
            </Section>
            <Footer />
        </>
    )
}