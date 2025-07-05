This module is all about the Services and how things work in Linux. 

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