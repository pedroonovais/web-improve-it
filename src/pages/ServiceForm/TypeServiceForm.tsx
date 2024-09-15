import bannerAtendimento from "/bannerAtendimento.jpg"

import { useNavigate } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";

export default function TypeServiceForm() {
    const { formData, setFormData } = useContext(FormContext)
    const navigate = useNavigate()

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (formData.tipoServico === "manutencao"){
            navigate('/atendimento/selecionar-servicos')
        }else{
            navigate('/atendimento/dados-revisao')
        }
    }

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navigate('/atendimento')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, tipoServico: event.target.value})        
    }

    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                <h2>Você gostaria de realizar uma <u>manutenção</u> ou <u>revisão</u> em seu veículo?</h2>
                <div>
                    <input type="radio" name="tipo-servico" id="manutencao" value="manutencao" onChange={handleChange}/>
                    <label htmlFor="manutencao">Manutenção: um conserto ou serviço específico.</label>
                </div>
                <div>
                    <input type="radio" name="tipo-servico" id="revisao" value="revisao" onChange={handleChange}/>
                    <label htmlFor="revisao">Revisão: revisão dos principais itens de seu veículo.</label>
                </div>
                <div>
                    <input type="radio" name="tipo-servico" id="manutencao-revisao" value="manutencao-revisao" onChange={handleChange}/>
                    <label htmlFor="manutencao-revisao">Ambos (manutenção + revisão).</label>
                </div>
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                    <Button onClick={handleNext} >Continuar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}