import React, { useEffect, useState, useContext } from "react";
import Recipe from "../components/Recipe/Recipe";
import Search from "../components/Search/Search";
import { RecipeType } from "../types";
import { RecipiesStyled } from "./style";
import { Pagination } from "@mui/material";
import SearchContext from "../contextAPI";
import CircularProgress from "@mui/material/CircularProgress";

const test: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const HomePage = () => {
    const { recipes, setRecipes, cuisinesSelected, dietsSelected, mealTypesSelected, offset, setOffset } = useContext(SearchContext);

    const getRecipes = async () => {
        if (cuisinesSelected.length >= 1 || dietsSelected.length >= 1 || mealTypesSelected.length >= 1) {
            const api = await fetch(
                `${process.env.REACT_APP_BASE_URL}/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}${cuisinesSelected.length >= 1 ? `&cuisine=${cuisinesSelected.map((e: string) => e.toLowerCase())}` : ``}${
                    dietsSelected.length >= 1 ? `&diet=${dietsSelected.map((e: string) => e.toLowerCase())}` : ``
                }${mealTypesSelected.length >= 1 ? `&type=${mealTypesSelected.map((e: string) => e.toLowerCase())}` : ``}&number=25${offset ? `&offset=${offset}` : ""}`
            );
            const data = await api.json();
            setRecipes(data.recipes);
        } else {
            const api = await fetch(`${process.env.REACT_APP_BASE_URL}/random?apiKey=${process.env.REACT_APP_API_KEY}&number=25${offset ? `&offset=${offset}` : ""}`);
            const data = await api.json();
            setRecipes(data.recipes);
        }
    };

    useEffect(() => {
        getRecipes();
    }, []);

    if (!recipes) {
        return <CircularProgress />;
    }

    return (
        <>
            <Search />
            <RecipiesStyled>
                {recipes.map((rec: RecipeType) => (
                    <Recipe recipe={rec} key={rec.title} />
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
