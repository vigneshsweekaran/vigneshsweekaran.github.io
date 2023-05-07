## Shellscript Part - 2

### Youtube
[![Shellscript part-1](/content/shellscript/tutorials/images/part-2.png)](https://github.com/vigneshsweekaran/shellscript)

### What is for loop ?

Loop foop is used to do the repeat the task until the limit is reached or iterate through the items

![For loop](/content/shellscript/tutorials/images/for.png)

In the above diagram `{1..5}` changes to `1,2,3,4,5` which means the for loop is going to repeat the command execution 5 times.

The commands will be placed inside `do, done` block

So, the echo command is going to repeat 5 times `echo "The value is $number"`

To clone the shellscript git repo
```
[opc@new-k8s ~]$ git clone https://github.com/vigneshsweekaran/shellscript.git
Cloning into 'shellscript'...
remote: Enumerating objects: 78, done.
remote: Counting objects: 100% (78/78), done.
remote: Compressing objects: 100% (70/70), done.
remote: Total 78 (delta 13), reused 56 (delta 5), pack-reused 0
Unpacking objects: 100% (78/78), done.
```

```
[opc@new-k8s shellscript]$ ll
total 4
drwxrwxr-x. 4 opc opc 94 May  5 12:03 automation
-rw-rw-r--. 1 opc opc 13 May  5 12:03 README.md
drwxrwxr-x. 5 opc opc 50 May  6 10:04 tutorials
[opc@new-k8s shellscript]$ cd tutorials/part-2
```

```
[opc@new-k8s part-2]$ cat 1-for-loop.sh 
#!/bin/bash

for number in {1..5}
do
    echo "The value is $number"
done
```

```
[opc@new-k8s part-2]$ ./1-for-loop.sh 
The value is 1
The value is 2
The value is 3
The value is 4
The value is 5
```

### How to create multiple files using shell script

We have used `date` command, which prints both date and time

```
[opc@new-k8s part-2]$ date
Sat May  6 12:54:11 GMT 2023
```

Lets format the `date` command to get the details in this format MMDDYY-HHMMSS

```
[opc@new-k8s part-2]$ date +"%m%d%y-%H%M%S"
050623-125855
```

```
%m --> Month
%d --> Date
%y --> Year (Last two digit)
%H --> Hour
%M --> Minutes
%S --> Seconds
```

Now lets run the script
```
[opc@new-k8s part-2]$ cat 2-create-multiple-files.sh 
#!/bin/bash

set -e

for number in {1..5}
do
    VERSION=$(date +"%m%d%y-%H%M%S")
    DATE=$(date)
    FILE_NAME=app-${VERSION}-${number}.log
    touch $FILE_NAME
    echo "File created on ${DATE}" > $FILE_NAME
done
```

currently we have 6 shellscript files here

```
[opc@new-k8s part-2]$ ll
total 24
-rwxrwxr-x. 1 opc opc  82 May  7 23:22 1-for-loop.sh
-rwxrwxr-x. 1 opc opc 216 May  7 23:22 2-create-multiple-files.sh
-rwxrwxr-x. 1 opc opc 151 May  7 23:22 3-iterate-through-items.sh
-rwxrwxr-x. 1 opc opc 200 May  7 23:22 4-delete-files-more-than-x-size.sh
-rwxrwxr-x. 1 opc opc 427 May  7 23:22 5-delete-files-more-than-x-days.sh
-rwxrwxr-x. 1 opc opc 396 May  7 23:22 6-store-cli-version-in-json-file.sh
```

```
[opc@new-k8s part-2]$ ./2-create-multiple-files.sh 
[opc@new-k8s part-2]$ ll
total 44
-rwxrwxr-x. 1 opc opc  82 May  7 23:22 1-for-loop.sh
-rwxrwxr-x. 1 opc opc 216 May  7 23:22 2-create-multiple-files.sh
-rwxrwxr-x. 1 opc opc 151 May  7 23:22 3-iterate-through-items.sh
-rwxrwxr-x. 1 opc opc 200 May  7 23:22 4-delete-files-more-than-x-size.sh
-rwxrwxr-x. 1 opc opc 427 May  7 23:22 5-delete-files-more-than-x-days.sh
-rwxrwxr-x. 1 opc opc 396 May  7 23:22 6-store-cli-version-in-json-file.sh
-rw-rw-r--. 1 opc opc  45 May  7 23:28 app-050723-232815-1.log
-rw-rw-r--. 1 opc opc  45 May  7 23:28 app-050723-232815-2.log
-rw-rw-r--. 1 opc opc  45 May  7 23:28 app-050723-232815-3.log
-rw-rw-r--. 1 opc opc  45 May  7 23:28 app-050723-232815-4.log
-rw-rw-r--. 1 opc opc  45 May  7 23:28 app-050723-232815-5.log
```

After running the shellscript it has created the 5 files, the name includes the version created from the date command

```
[opc@new-k8s part-2]$ cat app-050723-232815-1.log 
File created on Sun May  7 23:28:15 GMT 2023
```

When we `cat` the first file, it has the timestamp, which we have written to the file

###







### Array in shellscript

Array is a collection of items

![array](/content/shellscript/tutorials/images/array.png)

### for loop inside another for loop

![For loop inside for loop](/content/shellscript/tutorials/images/for-for.png)