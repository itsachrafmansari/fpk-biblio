document.querySelectorAll('button').forEach(element => {
    element.addEventListener("click", function createPdfContainer() {

        let liElement, pdfContainer, pdfContainerHtml, pdfRelativePath, pdfAbsolutePath, pdfGooglePath;
    
        liElement = element.parentElement.parentElement;
        liElement.querySelector("i").classList.toggle("fa-regular");
        liElement.querySelector("i").classList.toggle("fa-eye");
        liElement.querySelector("i").classList.toggle("fa-solid");
        liElement.querySelector("i").classList.toggle("fa-close");
    
        pdfContainer = liElement.querySelector("object");
    
        if (pdfContainer == null) {
            pdfRelativePath = liElement.querySelector("a").getAttribute("href");
            pdfAbsolutePath = new URL(pdfRelativePath, 'https://fpk-biblio.netlify.app');
            pdfGooglePath = `https://drive.google.com/viewerng/viewer?embedded=true&url=${pdfAbsolutePath}`
            pdfContainerHtml = `
            <object data="${pdfGooglePath}" type="application/pdf" class="w-full h-screen my-2 bg-gray-200">
            <embed src="${pdfGooglePath}" class="w-full h-full my-2 bg-gray-200"/>
            <p>This browser does not support PDFs. Please download the PDF to view it: <a href="${pdfGooglePath}">View the PDF</a>.</p>
            </embed>
            </object>
            `;
            liElement.insertAdjacentHTML('beforeend', pdfContainerHtml);
        } else {
            pdfContainer.classList.toggle("hidden");
        }
    });
});