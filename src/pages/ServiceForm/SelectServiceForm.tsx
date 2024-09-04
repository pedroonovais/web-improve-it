import bannerAtendimento from "/bannerAtendimento.jpg"

import { Button } from "../../components/Button/Button";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { Hero } from "../../components/Hero/Hero";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Wrapper } from "../../components/Wrapper/Wrapper";

export default function SelectServiceForm() {
    const { formData, setFormData } = useContext(FormContext)
    const navigate = useNavigate()

    const handleNext = () => {
        if(formData.tipoServico === "manutencao" || "manutencao-revisao"){
            navigate('/atendimento/selecionar-servicos')
        }
    }

    const handleBack = () => {
        navigate('/atendimento/tipo-servico')
    }

    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <Hero img={bannerAtendimento}>
            <FormLayout>
                <h2>Escolha o serviço que deseja realizar (pode escolher mais de um):</h2>
                <Wrapper>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="alinhamento-direcao" 
                        value="Alinhamento de Direção">
                        Alinhamento de Direção
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Bateria">
                        Bateria
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Discos e pastilha de freio">
                        Discos e pastilha de freio
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Injeção eletrônica">
                        Injeção eletrônica
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Amortecedor e molas">
                        Amortecedor e molas
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Cabos">
                        Cabos
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Embreagem">
                        Embreagem
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Paletas do limpador">
                        Paletas do limpador
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Cambagem e Caster">
                        Cambagem e Caster
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Extintor de Incêndio">
                        Extintor de Incêndio
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Suspensão">
                        Suspensão
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Correia do motor">
                        Correia do motor
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Filtros">
                        Filtros
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Troca de óleo">
                        Troca de óleo
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Balanceamento de rodas">
                        Balanceamento de rodas
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Direção">
                        Direção
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Troca de pneus">
                        Troca de pneus
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Ar-condicionado (conserto e limpeza)">
                        Ar-condicionado (conserto e limpeza)
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange} 
                        isChecked={isChecked} 
                        name="" 
                        id="" 
                        value="Arrefecimento (veículo esquentando)">
                        Arrefecimento (veículo esquentando)
                    </Checkbox>
                </Wrapper>
            </FormLayout>
            <FlexRow>
                <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                <Button onClick={handleNext} >Continuar</Button>
            </FlexRow>
        </Hero>
    )
}