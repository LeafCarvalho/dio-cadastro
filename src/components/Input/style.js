import styled from "styled-components";

export const InputContainer = styled.div`


    input {
    background-color: #1E192C;
    color: #fff;
    width: 92%;
    height: 1.3rem;
    margin: 7px;
    padding: 2px 0;
    border: 0;
    border-bottom: 2px solid #C8C8C8;
    outline: 0;
    font-size: 16px;
    transition: 0.5s ease-in-out;

    ::placeholder {
        color: #fff;
    }

    &:focus {
        border-bottom: 2px solid #3B3450;
    }
    }
`