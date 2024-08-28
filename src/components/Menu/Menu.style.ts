import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const StyledLogo = styled.img`
    height: 5rem;
    margin: 0.5rem;
`;

export const StyledHamburger = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    gap: 0.5rem;
    font-size: 2.8rem;
`;

export const StyledNavegation = styled.ul<{ isOpen: boolean }>`
    position: absolute;
    display: flex;
    width: 100%;
    flex-direction: column;
    list-style: none;
    color: var(--primary-color);
    top: 6rem;
    transition: 250ms;
    left: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    
    & li{
        text-align: center;
        padding: 0.5rem;
        background-color: white;
        border: 1px solid var(--primary-color);
    }
`;