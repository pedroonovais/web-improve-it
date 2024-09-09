import bannerAtendimento from "/bannerAtendimento.jpg"

import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import { Input } from "../../components/Input/Input";

export default function Cep () {
    const { formData, setFormData } = useContext(FormContext)
    const navigate = useNavigate()
    const [inputCep, setInputCep] = useState('')
    
    const handleNext = () => {
        navigate('/atendimento/confirmar-cep')
    }

    const handleBack = () => {
        navigate('/atendimento/dados-veiculo')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputCep = event.target.value.replace(/\D/g, '')

        if (inputCep.length > 5) {
            inputCep = inputCep.replace(/^(\d{5})(\d)/, '$1-$2')
        }

        setInputCep(inputCep)

        setFormData({ ...formData, cep: event.target.value})
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
                    id="cep"
                    name="cep"
                    placeholder="Digite seu cep"
                    value={inputCep}
                    maxLength={9}
                    onChange={handleChange}
                ></Input>
            </FormLayout>
            <FlexRow>
                <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                <Button onClick={handleNext} >Confirmar</Button>
            </FlexRow>
        </Hero>
    )
}