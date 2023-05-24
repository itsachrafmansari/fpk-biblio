function create_element(element_tag, class_names) {
    let new_element = document.createElement(element_tag);
    new_element.classList = class_names;
    return new_element;
}



function create_file(FILE_OBJ, MODULE_SRC_DIR) {
    let file_li = create_element("li", "py-1 border-b border-gray-200 last:border-b-0");

    file_li.innerHTML = `
    ${FILE_OBJ.full_name.split("-").slice(2).join("-")}
    <span class="whitespace-nowrap">
        <button class="ml-2 py-2 px-2 text-xs font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-700"><i class="fa-regular fa-eye"></i></button>
        <a target="_blank" href="../../../media/${MODULE_SRC_DIR}/${FILE_OBJ.full_name}" class="ml-2 py-2 px-2 text-xs font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-700">
            <i class="fa-solid fa-external-link"></i>
        </a>
        <a download="${FILE_OBJ.full_name}" href="../../../media/${MODULE_SRC_DIR}/${FILE_OBJ.full_name}" class="ml-2 py-2 px-2 text-xs font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-700">
            <i class="fa-solid fa-download"></i>
        </a>
    </span>
    `

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



function generate_page(modules_objs) {
    let select_container = document.getElementById("container");

    for (let i = 0; i < modules_objs.length; i++) {
        select_container.appendChild(create_module(modules_objs[i]));
    }
}
