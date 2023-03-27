function createIframe(elem) {

    let li_element, iframe_element, file_url, file_full_url, iframeHtml;

    li_element = elem.parentElement.parentElement;
    li_element.querySelector("i").classList.toggle("fa-regular");
    li_element.querySelector("i").classList.toggle("fa-eye");
    li_element.querySelector("i").classList.toggle("fa-solid");
    li_element.querySelector("i").classList.toggle("fa-close");

    iframe_element = li_element.querySelector("iframe");
    if (iframe_element == null) {
        file_url = new URL(li_element.querySelector("a").getAttribute("href"), 'https://fpk-biblio.netlify.app');
        file_full_url = `https://drive.google.com/viewerng/viewer?embedded=true&url=${file_url}#toolbar=0&scrollbar=0`
        iframeHtml = `<iframe src="${file_full_url}" frameBorder="0" class="w-full h-screen my-2 bg-gray-200"></iframe>`;
        li_element.insertAdjacentHTML('beforeend', iframeHtml);
    } else {
        iframe_element.classList.toggle("hidden");
        // iframe_element.remove();
    }
}