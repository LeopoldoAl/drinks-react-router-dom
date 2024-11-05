import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

type Category = {}

export type RecipesSlicesType = {
    categories: Category[],
    fetchCategories: () => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipesSlicesType> = () => ({
    categories: [],
    fetchCategories: async () => {
        getCategories()
    }
})