# Linux commands part-9

### Youtube

[![Tamil Linux commands part-8](/content/linux/tutorials/images/linux-basics.png)](https://www.youtube.com/watch?v=yUyWqj9bYeQ)

### find
find command is used to find the files or directories

```
[opc@new-k8s ~]$ ll
total 3072036
-rw-rw-r--. 1 opc  opc         852 Apr 15 03:15 fruits.txt
-rw-rw-r--. 1 opc  opc          43 Apr 19 12:38 hello.txt
-rw-rw-r--. 1 opc  opc        9943 Apr 19 11:16 india.txt
-rwxrwxr-x. 1 opc  opc          81 Apr 15 13:27 newtest
-rw-rw-r--. 1 opc  opc        2026 Apr 19 12:06 output.json
drwxrwxr-x. 2 opc  opc          25 Nov 26  2021 prometheus
-rw-rw-r--. 1 opc  opc         282 Apr 19 12:34 states.txt
-rw-r--r--. 1 root root 3145728000 Jan 11  2022 swapfile
drwxrwxr-x. 4 opc  opc         100 Apr 15 13:04 test
-rw-rw-r--. 1 opc  opc          74 Apr 19 12:11 test.json
```
```
[opc@new-k8s ~]$ pwd
/home/opc
```
```
[opc@new-k8s ~]$ find ./ -name test.json
./test.json
```

You can also find the files in diferrent folder

```
[opc@new-k8s ~]$ pwd
/home/opc
```
```
[opc@new-k8s ~]$ ll /tmp
total 8
-rw-------. 1 root root 1097 Apr 20 08:40 dhclient-exit-hooksPuY.log
-rw-rw-r--. 1 opc  opc  2026 Apr 20 11:14 output.json
```
```
[opc@new-k8s ~]$ find /tmp -name output.json
/tmp/output.json
```

You can also find the file in whole file system, but it will take some time, it will check all files and directories

```
find: ‘/var/spool/at’: Permission denied
find: ‘/root’: Permission denied
/tmp/output.json
find: ‘/usr/share/polkit-1/rules.d’: Permission denied
find: ‘/usr/libexec/initscripts/legacy-actions/auditd’: Permission denied
/home/opc/output.json
find: ‘/home/vignesh’: Permission denied
find: ‘/opt/containerd’: Permission denied
```

### Search for empty files and directories and using find

```
[opc@new-k8s ~]$ find ./ -empty
./test/server
./test/client/server-client
./test/hello.txt
./test/vignesh/mani/raghav
```

### Search for empty files only

```
[opc@new-k8s ~]$ find ./ -type f -empty
./test/server
./test/client/server-client
./test/hello.txt
```

### Search for empty directories only
```
[opc@new-k8s ~]$ find ./ -type d -empty
./test/vignesh/mani/raghav
```

### Search for empty file and delete those files

```
find ./ -type f -empty -exec rm -i {} \;
```

### locate

locate command used for quickly finding files and directories

locate command doesn't search the entire filesystem, but looks through a regularly updated file database in the system. Thus, the search completes much faster

-i --> ignore case

```
[opc@new-k8s ~]$ locate hello
/home/opc/hello.txt
/home/opc/test/hello.txt
```

Sometimes, even delete files are shown in the output of locate command. Because its not updated yet in locate database

-e argument to search the filesystem

```
[opc@new-k8s ~]$ pwd
/home/opc
```
```
[opc@new-k8s ~]$ ll
total 3072032
-rw-rw-r--. 1 opc  opc         852 Apr 15 03:15 fruits.txt
-rw-rw-r--. 1 opc  opc           0 Apr 20 11:46 hello.txt
-rw-rw-r--. 1 opc  opc        9943 Apr 19 11:16 india.txt
-rwxrwxr-x. 1 opc  opc          81 Apr 15 13:27 newtest
-rw-rw-r--. 1 opc  opc        2026 Apr 19 12:06 output.json
drwxrwxr-x. 2 opc  opc          25 Nov 26  2021 prometheus
-rw-rw-r--. 1 opc  opc         282 Apr 19 12:34 states.txt
-rw-r--r--. 1 root root 3145728000 Jan 11  2022 swapfile
drwxrwxr-x. 4 opc  opc          86 Apr 20 11:46 test
-rw-rw-r--. 1 opc  opc          74 Apr 19 12:11 test.json
```
```
[opc@new-k8s ~]$ locate hello.txt
/home/opc/hello.txt
/home/opc/test/hello.txt
```
```
[opc@new-k8s ~]$ rm -f hello.txt
```
```
[opc@new-k8s ~]$ locate hello.txt
/home/opc/hello.txt
/home/opc/test/hello.txt
```
```
[opc@new-k8s ~]$ locate -e hello.txt
/home/opc/test/hello.txt
```

### sort

```
[opc@new-k8s ~]$ cat states.txt
Andhra Pradesh
Arunachal Pradesh
Assam
Bihar
Chhattisgarh
Gujarat
Haryana
Tamil Nadu
Himachal Pradesh
Jharkhand
Karnataka
Kerala
Maharashtra
Madhya Pradesh
Manipur
Meghalaya
Mizoram
Nagaland
Odisha
Punjab
Rajasthan
Sikkim
Tripura
Telangana
Uttar Pradesh
Uttarakhand
West Bengal
Goa
```
```
[opc@new-k8s ~]$ cat states.txt | sort
Andhra Pradesh
Arunachal Pradesh
Assam
Bihar
Chhattisgarh
Goa
Gujarat
Haryana
Himachal Pradesh
Jharkhand
Karnataka
Kerala
Madhya Pradesh
Maharashtra
Manipur
Meghalaya
Mizoram
Nagaland
Odisha
Punjab
Rajasthan
Sikkim
Tamil Nadu
Telangana
Tripura
Uttarakhand
Uttar Pradesh
West Bengal
```

### uniq
```
[opc@new-k8s ~]$ cat names.txt
I love devops.
I love devops.
I love devops.

I love music.
I love movies.
I love movies.
[opc@new-k8s ~]$ cat names.txt | uniq
I love devops.

I love music.
I love movies.
[opc@new-k8s ~]$ cat names.txt | uniq -c
      3 I love devops.
      1
      1 I love music.
      2 I love movies.
```

Lines which are repeated only
```
[opc@new-k8s ~]$ uniq -d names.txt
I love devops.
I love movies.
```

Lines which are uniq
```
[opc@new-k8s ~]$ uniq -u names.txt

I love music.
```

### systemctl

systemctl start service_name

systemctl stop service_name

systemctl restart service_name

systemctl status service_name

systemctl enable service_name 

systemctl disable service_name


### service
service service_name start

service service_name stop

service service_name restart

service service_name status

### journactl
journalctl -u service_name

### ps -ef
ps -ef | grep -i sshd

