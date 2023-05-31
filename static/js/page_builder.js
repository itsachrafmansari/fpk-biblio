function create_element(element_tag, class_names) {
    let new_element = document.createElement(element_tag);
    new_element.classList = class_names;
    return new_element;
}



function create_file(FILE_OBJ, MODULE_SRC_DIR) {
    let file_li = create_element("li", "py-1 border-b border-gray-200 last:border-b-0 flex flex-col jusctify-center items-start gap-2");

    file_li.innerHTML = `
        <span class="whitespace-nowrap flex gap-2 items-center">
            <button class="w-8 h-auto aspect-square flex justify-center items-center text-s font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700">
                <i class="fa-regular fa-eye"></i>
            </button>
            <a class="w-8 h-auto aspect-square flex justify-center items-center text-s font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700" href="../../../media/${MODULE_SRC_DIR}/${FILE_OBJ.full_name}" target="_blank" >
                <i class="fa-solid fa-external-link"></i>
            </a>
            <a class="w-8 h-auto aspect-square flex justify-center items-center text-s font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700" href="../../../media/${MODULE_SRC_DIR}/${FILE_OBJ.full_name}" download="${FILE_OBJ.full_name}">
                <i class="fa-solid fa-download"></i>
            </a>
            <span>${FILE_OBJ.full_name.split("-").slice(2).join("-")}</span>
        </span>`

    return file_li;
}



function create_category(CATEGORY_OBJ, MODULE_SRC_DIR) {
    let cat_tr = create_element("tr", "odd:bg-gray-50 border-b border-gray-300 last:border-b-0");

    cat_tr.innerHTML = `
    <!-- Document Type -->
    <td class="px-1 text-center border-r border-gray-300 font-normal">${CATEGORY_OBJ.category_name}</td>
    <!-- Corresponding Documents -->
    <td class="files_col px-1 py-2 w-full font-normal text-left">
        <ul class="files_list">

        </ul>
    </td>
    `

    let files_list = cat_tr.querySelector(".files_list");

    let files = CATEGORY_OBJ.files;
    for (let k = 0; k < files.length; k++) {
        files_list.appendChild(create_file(files[k], MODULE_SRC_DIR));
    }

    return cat_tr;
}



function create_module(module_obj) {
    let module_div = create_element("div", "module sm:rounded p-4 my-2 bg-white");
    module_div.innerHTML = `
    <!-- Module name -->
    <div class="text-xl font-bold pb-4">${module_obj.module_name}</div>
    <table class="w-full border border-gray-300">
        <tbody class="categories_table">

        </tbody>
    </table>
    `

    let categories_table = module_div.querySelector(".categories_table");

    let categories = module_obj.categories;
    for (let j = 0; j < categories.length; j++) {
        categories_table.appendChild(create_category(categories[j], module_obj.module_src_dir));
    }
    
    return module_div;
}


function create_navbar(FILIERE_ABR, FILIERE_URL, SEMESTER_ABR) {
    let navbar = create_element("nav", "");

    navbar.innerHTML = `
    <!-- BreadCrumbs -->
    <nav class="flex sm:rounded p-3 mb-2 bg-white" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
            <a href="../../../" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-500"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Filières
            </a>
        </li>
        <li>
            <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <a href="${FILIERE_URL}" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-500 md:ml-2">${FILIERE_ABR}</a>
            </div>
        </li>
        <li aria-current="page">
            <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2">${SEMESTER_ABR}</span>
            </div>
        </li>
        </ol>
    </nav>`
}


function generate_page(modules_objs) {
    let select_container = document.getElementById("container");

    for (let i = 0; i < modules_objs.length; i++) {
        select_container.appendChild(create_module(modules_objs[i]));
    }
}
