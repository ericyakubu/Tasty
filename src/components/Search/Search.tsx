import React, { useState, useContext } from "react";
import { SearchStyled } from "./style";
import { FaSearch } from "react-icons/fa";
import SearchContext from "../../contextAPI";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormControl, MenuItem, InputLabel, OutlinedInput, Checkbox, ListItemText, Button, TextField, makeStyles } from "@mui/material";

const Search = () => {
    const { cuisines, cuisinesSelected, setCuisinesSelected, diets, dietsSelected, setDietsSelected, mealTypes, mealTypesSelected, setMealTypesSelected, setRecipes, search } = useContext(SearchContext);
    const getRecipes = async () => {
        if (cuisinesSelected.length >= 1 || dietsSelected.length >= 1 || mealTypesSelected.length >= 1) {
            const api = await fetch(
                `${process.env.REACT_APP_BASE_URL}/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}${cuisinesSelected.length >= 1 ? `&cuisine=${cuisinesSelected.map((e: string) => e.toLowerCase())}` : ``}${
                    dietsSelected.length >= 1 ? `&diet=${dietsSelected.map((e: string) => e.toLowerCase())}` : ``
                }${mealTypesSelected.length >= 1 ? `&type=${mealTypesSelected.map((e: string) => e.toLowerCase())}` : ``}&number=25`
            );
            const data = await api.json();
            setRecipes(data.results);
        }
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const _handleMealType = (e: SelectChangeEvent<typeof dietsSelected>, type: string) => {
        const {
            target: { value },
        } = e;

        switch (type) {
            case "Cuisines":
                setCuisinesSelected(typeof value === "string" ? value.split(",") : value);
                break;
            case "Diets":
                setDietsSelected(typeof value === "string" ? value.split(",") : value);
                break;
            case "Meal Types":
                setMealTypesSelected(typeof value === "string" ? value.split(",") : value);
                break;

            default:
                break;
        }
    };

    const selectionValue: Array<string[]> = [cuisinesSelected, dietsSelected, mealTypesSelected];
    const selectionName: string[] = ["Cuisines", "Diets", "Meal Types"];
    const selections: Array<string[]> = [cuisines, diets, mealTypes];

    return (
        <>
            <SearchStyled className={search ? "search-active" : "search-inactive"}>
                <div id="searchcontainer">
                    <div id="nameSearch">
                        <TextField sx={{ width: 450 }} label="Search by name" variant="standard" />
                    </div>
                    <div id="filterSearch">
                        {selectionName.map((selection, index) => (
                            <FormControl sx={{ mt: 2, maxWidth: 300 }} className="formcontrol" key={`filter ${index}`}>
                                <InputLabel>{selection}</InputLabel>
                                <Select
                                    multiple
                                    value={selectionValue[index]}
                                    onChange={(e) => {
                                        _handleMealType(e, selection);
                                    }}
                                    input={<OutlinedInput label={selection} />}
                                    renderValue={(selected: string[]) => selected.join(", ")}
                                    MenuProps={MenuProps}
                                >
                                    {selections[index].map((selection: string) => (
                                        <MenuItem key={selection} value={selection}>
                                            <Checkbox checked={selectionValue[index].indexOf(selection) > -1} />
                                            <ListItemText primary={selection} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        ))}
                    </div>
                </div>
                <div id="btnContainer">
                    <Button variant="text" onClick={getRecipes} id="searchBtn">
                        Search <FaSearch />
                    </Button>
                </div>
            </SearchStyled>
        </>
    );
};

export default Search;
