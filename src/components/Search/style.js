import styled from "styled-components";

export const SearchStyled = styled.div`
    width: 100vw;
    padding: 1rem;
    display: flex;
    align-items: center;
    background: var(--page-background);
    /* justify-content: center; */

    #search_ {
        &selections {
            display: flex;

            select {
                margin: 0 1rem 0 0;
            }
        }
        &bar {
            padding: 0.2rem;
            background-color: orange;
            border-radius: 1.1rem;
            transition: var(--transition05);
            min-width: 2.2rem;

            :hover {
                #search_input {
                    width: 15rem;
                    padding: 0 2.5rem 0 1rem;
                }
            }
        }

        &input {
            height: 2rem;
            padding: 0 2rem 0 0;
            border-radius: 1rem;
            outline: none;
            border: none;
            width: 0;
            transition: var(--transition05);
        }

        &submit {
            position: absolute;
            height: 2rem;
            width: 2rem;
            font-size: 1.25rem;
            color: black;
            background: white;
            border-radius: 50%;
            outline: none;
            border: none;
            transition: var(--transition05);
            transform: translateX(-100%);
        }
    }
`;
