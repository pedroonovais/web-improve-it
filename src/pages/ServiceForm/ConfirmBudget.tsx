import bannerAtendimento from "/bannerAtendimento.jpg"

import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import { UnorderedList } from "../../components/UnorderedList/UnorderedList";

export default function ConfirmBudget() {
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
                <h2>Orçamento sugerido:</h2>
                <p>
                    <strong>Veículo:</strong> {formData.modelo} <br />
                    <strong>Data sugerida:</strong> 11/10/2024 <br />
                    <strong>Endereço:</strong> Av. Diederichsen, 1426 - Vila Guarani (Zona Sul), São Paulo - SP, 04310-001 <br />
                    <strong>Serviços:</strong> <br />
                </p>
                <UnorderedList>
                    {formData.servicosSelecionados.map((servico, index) => {
                        return <li key={index}> - {servico}</li>
                    })}
                </UnorderedList>
                <p>
                    <strong>Valor: R$ 1.150,00</strong>
                </p>
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                    <Button onClick={handleNext} >Aprovar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}