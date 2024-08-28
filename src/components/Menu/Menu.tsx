import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { StyledHamburger, StyledNav, StyledLogo, StyledNavegation } from './Menu.style'
import { useState } from 'react'

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <StyledNav>
            <Link to="/">
                <StyledLogo src={logo} alt="Logo Porto Seguro" />
            </Link>
            
            <StyledHamburger onClick={toggleMenu}>
                &#9776;
            </StyledHamburger>
            <StyledNavegation isOpen={isOpen}>
                <Link to="/integrantes"><li>Integrantes</li></Link>
                <Link to="/atendimento"><li>Iniciar Atendimento</li></Link>
            </StyledNavegation>
        </StyledNav>
    )
}