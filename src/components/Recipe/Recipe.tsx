import React from "react";
import { RecipeStyled } from "./style";
import { Link } from "react-router-dom";
import { RecipeType02 } from "../../types";
import { FaHeart, FaClock } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";

const Recipe: React.FC<RecipeType02> = ({ recipe }) => {
    return (
        <RecipeStyled>
            <div className="recipe">
                <Link to={`/recipe/${recipe.id}`}>
                    <img className="recipe_img" src={recipe.image} alt={recipe.title} />
                </Link>
                <h2 className="recipe_name">{recipe.title}</h2>
                <div>
                    <p className="recipe_description" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                    <div className="recipe_stats">
                        <span>
                            <FaClock />
                            {recipe.readyInMinutes}min
                        </span>
                        <span>
                            <FaHeart />
                            {recipe.aggregateLikes}
                        </span>

                        <span>
                            <GiKnifeFork />
                            {recipe.servings}
                            {recipe.servings > 1 ? " servings" : " serving"}
                        </span>
                    </div>
                </div>
            </div>
            <div id="recipe_background" />
        </RecipeStyled>
    );
};

export default Recipe;
