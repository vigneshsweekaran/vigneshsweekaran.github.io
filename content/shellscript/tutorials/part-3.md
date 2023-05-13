## Shellscript Part - 3

### Youtube
[![Shellscript part-1](/content/shellscript/tutorials/images/part-3.png)](https://www.youtube.com/watch?v=DipqrRNJX1c)

### What is while loop ?

While loop is a control flow statement that allows code or commands to be executed repeatedly based on a given condition

The while loop continues to run till the condition is true, once the condition becomes false, it comes out of the loop

![While loop](/content/shellscript/tutorials/images/while.png)


### Conditions symbol/syntax

* == --> To check whether string is equal or not

```
STRING1 == STRING2

Eg:
DATA="devops"
if [ "$DATA" == "devops" ]
```

* != --> To check the strings are not equal

```
STRING1 != STRING2
```

* -eq --> To check whether INTEGER1 is equal to INTEGER2

```
INTEGER1 -eq INTEGER2

Eg:
INTEGER1=5
INTEGER2=5
if [ $INTEGER1 -eq $INTEGER2 ]
```

* -gt --> To check whether INTEGER1 is greater than INTEGER2

```
INTEGER1 -gt INTEGER2
```

* -ge --> To check whether INTEGER1 is greater than or equal to INTEGER2

```
INTEGER1 -ge INTEGER2
```

* -le --> To check whether INTEGER1 is lesser than INTEGER2

```
INTEGER1 -le INTEGER2
```

* -lt --> To check whether INTEGER1 is less than or equal to INTEGER2

```
INTEGER1 -lt INTEGER2
```

* -ne --> To check whether INTEGER1 is not equal to INTEGER2

```
INTEGER1 -ne INTEGER2
```

### Clone the shellscript git repo
```
[opc@new-k8s ~]$ git clone https://github.com/vigneshsweekaran/shellscript.git
Cloning into 'shellscript'...
remote: Enumerating objects: 233, done.
remote: Counting objects: 100% (233/233), done.
remote: Compressing objects: 100% (175/175), done.
remote: Total 233 (delta 110), reused 163 (delta 54), pack-reused 0
Receiving objects: 100% (233/233), 28.28 KiB | 0 bytes/s, done.
Resolving deltas: 100% (110/110), done.
```

```
[opc@new-k8s ~]$ cd shellscript/tutorials/part-3/
```

```
[opc@new-k8s part-3]$ ll
total 20
-rwxrwxr-x. 1 opc opc 115 May 13 10:31 1-while.sh
-rwxrwxr-x. 1 opc opc 117 May 13 10:31 2-while-single-line.sh
-rwxrwxr-x. 1 opc opc 101 May 13 10:31 3-read-a-file.sh
-rwxrwxr-x. 1 opc opc 440 May 13 10:31 4-read-and-write-to-different-file.sh
-rwxrwxr-x. 1 opc opc 251 May 13 10:31 5-break-infinite-loop.sh
```

### Basic while loop

```
#!/bin/bash

count=1

while [ $count -le 5 ]
do
  echo "The count value is ${count}"
  count=$(( $count + 1 ))
done
```

```
[opc@new-k8s part-3]$ ./1-while.sh 
The count value is 1
The count value is 2
The count value is 3
The count value is 4
```

### while loop using single line

```
#!/bin/bash

count=1; 

while [ $count -lt 5 ]; do echo "The count value is ${count}"; count=$(( $count + 1 )); done
```

```
[opc@new-k8s part-3]$ ./2-while-single-line.sh 
The count value is 1
The count value is 2
The count value is 3
The count value is 4
```

### How to read a file line by line using while loop

```
#!/bin/bash

FILE_NAME="/etc/os-release"

while read -r line; 
do 
  echo "$line";
done < $FILE_NAME
```

```
[opc@new-k8s part-3]$ ./3-read-a-file.sh 
NAME="Oracle Linux Server"
VERSION="7.9"
ID="ol"
ID_LIKE="fedora"
VARIANT="Server"
VARIANT_ID="server"
VERSION_ID="7.9"
PRETTY_NAME="Oracle Linux Server 7.9"
ANSI_COLOR="0;31"
CPE_NAME="cpe:/o:oracle:linux:7:9:server"
HOME_URL="https://linux.oracle.com/"
BUG_REPORT_URL="https://bugzilla.oracle.com/"

ORACLE_BUGZILLA_PRODUCT="Oracle Linux 7"
ORACLE_BUGZILLA_PRODUCT_VERSION=7.9
ORACLE_SUPPORT_PRODUCT="Oracle Linux"
ORACLE_SUPPORT_PRODUCT_VERSION=7.9
```

### How to filter the lines and write to different files

```
[opc@new-k8s part-3]$ cat 4-read-and-write-to-different-file.sh 
#!/bin/bash

SOURCE_FILE_NAME="/var/log/httpd/access_log"

TARGET_FOLDER=$(date +"%m%d%y-%H%M%S")

mkdir ${TARGET_FOLDER}

while read -r line; 
do
  if [[ "$line" == *Android* ]] || [[ "$line" == *android* ]]; then
    echo "$line" >> ${TARGET_FOLDER}/android.log
  elif [[ "$line" == *Windows* ]]; then
    echo "$line" >> ${TARGET_FOLDER}/windows.log
  else
    echo "$line" >> ${TARGET_FOLDER}/others.log
  fi
done < ${SOURCE_FILE_NAME}
```

```
[opc@new-k8s part-3]$ ./4-read-and-write-to-different-file.sh 
./4-read-and-write-to-different-file.sh: line 18: /var/log/httpd/access_log: Permission denied
```

Since we are reading the file `/var/log/httpd/access_log` owned by `root` user, we need to run the script with root access

```
[opc@new-k8s part-3]$ sudo ./4-read-and-write-to-different-file.sh
```

```
[opc@new-k8s part-3]$ ll
total 20
drwxr-xr-x. 2 root root  62 May 13 11:10 051323-111006
-rwxrwxr-x. 1 opc  opc  115 May 13 10:31 1-while.sh
-rwxrwxr-x. 1 opc  opc  117 May 13 10:31 2-while-single-line.sh
-rwxrwxr-x. 1 opc  opc  101 May 13 10:31 3-read-a-file.sh
-rwxrwxr-x. 1 opc  opc  440 May 13 10:31 4-read-and-write-to-different-file.sh
-rwxrwxr-x. 1 opc  opc  251 May 13 10:31 5-break-infinite-loop.sh
```

```
[opc@new-k8s part-3]$ cd 051323-111006/
```

```
[opc@new-k8s 051323-111006]$ ll
total 12
-rw-r--r--. 1 root root 1169 May 13 11:10 android.log
-rw-r--r--. 1 root root 3987 May 13 11:10 others.log
-rw-r--r--. 1 root root 2701 May 13 11:10 windows.log
```

```
[opc@new-k8s 051323-111006]$ cat android.log 
116.14.69.27 - - [13/May/2023:11:08:55 +0000] "GET / HTTP/1.1" 403 3539 "-" "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36"
```

```
[opc@new-k8s 051323-111006]$ cat windows.log 
128.14.209.162 - - [13/May/2023:04:46:00 +0000] "GET / HTTP/1.1" 403 3539 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"
```

```
[opc@new-k8s 051323-111006]$ cat others.log 
54.37.79.75 - - [13/May/2023:03:25:36 +0000] "POST / HTTP/1.1" 404 198 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36"
```

### How to create infinite loop using while

when we set the condition to true, the while loop continuously runs and it will not stop

![While loop](/content/shellscript/tutorials/images/while-infinite-loop.png)

To come out of the while loop, you have to run `break` command inside the while loop based on requirement to break the loop

### Breaking the infinite loop

```
#!/bin/bash

while [ true ] 
do
  systemctl status httpd > /dev/null
  httpd_status=$(echo $?)
  echo "The httpd status is ${httpd_status}"
  
  if [ $httpd_status -ne 0 ]
  then
    echo "Httpd application stoppped !!"
    break
  fi

  sleep 1
done
```

```
[opc@new-k8s part-3]$ systemctl status httpd
● httpd.service - The Apache HTTP Server
   Loaded: loaded (/usr/lib/systemd/system/httpd.service; disabled; vendor preset: disabled)
   Active: active (running) since Sat 2023-05-13 11:17:34 GMT; 4s ago
     Docs: man:httpd(8)
           man:apachectl(8)
 Main PID: 22415 (httpd)
   Status: "Processing requests..."
    Tasks: 6
   Memory: 25.5M
   CGroup: /system.slice/httpd.service
           ├─22415 /usr/sbin/httpd -DFOREGROUND
           ├─22416 /usr/sbin/httpd -DFOREGROUND
           ├─22417 /usr/sbin/httpd -DFOREGROUND
           ├─22418 /usr/sbin/httpd -DFOREGROUND
           ├─22419 /usr/sbin/httpd -DFOREGROUND
           └─22421 /usr/sbin/httpd -DFOREGROUND
```

![While loop](/content/shellscript/tutorials/images/breaking-while-loop.png)

```
[opc@new-k8s part-3]$ systemctl status httpd
● httpd.service - The Apache HTTP Server
   Loaded: loaded (/usr/lib/systemd/system/httpd.service; disabled; vendor preset: disabled)
   Active: inactive (dead)
     Docs: man:httpd(8)
           man:apachectl(8)
```