import bannerAtendimento from "/bannerAtendimento.jpg"

import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { ImageArea } from "../../components/ImageArea/ImageArea";

export default function ConfirmBudget() {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }
    
    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                <h2>Orçamento finalizado!</h2>
                <p>CAP Indicada: Centro Automotivo Porto Seguro Conceição</p>
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