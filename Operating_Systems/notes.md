<h1 align="center" style="color: hsl(346, 84.50%, 62.20%);"> Operating Systems 💾 </h1>

<img src="./Assets/Users.jpg" alt="Users" style="width: 100%; border-radius: 10px;">

**Operating Systems**: An operating system (OS) is system software that acts a Intermiedate between Hardware and Software.


## History

<img src="./Assets/History.jpg" alt="History" style="width: 100%; border-radius: 10px;">

## [Types of Operating Systems](https://www.geeksforgeeks.org/types-of-operating-systems/)
### 1. Batch Operating Systems 

<div align="center">
    <img src="./Assets/Batch.webp" alt="History" style="width: 60%; border-radius: 10px;">
</div>

This is used in the Third Generation Computers. 
- The System works in Batches (Compilation of same tasks)
- They where not Real-Time (No real time user Interaction)
- Used In First Generation Computers.
- **Ex** : IBM’s OS/360

### 2. Time-Sharing (Multi-Tasking) Operating Systems

<div align="center">
    <img src="./Assets/Time_sharing.webp" alt="History" style="width: 60%; border-radius: 10px;">
</div>

This is used in the Second Generation Computers, when Batch became slow and CPU have to sit idle. 

- In this, Users shares the **single** CPU and then it works as a Round Robin with a shared time called **Time Slice** or **Quantum**
- High Overhead (Use of Resources) and can Have Security vulnerabilites with memory leaks 
- **Ex** : Unix, Windows NT

### 3. Multi-Processing 

<div align="center">
    <img src="./Assets/Multi_Processing.png" alt="History" style="width: 60%; border-radius: 10px;">
</div>

This is used in the Fourth Generation Computers, Where we can have multiple processors and they can run multi tasks aswell.
- In this User have multiple Processor and work can be parallized and can be done by any of them. 
    - Symmetric Multiprocessing (SMP)
    - Asymmetric Multiprocessing (ASMP)
- **Ex** : Linux, Windows 95, MacOS and all new OS

### 4. Distributed Operating Systems

<div align="center">
    <img src="./Assets/DOS.webp" alt="Distributed OS" style="width: 60%; border-radius: 10px;">
</div>

Distributed Operating Systems manage a group of independent computers and make them appear to the users as a single computer. These systems coordinate the processing and sharing of resources across multiple machines connected via a network.Like figma.

- Resources and tasks are distributed among multiple computers.
- Provides better performance, reliability, and scalability.
- Users can access remote resources as if they are local.
- **Ex**: Amoeba, Plan 9, Google Fuchsia

## Components of OS

<div align="center">
    <img src="./Assets/Component.webp" alt="Distributed OS" style="width: 100%; border-radius: 10px;">
</div>

### [System Calls](https://www.youtube.com/watch?v=H4SDPLiUnv4)

<div align="center">
    <img src="./Assets/syscall.webp" alt="Distributed OS" style="width: 60%; border-radius: 10px;">
</div>

System calls provide the interface between user applications and the operating system kernel. They allow user-level processes to request services(Hardware operations) such as file operations, process control, and communication from the OS.

- They are just API to Hardware.
- A system call makes a interupt(switch of CPU mode), which grants the control of the process to OS so it can use hardware.
- Examples: `read()`, `write()`, `fork()`, `exec()`, `open()`, `close()`
- System calls are essential for security and stability, as they prevent direct hardware access by user programs.
- They can cause compatibility problems like windows have different systemcalls and linux have different.

# Process Management:

## Process - 
Program while execution is called a Process. 

![Process Illustration](./Assets/Process_States.jpg)

## States of a Process

A process in an operating system goes through different states during its lifecycle. The five primary states are:

1. **New**: The process is being created and has not yet been admitted to the pool of executable processes.
2. **Ready**: The process is loaded into main memory and is waiting to be assigned to a CPU for execution.
3. **Running**: The process is currently being executed by the CPU.
4. **Waiting (Blocked)**: The process cannot proceed until some event occurs (such as completion of I/O or receipt of a signal).
5. **Terminated**: The process has finished execution and is being removed from the system.

## Process Control Block 
A Process Control Block (PCB) is a data structure used by the operating system to store all information about a process.

- The PCB is crucial for context switching.

![Process Control Block](./Assets/Process_control_block.webp)

## Process Schedulling 
Process scheduling is the method by which the operating system decides the order in which processes access the CPU.

### Process Queues

Operating systems use different queues to manage processes at various stages:

- **Job Queue**: Contains all processes in the system. When a process is created, it enters the job queue.
- **Ready Queue**: Holds processes that are loaded in main memory and are ready to run, waiting for CPU allocation.
- **I/O Queue**: Contains processes waiting for I/O operations to complete (like disk or network access).

![Process Queues](./Assets/Process_Scheulling.jpg)
![Context Switching](./Assets/Context_Switching.png)

### Category of Process Schedulling: 
#### Preemptive vs Non-Preemptive Scheduling

- **Preemptive Scheduling**: The operating system can interrupt and suspend a currently running process to assign the CPU to another process. This allows better responsiveness and ensures that high-priority tasks are served quickly. Examples include Round Robin and Priority Scheduling (preemptive).

- **Non-Preemptive Scheduling**: Once a process starts executing, it runs to completion or until it voluntarily yields the CPU (e.g., waiting for I/O). The OS does not forcibly take away the CPU from a running process. Examples include First-Come, First-Served (FCFS) and Shortest Job First (non-preemptive).

Preemptive scheduling is generally preferred in time-sharing systems, while non-preemptive is simpler and used in batch systems.

#### Types of Schedulers
---
Operating systems use three main types of schedulers to manage processes at different stages:

1. **Long-Term Scheduler (Job Scheduler):**
    - Decides which processes are admitted from the job pool (secondary storage) into the ready queue (main memory).
    - Controls the degree of multiprogramming (number of processes in memory).
    - Invoked less frequently than other schedulers.
    - If too many processes are admitted, the system may become overloaded.

2. **Short-Term Scheduler (CPU Scheduler):**
    - Selects which process in the ready queue will be executed next by the CPU.
    - Runs very frequently (milliseconds).
    - Responsible for context switching between processes.

3. **Medium-Term Scheduler (Swapper):**
    - Manages the swapping of processes in and out of main memory to control the mix of CPU-bound and I/O-bound processes.
    - Suspends and resumes processes by moving them between main memory and secondary storage.
    - Helps improve process mix and system performance, especially in systems with limited memory.

### Process Operations 
#### Creation of a Process

A process can be created by another process using system calls such as `fork()` (in Unix/Linux) or `CreateProcess()` (in Windows). The creating process is called the **parent**, and the new process is the **child**.

#### Termination of a Process

A process is terminated when it has completed its execution or is explicitly killed by the operating system or another process.

#### InterProcess Communication

# [Kernal vs Operating System - ](https://www.geeksforgeeks.org/difference-between-operating-system-and-kernel/)
Kernal is a part of the Operating System, there are different types of kernal on the basis of how much work of Operating system is done by kernal.

[Here](https://www.geeksforgeeks.org/kernel-in-operating-system/)

![Kernel vs Operating System](./Assets/Linux_Kernal_Diagram.svg)

# [Shell](./Shell.md)
Shell are the Command line interface between Kernal and the User.There are different shells out there - 
bash, powershell,zsh, fish etc.

# Files : 
In linux everything is a file, if its a directory that means it is a file. a symbolic link everything is a file. 
opposite to file is a Process.

## File Permission - 

![file](./Assets/Linux_file_permissions.png)

you can change the permissions using - 
```bash
    chmod u+r ./file_name 
    # chmod u/g/o +/- r/w/x 
```

## Type of files - 
        -: Regular file
        d: Directory
        l: Symbolic link
        c: Character device file
        b: Block device file
        p: Named pipe (FIFO)
        s: Sockets


# [File System :](https://web.cs.wpi.edu/~rek/DCS/D04/UnixFileSystems.html)
The disk Partitions are called file system. Use `dumpe2fs` to get the file system information. 

## Types of File System Blocks in Linux

A Linux file system organizes data on disk using several types of blocks, each serving a specific purpose:

### 1. Boot Block
- Located at the very beginning of the file system.
- Contains the boot loader or code required to boot the operating system.
- Only present in bootable partitions.

### 2. Super Block
- Stores critical information about the file system, such as:
    - File system type
    - Size
    - Status
    - Metadata about other blocks (e.g., number of inodes, data blocks)
- Essential for mounting and managing the file system.

### 3. Inode Block
- Contains inodes, which store metadata about files and directories:
    - File type, permissions, owner, timestamps
    - Pointers to data blocks
- Each file or directory has a unique inode.

### 4. Data Block
- Stores the actual contents of files and directories.
- Most of the disk space is allocated to data blocks.
- Inodes point to these blocks to access file data.

These blocks together enable efficient storage, retrieval, and management of files in Linux file systems.