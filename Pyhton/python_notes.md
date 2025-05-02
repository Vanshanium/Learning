# 🐍 Python Notes

## 🧱 Basics

```python
# Print something
print("Hello, World!")  # Output: Hello, World!

# Variables
x = 10                  # Integer
name = "Alice"          # String
pi = 3.14               # Float
is_valid = True         # Boolean
```

---

## 🧮 Data Types

```python
# Lists
fruits = ["apple", "banana", "cherry"]  # List of strings

# Tuples
point = (1, 2)             # Immutable ordered data

# Sets
unique_nums = {1, 2, 3}    # Unordered, no duplicates

# Dictionaries
person = {"name": "Alice", "age": 25}  # Key-value pairs
```

---

## 🔁 Control Flow

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

## 🔧 Functions

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
    print(f"{name} is a Moron!")

def wrapper(func):

    def wrapped_greet(name):
        print(f"You know who is the Moron!!!!")
        func(name)
    return wrapped_greet                   
    # It Returns the defination of the function.


    # That Defination is now in new_greet i.e 
    # new_greet = wrapped_great 

new_greet("Rahul")

# Decorators - istead of writing - new_greet = wrapper(greet)

@wrapper
def greet(name):
    print(f"{name} is a Moron!")

# Lambda Function - One Liner functions. (Syntax sex!)

def function_caller(func):
    func("Subhash")


function_caller(lambda a : print(f"{a} is a Moron"))

# Same as new_name = lambda a : print(f"{a} is a Moron!")


```

Learn about Decorators from this: [Here](https://www.youtube.com/watch?v=ZwMS3_Ej_6M&ab_channel=SkillBakeryStudio)
---

# 🎒 Classes and Oops

[Refrence](https://www.youtube.com/watch?v=rLyYb7BFgQI&ab_channel=Indently)

```python
# Define a class
class Person:
    def __init__(self, name, age):   # Constructor
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hi, I'm {self.name} and I'm {self.age} years old.")

class Man(Person):   # This is Inherited from the Person.

    def __init__(self,name,age,penile_size):
        super().__init__(name,age)  # Calling from the Parent Class.
        self.penile_size = penile_size

    def greet(self):                # You can overide the parent class functions
        print(f"Hi, I'm {self.name} and I'm {self.age} years old with a {self.penile_size}. inch penis")


# Create object
p = Man("Alice", 25,12)
print(greet()) 

```

## Dunder Methods (Double Underscore Methods/Magic mathods) 
They are special/magic methods in the classes for basic Fucntionality and Operators [see](https://www.youtube.com/watch?app=desktop&v=NwjSP1_WEfE&ab_channel=BroCode)

```python
class Person:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"Person named {self.name}"

p = Person("Alice")
print(p)  # Output: Person named Alice
```
![Image](./Reference_Images/Dunder_Mathods.webp)




---

# Exception handling

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")
```

# *Args and **Kargs

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

# Virtual Envirment: 

They are Envirments that encapsulate a Python Project! So you can Freeze the Dependencies and all.
they makes a new Python Interpretor in the Virtual Envirnment.


## Creating a Virtual Environment

With the built-in `venv` module (Python 3.3+):

```bash
python -m venv venv
```
Then Activate the New Interpretor (Set the Interpretor in the Editor aswell!)

on Windows: 

```bash 
venv\Scripts\activate
```
On Linux 

```bash
source venv/bin/activate
```

# UV (Package and Project Manager) 

```bash
    uv init project_name
    uv venv
    source ./venv/bin/activate
    
    uv pip install package

```



