import bannerAtendimento from "/bannerAtendimento.jpg"

import { useNavigate } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { useContext, useEffect } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import { WrapperCheckbox } from "../../components/WrapperCheckbox/WrapperCheckbox";

export default function ReviewData() {
    const { formData, setFormData } = useContext(FormContext)
    const navigate = useNavigate()
    const listaOpcoes = ['Até 50 mil Km', 'Até 80 mil Km', 'Até 100 mil Km', 'Até 150 mil Km', 'Até 200 mil Km', 'Até 250 mil Km', 'Até 300 mil Km', 'Acima 300 mil Km']

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (formData.tipoServico == 'manutencao-revisao'){
            navigate('/atendimento/selecionar-servicos')
        }else{
            navigate('/atendimento/confirmar-cliente-porto')
        } 
    }

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navigate('/atendimento/tipo-servico')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, kmRodados: event.target.value})        
    }

    useEffect(() => {console.log(formData)}, [formData])

    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                <h2>Por favor, indique a KM aproximada do veículo que deseja revisão:</h2>
                <WrapperCheckbox>
                    {listaOpcoes.map((item, index) => (
                        <div key={index}>
                            <input type="radio" name="km-rodados" id={item} value={item} onChange={handleChange}/>
                            <label htmlFor={item}>{item}</label>
                        </div>
                    ))}
                </WrapperCheckbox>
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                    <Button onClick={handleNext} >Continuar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}