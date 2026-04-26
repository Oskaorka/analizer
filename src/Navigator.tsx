import { Link } from "react-router"



function Navigation() {
    return (
        <nav className="">
            <Link className="text-2xl px-3" to="/home">Главная</Link>
            <Link className="text-2xl px-3" to="/analyzList">Аналитика</Link>
        </nav>
    )
}

export default Navigation