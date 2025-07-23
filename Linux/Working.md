This module is all about the Services and how things work in Linux. 

Arch - Arch is a Rolling Release Linux, that means it doesn't have fixed point updates like Ubuntu 24.04 to 26.04 etc. it is downloaded once and then updates continously. 

# Packages in Arch: 
done by Pacman 

## Managing Packages with Pacman

Pacman is the package manager for Arch Linux. Here are some common commands:

- **Install a package:**
    ```bash
    sudo pacman -S <package_name>
    ```
    Replace `<package_name>` with the name of the package you want to install.

- **Update all packages:**
    ```bash
    sudo pacman -Syu
    ```

- **Search for a package:**
    ```bash
    pacman -Ss <search_term>
    ```

- **Remove a package:**
    ```bash
    sudo pacman -R <package_name>
    ```

- **Remove a package and its unused dependencies:**
    ```bash
    sudo pacman -Rs <package_name>
    ```

- **List all installed packages:**
    ```bash
    pacman -Q
    ```

- **Show information about a package:**
    ```bash
    pacman -Si <package_name>
    ```

- **Clean the package cache:**
    ```bash
    sudo pacman -Sc
    sudo pacman -Scc
    ```

    ## Understanding mirrorlist and Pacman’s Working

    ### Mirrorlist

    - The `mirrorlist` is a configuration file (`/etc/pacman.d/mirrorlist`) that lists servers (mirrors) from which Pacman downloads packages and updates.
    - Mirrors are ranked by speed and reliability; having a good mirrorlist ensures faster and more reliable downloads.
    - You can edit the mirrorlist to prioritize servers closer to your location for better performance.
    - Tools like `reflector` can automatically sort and update your mirrorlist based on speed or country.

    ### Example: Updating the Mirrorlist with Reflector

    To update your mirrorlist with the 20 most recently updated and fastest mirrors, you can use:

    ```bash
    sudo reflector --latest 20 --sort rate --save /etc/pacman.d/mirrorlist
    ```

    - `sudo`: Runs the command with administrative privileges (required to write to `/etc/pacman.d/mirrorlist`).
    - `reflector`: A tool to retrieve and sort Arch Linux mirrors.
    - `--latest 20`: Selects the 20 most recently updated mirrors.
    - `--sort rate`: Sorts the mirrors by download speed (rate).
    - `--save /etc/pacman.d/mirrorlist`: Saves the resulting mirrorlist to the system's mirrorlist file.

    This ensures Pacman uses the fastest and most up-to-date mirrors for package downloads.

    ### How Pacman Works

    - When you run `pacman -Syu`, Pacman:
        1. Downloads the latest package databases from the mirrors listed in the mirrorlist.
        2. Compares installed packages with the latest versions.
        3. Resolves dependencies and downloads required packages.
        4. Installs or updates packages, ensuring system consistency.
    - Pacman uses binary packages, making installations and updates fast.
    - Configuration is managed via `/etc/pacman.conf`, where you can enable/disable repositories and set options.

    **Tip:** Keeping your mirrorlist updated and using reliable mirrors helps avoid slow downloads and package errors.


## Network Services in Linux

Linux systems use various tools to manage network connections. Two of the most common are **Network Manager** and **systemd-networkd**, but there are other alternatives as well.

### Network Manager

**Network Manager** is a dynamic network control and configuration daemon. It is designed for desktop and laptop environments, providing easy management of wired, wireless, VPN, and mobile broadband connections. It offers both graphical and command-line interfaces (`nmcli`, `nmtui`).

```bash 
nmcli // Network Manager. 
nmcli device list 
nmcli device wifi list 
nmcli device wifi connect <SSID> --ask 
```


### iwd and wpa_supplicant

#### iwd (In my arch.)

**iwd** (iNet wireless daemon) is a modern wireless management daemon developed by Intel. It aims to replace older tools like wpa_supplicant, focusing on simplicity, performance, and minimal dependencies. iwd is commonly used on systems where lightweight and efficient Wi-Fi management is desired, such as embedded devices and minimalist distributions. It can be used standalone or integrated with Network Manager.

#### wpa_supplicant

**wpa_supplicant** is a widely-used backend service for managing wireless networks on Linux. It handles authentication and encryption for Wi-Fi connections, supporting WPA, WPA2, and WPA3 standards. Many network management tools, including Network Manager and systemd-networkd, rely on wpa_supplicant to handle the low-level details of wireless connectivity.

### systemd-networkd

**systemd-networkd** is a system service that manages network configurations. It is lightweight and well-suited for servers and headless systems. Configuration is done via simple `.network` and `.netdev` files.

### Other Alternatives

- **ifupdown**: Traditional tool for configuring network interfaces, using `/etc/network/interfaces`.
- **Wicd**: A network manager with both GUI and CLI, now less commonly used.
- **ConnMan**: Lightweight connection manager for embedded devices.
- **netctl**: Arch Linux-specific tool for managing network profiles.

Each tool has its strengths and is suited to different use cases, from desktops to servers and embedded systems.



# Desktop Layers 

A typical Linux desktop environment is composed of several layers, each responsible for different aspects of the graphical user experience:

## 1. Display Server Protocol

- **X11 (X Window System):** The traditional protocol for managing graphical displays on Unix-like systems. It handles input (keyboard, mouse) and output (drawing windows), but is considered legacy.
- **Wayland:** A modern replacement for X11, designed for simplicity, security, and performance. Wayland compositors manage both the display and input directly, reducing complexity.

## 2. Display Server / Compositor

- **Xorg:** The most common X11 server implementation.
- **Wayland Compositors:** Examples include **Weston** (reference), **Mutter** (GNOME), **KWin** (KDE), and **Sway** (i3-compatible).

## 3. Window Manager

- **Stacking/Compositing Window Managers:** Manage window placement, decorations, and effects. Examples: **Mutter** (GNOME), **KWin** (KDE), **Openbox**, **i3** (tiling).
- On Wayland, the compositor often includes window management.

## 4. Desktop Environment

- Provides a cohesive user interface, integrating window management, panels, menus, and system settings.
- Popular environments:
    - **GNOME:** Uses GTK, Mutter, and supports both X11 and Wayland.
    - **KDE Plasma:** Uses Qt, KWin, and supports both X11 and Wayland.
    - **XFCE, LXQt, Cinnamon, MATE:** Lightweight alternatives using either GTK or Qt.

## 5. Widget Toolkits

- **GTK (GIMP Toolkit):** Used by GNOME, XFCE, Cinnamon, and others for building graphical applications.
- **Qt:** Used by KDE Plasma and LXQt for application development.
- Applications built with these toolkits integrate with the look and feel of the desktop environment.

## 6. Applications

- End-user programs (file managers, browsers, editors) built using GTK, Qt, or other toolkits.

---

**Summary Diagram:**

```
Applications (GTK, Qt, etc.)
                ↓
Widget Toolkit (GTK, Qt)
                ↓
Desktop Environment (GNOME, KDE, etc.)
                ↓
Window Manager / Compositor (Mutter, KWin, etc.)
                ↓
Display Server Protocol (Wayland, X11)
                ↓
Hardware (GPU, Input Devices)
```

Each layer builds on the one below, providing modularity and flexibility in Linux desktop environments.


Hyprland is not a Desktop envirnment, as they are prewritten, it is a wayland compositor itself. 




Theme for GTK & QT - Catppuccin