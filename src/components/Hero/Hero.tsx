import { Menu } from "../Menu/Menu"
import { StyledBtnIniciarAtendimento, StyledHero, StyledTitleHero } from "./Hero.style"

interface HeroProps{
    img: string
    children: React.ReactNode
    btnAtendimento?: boolean
}

export const Hero = ({img, children, btnAtendimento}: HeroProps) => {
    return (
        <StyledHero bgImg={img}>
            <Menu />
            <StyledTitleHero>
                <h1>{children}</h1>
                {btnAtendimento && <StyledBtnIniciarAtendimento>Iniciar Atendimento</StyledBtnIniciarAtendimento>}
            </StyledTitleHero>
        </StyledHero>
    )
}