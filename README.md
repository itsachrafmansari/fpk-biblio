# FPK Bibliothèque
![Website Snapshot](./static/img/website_snapshot.jpg)

A website that contains a collection of courses, tutorials, projects and exams from **Faculté Polydisciplinaire Khouribga**'s lectures, divided and arranged by major, semester and subject.


Website : [fpk-biblio.netlify.app](http://fpk-biblio.netlify.app/)

CSS framework : ```TailwindCSS ```

<br/>

# Code structure

### Subjects
```html
<!-- Module -->
<div class="module sm:rounded p-4 my-2 bg-white">
    <!-- Module name -->
    <div class="text-xl font-bold pb-4">[SUBJECT NAME] :<small class="pl-2 font-semibold text-gray-500">[SUBJECT SUBTITLE]</small></div>
    <table class="w-full border border-gray-300">
        <tbody>
            <tr class="odd:bg-gray-50 border-b border-gray-300 last:border-b-0">
                <!-- Document Type -->
                <td class="px-1 text-center border-r border-gray-300 font-normal">[DOCUMENTS TYPE : Cours, TDs, TPs, Devoirs, Controles, Exams, Autres]</td>
                <!-- Corresponding Documents -->
                <td class="px-1 py-2 w-full font-normal text-left">
                    <ul>
                        [LIST OF FILES]_
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</div>
```
### Files
```html
<!-- Fichier -->
<li class="py-1 border-b border-gray-200 last:border-b-0">
    [FILENAME(short version).FORMAT]
    <span class="whitespace-nowrap">
        <button onclick="createIframe(this)" class="ml-2 py-1 px-3 text-xs font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-700"><i class="fa-regular fa-eye"></i></button>
        <a download="[FULL FILENAME when downloaded]" href="[LINK TO THE FILE]" class="ml-2 py-1 px-3 text-xs font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-700"><i class="fa-solid fa-download"></i></a>
    </span>
</li>
```