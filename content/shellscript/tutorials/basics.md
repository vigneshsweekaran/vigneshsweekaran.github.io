## Shell script

In simple term, shell script is putting the linux commands in a file and executing the file. The commands will be executed in sequential order.


Create a file test.sh and put the following content
```
#!/bin/bash

echo "-----Present Working Directory-----"
pwd

echo "-----List all files in current folder----"
ls -lart

echo "-----Print the content of /etc/os-release file-----"
cat /etc/os-release
```

```

[opc@new-k8s script]$ ll
total 4
-rw-rw-r--. 1 opc opc 170 May  4 11:02 test.sh
```

Give executable permission to a file
```
chmod +x test.sh
```

```
[opc@new-k8s script]$ ll
total 4
-rwxrwxr-x. 1 opc opc 170 May  4 11:02 test.sh
```

### Different ways to run the shell script
Running the script using ./ (Absolute path)
```
[opc@new-k8s script]$ ./test.sh 
-----Present Working Directory-----
/home/opc/script
-----List all files in current folder----
total 8
-rwxrwxr-x.  1 opc opc  199 May  4 11:06 test.sh
drwxr-x---. 13 opc opc 4096 May  4 11:06 ..
drwxrwxr-x.  2 opc opc   21 May  4 11:06 .
-----Print the content of /etc/os-release file-----
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

Running the script by specifying the Full path (Absolute path)

```
[opc@new-k8s script]$ /home/opc/script/test.sh 
-----Present Working Directory-----
/home/opc/script
-----List all files in current folder----
total 8
-rwxrwxr-x.  1 opc opc  199 May  4 11:06 test.sh
drwxr-x---. 13 opc opc 4096 May  4 11:06 ..
drwxrwxr-x.  2 opc opc   21 May  4 11:06 .
-----Print the content of /etc/os-release file-----
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

By using bash command
```
[opc@new-k8s script]$ bash test.sh 
-----Present Working Directory-----
/home/opc/script
-----List all files in current folder----
total 8
-rwxrwxr-x.  1 opc opc  199 May  4 11:06 test.sh
drwxr-x---. 13 opc opc 4096 May  4 11:06 ..
drwxrwxr-x.  2 opc opc   21 May  4 11:06 .
-----Print the content of /etc/os-release file-----
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

### What is shebang

Shebang (#!) is a special line at the beginning of a script that tells the operating system which interpreter to use when executing the script

```
#!/bin/bash

pwd
```

In our last shell script we used bash as a interpreter , we can also use sh, zsh, python

File extention dosen't matter, it can be anything or even extension is not needed

```
[opc@new-k8s script]$ mv test.sh test
[opc@new-k8s script]$ ll
total 4
-rwxrwxr-x. 1 opc opc 199 May  4 11:30 test
```

If no shebang is declared in shell script, it uses the default shell.

Default shell can be cheched in Environment variable SHELL

```
[opc@new-k8s ~]$ echo $SHELL
/bin/bash
```
```
[opc@new-k8s script]$ ll
total 4
-rwxrwxr-x. 1 opc opc 186 May  4 11:33 test
[opc@new-k8s script]$ cat test 
echo "-----Present Working Directory-----"
pwd

echo "-----List all files in current folder----"
ls -lart

echo "-----Print the content of /etc/os-release file-----"
cat /etc/os-release
```
```
[opc@new-k8s script]$ ./test 
-----Present Working Directory-----
/home/opc/script
-----List all files in current folder----
total 8
-rwxrwxr-x.  1 opc opc  186 May  4 11:33 test
drwxr-x---. 13 opc opc 4096 May  4 11:33 ..
drwxrwxr-x.  2 opc opc   18 May  4 11:33 .
-----Print the content of /etc/os-release file-----
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




