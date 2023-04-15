# Linux commands part-5

### Shell varibales
Shell variables means only accessible within the shell script

```
[opc@new-k8s ~]$ clear
[opc@new-k8s ~]$ NAME="vignesh"
[opc@new-k8s ~]$ echo $NAME
vignesh
[opc@new-k8s ~]$ printenv NAME

printenv NAME   -- dosen't show anything, since its not a environment variable

Even in env, printenv command the NAME variable will not been shown
```

### Creating Environment variable
Environment Variables are accesible to child process also
```
[opc@new-k8s ~]$ export NEW_NAME="Raghav"
[opc@new-k8s ~]$ echo $NEW_NAME
Murugan
[opc@new-k8s ~]$ printenv NEW_NAME
Raghav
[opc@new-k8s ~]$ env
XDG_SESSION_ID=172502
HOSTNAME=new-k8s
SELINUX_ROLE_REQUESTED=
TERM=xterm
SHELL=/bin/bash
HISTSIZE=1000
SELINUX_USE_CURRENT_RANGE=
SSH_TTY=/dev/pts/0
USER=opc
MAIL=/var/spool/mail/opc
PATH=/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/opc/.local/bin:/home/opc/bin
PWD=/home/opc
LANG=en_US.UTF-8
NEW_NAME=Raghav
SELINUX_LEVEL_REQUESTED=
HISTCONTROL=ignoredups
SHLVL=1
```

### Environment variable - PATH
Most of the linux commands can be executed from any path/directory, since the command paths are added to PATH environment variable

```
[opc@new-k8s ~]$ echo $PATH
/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/opc/.local/bin:/home/opc/bin
```
### Creating small shell script program/comamnd and exporting that path to PATH variable

Shell script to print the user name, hostname, date, present working directory and the files in that directory (Filename - myinfo) 
```
#!/bin/bash

echo $USER
hostname
date
pwd
ls -l
```

```
[opc@new-k8s ~]$ ll
total 3072008
-rw-rw-r--. 1 opc  opc            852 Apr 15 03:15 fruits.txt
-rw-rw-r--. 1 opc  opc             48 Apr 15 10:56 myinfo
drwxrwxr-x. 2 opc  opc             25 Nov 26  2021 prometheus
-rw-rw----. 1 opc  vignesh          0 Apr 15 04:19 random.txt
-rw-r--r--. 1 root root    3145728000 Jan 11  2022 swapfile
drwxrwxr-x. 4 opc  vignesh        100 Apr 13 12:46 test
[opc@new-k8s ~]$ cat myinfo
#!/bin/bash

echo $USER
hostname
date
pwd
ls -l
[opc@new-k8s ~]$ chmod +x myinfo
[opc@new-k8s ~]$ ll
total 3072008
-rw-rw-r--. 1 opc  opc            852 Apr 15 03:15 fruits.txt
-rwxrwxr-x. 1 opc  opc             48 Apr 15 10:56 myinfo
drwxrwxr-x. 2 opc  opc             25 Nov 26  2021 prometheus
-rw-rw----. 1 opc  vignesh          0 Apr 15 04:19 random.txt
-rw-r--r--. 1 root root    3145728000 Jan 11  2022 swapfile
drwxrwxr-x. 4 opc  vignesh        100 Apr 13 12:46 test
[opc@new-k8s ~]$ myinfo
bash: myinfo: command not found
[opc@new-k8s ~]$ ./myinfo
opc
new-k8s
Sat Apr 15 10:56:49 GMT 2023
/home/opc
total 3072008
-rw-rw-r--. 1 opc  opc            852 Apr 15 03:15 fruits.txt
-rwxrwxr-x. 1 opc  opc             48 Apr 15 10:56 myinfo
drwxrwxr-x. 2 opc  opc             25 Nov 26  2021 prometheus
-rw-rw----. 1 opc  vignesh          0 Apr 15 04:19 random.txt
-rw-r--r--. 1 root root    3145728000 Jan 11  2022 swapfile
drwxrwxr-x. 4 opc  vignesh        100 Apr 13 12:46 test
[opc@new-k8s ~]$ pwd
/home/opc
[opc@new-k8s ~]$ echo $PATH
/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/opc/.local/bin:/home/opc/bin
[opc@new-k8s ~]$ export PATH=$PATH:/home/opc
[opc@new-k8s ~]$
[opc@new-k8s ~]$
[opc@new-k8s ~]$ myinfo
opc
new-k8s
Sat Apr 15 10:57:54 GMT 2023
/home/opc
total 3072008
-rw-rw-r--. 1 opc  opc            852 Apr 15 03:15 fruits.txt
-rwxrwxr-x. 1 opc  opc             48 Apr 15 10:56 myinfo
drwxrwxr-x. 2 opc  opc             25 Nov 26  2021 prometheus
-rw-rw----. 1 opc  vignesh          0 Apr 15 04:19 random.txt
-rw-r--r--. 1 root root    3145728000 Jan 11  2022 swapfile
drwxrwxr-x. 4 opc  vignesh        100 Apr 13 12:46 test
[opc@new-k8s ~]$
[opc@new-k8s ~]$
[opc@new-k8s ~]$ cd /tmp
[opc@new-k8s tmp]$ pwd
/tmp
[opc@new-k8s tmp]$ ll
total 4
-rw-------. 1 root root 1097 Apr 15 10:02 dhclient-exit-hooksRZi.log
drwx------. 3 root root   17 Jul  4  2021 systemd-private-c60b800098604975be26dbbb3215bd47-chronyd.service-ZzaKpF
drwx------. 3 root root   17 Mar 27 20:01 systemd-private-c60b800098604975be26dbbb3215bd47-unified-monitoring-agent.service-561YDH
-rw-rw-r--. 1 opc  opc     0 Apr 12 12:30 vignesh.txt
[opc@new-k8s tmp]$ myinfo
opc
new-k8s
Sat Apr 15 10:58:09 GMT 2023
/tmp
total 4
-rw-------. 1 root root 1097 Apr 15 10:02 dhclient-exit-hooksRZi.log
drwx------. 3 root root   17 Jul  4  2021 systemd-private-c60b800098604975be26dbbb3215bd47-chronyd.service-ZzaKpF
drwx------. 3 root root   17 Mar 27 20:01 systemd-private-c60b800098604975be26dbbb3215bd47-unified-monitoring-agent.service-561YDH
-rw-rw-r--. 1 opc  opc     0 Apr 12 12:30 vignesh.txt
```

### alias command
Creating shortcut commands

Creating command "myls" which will print date and show the files
```
[opc@new-k8s tmp]$ alias myls="date && ls"
[opc@new-k8s tmp]$ myls
Sat Apr 15 11:01:37 GMT 2023
dhclient-exit-hooksRZi.log                                               systemd-private-c60b800098604975be26dbbb3215bd47-unified-monitoring-agent.service-561YDH
systemd-private-c60b800098604975be26dbbb3215bd47-chronyd.service-ZzaKpF  vignesh.txt
```