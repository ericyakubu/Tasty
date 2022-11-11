import styled from "styled-components";

export const SearchStyled = styled.div`
    /* background: var(--page-background); */
    padding: 0 clamp(10px, 2rem, 3.5vw) 1.5rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    background: #a3a3a3;
    height: fit-content;
    box-shadow: 0px 0px 10px 10px #a3a3a3;

    #nameSearch {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    #searchBtn {
        display: flex;
        align-items: center;
        font-size: 24px;
        margin: 0;
        padding: 0;
        line-height: 1;

        svg {
            margin-left: 1rem;
        }
    }

    #searchcontainer {
        width: 100%;
    }

    #btnContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25%;
        transform: translateY(10px);
    }

    #filterSearch {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }

    .formcontrol {
        width: 100%;
        color: "#ebebeb";
        svg {
            color: "#ebebeb";
        }
    }

    @media (max-width: 650px) {
        flex-direction: column;

        #searchcontainer {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding-top: 3rem;
        }

        #nameSearch {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
        }

        #btnContainer {
            margin: 1rem 0 0 0;
            /* width: 100%; */
            width: 300px;
            max-width: 100%;
            align-self: center;
            transform: none;
        }

        #searchBtn {
            background: #91caf9;
            width: 100%;
            padding: 0.75rem 0;
            margin-bottom: 3rem;
            font-size: 20px;
            border: 1px solid #1a76d2;
            svg {
                margin-left: 10px;
            }
        }

        #filterSearch {
            height: 50%;
            flex-direction: column;
        }
    }
`;
