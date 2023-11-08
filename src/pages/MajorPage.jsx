import { useParams } from "react-router-dom";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Semester from "../components/Semester";
import PageNotFound from "./PageNotFound";
import MAJORS from "../data/data.json";


const MajorPage = () => {

    const { major } = useParams();

    return (
        <>

            <Title title={major}/>

            {major in MAJORS ? (
                <>
                    <Navbar major={major}/>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        {Object.keys(MAJORS[major]).map((semester) => (
                            <Semester key={semester} major={major} label={semester} />
                        ))}
                    </div>
                </>
            ) : ( <PageNotFound /> )}

        </>
    );

}

export default MajorPage;