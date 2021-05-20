# Yum

### Adding new yum repo to yum
Create the name.repo file and add the following content in that
```
[SANDBOX]
name=SANDBOX Repository (SANDBOX)
baseurl=https://repo_url/yum-repo-name
enabled=1
protect=0
gpgcheck=0
metadata_expire=30s
autorefresh=1
type=rpm-md
sslverify=0
priority=1
```
Then place this file in this folder /etc/yum.repod.d/
  
### If you want to download only from jfrog artifact repository, delete all other files in /etc/yum.repod.d/

### Install rpm package
localinstall is used till Redhat5 version and this is no more required, kept for backward support. Till Redhat5 the "yum install" will install the packages from repos and
localinstall is used to install the locall rpm files. In Redhat 6 & &, we can install the both repo packages and loca rpm file using same "yum install" command

From Redhat8 its changed to "dnf install" and the "dnf localinstall" is simply an alias of "dnf install"
```
yum -y localinstall java.rpm
yum -y localinstall https://url/java.rpm
```
 
### To install gcc and make
yum groupinstall "Development Tools"

or (yum install make gcc)

### To install useradd and adduser in centos 7 docker Image
yum install shadow-utils

### To install ping in centos
yum install iputils
