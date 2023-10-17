import { useState } from "react";
import PDFViewer from "./PdfViewer";
import { ReactComponent as DownloadIcon } from "./icons/download_icon.svg";
import { ReactComponent as ExternalIcon } from "./icons/external_icon.svg";
import { ReactComponent as ViewIcon } from "./icons/view_icon.svg";
import { ReactComponent as HideIcon } from "./icons/hide_icon.svg";
import ImgViewer from "./ImgViewer";



const File = ( { file, module_media_src } ) => {

    const [displayFile, setDisplayFile] = useState(false);
    const [filename, extension] = file.split(".");
    const displayableFileTypes = ["pdf", "png", "jpg", "jpeg"];

    const displayFileHandler = () => {
        setDisplayFile(!displayFile);
    }


    return (
        <div className="border-b border-gray-400 last:border-b-0">
            <div className="py-1 flex items-center gap-1">

                <span className="w-28 flex gap-2 justify-center items-center ">

                    {displayableFileTypes.includes(extension) && 
                        <button onClick={displayFileHandler} className="w-8 h-auto aspect-square flex justify-center items-center text-s font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700">
                            {displayFile ? <HideIcon fill="white" className="w-5"/> : <ViewIcon fill="white" className="w-5"/>}
                        </button>
                    }

                    {extension === "pdf" && 
                        <a href={`/${module_media_src}/${file}`} target="_blank" rel="noreferrer" className="w-8 h-auto aspect-square flex justify-center items-center text-s font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700">
                            <ExternalIcon fill="white" className="w-5"/>
                        </a>
                    }

                    <a href={`/${module_media_src}/${file}`} download={file} className="w-8 h-auto aspect-square flex justify-center items-center text-s font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700">
                        <DownloadIcon fill="white" className="w-5"/>
                    </a>

                </span>

                <span >{file.split("-").slice(2).join("-")}</span>

            </div>

            {displayFile && (

                (extension === "pdf" && 
                    <PDFViewer pdf_url={`/${module_media_src}/${file}`}/>
                ) || ( displayableFileTypes.includes(extension) &&
                    <ImgViewer img_url={`/${module_media_src}/${file}`} filename={filename}/>
                )

            )}

        </div>
    );
}

export default File;
