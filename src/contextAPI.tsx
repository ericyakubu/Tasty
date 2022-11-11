import { createContext, useState } from "react";
import { RecipeType } from "./types";
interface SearchProviderProps {
    children: React.ReactNode;
}

const SearchContext = createContext<any>(undefined);

export const SearchProvider = ({ children }: SearchProviderProps) => {
    const cuisines: string[] = [
        "African",
        "American",
        "British",
        "Cajun",
        "Caribbean",
        "Chinese",
        "European",
        "French",
        "German",
        "Greek",
        "Indian",
        "Irish",
        "Italian",
        "Japanese",
        "Korean",
        "Mediterranean",
        "Mexican",
        "Southern",
        "Spanish",
        "Thai",
        "Vietnamese",
    ];
    const diets: string[] = ["Glueten Free", "Ketogenic", "Vegeterian", "Vegan", "Pascetarian", "Primal"];
    const mealTypes: string[] = ["Main Course", "Side Dish", "Dessert", "Appetizer", "Salad", "Breakfast", "Soup", "Beverage", "Sauce", "Marinade", "Fingerfood", "Snack", "Drink"];
    const [cuisinesSelected, setCuisinesSelected] = useState<string[]>([]);
    const [dietsSelected, setDietsSelected] = useState<string[]>([]);
    const [mealTypesSelected, setMealTypesSelected] = useState<string[]>([]);
    const [recipes, setRecipes] = useState<RecipeType[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [search, setSearch] = useState<boolean>(false);
    return (
        <SearchContext.Provider
            value={{
                cuisines,
                cuisinesSelected,
                setCuisinesSelected,
                diets,
                dietsSelected,
                setDietsSelected,
                mealTypes,
                mealTypesSelected,
                setMealTypesSelected,
                recipes,
                setRecipes,
                offset,
                setOffset,
                search,
                setSearch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;
