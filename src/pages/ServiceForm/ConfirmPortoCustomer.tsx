import bannerAtendimento from "/bannerAtendimento.jpg"

import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";

export default function ConfirmPortoCustomer () {
    const { formData, setFormData } = useContext(FormContext)
    const navigate = useNavigate()
    
    const handleNext = () => {
        navigate('/atendimento/dados-veiculo')
    }

    const handleBack = () => {
        navigate('/atendimento/confirmar-servicos')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value === "true" ? true : false
        setFormData({ ...formData, seguradoPorto: value})
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])
    
    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                <h2>O veículo que você deseja realizar o serviço já é segurado da Porto Seguro?</h2>
                <div>
                    <input type="radio" name="cliente-porto" id="yes" value="true" onChange={handleChange}/>
                    <label htmlFor="yes">Sim</label>
                </div>
                <div>
                    <input type="radio" name="cliente-porto" id="no" value="false" onChange={handleChange}/>
                    <label htmlFor="no">Não</label>
                </div>
            </FormLayout>
            <FlexRow>
                <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                <Button onClick={handleNext} >Confirmar</Button>
            </FlexRow>
        </Hero>
    )
}