# Linux commands part-4

### Youtube

[![Tamil Linux commands part-4](/content/linux/tutorials/images/linux-basics.png)](https://www.youtube.com/watch?v=iY_J5MxQu5Y)

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
