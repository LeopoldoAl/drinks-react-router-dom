import { CategoriesAPIResponseShema } from "../utils/recipes.schemas"
import axios from "axios"



export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data}  = await axios(url)
    const result = CategoriesAPIResponseShema.safeParse(data)

    if (result.success) {
        return result.data
    }
}