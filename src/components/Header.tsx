import { NavLink, useLocation } from "react-router-dom"

export default function Header() {

    const location = useLocation()

    console.log(location)
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
        </div>
    </header>
  )
}
