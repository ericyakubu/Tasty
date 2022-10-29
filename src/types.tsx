export type RecipeType = {
    title: string;
    image: string;
    summary: string;
    id: number;
    servings: number;
    aggregateLikes: number;
    readyInMinutes: number;
    diets: string[];
};

export type RecipeType02 = {
    recipe: RecipeType;
};

export type Recipe = RecipeType & {
    pricePerServing: number;
    extendedIngredients: Array<{
        original: string;
        nameClean: string;
        image: string;
        measures: {
            metric: {
                amount: number;
                unitShort: string;
                unitLong: string;
            };
            us: {
                amount: number;
                unitShort: string;
                unitLong: string;
            };
        };
    }>;
    diets: string[];
    dishTypes: string[];
    analyzedInstructions: Array<{
        steps: Array<{
            equipment: object[];
            ingredients: object[];
            number: number;
            step: string;
        }>;
    }>;
};
