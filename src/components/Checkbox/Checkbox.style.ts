import styled from "styled-components";

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    opacity: 0;
    pointer-events: none;
`

export const StyledLabel = styled.label`
    display: inline-block;
    cursor: pointer;
    width: 16rem;
    height: 3rem;
    padding: 5px 10px;
    border: 1px solid #ccc;
    margin: 0;
`