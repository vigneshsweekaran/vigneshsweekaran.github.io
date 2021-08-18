## How to configure Free Let’s Encrypt SSL/TLS Certificates with NGINX and autorenew certificates

### Prerequisites
* Have NGINX or NGINX Plus installed.
* Own or control the registered domain name for the certificate.
* Create a DNS record that associates your domain name and your server’s public IP address.

### Reference:
* [How to install nginx](https://devopspilot.com/content/nginx/tutorials/01-how-to-install-nginx) 
* [How to purchase a free domain using freenom](https://devopspilot.com/content/https/freenom/how-to-purchase-a-free-domain-using-freenom)
* [How to add a DNS record in freenom domain registrar](https://devopspilot.com/content/https/freenom/how-to-add-a-dns-record-in-freenom-domain)

### What is certbot
Certbot is a agent for letsencrypt that runs in a server to complete the letsencrypt challenge, request a certificate and get a certificate.

### What is Letsencrypt challenge
Letsencrypt want to verify that you own the domain. So using certbot it will host some files in `/.well-known/acme-challenge/` folder and serve this files publicly using nginx webserver.

Once it verifies the files, the challenge is completed and it will issue the certificate for the requested domain.

### How to install cerbot
```
sudo apt-get update
sudo apt-get install certbot
sudo apt-get install python3-certbot-nginx
```

### Configure DNS record in Domain registrar
www.devopspilot.tk --> IP-address

### Configure Nginx

Remove the default configuration file in nginx
```
sudo rm -f /etc/nginx/sites-enabled/default
```

```
sudo vi /etc/nginx/conf.d/devopspilot.tk.conf
```

Create new config file `devopspilot.tk.conf` in `/etc/nginx/conf.d/` folder and put the following content

`Info:` Configuration file name can be anything

Replace `devopspilot.tk` with your domain name in config file

```
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/html;
    index index.html index.htm index.nginx-debian.html;

    server_name www.devopspilot.tk;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Run the following command to check for syntax error in conf file
```
sudo nginx -t
```
`Output :`
```
vignesh792390@nginx:~$ sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Run the following command to reload the nginx webserver
```
nginx -s reload
```

Change the `devopspilot.tk` to your domain name and run the below command.

It will complete the letsencrpt challenge, generate the certificate and map the certificate path in `devopspilot.tk.conf` conf file

```
sudo certbot --nginx -d www.devopspilot.tk
```

It will ask for email address, agree the ters and conditions, certificates will be issued and finally enter `2` to automatically redirect `http` to `https` 

![letsencrypt](/content/https/letsencrypt/images/generate-ssl/generate-ssl.png)

![letsencrypt](/content/https/letsencrypt/images/generate-ssl/generate-ssl2.png)

Wait for couple of minues.

Go to browser and type the domain name `devopspilot.tk`

![letsencrypt](/content/https/letsencrypt/images/generate-ssl/nginx.png)

Now it will automatically redirect to httsp://www.devopspilot.tk

Now lets see how to automatically renew the certificates.

Letsencrypt certificates will expire after 3 months.

Create a cron job with `certbot renew` command. This job will daily run at 12 AM and check whether certificates are going to expire or not.

If it is going to expire it will regenerate the certificate and map the new certificate path in nginx conf file

Run the following command to create a cron job.
```
crontab -e
```

After running the `crontab -e` command it will open a file, type the below command and save the file. 
```
0 12 * * * /usr/bin/certbot renew --quiet
```

Hurray! we have successfully configured the SSL/TLS certificate in nginx webserver.