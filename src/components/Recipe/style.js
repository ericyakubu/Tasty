import styled from "styled-components";

export const RecipeStyled = styled.div`
    position: relative;
    max-width: 100%;

    #recipe_background {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: orange;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .recipe {
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #f7f7f7;
        height: 100%;
        transition: var(--transition03);

        :hover {
            transform: translate(-5px, -5px);
        }
    }

    .recipe_img {
        width: 100%;
        min-height: 11rem;
        height: 11rem;
        object-fit: cover;
    }

    .recipe_name {
        font-size: 1.3rem;
        text-decoration: none;
        font-weight: 600;
        margin: 0.5rem 0.75rem;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .recipe_description {
        font-size: 1rem;
        padding: 0 0.75rem;
        text-decoration: none;
        font-family: "Roboto", sans-serif;

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;

        b {
            font-weight: 400;
        }
    }

    .recipe_stats {
        margin: 0.75rem 0 0.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        padding: 0 1rem 0.5rem;

        span {
            display: flex;
            align-items: center;

            svg {
                font-size: 0.75rem;
                margin-right: 0.5rem;
            }
        }
    }
`;
