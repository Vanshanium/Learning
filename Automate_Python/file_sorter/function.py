from pathlib import Path
from random import randint

'''
Def : This returns string with the current working Directory 
Parameters : NONE
Return : String with the current working Directory
'''
def cwd():
    path_obj = Path.cwd()
    return path_obj.resolve()

'''
Def : "This is a function that creates random files with random extensions given in the array"
parameters : NONE
Return: Path to the folder it created!
'''
def scrabble_files():

    path_obj = Path.cwd() / "Test_folder/"
    path_obj.mkdir(parents = True,exist_ok = True)

    extension_list = ['.txt','.mp4','.mp3','.py','.xml','.html']

    random_extension = '' 

    
    for number in range(1,int(input("How many random files you wanna generate!!!"))+1):

        random_extension = extension_list[randint(0,len(extension_list)-1)]
        
        file_name = f"{number}{random_extension}"
        
        with open(path_obj/f"{file_name}",'w') as file:
            file.write(f"This is a random test text inside the file{number}")
    
    return path_obj.resolve()
        
"""
Def : This is the function which sorts the data in the folder and subfolders though recursion
Parameters : Takes in the path of the folder, as if there are sub_folders in the folder it can call itself to sort the subfolders
Returns : NONE 

"""
def sort_files(folder_path):

    variable_dict = {}

    extension_array = []

    File_paths = Path(folder_path).iterdir()

    for path in File_paths:

        if path.is_dir():
            sort_files(path)

        if path.suffix not in extension_array:
            extension_array.append(path.suffix)
            folder_name = path.suffix.replace('.','')
            
            variable_dict[f"{folder_name}"] = Path(f"{folder_path}/{folder_name}")

            variable_dict[f"{folder_name}"].mkdir(parents = True, exist_ok = True)

        if path.suffix in extension_array:
            file_classificator = path.suffix.replace('.','')

            new_file_path = Path(f"{folder_path}/{file_classificator}/{path.name}")
            
            path.rename(new_file_path)
            