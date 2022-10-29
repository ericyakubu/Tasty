import styled from "styled-components";

export const RecipiesStyled = styled.div`
    display: grid;
    width: 100vw;
    max-width: 100vw;
    padding: clamp(10px, 2rem, 3.5vw);
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 17.5rem), 1fr));
    grid-gap: 1rem;
    transition: var(--transition03);
    grid-auto-rows: 1fr;
    background: var(--page-background);

    @media (max-width: 640px) {
        grid-auto-rows: auto;
    }
`;

export const RecipePageStyled = styled.div`
    padding: 0 0 5vh 0;
    .recipe_main_img {
        width: 100vw;
        height: 50vh;
        max-height: 30rem;
        object-fit: cover;
    }

    .recipe_name {
        display: flex;
        justify-content: space-around;
        font-size: 2.75rem;
        margin: 1rem 0;
        line-height: normal;
        text-align: center;
    }

    .recipe_stats {
        padding: 0 0 1.5rem;
        margin: 1rem 0 2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px grey dashed;
    }

    .recipe_stats_inner {
        display: flex;
        align-items: center;
        max-width: 100vw;
        flex-wrap: wrap;
        justify-content: center;
    }

    .recipe_stat {
        color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;

        &:not(:last-of-type) {
            margin: 0 1.5rem 0 0;
        }

        svg {
            margin: 0 0.4rem 0 0;
        }
    }

    .recipe_description {
        /* max-width: 50rem; */
        font-size: 1.2rem;
        line-height: 1.25;
        padding: 0 5vw;

        font-weight: 300;

        b {
            font-weight: 600;
        }
        a {
            pointer-events: none;
        }
    }

    .recipe_diets--list {
        padding: 2rem 5vw 1rem;
        display: flex;
        gap: 0.35rem;
        flex-wrap: wrap;
    }

    .recipe_ingredients {
        list-style: inside;
    }
    .recipe_instructions {
        list-style-position: inside;
    }

    .recipe_ingredient,
    .recipe_instruction {
        font-size: 1.1rem;
        font-weight: 300;

        &:not(:last-of-type) {
            margin: 0 0 0.4rem 0;
        }
    }

    .recipe_instruction {
        ::marker {
            font-weight: 400;
        }
    }

    .recipe_ingredient {
        &_measurment {
            text-transform: lowercase;
            width: 2rem;
            max-width: 2rem;
        }
        &_name {
            margin: 0 0 0 0.35rem;
        }
    }

    .recipe_ingredients {
        @media (max-width: 900px) {
            columns: 2;
            padding: 0 5vw;
        }
    }

    .recipe_details {
        display: flex;
        gap: 1rem;
        width: 100%;
        padding: 0 5vw;

        h3 {
            font-weight: 400;
            text-transform: capitalize;
            margin: 1rem 0 0.5rem;
        }

        @media (max-width: 900px) {
            display: block;
        }
    }

    .recipe_detail_ingredients {
        width: 25%;
        min-width: 20rem;
        @media (max-width: 900px) {
            width: 100vw;
        }
    }
    .recipe_detail_instructions {
        width: 75%;
        @media (max-width: 900px) {
            h3 {
                margin: 2rem 0 1rem 0;
            }
        }
    }

    .recipe_detail_ingredients,
    .recipe_detail_instructions {
        h3 {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        @media (max-width: 900px) {
            h3 {
                width: 100%;
            }
            width: 100%;
        }
    }

    .unit_system {
        display: flex;
        justify-content: space-evenly;
        margin: 0 0 1.8rem 0;

        button {
            text-transform: capitalize;
            padding: 0.5rem 0;
            font-size: 1.15rem;
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
            width: 8.5rem;
            max-width: 40%;
            border: none;
            background: none;
            border-bottom: 2px black solid;
            transition: var(--transition03);

            &.selected_unit {
                color: rgba(2, 2, 192, 0.75);
                border-bottom: 2px rgba(2, 2, 192, 0.75) solid;
            }
        }

        @media (max-width: 900px) {
            width: 100%;
        }
    }
`;
