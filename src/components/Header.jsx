import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="py-20 text-center">
                <Link to="/">
                    <div className="mb-2 text-2xl sm:text-5xl font-semibold uppercase">Bibliothèque</div>
                    {/* <div className="mb-2 text-2xl sm:text-5xl font-semibold uppercase">📙 Bibliothèque 📘</div> */}
                    <div className="text-sm sm:text-lg font-normal">📚 Faculté Polydisciplinaire de Khouribga 📚</div>
                </Link>
            </div>
        </header>
    );
}

export default Header;
