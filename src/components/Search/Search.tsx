import React, { useState } from "react";
import { SearchStyled } from "./style";
import { FaSearch } from "react-icons/fa";

const Search = () => {
    const test = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
    };

    return (
        <SearchStyled>
            <div id="search_selections">
                <select onChange={test} name="diets" id="" className="search_selection">
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                </select>
                <select name="intolerances" id="" className="search_selection">
                    <option value="">option</option>
                </select>
                <select name="equipment" id="" className="search_selection">
                    <option value="">option</option>
                </select>
                <select name="include_ingredients" id="" className="search_selection">
                    <option value="">option</option>
                </select>
                <select name="exclude_ingredients" id="" className="search_selection">
                    <option value="">option</option>
                </select>
                <select name="meal_type" id="" className="search_selection">
                    <option value="">option</option>
                </select>
                <select name="sort" id="" className="search_selection">
                    <option value="">option</option>
                </select>
            </div>
            <div id="search_bar">
                <input id="search_input" type="text" placeholder="What are you craving for?" />
                <button id="search_submit" type="submit">
                    <FaSearch />
                </button>
            </div>
        </SearchStyled>
    );
};

export default Search;
