import { useParams } from "react-router-dom";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Semester from "../components/Semester";
import MAJORS from "../data/data.json";
import Error404Page from "./Error404Page";


const MajorPage = () => {

    const { major } = useParams();

    if (major in MAJORS) {
        return (
            <>
                <Title title={major}/>
    
                <Navbar major={major}/>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                    {Object.keys(MAJORS[major]).map((semester) => (
                        <Semester key={semester} major={major} label={semester} />
                    ))}
                </div>
            </>
        );
    } else {
        return (
            <Error404Page/>
        );
    }

}

export default MajorPage;