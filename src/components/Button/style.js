import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E4105D;
    max-width: 92%;
    height: 5vh;
    border-radius: 40px;
    letter-spacing: 1px;
    font-size: 17px;
    outline: 0.1rem solid #E4105D;
    outline-offset: 0.4rem;
    margin: 40px 0;
    cursor: pointer;

    &:hover {
        filter: brightness(11);
        color: #000;
        font-weight: 600;
    }
`