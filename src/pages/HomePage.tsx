import React, { useState } from "react";
import Recipe from "../components/Recipe/Recipe";
import Search from "../components/Search/Search";
import { RecipeType } from "../types";
import { RecipiesStyled } from "./style";
import { Pagination } from "@mui/material";

const test: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let recipes: Array<RecipeType>;

const HomePage = () => {
    const [offset, setOffset] = useState<number>(0);
    const getRecipes = async () => {
        const check = localStorage.getItem("recipes");

        if (check) {
            recipes = JSON.parse(check);
        } else {
            const api = await fetch(`${process.env.REACT_APP_BASE_URL}/random?apiKey=${process.env.REACT_APP_API_KEY}&number=25${offset ? `&offset=${offset}` : ""}`);
            const data = await api.json();

            localStorage.setItem("recipes", JSON.stringify(data.recipes));
            recipes = data.recipes;
        }
    };

    getRecipes();

    return (
        <>
            {/* <Search /> */}
            <RecipiesStyled>
                {recipes.map((rec: RecipeType) => (
                    <>
                        <Recipe recipe={rec} />
                    </>
                ))}
            </RecipiesStyled>
            <div id="pagination">
                <Pagination
                    count={25}
                    shape="rounded"
                    onChange={(e: React.ChangeEvent<unknown>, value: number) => {
                        const neededoffset: number = (value - 1) * 25;
                        setOffset(neededoffset);
                    }}
                />
            </div>
        </>
    );
};

export default HomePage;
