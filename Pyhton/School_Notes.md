# 🐍 Python Notes

## 1. Basics

### Tokens 
A **token** is the smallest unit in Python source code, such as keywords, identifiers, literals, operators, or delimiters, recognized by the parser.


#### 1. Keywords 
**Keywords** are reserved words in Python that have special meaning and cannot be used as identifiers (variable names).
- There are 35 of them. 

```python
    import keyword
    print("This is the Keywords in Python ", keyword.kwlist)
``` 

#### 2. Identifiers 
```python
    age = 10 
    name = "Ash"
    def greet():
        print("Hello",name)
```
**Rules for Identifiers in Python:**

1. Identifiers cannot have special characters except the underscore (`_`).  
2. Identifiers **cannot begin with a digit**.  
3. Identifiers cannot be the same as a **keyword**.  
4. Python is **case-sensitive**.  

Convensions - 
| Type     | Convention                     | Example                   |
| -------- | ------------------------------ | ------------------------- |
| Variable | lower\_case\_with\_underscores | `total_marks`, `is_valid` |
| Constant | ALL\_CAPS                      | `PI = 3.14`               |
| Function | snake\_case                    | `get_name()`              |
| Class    | PascalCase                     | `StudentData`             |
| Private  | Start with `_`                 | `_secret`                 |


All Cases - 
<p align="center">
  <img src="./Reference_Images/TypeCases.png" alt="Type Cases" style="border-radius: 12px;">
</p>

##### Varibles:
You know what are they, you just need `=` assignment operator, to assign variable.

```python 
    x = 10                  # Integer
    name = "Alice"          # String
    pi = 3.14               # Float
    is_valid = True         # Boolean

    # Multi Assignment: 

    x,y,z = 1,2,3 
    x = y = z = 1 
```
#### Literals 
**Literals** are fixed values in Python source code, such as numbers, strings, booleans, or special values like `None`.

`see it using type()` 

<p align="center">
  <img src="./Reference_Images/Literals.png" alt="Literals" style="border-radius: 12px;">
</p>

##### Strings 
Strings in Python are sequences of Unicode characters, used to store and represent text.

**Ways to define strings:**

```python
# Single quotes
s1 = 'Hello'

# Double quotes
s2 = "World"

# Triple single quotes (for multi-line)
s3 = '''This is
a multi-line
string'''

# Triple double quotes (for multi-line)
s4 = """Another
multi-line
string"""

# Raw strings (ignores escape sequences)
path = r"C:\Users\Name\Documents"

# f-strings (formatted string literals, Python 3.6+)
name = "Alice"
greeting = f"Hello, {name}!"

# Concatenation
combined = s1 + " " + s2

# Repetition
repeat = "ha" * 3  # 'hahaha'
```

**Escape Sequences:**

| Sequence | Meaning          |
|----------|------------------|
| `\n`     | Newline          |
| `\t`     | Tab              |
| `\\`     | Backslash        |
| `\'`     | Single quote     |
| `\"`     | Double quote     |
| `\r`     | Carriage return  |

##### Numbers 
Numbers in Python represent numeric data types and are used for mathematical operations. The main types are:

- **int**: Represents integer (whole number) values. Example: `x = 10`
- **float**: Represents floating-point (decimal) numbers. Example: `pi = 3.14`
- **complex**: Represents complex numbers with real and imaginary parts. Example: `z = 2 + 3j`

##### Booleans 
Booleans in Python represent truth values and are used for logical operations and control flow.

- There are only two boolean values: `True` and `False` (note the capital letters).
- The `bool` type is a subclass of `int`, so `True` is equivalent to `1` and `False` is equivalent to `0`.

##### None 
**None** is a special constant in Python that represents the absence of a value or a null value.

##### Collections 

```python
# Lists
fruits = ["apple", "banana", "cherry"]      # List of Data              Mutatable (Can be changed and can have same values)

# Tuples
point = (1, 2)                              # Immutable ordered data    

# Sets
unique_nums = {1, 2, 3}                     # Unordered, no duplicates

# Dictionaries
person = {"name": "Alice", "age": 25}       # Key-value pairs
```
| Feature        | **List**            | **Tuple**         | **Set**          |
| -------------- | ------------------- | ----------------- | ---------------- |
| Ordered        | Yes                 | Yes               | No (Unordered)   |
| Mutable        | Yes                 | No (Immutable)    | Yes              |
| Duplicates     | Allowed             | Allowed           | Not Allowed      |
| Brackets       | `[ ]`               | `( )`             | `{ }`            |
| Use Case       | General collections | Fixed collections | Unique items     |

Ordered : here orddered mean, that elements can be stored in any order possible. 
so Indexing is not possinle in sets. 

TODO: 

###### Type Conversion
Type conversion refers to changing the data type of a value to another type.

1. Implicit Type Conversion

Python automatically converts one data type itself
```python
x = 10      # int
y = 2.5     # float
result = x + y   # result is float (12.5)
```

2. Explicit Type Conversion (Type Casting)

You can manually convert between types using built-in functions:

```python
int("10")
float("3.14")
str(100)
complex(2, 3)
bool(1)
list("abc")
tuple([1, 2, 3])
set([1, 2, 2])
dict([("a", 1), ("b", 2)])
```

#### Operators:

##### 1. Arithmetic Operators

Create a calculator using these operators 

Used to perform mathematical operations.

| Operator | Description             | Example         |
|----------|-------------------------|-----------------|
| +        | Addition                | 5 + 2 = 7       |
| -        | Subtraction             | 5 - 2 = 3       |
| *        | Multiplication          | 5 * 2 = 10      |
| /        | Division (float)        | 5 / 2 = 2.5     |
| //       | Floor Division          | 5 // 2 = 2      |
| %        | Modulus (Remainder)     | 5 % 2 = 1       |
| **       | Exponentiation          | 5 ** 2 = 25     |

##### 2. Comparison (Relational) Operators

If and Else before this:

Used to compare two values and return a boolean result.

| Operator | Meaning                  | Example              |
|----------|--------------------------|----------------------|
| ==       | Equal to                 | 5 == 2 → False       |
| !=       | Not equal to             | 5 != 2 → True        |
| >        | Greater than             | 5 > 2 → True         |
| <        | Less than                | 5 < 2 → False        |
| >=       | Greater than or equal to | 5 >= 2 → True        |
| <=       | Less than or equal to    | 5 <= 2 → False       |

#### 3. Logical Operators

Used to combine conditional statements.

| Operator | Meaning      | Example                          |
|----------|-------------|----------------------------------|
| and      | Logical AND | (5 > 2) and (5 < 10) → True      |
| or       | Logical OR  | (5 < 2) or (5 < 10) → True       |
| not      | Logical NOT | not (5 > 2) → False              |

#### 4. Assignment Operators

Used to assign values to variables.

| Operator | Example    | Equivalent      |
|----------|------------|----------------|
| =        | x = 5      | x = 5          |
| +=       | x += 3     | x = x + 3      |
| -=       | x -= 3     | x = x - 3      |
| *=       | x *= 3     | x = x * 3      |
| /=       | x /= 3     | x = x / 3      |
| //=      | x //= 3    | x = x // 3     |
| %=       | x %= 3     | x = x % 3      |
| **=      | x **= 3    | x = x ** 3     |

#### 5. Bitwise Operators

Operate on bits (binary level).

| Operator | Name        | Example           |
|----------|-------------|-------------------|
| &        | AND         | 5 & 3 = 1         |
| \|       | OR          | 5 \| 3 = 7        |
| ^        | XOR         | 5 ^ 3 = 6         |
| ~        | NOT (invert)| ~5 = -6           |
| <<       | Left Shift  | 5 << 1 = 10       |
| >>       | Right Shift | 5 >> 1 = 2        |

---

## 3. Control Flow

```python
# Conditional statements
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is 5")
else:
    print("x is less than 5")

# Loops
for fruit in fruits:               # Iterate over list
    print(fruit)

while x > 0:                       # While loop
    print(x)
    x -= 1
```

---

## 4. Functions

```python
# Define a function

def greet(name) -> str:              
    # -> shows the return type! Its not Javascript relax
    
    print(f"Hello, {name}!")

    return f"Hello, {name}!"

# Call the function

greet("Rishubh Johnson!")

#Change the Name of the function 
namaste = greet

namaste("Niko Bellic!")


# Wrapper Functions - They are just the wrapper to the older functions 

def greet(name):
    print(f"{name} is a Idiot!")

def wrapper(func):

    def wrapped_greet(name):
        print(f"You know who is the Idiot!!!!")
        func(name)
    return wrapped_greet                   
    # It Returns the defination of the function.


    # That Defination is now in new_greet i.e 
    # new_greet = wrapped_great 

new_greet("Rahul")

# Decorators - istead of writing - new_greet = wrapper(greet)

@wrapper
def greet(name):
    print(f"{name} is a Idiot!")

# Lambda Function - One Liner functions. (Syntax sex!)

def function_caller(func):
    func("Subhash")


function_caller(lambda a : print(f"{a} is a Idiot"))

# Same as new_name = lambda a : print(f"{a} is a Idiot!")


```

Learn about Decorators from this: [Here](https://www.youtube.com/watch?v=ZwMS3_Ej_6M&ab_channel=SkillBakeryStudio)
---

# 5. Classes and OOP

[Reference](https://www.youtube.com/watch?v=rLyYb7BFgQI&ab_channel=Indently)

```python
# Define a class
class Person:
    def __init__(self, name, age):   # Constructor
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hi, I'm {self.name} and I'm {self.age} years old.")

class Man(Person):   # This is Inherited from the Person.

    def __init__(self,name,age,hieght):
        super().__init__(name,age)  # Calling from the Parent Class.
        self.hieght = hieght

    def greet(self):                # You can overide the parent class functions
        print(f"Hi, I'm {self.name} and I'm {self.age} years old with a {self.hieght}. inch hieght")


# Create object
p = Man("Alice", 25,12)
print(greet()) 

```

## Dunder Methods (Double Underscore Methods/Magic methods) 
They are special/magic methods in the classes for basic functionality and operators [see](https://www.youtube.com/watch?app=desktop&v=NwjSP1_WEfE&ab_channel=BroCode)

```python
class Person:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"Person named {self.name}"

p = Person("Alice")
print(p)  # Output: Person named Alice
```
<p align="center">
  <img src="./Reference_Images/Dunder_Mathods.webp" alt="Image" style="border-radius: 12px;">
</p>

---

# 6. Exception Handling

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")
```

# 7. *Args and **Kargs

In Python, `*args` and `**kwargs` are used in function definitions to handle **variable numbers of arguments**.

`*args` & `**kargs` allows a function to accept **any number of positional arguments**.

`*args` is a **tuple**
`**kargs` is a **Dictionary** 

[More Information](https://www.youtube.com/watch?v=Vh__2V2tXUM)

### Example:

```python
def print_numbers(*args):
    for number in args:
        print(number)

print_numbers(1, 2, 3, 4)


def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, country="Wonderland")

```

# 8. Virtual Environment

They are environments that encapsulate a Python project so you can freeze the dependencies and all.
They make a new Python interpreter in the virtual environment.

## Creating a Virtual Environment

With the built-in `venv` module (Python 3.3+):

```bash
python -m venv venv
```
Then activate the new interpreter (set the interpreter in the editor as well!)

On Windows: 

```bash 
venv\Scripts\activate
```
On Linux: 

```bash
source venv/bin/activate
```

# 9. UV (Package and Project Manager) 

```bash
uv init project_name
uv venv
source ./venv/bin/activate

uv pip install package
```

# 10. Files 

You can open a file or make a python object of the file using open(), which is a constructor that makes an instance of a `_io.TextWrapper` class.  
Example:

```python
my_file = open("/path/to/the/file","mode")
```

All the modes: 

<p align="center">
  <img src="./Reference_Images/file_modes.webp" alt="File Modes Reference" style="border-radius: 12px;">
</p>

## Attributes and Methods: 

## File Object Methods & Attributes

### 1. Reading Functions

| Method                | Description                                                      |
|-----------------------|------------------------------------------------------------------|
| `read(size=-1)`       | Reads `size` characters (or entire file if `-1`)                 |
| `readline(size=-1)`   | Reads a single line (up to optional `size` bytes)                |
| `readlines(hint=-1)`  | Reads all lines into a list (can limit total bytes with `hint`)  |
| `readable()`          | Returns `True` if file is open for reading                       |

### 2. Writing Functions

| Method                | Description                                                      |
|-----------------------|------------------------------------------------------------------|
| `write(string)`       | Writes string to file                                            |
| `writelines(lines)`   | Writes a list of strings to file (no automatic newlines)         |
| `flush()`             | Forces writing of buffer to disk                                 |
| `writable()`          | Returns `True` if file is open for writing                      |

### 3. File Pointer (Position Control) Functions

| Method                        | Description                                              |
|-------------------------------|----------------------------------------------------------|
| `seek(offset, whence=0)`      | Moves file pointer to a specified position               |
| `tell()`                      | Returns the current position of the file pointer         |
| `seekable()`                  | Returns `True` if file supports random access (seek/tell)|

### 4. File Information / Property Methods

| Method        | Description                                         |
|---------------|-----------------------------------------------------|
| `fileno()`    | Returns OS-level file descriptor (an integer)       |
| `isatty()`    | Returns `True` if file is connected to a terminal   |

### 5. File Management / Closing Functions

| Method / Attribute | Description                        |
|--------------------|------------------------------------|
| `close()`          | Closes the file                    |
| `closed`           | Returns `True` if file is closed   |

### 6. File Object Attributes

| Attribute  | Description                                         |
|------------|-----------------------------------------------------|
| `name`     | The name of the file                                |
| `mode`     | The mode in which file is opened (e.g., `'r'`, `'w'`)|
| `closed`   | Returns `True` if file is closed                    |

### 7. Special Context Manager Methods (for `with` statement)

| Method         | Description                                                        |
|----------------|--------------------------------------------------------------------|
| `__enter__()`  | Enters the runtime context and returns the file object             |
| `__exit__()`   | Exits the runtime context and closes the file                      |

