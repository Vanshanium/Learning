import function



test = input("Do you want to test the code with test files: Y/N")

if test == "Y":
    path = function.scrabble_files()
    input("Do you see the unsorted test files, Hit any key to continue")
    function.sort_files(path)

    
else:
    current = input("Do you wannt to sort the current folder!?:  Y/N")

    if current == "Y":
        
        function.sort_files(function.cwd())

    else:
        spec_path = input("Specific path: ")
        function.sort_files(spec_path)

