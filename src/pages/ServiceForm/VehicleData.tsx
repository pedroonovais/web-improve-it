import bannerAtendimento from "/bannerAtendimento.jpg";

import { Hero } from "../../components/Hero/Hero";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { FlexRow } from "../../components/FlexRow/FlexRow";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import { Select } from "../../components/Select/Select";

export default function VehicleData() {
    const { formData, setFormData } = useContext(FormContext);
    const navigate = useNavigate();

    // Controle do formulario
    const [selecionouCampoMarca, setSelecionouCampoMarca] = useState(false);
    const [selecionouCampoModelo, setSelecionouCampoModelo] = useState(false);

    // Lista de modelos veiculos
    const [listModelosVeiculo, setListModelosVeiculo] = useState<string[]>([]);

    // Lista de anos 
    const [listaAnosVeiculo, setListaAnosVeiculo] = useState<string[]>([])

    // Codigo da marca
    const [codMarca, setCodMarca] = useState<number>();

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/atendimento/cep");
    };

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/atendimento/confirmar-cliente-porto");
    };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        switch (event.target.id) {
            case "marca":
                setListModelosVeiculo([]);
                setListaAnosVeiculo([]);
                setSelecionouCampoModelo(false);

                const modeloSelect = document.getElementById("modelo") as HTMLSelectElement;
                const anoModelo = document.getElementById("ano-modelo") as HTMLSelectElement;
                if (modeloSelect && anoModelo) {
                    modeloSelect.selectedIndex = 0;
                    anoModelo.selectedIndex = 0;
                }

                setFormData({ ...formData, marcaVeiculo: event.target.value });

                // Pegando os modelos da marca
                getModelosVeiculoFipe(event.target.value);

                // Validando o preenchimento do primeiro campo
                setSelecionouCampoMarca(true);
                break;
            case "ano-fabricacao":
                setFormData({
                    ...formData,
                    anoFabricacao: Number(event.target.value),
                });
                break;
            case "ano-modelo":
                setFormData({
                    ...formData,
                    anoModelo: Number(event.target.value),
                });
                break;
            case "modelo":
                const value = event.target.value;
                const codModelo = parseInt(value.split("?")[0].trim());
                const nomeModelo = value.split("?")[1].trim();                            

                setFormData({ ...formData, modelo: nomeModelo });

                // Pegando as opções de ano do modelo
                getAnoModelo(codMarca, codModelo);

                // Validando o preenchimento do campo
                setSelecionouCampoModelo(true);
                break;
        }
    };

    const getModelosVeiculoFipe = async (marca: string) => {
        const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
        let codigoMarca = null;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();

                for (let i = 0; i < data.length; i++) {
                    const codigo = data[i].codigo || "N/A";
                    const nomeMarca = data[i].nome || "N/A";
                    
                    if (nomeMarca === marca) {                                            
                        codigoMarca = parseInt(codigo);
                        setCodMarca(parseInt(codigo));
                        break
                    }
                }

                // Verificando se conseguiu o codigo, se sim pegar os modelos da marca
                if (codigoMarca) {
                    const url2 = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigoMarca}/modelos`;
                    
                    const response2 = await fetch(url2);
                    if (response2.ok) {
                        const data2 = await response2.json();

                        const modelos = await data2.modelos.map(
                            (modelo: { codigo: number; nome: string }) =>
                                `${modelo.codigo} ? ${modelo.nome}`
                        );
                        setListModelosVeiculo(modelos);                       
                    }
                }
            }
            return false;
        } catch (error) {
            console.error("Erro ao buscar o código da marca: ", error);
            return false;
        }
    };

    const getAnoModelo = async (codMarca: any, codModelo: number) => {
        const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${codMarca}/modelos/${codModelo}/anos`;        

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();

                setListaAnosVeiculo(data.map((ano: { codigo: string; nome: string}) => ano.nome))
            }
        } catch (error) {
            console.error("Erro ao buscar o código da marca: ", error);
            return false;
        }
    };

    // useEffect(() => {
    //     console.log(formData);
    // }, [formData]);

    return (
        <Hero img={bannerAtendimento} height="100vh">
            <FormLayout>
                <h2>
                    Por favor, informe os dados abaixo para identificação do seu
                    veículo:
                </h2>
                <Select name="marca" id="marca" onChange={handleChange}>
                    <option value="" disabled selected>
                        Marca
                    </option>
                    <option value="GM - Chevrolet">GM - Chevrolet</option>
                    <option value="Ford">Ford</option>
                    <option value="Fiat">Fiat</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Citroën">Citroën</option>
                    <option value="Honda">Honda</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Renault">Renault</option>
                    <option value="Toyota">Toyota</option>
                </Select>
                <Select
                    name="modelo"
                    id="modelo"
                    onChange={handleChange}
                    disabled={!selecionouCampoMarca}
                >
                    <option value="" disabled selected>
                        Modelo
                    </option>
                    {listModelosVeiculo.map((item) => (
                        <option key={item} value={item}>
                            {item.split("?")[1].trim()}
                        </option>
                    ))}
                </Select>
                <Select
                    name="ano-modelo"
                    id="ano-modelo"
                    onChange={handleChange}
                    disabled={!selecionouCampoModelo}
                >
                    <option value="" disabled selected>
                        Ano
                    </option>
                    {listaAnosVeiculo.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </Select>

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
