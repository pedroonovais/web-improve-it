import { useState } from "react"
import { Button } from "../../components/Button/Button"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { FlexRow } from "../../components/FlexRow/FlexRow"
import { FormLayout } from "../../components/FormLayout/FormLayout"
import { Hero } from "../../components/Hero/Hero"
import bannerAtendimento from "/bannerAtendimento.jpg"

export default function ServiceForm() {
    const [step, setStep] = useState(1)
    // const [formData, setFormData] = useState({
    //     tipoServico: ''
    // })

    // Avançando uma etapa no formulario
    const nextStep = () => {
        setStep(step + 1)
    }

    // Retorna uma etapa no formulario
    const prevStep = () => {
        setStep(step - 1)
    }

    // Renderiza pergunta conforme o step
    const renderForm = () => {
        switch (step) {
            case 1:
                return <h2>Vou te fazer algumas perguntas para saber o que você deseja, ok?</h2>
            case 2:
                return <>
                    <h2>Você gostaria de realizar uma <u>manutenção</u> ou <u>revisão</u> em seu veículo?</h2>
                    <div>
                        <input type="radio" name="tipo-servico" id="manutencao" value="manutencao" />
                        <label htmlFor="manutencao">Manutenção: um conserto ou serviço específico.</label>
                    </div>
                    <div>
                        <input type="radio" name="tipo-servico" id="revisao" value="revisao" />
                        <label htmlFor="revisao">Revisão: revisão dos principais itens de seu veículo.</label>
                    </div>
                    <div>
                        <input type="radio" name="tipo-servico" id="manutencao-revisao" value="manutencao-revisao" />
                        <label htmlFor="manutencao-revisao">Ambos (manutenção + revisão).</label>
                    </div>
                </>
            case 3:
                return (
                    <>
                        <h2>Escolha o serviço que deseja realizar (pode escolher mais de um):</h2>
                        <Checkbox name="teste" id="teste" value="teste1">Teste</Checkbox>
                    </>
                )
            default:
                return <h1>Teste</h1>
        }
    }

    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                {renderForm()}
            </FormLayout>
            <FlexRow>
                <Button bgColor="white" txtColor="var(--primary-color)" onClick={prevStep} >Voltar</Button>
                <Button onClick={nextStep} >Continuar</Button>
            </FlexRow>
        </Hero>
    )
}