# How to use Firewalld service to enable/disable port in Linux machine

Firewalld is Linux firewall management tool with support for IPv4, IPv6, Ethernet bridges and IPSet firewall settings. 

It acts as a front-end to Linux kernel’s netfilter framework. 

Firewalld is a default firewall management software on RHEL 7 family.

### How to install firewalld
`Ubuntu`
```
sudo apt install firewalld -y
```
![firewalld](/content/linux/tutorials/firewalld/images/firewalld-install.png)

### Check the status of firewalld service
```
sudo systemctl status firewalld
```
![firewalld](/content/linux/tutorials/firewalld/images/firewalld-status.png)

### To list all firewall rules configured
```
firewall-cmd --list-all
```
![firewalld](/content/linux/tutorials/firewalld/images/firewalld-list-all.png)

By default all ports are blocked when firewall is enabled except ssh and dhcpv6-client services.

### To enable TCP port
Lets enable port 8080
```
sudo firewall-cmd --add-port=8080/tcp --permanent
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```
![firewalld](/content/linux/tutorials/firewalld/images/firewalld-add-port.png)

### Get a list of all services that can be enabled using a service name
```
sudo firewall-cmd --get-services
```

### Enable service port using service name
Lets enable Enable http service
```
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```
![firewalld](/content/linux/tutorials/firewalld/images/firewalld-add-services.png)

### To disable enabled TCP port
Lets disable port 8080
```
sudo firewall-cmd --remove-port=8080/tcp --permanent
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```
![firewalld](/content/linux/tutorials/firewalld/images/firewalld-remove-port.png)

### To uninstall firewalld
```
sudo apt autoremove firewalld -y
```
![firewalld](/content/linux/tutorials/firewalld/images/firewalld-uninstall.png)

### Reference
* https://computingforgeeks.com/install-and-use-firewalld-on-ubuntu-18-04-ubuntu-16-04/