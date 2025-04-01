import re

# https://builtin.com/software-engineering-perspectives/python-remove-character-from-string

"""
Parameter 
input_string - This takes in a string with spaces and a
replace_char - Character you wanna replace it with.

Return 
ourput string - It returns the output string.
"""

# Sadly I got to know that this type of function already exist in python
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

def string_disector(input_string,replace_char):
    
    output_string = ''
    for letter in input_string:
        if(letter == ' '):
            output_string = f"{output_string}{replace_char}"
        else:    
            output_string = f"{output_string}{letter}"
    
    return output_string




def string_lizol(input_string):

    input_string = re.sub(r'[^a-zA-Z0-9]','',input_string)
    
    return input_string.lower()

