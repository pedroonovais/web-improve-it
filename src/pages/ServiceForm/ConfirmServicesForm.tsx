import bannerAtendimento from "/bannerAtendimento.jpg"

import { FormLayout } from "../../components/FormLayout/FormLayout";
import { Hero } from "../../components/Hero/Hero";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../contexts/FormContext/FormContext";
import { UnorderedList } from "../../components/UnorderedList/UnorderedList";

export default function ConfirmServicesForm (){
    const { formData } = useContext(FormContext)
    const navigate = useNavigate()
    
    const handleNext = () => {
        navigate('/atendimento/confirmar-cliente-porto')
    }

    const handleBack = () => {
        navigate('/atendimento/selecionar-servicos')
    }
    
    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                <h2>Confirme as opções de serviço que você escolheu:</h2>
                <UnorderedList>
                    {formData.servicosSelecionados.map((servico, index) => {
                        return <li key={index}>- {servico}</li>
                    })}
                </UnorderedList>
            </FormLayout>
            <FlexRow>
                <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                <Button onClick={handleNext} >Confirmar</Button>
            </FlexRow>
        </Hero>
    )
}