import bannerAtendimento from "/bannerAtendimento.jpg"

import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import { UnorderedList } from "../../components/UnorderedList/UnorderedList";

export default function ConfirmDataDiagnosis() {
    const { formData } = useContext(FormContext)
    const navigate = useNavigate()
    
    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navigate('/atendimento/orcamento-finalizado')
    }

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navigate('/atendimento/confirmar-cep')
    }
    
    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                <h2>Confirme as informações fornecidas para o diagnóstico</h2>
                <p>
                    <strong>Veículo:</strong> {formData.marcaVeiculo} {formData.modelo}<br />
                    <strong>Problema relatado:</strong> {formData.problemaDiagnotisco}, {formData.descProblemaDiagnostico}
                </p>
                <UnorderedList>
                    {formData.servicosSelecionados.map((servico, index) => {
                        return <li key={index}> - {servico}</li>
                    })}
                </UnorderedList>
                <p></p>
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                    <Button onClick={handleNext} >Confirmar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}