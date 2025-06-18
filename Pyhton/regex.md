# Regex in Python

## Introduction
- **Regex (Regular Expressions)**: Patterns used to match character combinations in strings.
- Python provides the `re` module for regex operations.

## Importing
```python
import re
```

## Basic Functions

- **re.match(pattern, string)**  
    Checks for a match only at the beginning of the string.

- **re.search(pattern, string)**  
    Searches the string for a match anywhere.

- **re.findall(pattern, string)**  
    Returns all non-overlapping matches as a list.

- **re.finditer(pattern, string)**  
    Returns an iterator yielding match objects.

- **re.sub(pattern, repl, string)**  
    Replaces matches with a string.

## Common Patterns

| Pattern | Description           |
|---------|----------------------|
| .       | Any character except newline |
| ^       | Start of string      |
| $       | End of string        |
| *       | 0 or more repetitions|
| +       | 1 or more repetitions|
| ?       | 0 or 1 repetition    |
| {n}     | Exactly n repetitions|
| {n, m}  | n to m repetitions   |
| []      | Set of characters    |
| |       | OR operator          |
| ()      | Grouping             |
| \d      | Digit                |
| \D      | Non-digit            |
| \w      | Word character       |
| \W      | Non-word character   |
| \s      | Whitespace           |
| \S      | Non-whitespace       |

## Flags

- `re.IGNORECASE` (`re.I`): Case-insensitive matching
- `re.MULTILINE` (`re.M`): `^` and `$` match start/end of each line
- `re.DOTALL` (`re.S`): `.` matches newline as well

## Example Usage

```python
import re

pattern = r"\d+"
text = "There are 24 apples and 42 oranges."

# Find all numbers
numbers = re.findall(pattern, text)
print(numbers)  # ['24', '42']

# Replace numbers with '#'
result = re.sub(r"\d+", "#", text)
print(result)  # There are # apples and # oranges.
```

## Match Object

- `.group()`: Returns the matched string
- `.start()`, `.end()`: Start and end positions
- `.span()`: Tuple of (start, end)



## Exception Handling in Python

### Introduction
- **Exceptions**: Errors detected during execution.
- Python uses `try`, `except`, `else`, and `finally` blocks for handling exceptions.

### Basic Syntax

```python
try:
    # Code that may raise an exception
except ExceptionType:
    # Code to handle the exception
else:
    # Code to run if no exception occurs (optional)
finally:
    # Code that runs no matter what (optional)
```

### Common Exception Types

| Exception         | Description                        |
|-------------------|------------------------------------|
| `Exception`       | Base class for all exceptions      |
| `ValueError`      | Invalid value                      |
| `TypeError`       | Wrong data type                    |
| `IndexError`      | Index out of range                 |
| `KeyError`        | Dictionary key not found           |
| `ZeroDivisionError`| Division by zero                  |
| `FileNotFoundError`| File does not exist               |
| `AttributeError`  | Attribute not found                |

### Example Usage

```python
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print("Error:", e)
else:
    print("No error occurred.")
finally:
    print("Execution complete.")
```

### Raising Exceptions

- Use `raise` to trigger exceptions manually.

```python
def divide(a, b):
    if b == 0:
        raise ValueError("b cannot be zero")
    return a / b
```

### Catching Multiple Exceptions

```python
try:
    # some code
except (TypeError, ValueError) as e:
    print("Caught exception:", e)
```