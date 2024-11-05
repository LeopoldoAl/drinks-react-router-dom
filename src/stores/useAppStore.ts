import { create } from "zustand";
import { createRecipesSlice, RecipesSlicesType } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipesSlicesType>()(devtools((...a) => ({
    ...createRecipesSlice(...a)

})))