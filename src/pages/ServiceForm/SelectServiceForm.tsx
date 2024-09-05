import bannerAtendimento from "/bannerAtendimento.jpg"

import { Button } from "../../components/Button/Button";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { Hero } from "../../components/Hero/Hero";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const isSelected = formData.servicosSelecionados.includes(value)
    
        setFormData({
            ...formData,
            servicosSelecionados: isSelected
                ? formData.servicosSelecionados.filter((item) => item !== value)
                : [...formData.servicosSelecionados, value]
        })
    }

    return (
        <Hero img={bannerAtendimento}>
            <FormLayout>
                <h2>Escolha o serviço que deseja realizar (pode escolher mais de um):</h2>
                <Wrapper>
                    <Checkbox 
                        onChange={handleChange} 
                        id="alinhamento-direcao" 
                        value="Alinhamento de Direção"
                        checked={formData.servicosSelecionados.includes("Alinhamento de Direção")}
                    >
                        Alinhamento de Direção
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="bateria" 
                        value="Bateria"
                        checked={formData.servicosSelecionados.includes("Bateria")}
                    >
                        Bateria
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="discos-e-pastilha-de-freio" 
                        value="Discos e pastilha de freio"
                        checked={formData.servicosSelecionados.includes("Discos e pastilha de freio")}
                    >
                        Discos e pastilha de freio
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="injecao-eletronica" 
                        value="Injeção eletrônica"
                        checked={formData.servicosSelecionados.includes("Injeção eletrônica")}
                    >
                        Injeção eletrônica
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="amortecedor-e-molas" 
                        value="Amortecedor e molas"
                        checked={formData.servicosSelecionados.includes("Amortecedor e molas")}
                    >
                        Amortecedor e molas
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="cabos" 
                        value="Cabos"
                        checked={formData.servicosSelecionados.includes("Cabos")}
                    >
                        Cabos
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="embreagem" 
                        value="Embreagem"
                        checked={formData.servicosSelecionados.includes("Embreagem")}
                    >
                        Embreagem
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="paletas-do-limpador" 
                        value="Paletas do limpador"
                        checked={formData.servicosSelecionados.includes("Paletas do limpador")}
                    >
                        Paletas do limpador
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="cambagem-e-caster" 
                        value="Cambagem e Caster"
                        checked={formData.servicosSelecionados.includes("Cambagem e Caster")}
                    >
                        Cambagem e Caster
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="extintor-de-incendio" 
                        value="Extintor de Incêndio"
                        checked={formData.servicosSelecionados.includes("Extintor de Incêndio")}
                    >
                        Extintor de Incêndio
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="suspensao" 
                        value="Suspensão"
                        checked={formData.servicosSelecionados.includes("Suspensão")}
                    >
                        Suspensão
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="correia-do-motor" 
                        value="Correia do motor"
                        checked={formData.servicosSelecionados.includes("Correia do motor")}
                    >
                        Correia do motor
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="filtros" 
                        value="Filtros"
                        checked={formData.servicosSelecionados.includes("Filtros")}
                    >
                        Filtros
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="troca-de-oleo" 
                        value="Troca de óleo"
                        checked={formData.servicosSelecionados.includes("Troca de óleo")}
                    >
                        Troca de óleo
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="balanceamento-de-rodas" 
                        value="Balanceamento de rodas"
                        checked={formData.servicosSelecionados.includes("Balanceamento de rodas")}
                    >
                        Balanceamento de rodas
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="direcao" 
                        value="Direção"
                        checked={formData.servicosSelecionados.includes("Direção")}
                    >
                        Direção
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="troca-de-pneus" 
                        value="Troca de pneus"
                        checked={formData.servicosSelecionados.includes("Troca de pneus")}
                    >
                        Troca de pneus
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="ar-condicionado" 
                        value="Ar-condicionado (conserto e limpeza)"
                        checked={formData.servicosSelecionados.includes("Ar-condicionado (conserto e limpeza)")}
                    >
                        Ar-condicionado (conserto e limpeza)
                    </Checkbox>
                    <Checkbox 
                        onChange={handleChange}  
                        id="arrefecimento" 
                        value="Arrefecimento (veículo esquentando)"
                        checked={formData.servicosSelecionados.includes("Arrefecimento (veículo esquentando)")}
                    >
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