import json
import os

# We go up a step since the data.json file is located in an adjacent
# directory to the directory of where this script is located
PROJECT_DIR = os.path.split(os.getcwd())[0]
DATA_FILE_PATH = os.path.join(PROJECT_DIR, "src", "data", "data.json")
MEDIA_DIR = "media"

def subsOf(subsType: str, srcDir: str) -> list[str]:
    for item in os.listdir(srcDir):
        itemAbsolutePath = os.path.join(srcDir, item)
        if (subsType == "dirs" and os.path.isdir(itemAbsolutePath)) or (subsType == "files" and os.path.isfile(itemAbsolutePath)):
            yield itemAbsolutePath

def nameFromPath(srcPath: str) -> str:
    return os.path.split(srcPath)[-1]

def addIfNotEmpty(addToObj: dict, childObj: dict, childObjPath: str) -> None:
    if len(childObj) > 0:
        objName = nameFromPath(childObjPath)
        addToObj[objName] = childObj


# Crawling through the media directory
data = {}
for MAJOR_PATH in subsOf("dirs", MEDIA_DIR):

    major = {}

    for SEMESTER_PATH in subsOf("dirs", MAJOR_PATH):

        semester = {}

        for MODULE_PATH in subsOf("dirs", SEMESTER_PATH):

            module = {}

            for FILE_PATH in subsOf("files", MODULE_PATH):

                if FILE_PATH.count(" - ") >= 2:

                    file_name = nameFromPath(FILE_PATH)

                    # Fetch the file's category
                    category = file_name.split(" - ")[1]

                    # Does the module's dictionary contains a "categories" key ?
                    if "categories" not in module:
                        module["categories"] = {}
                        module["module_src_dir"] = MODULE_PATH

                    # Does the module's category contains the file's category ?
                    if category not in module["categories"] :
                        module["categories"][category] = []

                    module["categories"][category].append(file_name)

                else:
                    # Logs any filename that doesn't follow the the more-than-two " - " rule
                    print(FILE_PATH)

            addIfNotEmpty(semester, module, MODULE_PATH)

        addIfNotEmpty(major, semester, SEMESTER_PATH)

    addIfNotEmpty(data, major, MAJOR_PATH)



# Writing the crawling result to the data.json file
with open(DATA_FILE_PATH, "w+") as jsonFile:
    jsonData = json.dumps(data, indent=4)
    jsonFile.write(jsonData)
