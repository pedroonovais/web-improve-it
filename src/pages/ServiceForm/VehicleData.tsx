import bannerAtendimento from "/bannerAtendimento.jpg"

import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import { Input } from "../../components/Input/Input";

export default function VehicleData () {
    const { formData, setFormData } = useContext(FormContext)
    const navigate = useNavigate()
    
    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navigate('/atendimento/cep')
    }

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navigate('/atendimento/confirmar-cliente-porto')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch(event.target.id){
            case "marca":
                setFormData({ ...formData, marcaVeiculo: event.target.value})
                break
            case "ano-fabricacao":
                setFormData({ ...formData, anoFabricacao: Number(event.target.value)})
                break
            case "ano-modelo":
                setFormData({ ...formData, anoModelo: Number(event.target.value)})
                break
            case "modelo":
                setFormData({ ...formData, modelo: event.target.value})
                break
        }
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])
    
    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                <h2>Por favor, informe os dados abaixo para identificação do seu veículo:</h2>
                <Input 
                    type="text"
                    id="marca"
                    name="marca"
                    onChange={handleChange}
                    placeholder="Marca"
                ></Input>
                <Input 
                    type="number"
                    id="ano-fabricacao"
                    name="ano-fabricacao"
                    onChange={handleChange}
                    placeholder="Ano de Fabricação"
                ></Input>
                <Input 
                    type="number"
                    id="ano-modelo"
                    name="ano-modelo"
                    onChange={handleChange}
                    placeholder="Ano do modelo"
                ></Input>
                <Input 
                    type="text"
                    id="modelo"
                    name="modelo"
                    onChange={handleChange}
                    placeholder="Modelo"
                ></Input>
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                    <Button onClick={handleNext} >Continuar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}