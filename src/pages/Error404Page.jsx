import Navbar from "../components/Navbar";
import PageNotFound from "../components/PageNotFound";
import Title from "../components/Title";

const Error404Page = () => {
    return (
        <>
            <Title title="Page Introuvable"/>
        
            <Navbar/>

            <PageNotFound />
        </>
    );
}

export default Error404Page;
