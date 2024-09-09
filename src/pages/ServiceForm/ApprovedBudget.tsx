import bannerAtendimento from "/bannerAtendimento.jpg"

import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { useContext, useEffect } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import { ImageArea } from "../../components/ImageArea/ImageArea";

export default function ConfirmBudget() {
    const { formData } = useContext(FormContext)

    useEffect(() => {
        console.log(formData)
    }, [formData])
    
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
            </FormLayout>
            <FlexRow>
                <Button>Enviar informações via email</Button>
            </FlexRow>
        </Hero>
    )
}