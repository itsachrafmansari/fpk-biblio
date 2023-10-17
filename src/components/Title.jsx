import { Helmet } from "react-helmet-async";

const Title = ({title}) => {
    const setTitle = "FPK Biblio" + (title ? ` | ${title.toUpperCase()}` : '');

    return (
        <Helmet>
            <title>{setTitle}</title>
            <meta property="og:title" content={setTitle}/>
            <meta name="twitter:title" content={setTitle}/>
        </Helmet>
    )
}

export default Title;
