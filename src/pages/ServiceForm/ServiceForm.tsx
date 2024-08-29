import { useState } from "react"
import { Button } from "../../components/Button/Button"
import { FormSteps } from "../../components/FormSteps/FormSteps"
import { Hero } from "../../components/Hero/Hero"
import bannerAtendimento from "/bannerAtendimento.jpg"
import { FlexRow } from "../../components/FlexRow/FlexRow"

export default function ServiceForm(){
    const [step, setStep] = useState(1)
    // const [formData, setFormData] = useState({
    //     tipoServico: ''
    // })

    // Avançando uma etapa no formulario
    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step -1)
    }
    
    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormSteps index={step} />
            <FlexRow>
                <Button bgColor="white" txtColor="var(--primary-color)" onClick={prevStep} >Voltar</Button>
                <Button onClick={nextStep} >Continuar</Button>
            </FlexRow>
        </Hero>
    )
}