
# 🐧 Linux OS Internals: Hands-On Cheat Sheet

Explore and interact with OS Components & Services right on your Linux system.

---

## 📦 Process Management

- **See running processes**
  ```bash
  ps aux
  ```

- **Interactive process viewer**
  ```bash
  sudo apt install htop
  htop
  ```

- **View parent-child process relationships**
  ```bash
  pstree
  ```

- **Start a background process**
  ```bash
  gedit &
  ```

## 📊 Memory Management

- **Check memory usage**
  ```bash
  free -h
  ```

- **Virtual memory stats**
  ```bash
  vmstat
  ```

- **Detailed memory info**
  ```bash
  cat /proc/meminfo
  ```

## 💾 File Management

- **List files with permissions**
  ```bash
  ls -l
  ```

- **File operations**
  ```bash
  touch file.txt
  rm file.txt
  mv old.txt new.txt
  ```

- **Check open files by a process**
  ```bash
  lsof -p <PID>
  ```

## 🔌 Device Management

- **List block devices**
  ```bash
  lsblk
  ```

- **List all devices**
  ```bash
  ls /dev
  ```

- **Check USB devices**
  ```bash
  lsusb
  ```

## 🧠 System Calls

- **Trace system calls made by a command**
  ```bash
  strace ls
  ```

## 🛡️ Security & User Management

- **List users**
  ```bash
  cat /etc/passwd
  ```

- **Check file permissions**
  ```bash
  ls -l file.txt
  ```

- **Modify file permissions**
  ```bash
  chmod 755 file.txt
  ```

## 📶 Networking

- **List open ports and connections**
  ```bash
  netstat -tulpn
  ```

- **Ping test**
  ```bash
  ping google.com
  ```

## 📖 Kernel & OS Info

- **Kernel version**
  ```bash
  uname -a
  ```

- **Detailed kernel info**
  ```bash
  cat /proc/version
  ```

## 🔥 Pro Tip

- **Install tools if missing**
  ```bash
  sudo apt install net-tools htop strace psmisc
  ```

## 🎁 Bonus Challenge

- **Build a simple shell in C using `fork()`, `execvp()`, `wait()`**

---

Save this cheat sheet and hack your way into OS internals like a pro! 🐧🔥
