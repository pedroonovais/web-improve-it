import { Button } from "../../components/Button/Button"
import { FlexRow } from "../../components/FlexRow/FlexRow"
import { FormLayout } from "../../components/FormLayout/FormLayout"
import { Hero } from "../../components/Hero/Hero"
import { useNavigate } from "react-router-dom"

import bannerAtendimento from "/bannerAtendimento.jpg"

export default function InitialForm() {
    const navigate = useNavigate()

    // Encaminhando para a proxima pagina do formulario
    const handleNext = () => {
        navigate('/atendimento/tipo-servico')
    }

    // Caso o usuario apertar em 'voltar' ele volta para a home
    const handleBack = () => {
        navigate('/')
    }

    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                <h2>Vou te fazer algumas perguntas para saber o que você deseja, ok?</h2>
            </FormLayout>
            <FlexRow>
                <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                <Button onClick={handleNext} >Continuar</Button>
            </FlexRow>
        </Hero>
    )
}