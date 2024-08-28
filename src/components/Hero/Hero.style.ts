import styled from "styled-components";

export const StyledHero = styled.header<{bgImg : string}>`
    display: flex;
    flex-direction: column;
    color: white;
    background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${props => props.bgImg}) no-repeat center;
    height: 95vh;
`;

export const StyledTitleHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0 1rem;
    line-height: 2.1rem;

    & button{
        width: 100%
    }
`;
