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
def greet(name):
    return f"Hello, {name}!"

# Call the function
print(greet("Alice"))  # Output: Hello, Alice!
```

---

## 🎒 Classes and Oops

```python
# Define a class
class Person:
    def __init__(self, name, age):   # Constructor
        self.name = name
        self.age = age

    def greet(self):
        return f"Hi, I'm {self.name} and I'm {self.age} years old."

class Man(Person):   # This is Inherited from the Person.

    def __init__(self,name,age,penile_size):
        super().__init__(name,age)                      # Calling from the Parent Class.
        self.penile_size = penile_size


# Create object
p = Person("Alice", 25)
print(p.greet())  # Output: Hi, I'm Alice and I'm 25 years old.

```

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

## `*args`: Non-Keyword Variable Arguments

`*args` & `**kargs` allows a function to accept **any number of positional arguments**.

`*args` is a **tuple**
`**kargs` is a **Dictionary**

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





