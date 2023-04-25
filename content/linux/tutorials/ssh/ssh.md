# How to use ssh in Linux

SSH(Secure Shell) is a command line tool to connect to another linux machine and to run some commands on it.

![SSH](/content/linux/tutorials/ssh/images/ssh.png)

### To install ssh-client
```
sudo apt install -y openssh-client
```

### To install ssh-server
```
sudo apt install -y openssh-server
```

### To check sshd service is running or not
```
sudo systemctl status sshd
```

### Two ways to connect to linux servers using ssh
* ssh using password
* ssh using public/private keys

### To Enable password 

By default in most of the linux servers password authetication for ssh will be disabled

Edit the /etc/ssh/sshd_config and update PasswordAuthentication value from "no" to "yes" If the line is commented, please uncomment

### ssh using password
```
ssh user_name@ip-address
```


### ssh using public/private key
```
ssh -i private_key user_name@ip-address
```

Make sure private key is having only 400 permission