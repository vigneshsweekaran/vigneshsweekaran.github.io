# How to install Tomcat

### Two ways of installing tomcat
* Using apt package manager in ubuntu machine
* Using Docker container

### Install Tomcat 9 using apt in ubuntu 20.04

Update the packages usimg apt
```
sudo apt update
```

Install Tomcat 9
```
sudo apt install tomcat9 tomcat9-admin
```

Check the status of tomcat installation
```
sudo systemctl status tomcat9
```

Enable the tomcat to start automatically after reboot
```
sudo systemctl enable tomcat9
```

To access the tomcat in browser
Open the browser and type the ipaddress and port number to access the Tomcat application `http://<ip-address>:8080` By default tomcat starts in port 8080.

![tomcat-home](/content/tomcat/tutorials/tomcat-home.png)

All the configuration files for tomcat9 are located in **/var/lib/tomcat9** folder

To change the port number, open the /var/lib/tomcat9/conf/
##### To change the port number or any configuration, update the files in the /var/lib/tomcat9 folder

##### Other References:
* [Reference 1](https://linuxconfig.org/ubuntu-20-04-tomcat-installation)