import { z } from "zod"
import { CategoriesAPIResponseShema, DrinkAPIResponse, DrinksAPIResponse, SearchFilterSchema } from "../utils/recipes.schemas"

export type Categories = z.infer<typeof CategoriesAPIResponseShema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIResponse>