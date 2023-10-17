import Category from "./Category";

const Module = ( { label, categories, module_media_src } ) => {

    return ( 
        <div className="sm:rounded p-4 my-2 bg-white">
                
            <div className="text-xl capitalize font-bold pb-4">{label}</div>

            <table className="w-full border table-auto border-gray-400">
            
                <tbody>
            
                    {categories && Object.entries(categories).map(([category_label, category_body]) => (
                        <Category key={category_label} label={category_label} files={category_body} module_media_src={module_media_src}/>
                    ))}
            
                </tbody>
            
            </table>

        </div>
    );
}
 
export default Module;