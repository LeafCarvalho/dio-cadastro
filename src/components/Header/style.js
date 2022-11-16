import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    background-color: #151515;
    padding: 1rem 2.5rem;
    color: #fff;
    font-size: 19px;
    font-weight: 500;

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }

    img {
        height: 1.8rem;
    }

    a {
        text-decoration: none;
        color: #fff;
        padding-right: 0.4rem;
        &:hover:first-child {
            color: #E4105D;
        }
    }

    .itemMenu {
        padding: 0.1rem 1.5rem;
        margin: 0.31rem 0.3rem;
        background-color: rgb(86, 86, 86);
        border-radius: 2rem;
        transition: background-color 0.2s ease-out 0s;

        &:hover {
            background-color: #E4105D;
        }
    }
`