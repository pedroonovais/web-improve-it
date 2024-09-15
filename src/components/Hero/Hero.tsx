import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import { Menu } from "../Menu/Menu"
import { StyledHero, StyledHeroContent } from "./Hero.style"

interface HeroProps{
    img: string
    children: React.ReactNode
    btnAtendimento?: boolean
    height?: string
    heightSmDv?: string
}

export const Hero = ({img, children, btnAtendimento, height, heightSmDv}: HeroProps) => {
    return (
        <StyledHero bgImg={img} height={height} heightSmDv={heightSmDv}>
            <Menu />
            <StyledHeroContent>
                {children}
                {btnAtendimento && <Link to="/atendimento"><Button>Iniciar Atendimento</Button></Link>}
            </StyledHeroContent>
        </StyledHero>
    )
}