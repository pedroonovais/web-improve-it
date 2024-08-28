import { StyledFooter, StyledGroupLinks } from "./Footer.style"

import footerLogo from "../../assets/logoImproveIt.png";

export const Footer = () => {
    return (
    <StyledFooter>
        <StyledGroupLinks>
            <p><strong>Links Rápidos:</strong></p>
            <ul>
                <li><a href="">Perguntas Frequentes</a></li>
                <li><a href="">SAC e Telefones</a></li>
                <li><a href="">Whatsapp</a></li>
                <li><a href="">Chat Online</a></li>
            </ul>
        </StyledGroupLinks>
        <StyledGroupLinks>
            <p><strong>Sobre a improve it</strong></p>
            <ul>
                <li><a href="integrantes.html">Integrantes</a></li>
            </ul>
        </StyledGroupLinks>
        <StyledGroupLinks>
            <img src={footerLogo} alt="Logo Improve It" />
        </StyledGroupLinks>
        <StyledGroupLinks>
            <span>© Copyright 2024 - Todos os direitos reservados</span>
        </StyledGroupLinks>
    </StyledFooter>
    )
}