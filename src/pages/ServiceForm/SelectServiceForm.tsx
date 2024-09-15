import bannerAtendimento from "/bannerAtendimento.jpg"

import { Button } from "../../components/Button/Button";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { Hero } from "../../components/Hero/Hero";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { WrapperCheckbox } from "../../components/WrapperCheckbox/WrapperCheckbox";

export default function SelectServiceForm() {
    const { formData, setFormData } = useContext(FormContext)
    const navigate = useNavigate()
    const listaServicosManutencao = ['Alinhamento de Direção', 'Bateria', 'Discos e pastilha de freio', 
        'Injeção eletrônica', 'Amortecedor e molas', 'Cabos', 'Embreagem', 'Paletas do limpador', 'Cambagem e Caster',
         'Extintor de Incêndio', 'Suspensão', 'Correia do motor', 'Filtros', 'Troca de óleo', 'Balanceamento de rodas',
          'Direção', 'Troca de pneus', 'Ar-condicionado (conserto e limpeza)', 'Arrefecimento (veículo esquentando)']

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navigate('/atendimento/confirmar-servicos')
    }

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
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

    useEffect(() => {console.log(formData)}, [formData])

    return (
        <Hero img={bannerAtendimento} height="100vh" heightSmDv="auto">
            <FormLayout>
                <h2>Escolha o serviço que deseja realizar (pode escolher mais de um):</h2>
                <WrapperCheckbox>
                    {listaServicosManutencao.map((item, index) => (
                        <Checkbox 
                            key={index}
                            onChange={handleChange} 
                            id={item} 
                            value={item}
                            checked={formData.servicosSelecionados.includes(item)}
                        >
                            {item}
                        </Checkbox>
                    ))}
                </WrapperCheckbox>
                <FlexRow>
                    <Button bgColor="white" txtColor="var(--primary-color)" onClick={handleBack} >Voltar</Button>
                    <Button onClick={handleNext} >Continuar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    )
}