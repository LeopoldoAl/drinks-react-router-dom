import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"

export default function Header() {

    const {pathname} = useLocation()

    const isHome = useMemo(() => pathname === '/',[pathname])
  return (
    <header className="bg-slate-800">
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/logo.svg" alt="logotype" className="w-32" />
                </div>
                <div>
                    <nav className="flex gap-4">
                        <NavLink 
                            className={({isActive}) =>
                                    isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"    
                            }
                            to="/"
                        >Start</NavLink>
                        <NavLink 
                            className={({isActive}) =>
                                isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"    
                        }
                            to="/favorites"
                        >Favorites</NavLink>
                    </nav>
                </div>
            </div>
            {isHome && (
                <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
                    <div className="space-y-4">
                        <label 
                            htmlFor="ingredient"
                            className="block text-white uppercase font-extrabold text-lg"
                        >Name or Ingredients</label>
                        <input 
                            type="text" 
                            id="ingredient"
                            name="ingredient"
                            className="p-3 w-full rounded-lg focus:outline-none"
                            placeholder="Name or Ingredient. Ex. Vodka, Tequila, Coffee"
                        />
                    </div>
                    <div className="space-y-4">
                        <label 
                            htmlFor="ingredient"
                            className="block text-white uppercase font-extrabold text-lg"
                        >Category</label>
                        <select 
                            id="ingredient"
                            name="ingredient"
                            className="p-3 w-full rounded-lg focus:outline-none"
                        >
                            <option value="">-- Select ==</option>
                        </select>
                    </div>
                    <input 
                        type="submit" 
                        value='Searching Recipes'
                        className="cursor-pointer bg-orange-800 
                        hover:bg-orange-900 text-white font-extrabold p-3 w-full rounded-lg uppercase"
                    />
                </form>
            )}
        </div>
    </header>
  )
}
