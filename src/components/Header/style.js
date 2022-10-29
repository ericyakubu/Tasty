import styled from "styled-components";

export const HeaderStyled = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    font-family: "Fasthand", cursive;
    font-size: 3rem;
    justify-content: space-around;
    /* padding: 1.5rem 0; */
    line-height: 1;
    background-color: rgba(255, 255, 255, 1);
    height: 10rem;
    max-height: 10vh;

    @media (max-width: 450px) {
        font-size: 2rem;
        padding: 1rem 0;
    }
`;
