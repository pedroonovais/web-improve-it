import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { StyledHamburger, StyledNav, StyledLogo } from './Menu.style'

export const Menu = () => {
    return (
        <StyledNav>
            <Link to="/">
                <StyledLogo src={logo} alt="Logo Porto Seguro" />
            </Link>
            <StyledHamburger>
                <div></div>
                <div></div>
                <div></div>
            </StyledHamburger>
        </StyledNav>
    )
}