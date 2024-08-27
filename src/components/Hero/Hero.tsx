import { Menu } from "../Menu/Menu"
import { StyledHero } from "./Hero.style"

interface HeroProps{
    img: string
}

export const Hero = ({img}: HeroProps) => {
    return (
        <StyledHero bgImg={img}>
            <Menu />
        </StyledHero>
    )
}