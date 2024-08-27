import logo from '../../assets/logo.png'
import { StyledHamburger, StyledNav, StyledLogo } from './Menu.style'

export const Menu = () => {
    return (
        <StyledNav>
            <StyledLogo src={logo} alt="Logo Porto Seguro" />
            <StyledHamburger>
                <div></div>
                <div></div>
                <div></div>
            </StyledHamburger>
        </StyledNav>
    )
}