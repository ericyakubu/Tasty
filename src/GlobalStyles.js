import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --page-background: #212121;
        --secondary: #3d3d3d;
        --transition03: all 0.3s ease;
        --transition05: all 0.5s ease;
        --transition15: all 1.5s ease;
    }

    .search-active {
        height: 120px;
        opacity: 1;
        transition: var(--transition05);
    }

    @media (max-width: 650px) {
        .search-active {
            height: calc(100vh - min(10rem, 10vh));
        }
    }

    .search-inactive{
        height: 0;
        transition: var(--transition05);
        opacity: 0;
        pointer-events: none;
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
    }

    body {
        width: 100vw;
        overflow-x: hidden;
        font-family: 'Montserrat', sans-serif;
        background: var(--page-background);
        color: rgb(235, 235, 235);

        @media (max-width: 650px) {
            &.noscroll {
                overflow-y: hidden;
            }
        }
        

        &::-webkit-scrollbar {
                width: 0.5rem;
                background-color: rgba(134, 134, 134, 1);
                border-radius: 0.25rem;
        }
        &::-webkit-scrollbar-thumb {
                background-color: #303030;
                border-radius: 0.25rem;
                box-shadow: 0 0 10px 3px #03105a;
        }
    
    }
    
    a {
        text-decoration: none;
        /* color: black; */
    }

    input {
        color: white;
    }
`;
