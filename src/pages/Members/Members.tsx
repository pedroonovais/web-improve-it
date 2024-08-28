import { Card } from "../../components/Card/Card";
import { Hero } from "../../components/Hero/Hero";
import { Section } from "../../components/Section/Section";

import bannerIntegrantes from "/bannerEquipe.jpg"
import fotoPedroNovais from "../../assets/pedroNovais.jpg"
import { Footer } from "../../components/Footer/Footer";

export default function Members(){
    return (
        <>
            <Hero img={bannerIntegrantes} btnAtendimento={false}>
                {"Conheça nossa equipe, dê uma olhada nos rostos que tornam tudo possível na improve it!"}
            </Hero>
            <Section>
                <h1>Integrantes:</h1>
                <p>Link para o nosso repositório no github:</p>
                <a href="https://github.com/pedroonovais/web-improve-it" target="_blank">https://github.com/pedroonovais/web-improve-it</a>
                <Card>
                    <img src={fotoPedroNovais} alt="Pedro Novais" />
                    <h3>Pedro Novais</h3>
                    <p>RM: 555276</p>
                    <p>Turma: 1TDSPX</p>
                    <a href="https://github.com/pedroonovais" target="_blank">Link GitHub</a>
                </Card>
            </Section>
            <Footer />
        </>
    )
}