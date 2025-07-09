tolearn - what is this 012 (stdin, stdout, sterr)
| Operator   | Purpose                                   |
|------------|-------------------------------------------|
| `>`        | Redirect stdout                           |
| `2>`       | Redirect stderr                           |
| `&>`       | Redirect both stdout and stderr (bash-only)|
| `>>`       | Append stdout to a file                   |
| `2>>`      | Append stderr to a file                   |
| `2>&1`     | Redirect stderr to where stdout goes       |
| `/dev/null`| Black hole to discard output              |

# This is how you color in Bash

```bash
echo -e "\e[color]m Text \e[0m"

echo -e "\e[31m this is red \e[0m"
```

| Color   | Code |
|---------|------|
| Black   | 30   |
| Red     | 31   |
| Green   | 32   |
| Yellow  | 33   |
| Blue    | 34   |
| Magenta | 35   |
| Cyan    | 36   |
| White   | 37   |


## Loops in Bash

### For Loop

```bash
for var in item1 item2 item3; do
    echo "$var"
done
```

- Iterates over a list of items.

### While Loop

```bash
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    ((count++))
done
```

- Repeats as long as the condition is true.

### Until Loop

```bash
count=1
until [ $count -gt 5 ]; do
    echo "Count: $count"
    ((count++))
done
```

- Repeats until the condition becomes true.

### Looping Over Files

```bash
for file in *.txt; do
    echo "File: $file"
done
```

- Useful for processing files in a directory.

### Breaking and Continuing

- `break` exits the loop.
- `continue` skips to the next iteration.

```bash
for i in {1..5}; do
    if [ $i -eq 3 ]; then
        continue
    fi
    echo $i
done
```


