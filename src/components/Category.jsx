import File from "./File";

const Category = ({label, files, module_media_src}) => {

    return (
        <tr className="odd:bg-gray-50 border-b border-gray-400 last:border-b-0">

            <td className="px-1 text-center border-r border-gray-400 font-normal">{label}</td>

            <td className="px-1 py-2 flex flex-col font-normal text-left">

                {files.map((file, index) => ( <File key={index} file={file} module_media_src={module_media_src}/> ))}

            </td>

        </tr>
     );

}
 
export default Category;