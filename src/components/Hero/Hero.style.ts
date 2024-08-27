import styled from "styled-components";

export const StyledHero = styled.header<{bgImg : string}>`
    display: flex;
    flex-direction: column;
    color: white;
    background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${props => props.bgImg}) no-repeat center bottom;
    height: 95vh;
`;