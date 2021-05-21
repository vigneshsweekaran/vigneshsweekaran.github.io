# Tomcat Installation

### Two ways of installing tomcat
* Uisng apt
* Using a archive file (.tgz)

### Install Tomcat 9 using apt in ubuntu 20.04

Reference: https://linuxconfig.org/ubuntu-20-04-tomcat-installation

##### Update the packages usimg apt
> sudo apt update

##### Install Tomcat 9
> sudo apt install tomcat9 tomcat9-admin

##### Check the status of tomcat installation
> sudo systemctl status tomcat9

##### Enable to tomcat to start automatically after reboot
> sudo systemctl enable tomcat9

##### To access the tomcat in browser
By default tomcat starts in port 8080. Open the browser and use `http://<ip-address>:8080`
![tomcat-home]()

##### To change the port no of tomcat
All the configuration files for tomcat9 are located in **/var/lib/tomcat9** folder

To change the port no, open the /var/lib/tomcat9/conf/
##### To change the port no or any configuration for , update the files in the /var/lib/tomcat9 folder
