import { Link } from "react-router-dom";

const Major = ( {label} ) => {

    return ( 
        <figure className="relative group w-full max-w-[200px] aspect-square rounded-lg overflow-hidden cursor-pointer bg-gray-700">
            <Link to={`/${label}/`}>
                <img src={`/img/${label}.jpg`} alt={label} className="h-full w-full transition-all duration-300 brightness-50 group-hover:brightness-[0.3]" />
            </Link>
            <figcaption className="absolute bottom-4 group-hover:bottom-6 px-4 transition-all duration-300 uppercase text-3xl text-white font-semibold">
                <p className="drop-shadow-2xl">{label}</p>
            </figcaption>
        </figure>
     );
}

export default Major;