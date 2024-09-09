import styled from "styled-components"

export const StyledCard = styled.div`
    border-radius: 10px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    max-width: 768px;    
    
    & *{
        margin: 0 auto;
    }

    & img{
        width: 80%;
        border-radius: 10px;
        margin-top: 1rem;
    }

    & p, h3, a{
        margin-top: 0.5rem;
    }

`;