import bannerAtendimento from "/bannerAtendimento.jpg"

import { useNavigate } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";

export default function InitDiagnosis() {
    const { formData, setFormData } = useContext(FormContext)
    const navigate = useNavigate()

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navigate('/atendimento/descricao-problema-diagnostico')
    }

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navigate('/atendimento/diagnostico')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, problemaDiagnotisco: event.target.value})        
    }

    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                <h2>O seu veículo apresenta algum um desses problemas? </h2>
                <div>
                    <input 
                        type="radio" 
                        name="problema-diagnostico" 
                        id="superaquecimento" 
                        value="Superaquecimento" 
                        onChange={handleChange}/>
                    <label htmlFor="superaquecimento">Superaquecimento</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        name="problema-diagnostico" 
                        id="falha-desliga" 
                        value="Veículo falha ou desliga" 
                        onChange={handleChange}/>
                    <label htmlFor="falha-desliga">Veículo falha ou desliga</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        name="problema-diagnostico" 
                        id="suspensao-direcao-cambio" 
                        value="Problemas na suspensão, direção ou câmbio" 
                        onChange={handleChange}/>
                    <label htmlFor="suspensao-direcao-cambio">Problemas na suspensão, direção ou câmbio</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        name="problema-diagnostico" 
                        id="luz-verificacao-acesa" 
                        value="Luz de verificação acesa no painel" 
                        onChange={handleChange}/>
                    <label htmlFor="luz-verificacao-acesa">Luz de verificação acesa no painel</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        name="problema-diagnostico" 
                        id="barulho" 
                        value="Barulho (rodas, freio, suspensão ou direção)" 
                        onChange={handleChange}/>
                    <label htmlFor="barulho">Barulho (rodas, freio, suspensão ou direção)</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        name="problema-diagnostico" 
                        id="outro" 
                        value="Outro" 
                        onChange={handleChange}/>
                    <label htmlFor="outro">Outro</label>
                </div>
                
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                    <Button onClick={handleNext} >Continuar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}