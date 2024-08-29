import styled from "styled-components";

export const StyledHero = styled.header<{bgImg : string; height?: string}>`
    display: flex;
    flex-direction: column;
    color: white;
    background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${props => props.bgImg}) no-repeat center;
    background-size: cover;
    height: ${({ height }) => height || '95vh'};

    & h1, h2, h3, h4, h5, h6{
        line-height: 2.1rem;
    }

    & button{
        width: 100%
    }
`;

export const StyledHeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0 1rem;
`;