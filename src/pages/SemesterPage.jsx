import { useParams } from "react-router-dom";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Module from "../components/Module";
import PageNotFound from "./PageNotFound";
import MAJORS from "../data/data.json";


const SemesterPage = () => {

    const {major, semester} = useParams();

    if ((major in MAJORS) && (semester in MAJORS[major])) {
        return (
            <>
                <Title title={`${major} - ${semester}`}/>

                <Navbar major={major} semester={semester}/>

                {Object.entries(MAJORS[major][semester]).map(([module_label, body]) => (
                    <Module key={module_label} label={module_label} categories={body.categories} module_media_src={body.module_src_dir}/>
                ))}
            </>
        )
    } else {
        return (
            <PageNotFound />
        )
    }
}

export default SemesterPage;