# Linux commands part-4

### sudo - getting root permissions
```
ll /etc/passwd

vi /etc/passwd        - Read only file, we cannot write

sudo vi /etc/passwd   - able to write
```

### user and group permissions for files and groups
```
[opc@new-k8s etc]$ ll /etc/os-release
-rw-r--r--. 1 root root 452 Sep 30  2020 /etc/os-release
```

### Switch user
sudo su

su vignesh

su - vignesh

### Create user
useradd test

### Set password for user
passwd test

### Verify user
cat /etc/passwd

### Test user trying to install tree package 
sudo yum install tree    - will not work, because test user dosen't have sudo privileges

### Granting Sudo Privileges to a User
usermod -aG group_name user_name

usermod -aG wheel test

### Test user trying to install tree package 
sudo yum install tree    - will work, because test user now have sudo privileges

### Remove user from group
gpasswd -d user_name groupname

gpasswd -d test wheel

### Delete the user without deleting any of their files
userdel test

### Delete the user’s home directory along with the user account
userdel -r test

### File permissions
```
-------
drwxrwxrwx

- - file
d - directory
l - link
r - read
w - write
x - executable


-      ---    ---    ---
-/d/l  rwx    rwx    rwx
       user   group  others
```

### chmod
```
r - 4
w - 2
x - 1

chmod 700 file_name

chmod 777 file_name
```

### chown
```
chmod test opc folder_name/file_name
```