import { Button } from "../Button/Button"
import { Menu } from "../Menu/Menu"
import { StyledHero, StyledTitleHero } from "./Hero.style"

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
                <h2>{children}</h2>
                {btnAtendimento && <Button>Iniciar Atendimento</Button>}
            </StyledTitleHero>
        </StyledHero>
    )
}