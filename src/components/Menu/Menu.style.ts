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

    & div {
        background-color: white;
        height: 0.3rem;
        width: 2.5rem;
        border-radius: 25px;
    }
`;