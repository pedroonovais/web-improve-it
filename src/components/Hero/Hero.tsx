import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import { Menu } from "../Menu/Menu"
import { StyledHero, StyledTitleHero } from "./Hero.style"

interface HeroProps{
    img: string
    children: React.ReactNode
    btnAtendimento?: boolean
    height?: string
}

export const Hero = ({img, children, btnAtendimento, height}: HeroProps) => {
    return (
        <StyledHero bgImg={img} height={height}>
            <Menu />
            <StyledTitleHero>
                <h2>{children}</h2>
                {btnAtendimento && <Link to="/atendimento"><Button>Iniciar Atendimento</Button></Link>}
            </StyledTitleHero>
        </StyledHero>
    )
}