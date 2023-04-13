# Linux commands part-4

### Switch user
su

su -

su root

### Create user
useradd test

### Verify user
cat /etc/passwd

### Set password for user
passwd test

### Granting Sudo Privileges to a User
usermod -aG wheel test

### Delete the user without deleting any of their files
userdel sammy

### Delete the user’s home directory along with the user account
userdel -r sammy

### File permissions
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

### chmod
r - 4
w - 2
x - 1

chmod 700 file_name

chmod 777 file_name

### chown
chmod 