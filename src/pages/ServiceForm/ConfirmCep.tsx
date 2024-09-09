import bannerAtendimento from "/bannerAtendimento.jpg"

import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import axios from "axios";

interface ViaCepProps{
    logradouro: string
    bairro?: string
    localidade: string
    uf: string
    cep: string
}

export default function ConfirmCep () {
    const { formData, setFormData } = useContext(FormContext)
    const navigate = useNavigate()
    const [logradouro, setLogradouro] = useState<ViaCepProps | null>(null)
    
    const handleNext = () => {
        const logradouroValue = logradouro?.logradouro || ''
        setFormData({ ...formData, logradouro: logradouroValue})
        navigate('/atendimento/confirmar-cep')
    }

    const handleBack = () => {
        navigate('/atendimento/cep')
    }

    useEffect(() => {
        if (formData.cep){
            const cep = formData.cep.replace(/\D/g, '')

            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response =>{
                    if (!response.data.erro){
                        setLogradouro(response.data)
                    }
                })
        }
    }, [formData.cep])
    
    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                <h2>Confirme o cep informado:</h2>
                <p>CEP: {formData.cep}</p>
                {logradouro ? (
                    <p>{logradouro.logradouro}</p>
                ) : (
                    <p></p>
                )}
            </FormLayout>
            <FlexRow>
                <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                <Button onClick={handleNext} >Confirmar</Button>
            </FlexRow>
        </Hero>
    )
}