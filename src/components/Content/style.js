import styled from "styled-components";

export const ContentContainer = styled.section`
    color: #fff;
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    margin: 80px 50px;

    .Phrase {
        display: flex;
        padding-left: 50px;
        padding-right: 250px;
        width: 100%;
        font-size: 22px;
    }

    .userInteractive {
        max-width: 100%;
        height: 100%;

        h1 {
            font-size: 32px;
        }
        
        p {
            max-width: 100%;
            font-size: 17px;
        }

        span {
            color: #23DD7A;
            cursor: pointer;
        }
    }
`