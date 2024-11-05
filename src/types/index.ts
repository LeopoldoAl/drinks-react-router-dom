import { z } from "zod"
import { CategoriesAPIResponseShema } from "../utils/recipes.schemas"

export type Categories = z.infer<typeof CategoriesAPIResponseShema>