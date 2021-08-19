## How to configure Free single Let’s Encrypt SSL/TLS Certificate with NGINX for multiple subdomains and autorenew certificate


### Prerequisites
* Have NGINX or NGINX Plus installed.
* Own or control the registered domain name for the certificate.
* Create a DNS record that associates your domain name and your server’s public IP address.

### Reference:
* [How to install nginx](https://devopspilot.com/content/nginx/tutorials/01-how-to-install-nginx) 
* [How to purchase a free domain using freenom](https://devopspilot.com/content/https/freenom/how-to-purchase-a-free-domain-using-freenom)
* [How to add a DNS record in freenom domain registrar](https://devopspilot.com/content/https/freenom/how-to-add-a-dns-record-in-freenom-domain)
* [How to configure Free Let’s Encrypt SSL/TLS Certificates with NGINX](https://devopspilot.com/content/https/letsencrypt/how-to-configure-free-letsencrypt-ssl-tls-certificates-with-nginx)

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

Create new config file `devopspilot.tk.conf` in `/etc/nginx/conf.d/` folder and put the following content

`Info:` Configuration file name can be anything

```
sudo vi /etc/nginx/conf.d/devopspilot.tk.conf
```

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

Now it will automatically redirect to `httsp://www.devopspilot.tk`

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
```
apt-get update
sudo apt-get install certbot
apt-get install python3-certbot-nginx
```

```
server {
    listen 80;
    server_name gcp-devops.devopspilot.com;

    location / {
        proxy_pass http://localhost:8081;
    }
}

server {
    listen 80;
    server_name gcp-devops1.devopspilot.com;

    location / {
        proxy_pass http://localhost:8082;
    }
}

server {
    listen 80;
    server_name gcp-devops1.devopspilot.com;

    location / {
        proxy_pass http://localhost:8083;
    }
}
```

sudo certbot certonly \
  --agree-tos \
  --email vigneshsweekaran@gmail.com \
  --manual \
  --preferred-challenges=dns \
  -d *.devopspilot.com \
  --server https://acme-v02.api.letsencrypt.org/directory

```
nginx -t && nginx -s reload
```

```
sudo certbot --nginx -d site1.example.com -d site2.example.com -d site3.example.com
```
sudo certbot --nginx -d gcp-devops.devopspilot.com -d gcp-devops1.devopspilot.com -d gcp-devops2.devopspilot.com

server {
    server_name gcp-devops.devopspilot.com;

    location / {
        proxy_pass http://localhost:8081;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/gcp-devops.devopspilot.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/gcp-devops.devopspilot.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    server_name gcp-devops1.devopspilot.com;

    location / {
        proxy_pass http://localhost:8082;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/gcp-devops.devopspilot.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/gcp-devops.devopspilot.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    server_name gcp-devops2.devopspilot.com;

    location / {
        proxy_pass http://localhost:8083;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/gcp-devops.devopspilot.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/gcp-devops.devopspilot.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = gcp-devops.devopspilot.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name gcp-devops.devopspilot.com;
    return 404; # managed by Certbot


}

server {
    if ($host = gcp-devops1.devopspilot.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name gcp-devops1.devopspilot.com;
    return 404; # managed by Certbot


}

server {
    if ($host = gcp-devops2.devopspilot.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name gcp-devops2.devopspilot.com;
    return 404; # managed by Certbot


}

certbot certonly \
  --dns-route53 \
  -d "*.prop.ly"
 
server {
    server_name www.prop.ly;

    location / {
        proxy_pass http://localhost:9001;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/prop.ly/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/prop.ly/privkey.pem;

}

server {
    server_name staging.prop.ly;

    location / {
        proxy_pass http://staging.prop.ly:9002;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/prop.ly/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/prop.ly/privkey.pem;

}
server {
    server_name dev.prop.ly;

    location / {
        proxy_pass http://dev.prop.ly:9003;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/gcp-devops.devopspilot.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/prop.ly/privkey.pem;

}
server {
    if ($host = www.prop.ly) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    server_name www.prop.ly;
    return 404;

}

server {
    if ($host = staging.prop.ly) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    server_name staging.prop.ly;
    return 404;

}

server {
    if ($host = dev.prop.ly) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    server_name dev.prop.ly;
    return 404;

}


