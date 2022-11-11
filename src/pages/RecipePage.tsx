import React, { useState, useEffect } from "react";
import { RecipePageStyled } from "./style";
import { useParams } from "react-router-dom";
import { Recipe } from "../types";
import { FaHeart, FaClock } from "react-icons/fa";
import CircularProgress from "@mui/material/CircularProgress";

const RecipePage = () => {
    const { id } = useParams();

    const [recipe, setRecipe] = useState<Recipe>();

    const getRecipes = async () => {
        const api = await fetch(`${process.env.REACT_APP_BASE_URL}/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        console.log(data);

        setRecipe(data);
    };

    useEffect(() => {
        getRecipes();
    }, []);

    const metricUnits: Array<string> = ["ml", "l", "mg", "g", "kg", "tsp", "Tsp", "tsps", "Tsps", "tbsp", "Tbsp", "tbsps", "Tbsps"];

    const [selectedUnit, setSelectedUnit] = useState<string>("m");
    const _unitFormater = (amount: number, name: string) => {
        if (amount < 1) {
            let test: boolean = true;
            let initNumber: number = 1;
            const check: number = initNumber / amount;
            return `${initNumber}/${check} ${name}`;

            // for (; test; ) {
            //     const check: number = initNumber / amount;
            //     if (check % 1 < 1) {
            //         initNumber++;
            //         continue;
            //     } else {
            //         return `${initNumber}/${check} ${name}`;
            //     }
            // }
        } else if (amount > 1) {
            const remainder: number = amount % 1;
            const main: number = remainder > 1 ? remainder : amount - remainder;
            const check: number | boolean = remainder < 1 ? false : 1 / remainder;
            return `${main} ${check ? `1/${check}` : ""} ${name}`;
        } else {
            return `${amount} ${name}`;
        }
    };

    if (!recipe) {
        return <CircularProgress />;
    }

    return (
        <RecipePageStyled>
            <img src={recipe?.image} alt="" className="recipe_main_img" />

            <h2 className="recipe_name">{recipe?.title}</h2>
            <div className="recipe_stats">
                <div className="recipe_stats_inner">
                    <span className="recipe_stat">
                        <FaClock />
                        {`${recipe?.readyInMinutes} min`}
                    </span>
                    <span className="recipe_stat">
                        <FaHeart />
                        {`${recipe?.aggregateLikes} likes`}
                    </span>
                    <span className="recipe_stat">
                        {recipe?.servings}
                        {recipe?.servings ? (recipe?.servings > 1 ? " servings" : " serving") : null}
                    </span>
                    <span className="recipe_stat">{recipe ? `$ ${(recipe.pricePerServing / 100).toFixed(2)} per serving` : null}</span>
                </div>
            </div>

            {recipe?.summary && <p className="recipe_description" dangerouslySetInnerHTML={{ __html: recipe?.summary }} />}
            {recipe?.diets && (
                <div className="recipe_diets--list">
                    <i>Diets:</i>{" "}
                    {recipe.diets.map((diet, i) => (
                        <span className="recipe_diet">
                            <i>
                                {diet}
                                {++i === recipe.diets.length ? "" : ","}
                            </i>
                        </span>
                    ))}
                </div>
            )}
            <div className="recipe_details">
                <div className="recipe_detail_ingredients">
                    <h3>ingredients</h3>
                    <div className="unit_system">
                        <button
                            className={selectedUnit === "m" ? "selected_unit" : ""}
                            onClick={() => {
                                setSelectedUnit("m");
                            }}
                        >
                            metric
                        </button>
                        <button
                            className={selectedUnit !== "m" ? "selected_unit" : ""}
                            onClick={() => {
                                setSelectedUnit("i");
                            }}
                        >
                            imperial
                        </button>
                    </div>
                    <ol className="recipe_ingredients">
                        {recipe?.extendedIngredients.map((ingredient) => (
                            <>
                                <li className="recipe_ingredient">
                                    <span className="recipe_ingredient_measurment">{`${
                                        selectedUnit === "m"
                                            ? ingredient.measures.metric.unitShort
                                                ? `${Math.round(ingredient.measures.metric.amount)} ${metricUnits.includes(ingredient.measures.metric.unitShort) ? ingredient.measures.metric.unitShort : ingredient.measures.metric.unitLong}`
                                                : _unitFormater(ingredient.measures.us.amount, ingredient.measures.us.unitShort)
                                            : _unitFormater(ingredient.measures.us.amount, ingredient.measures.us.unitShort)
                                    }`}</span>
                                    <span className="recipe_ingredient_name">{ingredient.nameClean}</span>
                                </li>
                            </>
                        ))}
                    </ol>
                </div>
                <div className="recipe_detail_instructions">
                    <h3>instructions</h3>
                    <ol className="recipe_instructions">
                        {recipe?.analyzedInstructions[0]?.steps.map((instruction) => (
                            <>
                                <li className="recipe_instruction">
                                    <span>{instruction.step}</span>
                                </li>
                            </>
                        ))}
                    </ol>
                </div>
            </div>
        </RecipePageStyled>
    );
};

export default RecipePage;
