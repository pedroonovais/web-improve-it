import { Layout } from "../../components/Layout/Layout";
import bannerImage from "/bannerHome.png"

export default function Home(){
    const textHero = "Bem-vindo ao CAP – Centro de Assistência Porto Seguro 😊. Queremos te oferecer a melhor opção em qualidade e custo para a manutenção de seu veículo.🚗"
    
    return(
        <Layout bannerImage={bannerImage} textHero={textHero} btnAtendimento={true}>
            
        </Layout>
    )
}