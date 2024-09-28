import bannerAtendimento from "/bannerAtendimento.jpg";

import { useNavigate } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { useContext, useState } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import { TextArea } from "../../components/TextArea/TextArea";

export default function DescProblemDiagnosis() {
    const { formData, setFormData } = useContext(FormContext);
    const navigate = useNavigate();
    const [tempDescDiagnostico, setTempDescDiagnostico] = useState("");

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/atendimento/dados-veiculo");
    };

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/atendimento/diagnostico");
    };

    const setDiagnostico = (value: string) => {
        setTempDescDiagnostico(value); 
        setFormData({ ...formData, descProblemaDiagnostico: value });
    };

    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                <h2>Diagnóstico de: </h2>
                <h2>{formData.problemaDiagnotisco}</h2>
                <p>
                    Conte um pouco mais para gente o que está acontecendo com o
                    seu veículo:
                    
                </p>

                <div>
                    <TextArea
                        value={tempDescDiagnostico}
                        onChange={setDiagnostico}
                        rows={6}
                        cols={50}
                        placeholder="Ao andar com carro, ouço um barulho na roda [informar quando ocorre e o que acontece]."
                    />
                </div>

                <FlexRow>
                    <Button
                        bgColor="white"
                        txtColor="var(--primary-color)"
                        onClick={handleBack}
                    >
                        Voltar
                    </Button>
                    <Button onClick={handleNext}>Continuar</Button>
                </FlexRow>
            </FormLayout>
        </Hero>
    );
}
