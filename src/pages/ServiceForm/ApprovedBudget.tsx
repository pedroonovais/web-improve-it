import bannerAtendimento from "/bannerAtendimento.jpg"

import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { ImageArea } from "../../components/ImageArea/ImageArea";
import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";

export default function ConfirmBudget() {
    const { formData } = useContext(FormContext)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }
    
    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                <h2>{formData.tipoServico === "diagnostico" 
                    ? "Recomendamos uma visita a CAP para averiguarmos melhor o seu ploblema!" 
                    : "Parabéns, orçamento finalizado!"}
                </h2>
                <p>
                    <strong>CAP Indicada:</strong> Centro Automotivo Porto Seguro Conceição
                </p>
                <p>
                    <strong>Endereço: </strong> Av. Diederichsen, 1426 - Vila Guarani (Zona Sul), São Paulo - SP, 04310-001
                </p>
                <ImageArea>
                    <img src="/Cap Conceição.jpg" alt="Cap Conceição" />
                </ImageArea>
                <p>
                    <strong>Telefone: </strong> (11) 2774-1507
                </p>
                <FlexRow>
                    <Button onClick={handleClick}>Salvar via email</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}