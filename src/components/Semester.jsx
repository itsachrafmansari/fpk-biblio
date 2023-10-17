import { Link } from "react-router-dom";

const Semester = ( {major, label} ) => {

    return ( 
        <Link to={`/${major}/${label}/`} className="p-4 w-full h-full flex justify-center items-center aspect-square rounded text-3xl transition-all duration-300 uppercase text-gray-800 hover:text-gray-400 font-semibold bg-white">
            {label}
        </Link>
     );
}

export default Semester;
