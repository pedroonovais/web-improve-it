import styled from "styled-components";

export const StyledFormLayout = styled.form`
    & div{
        margin: 0.7rem 0;
    }
    
    & label{
        cursor: pointer;
        margin-bottom: 8px;
        font-size: 1.1rem;
    }

    & input[type="radio"]{
        width: 1.1rem;
        height: 1.1rem;
        cursor: pointer;
        margin: 0 0.1rem;
    }
`;