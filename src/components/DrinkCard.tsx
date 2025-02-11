import { useAppStore } from "../stores/useAppStore"
import type { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {
    const selectRecipe = useAppStore((state) => state.selectRecipe)
  return (
    <div className="border shadow-lg">
        <div className="overflow-hidden">
            <img 
                src={drink.strDrinkThumb} 
                alt={`Image from ${drink.strDrink}`}
                className="hover:scale-125 transition-transform hover:rotate-2"
            />
        </div>
        <div className="p-5 truncate font-black">
            <h2 className="text-2xl">{drink.strDrink}</h2>
            <button
                type="button"
                className="bg-orange-400 hover:bg-orange-600 mt-5 w-full p-3 font-bold text-white text-lg"
                onClick={() => selectRecipe(drink.idDrink)}
            >Recipe</button>
        </div>
    </div>
  )
}
