import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --page-background: #e9e9e9;
        --transition03: all 0.3s ease;
        --transition05: all 0.5s ease;
        --transition15: all 1.5s ease;
    }
    *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button:hover {
        cursor: pointer;
    }

    #pagination {
        display: flex;
        justify-content: center;
        padding: 1rem 0 2rem;
        background: var(--page-background);
    }

    body {
        width: 100vw;
        overflow-x: hidden;
        font-family: 'Montserrat', sans-serif;
        

        &::-webkit-scrollbar {
                width: 0.5rem;
                background-color: rgba(0, 0, 0, 0.25);
                border-radius: 0.25rem;
            }
            &::-webkit-scrollbar-thumb {
                background-color: rgba(0, 0, 0, 0.25);
                border-radius: 0.25rem;
                box-shadow: 0 0 10px 3px #1c33b6;
            }
    }
    
    a {
        text-decoration: none;
        color: black;
    }
`;
