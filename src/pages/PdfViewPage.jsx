
import React from 'react';
import Title from "../components/Title";
import PDFViewer from '../components/PdfViewer';
import { useParams } from 'react-router-dom';


const PdfViewPage = () => {

    const {major, semester, module, filename} = useParams();

    return (
        <div>

            <Title title="test" />

            <div className="p-0.5 w-full max-w-full h-screen bg-gray-800">
                <PDFViewer pdf_url={`/media/${major}/${semester}/${module}/${filename}.pdf`}/>
            </div>

        </div>
    );
}

export default PdfViewPage;