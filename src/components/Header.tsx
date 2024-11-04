import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-slate-800">
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/logo.svg" alt="logotype" className="w-32" />
                </div>
                <div>
                    <nav className="flex gap-4">
                        <Link 
                            className="text-white uppercase font-bold"
                            to="/"
                        >Start</Link>
                        <Link 
                            className="text-white uppercase font-bold"
                            to="/favorites"
                        >Favorites</Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}
