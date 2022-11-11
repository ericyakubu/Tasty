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
    background-color: var(--secondary);
    height: 10rem;
    max-height: 10vh;
    box-shadow: 0px 0px 5px 5px var(--secondary);

    position: relative;

    a {
        color: white;
    }

    button {
        position: absolute;
        right: clamp(20px, 10%, 10rem);
        border: none;
        background: none;
        font-size: 1.25rem;

        svg {
            color: white;
        }
    }

    @media (max-width: 450px) {
        font-size: 2rem;
        padding: 1rem 0;
    }
`;
