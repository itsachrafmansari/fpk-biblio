import json
import os

directory = "media"
project_dir = os.path.split(os.getcwd())[0]
data = {}


for major_name in os.listdir(directory):
    major_path = os.path.join(directory, major_name)
    major = {}
    if os.path.isdir(major_path):

        for semester_name in os.listdir(major_path):
            semester_path = os.path.join(major_path, semester_name)
            semester = {}
            if os.path.isdir(semester_path):

                for module_name in os.listdir(semester_path):
                    module_path = os.path.join(semester_path, module_name)
                    module = {
                        "categories": {}
                    }
                    if os.path.isdir(module_path):

                        for file_name in os.listdir(module_path):
                            file_path = os.path.join(module_path, file_name)
                            if os.path.isfile(file_path) and file_name.count(" - ") == 2:

                                category = file_name.split(" - ")[1]

                                if category in module["categories"]:
                                    module["categories"][category].append(file_name)
                                else:
                                    module["categories"][category] = [file_name]

                        if module != {}:
                            module["module_src_dir"] = module_path
                            semester[module_name] = module

                if semester != {}:
                    major[semester_name] = semester

        if major != {}:
            data[major_name] = major


json_data = json.dumps(data, indent=4)
with open(os.path.join(project_dir, "src", "data", "data.json"), "w") as json_file:
    json_file.write(json_data)
