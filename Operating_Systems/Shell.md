# Shell
Shell are the Command line interface between Kernal and the User.There are different shells out there - 
bash, powershell, zsh, fish etc.

## Basic Commands - 

- `pwd` - Print working directory
- `ls` - List directory contents
- `file` -  Gives the detail of the file.
- `cd` - Change directory
- `mkdir` - Make new directory
- `rmdir` - Remove empty directory
- `touch` - Create empty file
- `cp` - Copy files or directories
- `mv` - Move or rename files or directories
- `rm` - Remove files or directories
- `cat` - Concatenate and display file content
- `less` / `more` - View file content page by page
- `echo` - Display a line of text
- `man` - Show manual for a command
- `chmod` - Change file permissions
- `chown` - Change file owner and group
- `find` - Search for files in a directory hierarchy
- `grep` - Search text using patterns
- `ps` - Display running processes
- `kill` - Terminate processes
- `top` / `htop` - Display system processes and resource usage
- `df` - Show disk space usage
- `du` - Show directory space usage
- `ifconfig` / `ip` - Network interface configuration
- `ping` - Test network connectivity
- `ssh` - Secure shell remote login
- `scp` - Secure copy files between hosts
- `sudo` - Execute a command as another user (usually root)
- `history` - Show command history
- `clear` - Clear the terminal screen

## Intermediate Commands - 

## Wild Cards - 

| Wildcard | Meaning                                         | Example                                   |
|----------|-------------------------------------------------|-------------------------------------------|
| `*`      | Matches zero or more characters                 | `ls *.txt` → all `.txt` files             |
| `?`      | Matches exactly one character                   | `ls file?.txt` → `file1.txt`              |
| `[...]`  | Matches any one character inside brackets       | `ls file[123].txt` → `file1.txt file2.txt file3.txt` |
| `{...}`  | Matches any comma-separated value inside braces | `ls {file1,file2}.txt`                    |


### Test this - 
Run this to generate some test files.
```bash
    #!/bin/bash

    mkdir -p test_folder/
    cd ./test_folder/

    n=18

    for((i=0; i < n ;i++));
    do
        touch "file$i.txt"
    done
```

now 
```bash
    ls ./*              # This will give all the files.
    ls ./file1?.txt     # This will list ./file10.txt ./file11.txt ./file12.txt ./file13.txt ....
    ls ./file[123].txt  # This give ./file1.txt ./file2.txt ./file3.txt
    ls ./file{10,15}.txt 
    ls ./file{10..15}.txt  

```