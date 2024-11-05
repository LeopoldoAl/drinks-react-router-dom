import { z } from "zod";

export const CategoriesAPIResponseShema = z.object({
    drinks: z.array(
    z.object({
        strCategory: z.string()
    }))
})